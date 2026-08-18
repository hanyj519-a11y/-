const MODE_PREFIX = {
  fast: "/mj-fast/mj",
  relax: "/mj-relax/mj",
};

const POST_OPERATIONS = new Set([
  "imagine",
  "blend",
  "action",
  "describe",
  "upload",
  "list",
]);

function nonEmptyString(value, name) {
  const text = String(value || "").trim();
  if (!text) throw new Error(`Midjourney ${name} is required.`);
  return text;
}

function normalizeMode(mode) {
  const normalized = String(mode || "").trim().toLowerCase();
  if (!MODE_PREFIX[normalized]) throw new Error("Midjourney mode must be Fast or Relax.");
  return normalized;
}

function imageArray(value) {
  if (!Array.isArray(value)) return [];
  return value.map((item) => String(item || "").trim()).filter(Boolean);
}

export function isMidjourneyModel(model) {
  return /^mj_(fast|relax)(?:_|$)/i.test(String(model || "").trim());
}

export function resolveMidjourneyMode(model) {
  return /^mj_relax(?:_|$)/i.test(String(model || "").trim()) ? "relax" : "fast";
}

export function buildMidjourneyRequest(mode, operation, payload = {}) {
  const normalizedMode = normalizeMode(mode);
  const normalizedOperation = String(operation || "").trim().toLowerCase();
  const prefix = MODE_PREFIX[normalizedMode];

  if (normalizedOperation === "fetch") {
    return {
      method: "GET",
      path: `${prefix}/task/${encodeURIComponent(nonEmptyString(payload.taskId, "task ID"))}/fetch`,
    };
  }

  if (!POST_OPERATIONS.has(normalizedOperation))
    throw new Error(`Unsupported Midjourney operation: ${operation}`);
  if (normalizedOperation === "describe" && normalizedMode === "relax")
    throw new Error("Relax mode does not support Describe.");

  let body;
  if (normalizedOperation === "imagine") {
    body = {
      prompt: nonEmptyString(payload.prompt, "prompt"),
      base64Array: imageArray(payload.base64Array),
    };
    if (String(payload.state || "").trim()) body.state = String(payload.state).trim();
  } else if (normalizedOperation === "blend" || normalizedOperation === "upload") {
    body = { base64Array: imageArray(payload.base64Array) };
    if (!body.base64Array.length) throw new Error("Midjourney reference images are required.");
  } else if (normalizedOperation === "action") {
    body = {
      taskId: nonEmptyString(payload.taskId, "task ID"),
      customId: nonEmptyString(payload.customId, "button custom ID"),
    };
  } else if (normalizedOperation === "describe") {
    body = { base64: nonEmptyString(payload.base64, "image data") };
  } else {
    body = { ids: imageArray(payload.ids) };
    if (!body.ids.length) throw new Error("Midjourney task IDs are required.");
  }

  const suffix =
    normalizedOperation === "list"
      ? "/task/list-by-condition"
      : `/submit/${normalizedOperation === "upload" ? "upload-discord-images" : normalizedOperation}`;
  return { method: "POST", path: `${prefix}${suffix}`, body };
}

export function parseMidjourneySubmit(payload) {
  if (!payload || Number(payload.code) !== 1) {
    const message = payload?.description || payload?.message || "Midjourney submission failed.";
    throw new Error(String(message));
  }
  return { taskId: nonEmptyString(payload.result, "task ID"), error: "" };
}

function taskImageUrl(value) {
  const url = String(value || "").trim();
  return /^(https?:\/\/|data:image\/)/i.test(url) ? url : "";
}

export function extractMidjourneyTask(payload = {}) {
  const buttons = Array.isArray(payload.buttons)
    ? payload.buttons
        .filter((button) => String(button?.customId || "").trim())
        .map((button) => ({
          customId: String(button.customId).trim(),
          label: String(button.label || button.customId).trim(),
          type: button.type,
          style: button.style,
        }))
    : [];
  return {
    id: String(payload.id || payload.taskId || "").trim(),
    status: String(payload.status || "").trim().toUpperCase(),
    progress: String(payload.progress || "").trim(),
    prompt: String(payload.prompt || payload.resultPrompt || "").trim(),
    imageUrl: taskImageUrl(payload.imageUrl || payload.image_url),
    videoUrl: String(payload.videoUrl || payload.video_url || "").trim(),
    failReason: String(payload.failReason || payload.fail_reason || payload.description || "").trim(),
    buttons,
  };
}

export function buildMidjourneyAction(task, button) {
  const taskId = nonEmptyString(task?.id, "task ID");
  const customId = nonEmptyString(button?.customId, "button custom ID");
  const availableButtons = Array.isArray(task?.buttons) ? task.buttons : [];
  if (!availableButtons.some((item) => item?.customId === customId))
    throw new Error("Midjourney action button was not returned by the source task.");
  return { taskId, customId };
}

function taskBaseUrl(baseUrl) {
  return String(baseUrl || "https://zxai.work")
    .trim()
    .replace(/\/+$/, "")
    .replace(/\/v1$/i, "");
}

function terminalFailure(status) {
  return new Set(["FAILURE", "FAILED", "ERROR", "CANCELLED", "CANCELED"]).has(status);
}

export async function pollMidjourneyTask({
  baseUrl,
  mode,
  apiKey,
  taskId,
  fetchImpl = fetch,
  intervalMs = 4000,
  maxAttempts = 90,
}) {
  const request = buildMidjourneyRequest(mode, "fetch", { taskId });
  const url = `${taskBaseUrl(baseUrl)}${request.path}`;
  let retryDelay = Math.max(0, Number(intervalMs) || 0);

  for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
    const response = await fetchImpl(url, {
      method: "GET",
      headers: { Authorization: `Bearer ${apiKey || ""}`, Accept: "application/json" },
    });
    if (!response.ok) {
      if ((response.status === 429 || response.status >= 500) && attempt + 1 < maxAttempts) {
        if (retryDelay) await new Promise((resolve) => setTimeout(resolve, retryDelay));
        retryDelay = Math.min(Math.max(retryDelay * 2, 1000), 16000);
        continue;
      }
      throw new Error(`Midjourney task request failed: HTTP ${response.status}`);
    }

    const task = extractMidjourneyTask(await response.json());
    if (task.status === "SUCCESS") return task;
    if (terminalFailure(task.status))
      throw new Error(task.failReason || `Midjourney task ${taskId} failed.`);
    if (attempt + 1 < maxAttempts && intervalMs > 0)
      await new Promise((resolve) => setTimeout(resolve, intervalMs));
  }
  throw new Error(`Midjourney task ${taskId} timed out after ${maxAttempts} checks.`);
}

const midjourneyApi = {
  isMidjourneyModel,
  resolveMidjourneyMode,
  buildMidjourneyRequest,
  parseMidjourneySubmit,
  extractMidjourneyTask,
  buildMidjourneyAction,
  pollMidjourneyTask,
};

if (typeof window !== "undefined") window.__AI2_MJ_API = midjourneyApi;
