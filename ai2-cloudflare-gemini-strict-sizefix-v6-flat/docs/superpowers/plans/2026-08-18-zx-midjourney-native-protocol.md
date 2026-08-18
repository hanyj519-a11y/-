# ZX Midjourney Native Protocol Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current OpenAI-compatible Midjourney implementation with the documented ZX asynchronous Fast/Relax protocol, preserving non-MJ OpenAI behavior and fixing default image-model synchronization.

**Architecture:** `dist/assets/midjourney-api.js` owns ZX URL construction, request bodies, response normalization, polling, and task-button validation. The existing bundle calls that module only when an `mj_` model is selected; OpenAI/Gemini branches remain unchanged. Nodes carry `modelSource` so global defaults update only nodes that follow the default.

**Tech Stack:** Static Cloudflare Pages, browser ES modules, Node.js built-in test runner, existing React production bundle.

## Global Constraints

- ZX API base host is `https://zxai.work`; requests use `Authorization: Bearer <ZX_API_KEY>`.
- Fast prefix is `/mj-fast/mj`; Relax prefix is `/mj-relax/mj`; the request body has no `model` field.
- Core operations are Imagine, Fetch, and Action. Blend, Describe, Upload, and batch fetch are exposed with documented payloads.
- Relax Describe and Turbo are rejected as unsupported.
- Poll task queries at a default 4-second interval. Paid POST submit/action calls are never automatically retried.
- API keys must not be embedded in code or logs.
- Non-MJ models retain the existing OpenAI and Gemini dispatch paths.
- This directory has no `.git`; do not include commit steps.

---

## File Structure

- Modify: `dist/assets/midjourney-api.js` - ZX protocol contract, parsing, polling, and task-button helpers.
- Modify: `tests/midjourney-api.test.mjs` - unit tests and static integration assertions.
- Modify: `dist/assets/index-v1514-gemini-strict-sizefix-v6.js` - narrow Midjourney dispatch, task metadata persistence, and default/manual model synchronization.
- Modify: `README-COMFLY-v1.5.4.txt` - correct ZX configuration and capability notes.

### Task 1: Replace Midjourney Contract Helpers

**Files:**
- Modify: `tests/midjourney-api.test.mjs`
- Modify: `dist/assets/midjourney-api.js`

**Interfaces:**
- Produces `isMidjourneyModel(model): boolean`.
- Produces `resolveMidjourneyMode(model): "fast" | "relax"`.
- Produces `buildMidjourneyRequest(mode, operation, payload): { path: string, body?: object, method: "GET" | "POST" }`.
- Produces `parseMidjourneySubmit(payload): { taskId: string, error: string }`.

- [ ] **Step 1: Write failing request-contract tests**

```js
test("builds Fast Imagine without an OpenAI model field", () => {
  assert.deepEqual(buildMidjourneyRequest("fast", "imagine", { prompt: "red fox" }), {
    method: "POST", path: "/mj-fast/mj/submit/imagine",
    body: { prompt: "red fox", base64Array: [] },
  });
});
test("builds Relax Blend and rejects Relax Describe", () => {
  assert.equal(buildMidjourneyRequest("relax", "blend", { base64Array: ["data:image/png;base64,AA=="] }).path, "/mj-relax/mj/submit/blend");
  assert.throws(() => buildMidjourneyRequest("relax", "describe", { base64: "data:image/png;base64,AA==" }), /Relax.*Describe/);
});
test("accepts only code 1 submit responses", () => {
  assert.deepEqual(parseMidjourneySubmit({ code: 1, result: "task-7" }), { taskId: "task-7", error: "" });
  assert.throws(() => parseMidjourneySubmit({ code: 4, description: "quota_not_enough" }), /quota_not_enough/);
});
```

- [ ] **Step 2: Run the focused test and confirm RED**

Run: `node --test tests/midjourney-api.test.mjs`

Expected: failure because the old helper exposes `/chat/completions` and has no ZX request builder.

- [ ] **Step 3: Implement the contract helpers**

