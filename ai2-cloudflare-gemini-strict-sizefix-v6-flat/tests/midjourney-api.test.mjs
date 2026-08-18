import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import {
  buildMidjourneyAction,
  buildMidjourneyRequest,
  extractMidjourneyTask,
  isMidjourneyModel,
  parseMidjourneySubmit,
  pollMidjourneyTask,
  resolveMidjourneyMode,
} from "../dist/assets/midjourney-api.js";

test("identifies Midjourney Fast and Relax models", () => {
  assert.equal(isMidjourneyModel("mj_fast_imagine"), true);
  assert.equal(isMidjourneyModel("MJ_RELAX_IMAGINE"), true);
  assert.equal(isMidjourneyModel("gpt-image-2"), false);
  assert.equal(resolveMidjourneyMode("mj_fast_imagine"), "fast");
  assert.equal(resolveMidjourneyMode("mj_relax_imagine"), "relax");
});

test("builds documented Fast Imagine payload without an OpenAI model field", () => {
  assert.deepEqual(buildMidjourneyRequest("fast", "imagine", { prompt: "red fox" }), {
    method: "POST",
    path: "/mj-fast/mj/submit/imagine",
    body: { prompt: "red fox", base64Array: [] },
  });
});

test("builds documented Relax Blend payload", () => {
  assert.deepEqual(
    buildMidjourneyRequest("relax", "blend", {
      base64Array: ["data:image/png;base64,AA=="],
    }),
    {
      method: "POST",
      path: "/mj-relax/mj/submit/blend",
      body: { base64Array: ["data:image/png;base64,AA=="] },
    },
  );
});

test("builds documented upload, describe, action, and batch-query payloads", () => {
  assert.deepEqual(
    buildMidjourneyRequest("fast", "upload", { base64Array: ["data:image/png;base64,AA=="] }),
    {
      method: "POST",
      path: "/mj-fast/mj/submit/upload-discord-images",
      body: { base64Array: ["data:image/png;base64,AA=="] },
    },
  );
  assert.deepEqual(
    buildMidjourneyRequest("fast", "describe", { base64: "data:image/png;base64,AA==" }),
    {
      method: "POST",
      path: "/mj-fast/mj/submit/describe",
      body: { base64: "data:image/png;base64,AA==" },
    },
  );
  assert.deepEqual(
    buildMidjourneyRequest("fast", "action", { taskId: "task-7", customId: "u1" }),
    {
      method: "POST",
      path: "/mj-fast/mj/submit/action",
      body: { taskId: "task-7", customId: "u1" },
    },
  );
  assert.deepEqual(
    buildMidjourneyRequest("relax", "list", { ids: ["task-1", "task-2"] }),
    {
      method: "POST",
      path: "/mj-relax/mj/task/list-by-condition",
      body: { ids: ["task-1", "task-2"] },
    },
  );
});

test("rejects unsupported Relax Describe and invalid submit responses", () => {
  assert.throws(
    () => buildMidjourneyRequest("relax", "describe", { base64: "image" }),
    /Relax.*Describe/,
  );
  assert.deepEqual(parseMidjourneySubmit({ code: 1, result: "task-7" }), {
    taskId: "task-7",
    error: "",
  });
  assert.throws(
    () => parseMidjourneySubmit({ code: 4, description: "quota_not_enough" }),
    /quota_not_enough/,
  );
});

test("normalizes ZX task output and task-returned buttons", () => {
  const task = extractMidjourneyTask({
    id: "task-7",
    status: "SUCCESS",
    progress: "100%",
    imageUrl: "https://cdn.example/final.png",
    buttons: [{ customId: "u1", label: "U1", type: 2, style: 1 }],
  });
  assert.equal(task.imageUrl, "https://cdn.example/final.png");
  assert.deepEqual(buildMidjourneyAction(task, task.buttons[0]), {
    taskId: "task-7",
    customId: "u1",
  });
});

test("normalizes a Describe prompt from a completed Midjourney task", () => {
  const task = extractMidjourneyTask({
    id: "task-describe",
    status: "SUCCESS",
    prompt: "cinematic portrait, soft side light",
  });
  assert.equal(task.prompt, "cinematic portrait, soft side light");
});

test("rejects button actions not returned by the source task", () => {
  const task = extractMidjourneyTask({
    id: "task-7",
    buttons: [{ customId: "u1", label: "U1" }],
  });
  assert.throws(() => buildMidjourneyAction(task, { customId: "made-up" }), /returned/);
});

test("polls the documented Fast fetch endpoint", async () => {
  const requests = [];
  const task = await pollMidjourneyTask({
    baseUrl: "https://zxai.work",
    mode: "fast",
    apiKey: "test",
    taskId: "task-7",
    intervalMs: 0,
    maxAttempts: 1,
    fetchImpl: async (url) => {
      requests.push(url);
      return {
        ok: true,
        json: async () => ({
          id: "task-7",
          status: "SUCCESS",
          progress: "100%",
          imageUrl: "https://cdn.example/final.png",
        }),
      };
    },
  });
  assert.equal(task.status, "SUCCESS");
  assert.deepEqual(requests, ["https://zxai.work/mj-fast/mj/task/task-7/fetch"]);
});

test("bundle routes only Midjourney models through the ZX adapter", () => {
  const bundle = fs.readFileSync(
    new URL("../dist/assets/index-v1514-gemini-strict-sizefix-v6.js", import.meta.url),
    "utf8",
  );
  assert.match(bundle, /buildMidjourneyRequest/);
  assert.doesNotMatch(bundle, /buildMidjourneyChatRequest/);
  assert.doesNotMatch(bundle, /buildMidjourneyEndpoint/);
  assert.match(bundle, /"\/images\/generations"/);
});

test("bundle preserves Midjourney task metadata and submits only returned actions", () => {
  const bundle = fs.readFileSync(
    new URL("../dist/assets/index-v1514-gemini-strict-sizefix-v6.js", import.meta.url),
    "utf8",
  );
  assert.match(bundle, /mjTaskId:/);
  assert.match(bundle, /mjButtons:/);
  assert.match(bundle, /mjActionCustomId/);
  assert.match(bundle, /buildMidjourneyAction/);
  assert.doesNotMatch(bundle, /wi\(u, a\.body, e\.apiKey, 6e5, i\)/);
  assert.doesNotMatch(bundle, /wi\(C, D\.body, o\.apiKey, 6e5, d\)/);
});

test("bundle tracks default and manual image-model sources", () => {
  const bundle = fs.readFileSync(
    new URL("../dist/assets/index-v1514-gemini-strict-sizefix-v6.js", import.meta.url),
    "utf8",
  );
  assert.match(bundle, /modelSource/);
  assert.match(bundle, /modelSource: "default"/);
  assert.match(bundle, /modelSource: "manual"/);
});

test("documentation names the native ZX Midjourney protocol", () => {
  const readme = fs.readFileSync(
    new URL("../README-COMFLY-v1.5.4.txt", import.meta.url),
    "utf8",
  );
  assert.match(readme, /mj-fast\/mj/);
  assert.match(readme, /mj-relax\/mj/);
  assert.match(readme, /customId/);
  assert.doesNotMatch(readme, /\/v1\/chat\/completions/);
});