Use a constant operation map for `imagine`, `blend`, `action`, `describe`, `upload`, `fetch`, and `list`. Normalize modes from `mj_fast_` and `mj_relax_` model names. Build `base64Array: []` for text-only Imagine, validate non-empty prompt/task ID/custom ID as applicable, and omit `model` from every body.

- [ ] **Step 4: Run the focused test and confirm GREEN**

Run: `node --test tests/midjourney-api.test.mjs`

Expected: new contract tests pass; no old OpenAI-style Midjourney expectation remains.

### Task 2: Normalize Tasks, Poll Safely, and Validate Buttons

**Files:**
- Modify: `tests/midjourney-api.test.mjs`
- Modify: `dist/assets/midjourney-api.js`

**Interfaces:**
- Produces `extractMidjourneyTask(payload): { id, status, progress, imageUrl, videoUrl, failReason, buttons }`.
- Produces `buildMidjourneyAction(task, button): { taskId, customId }`.
- Produces `pollMidjourneyTask({ baseUrl, apiKey, mode, taskId, fetchImpl, intervalMs, maxAttempts }): Promise<task>`.

- [ ] **Step 1: Write failing task and action tests**

```js
test("normalizes ZX task output and task-returned buttons", () => {
  const task = extractMidjourneyTask({ id: "task-7", status: "SUCCESS", progress: "100%", imageUrl: "https://cdn.example/final.png", buttons: [{ customId: "u1", label: "U1" }] });
  assert.equal(task.imageUrl, "https://cdn.example/final.png");
  assert.deepEqual(buildMidjourneyAction(task, task.buttons[0]), { taskId: "task-7", customId: "u1" });
});
test("polls the documented Fast fetch endpoint at the configured interval", async () => {
  const urls = [];
  const task = await pollMidjourneyTask({ baseUrl: "https://zxai.work", mode: "fast", apiKey: "test", taskId: "task-7", intervalMs: 0, maxAttempts: 1, fetchImpl: async (url) => { urls.push(url); return { ok: true, json: async () => ({ id: "task-7", status: "SUCCESS", progress: "100%", imageUrl: "https://cdn.example/final.png" }) }; } });
  assert.equal(task.status, "SUCCESS");
  assert.deepEqual(urls, ["https://zxai.work/mj-fast/mj/task/task-7/fetch"]);
});
```

- [ ] **Step 2: Run the focused test and confirm RED**

Run: `node --test tests/midjourney-api.test.mjs`

Expected: failure because the old parser returns an image string and polls `/tasks/{id}`.

- [ ] **Step 3: Implement task handling**

Normalize the documented fields without recursive guessing. Return buttons only when each entry has a non-empty `customId`. `buildMidjourneyAction` must require the exact `customId` from a normalized task button. Treat `FAILURE`, `FAILED`, `ERROR`, `CANCELLED`, and `CANCELED` as terminal failure; return full task data on `SUCCESS`. Retry only temporary fetch HTTP 429/5xx failures with bounded backoff, never POST operations.

- [ ] **Step 4: Run the focused test and confirm GREEN**

Run: `node --test tests/midjourney-api.test.mjs`

Expected: all task, failure, and custom-ID tests pass.

### Task 3: Route Canvas Nodes Through ZX Without Changing OpenAI

**Files:**
- Modify: `tests/midjourney-api.test.mjs`
- Modify: `dist/assets/index-v1514-gemini-strict-sizefix-v6.js`

**Interfaces:**
- Consumes `window.__AI2_MJ_API.buildMidjourneyRequest`, `parseMidjourneySubmit`, `pollMidjourneyTask`, and `buildMidjourneyAction`.
- Produces Midjourney task metadata in node data: `mjTaskId`, `mjMode`, and `mjButtons`.

- [ ] **Step 1: Write failing static integration assertions**

```js
test("bundle uses ZX Midjourney paths and preserves OpenAI image generation", () => {
  const bundle = fs.readFileSync(new URL("../dist/assets/index-v1514-gemini-strict-sizefix-v6.js", import.meta.url), "utf8");
  assert.match(bundle, /buildMidjourneyRequest/);
  assert.match(bundle, /submit\/imagine/);
  assert.match(bundle, /mjButtons/);
  assert.match(bundle, /"\/images\/generations"/);
});
```

- [ ] **Step 2: Run the focused test and confirm RED**

Run: `node --test tests/midjourney-api.test.mjs`

Expected: failure because the bundle still calls `buildMidjourneyChatRequest` and `/chat/completions`.

- [ ] **Step 3: Implement narrow bundle dispatch**

Replace `xJ` and `yJ` with a ZX submit/poll path. For prompt-only image generation, submit Imagine; for connected reference images, convert the existing data URLs to `base64Array` and submit Imagine. Route Blend, Describe, Upload, and Action through adapter helpers when the corresponding node action is selected. Persist normalized task ID, mode, and returned buttons with node updates so a follow-up action can use the original task's `customId`. Keep the existing Gemini and generic `/images/generations`/`/images/edits` branches intact for non-MJ models.

- [ ] **Step 4: Run focused integration tests and syntax validation**

Run:
```powershell
node --test tests/midjourney-api.test.mjs
node --check dist/assets/midjourney-api.js
node --check dist/assets/index-v1514-gemini-strict-sizefix-v6.js
```

Expected: all commands exit with status 0.

### Task 4: Synchronize Default Image Models and Update Documentation

**Files:**
- Modify: `tests/midjourney-api.test.mjs`
- Modify: `dist/assets/index-v1514-gemini-strict-sizefix-v6.js`
- Modify: `README-COMFLY-v1.5.4.txt`

**Interfaces:**
- `modelSource` is either `"default"` or `"manual"` for image-capable nodes.
- `Vp(settings, nodeData, nodeType)` returns the default model when `modelSource !== "manual"` and preserves a valid node model when `modelSource === "manual"`.

- [ ] **Step 1: Write failing synchronization and documentation tests**

```js
test("bundle records default/manual image model sources", () => {
  const bundle = fs.readFileSync(new URL("../dist/assets/index-v1514-gemini-strict-sizefix-v6.js", import.meta.url), "utf8");
  assert.match(bundle, /modelSource/);
  assert.match(bundle, /"manual"/);
});
test("documentation names the native ZX protocol", () => {
  const readme = fs.readFileSync(new URL("../README-COMFLY-v1.5.4.txt", import.meta.url), "utf8");
  assert.match(readme, /mj-fast\/mj/);
  assert.match(readme, /customId/);
  assert.doesNotMatch(readme, /\/v1\/chat\/completions/);
});
```

- [ ] **Step 2: Run the focused test and confirm RED**

Run: `node --test tests/midjourney-api.test.mjs`

Expected: failure because existing nodes only store `model` and README documents the obsolete OpenAI-compatible route.

- [ ] **Step 3: Implement default/manual model semantics**

Initialize generate, angle, and upscale nodes with `modelSource: "default"`. Change node-level model select handlers to write `modelSource: "manual"`. In `Si`/`Vp`, choose the active platform's valid `defaultImageModel` first for default nodes; preserve a valid node model only for manual nodes. During settings updates, apply the new default to active-platform default nodes, leaving manual nodes and other-platform nodes untouched. Rewrite the Midjourney README section to list the ZX host, Fast/Relax prefixes, the task polling flow, and `customId` action constraint.

- [ ] **Step 4: Run complete verification**

Run:
```powershell
node --test tests/midjourney-api.test.mjs
node --check dist/assets/midjourney-api.js
node --check dist/assets/index-v1514-gemini-strict-sizefix-v6.js
node --check functions/api/proxy.js
```

Expected: all commands exit with status 0 and no test failures.

## Plan Self-Review

- The four tasks cover every documented ZX endpoint, Fast/Relax boundaries, secure key forwarding, task polling, task-returned button IDs, OpenAI path isolation, node model synchronization, and deployment-facing documentation.
- Every behavioral change begins with a concrete failing test and includes a command that demonstrates the expected red/green state.
- `modelSource`, `mjTaskId`, `mjMode`, and `mjButtons` are defined before later tasks consume them.
