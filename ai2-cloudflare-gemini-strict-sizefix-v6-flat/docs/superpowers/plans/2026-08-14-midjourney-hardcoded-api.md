# Midjourney Hardcoded API Integration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (\`- [ ]\`) syntax for tracking.

**Goal:** Add hardcoded Midjourney routes for text-to-image, image edit, variation, upscale, and task polling to the published canvas application.

**Architecture:** A small browser ES module contains Midjourney request construction, output extraction, and bounded task polling. The existing generated application bundle remains the UI owner and dispatches only \`mj_*\` models to this module.

**Tech Stack:** Static Cloudflare Pages, browser ES modules, Node.js built-in test runner, existing React production bundle.

## Global Constraints

- Confirmed: \`POST /v1/chat/completions\`, Bearer authentication, model \`mj_fast_imagine\`.
- Assumed: \`/v1/images/edits\`, \`/v1/images/variations\`, \`/v1/images/upscales\`, and \`/v1/tasks/{id}\`.
- Keep keys in the existing browser localStorage; do not embed credentials in source.
- Do not alter Gemini or generic OpenAI routes.
- A Midjourney model has a normalized name starting with \`mj_\`.

---

## File Structure

- Create \`dist/assets/midjourney-api.js\`: ESM helpers exposed as \`window.__AI2_MJ_API\`.
- Create \`tests/midjourney-api.test.mjs\`: Node unit and static integration tests.
- Modify \`dist/index.html\`: load the helper before the current main module.
- Modify \`dist/assets/index-v1514-gemini-strict-sizefix-v6.js\`: add narrow Midjourney dispatch.
- Modify \`README-COMFLY-v1.5.4.txt\`: document confirmed setup and assumptions.

### Task 1: Midjourney Request Helpers

**Files:**
- Create: \`dist/assets/midjourney-api.js\`
- Test: \`tests/midjourney-api.test.mjs\`

**Interfaces:**
- Produces \`isMidjourneyModel(model): boolean\`.
- Produces \`buildMidjourneyChatRequest(model, prompt): { path, body }\`.
- Produces \`buildMidjourneyEndpoint(kind, taskId?): string\`.

- [ ] **Step 1: Write the failing test**

~~~js
import test from "node:test";
import assert from "node:assert/strict";
import {
  isMidjourneyModel,
  buildMidjourneyChatRequest,
  buildMidjourneyEndpoint,
} from "../dist/assets/midjourney-api.js";

test("identifies only mj_ models", () => {
  assert.equal(isMidjourneyModel("mj_fast_imagine"), true);
  assert.equal(isMidjourneyModel("MJ_FAST_IMAGINE"), true);
  assert.equal(isMidjourneyModel("gpt-image-2"), false);
});
test("builds the documented chat request", () => {
  assert.deepEqual(buildMidjourneyChatRequest("mj_fast_imagine", "red fox"), {
    path: "/chat/completions",
    body: { model: "mj_fast_imagine", stream: false, messages: [{ role: "user", content: "red fox" }] },
  });
});
test("builds assumed endpoints", () => {
  assert.equal(buildMidjourneyEndpoint("edit"), "/images/edits");
  assert.equal(buildMidjourneyEndpoint("variation"), "/images/variations");
  assert.equal(buildMidjourneyEndpoint("upscale"), "/images/upscales");
  assert.equal(buildMidjourneyEndpoint("task", "job/42"), "/tasks/job%2F42");
});
~~~

- [ ] **Step 2: Verify RED**

Run: \`node --test tests/midjourney-api.test.mjs\`

Expected: \`ERR_MODULE_NOT_FOUND\` for \`midjourney-api.js\`.

- [ ] **Step 3: Implement the minimum API**

~~~js
export function isMidjourneyModel(model) {
  return String(model || "").trim().toLowerCase().startsWith("mj_");
}
export function buildMidjourneyChatRequest(model, prompt) {
  return {
    path: "/chat/completions",
    body: {
      model: String(model || "mj_fast_imagine"),
      stream: false,
      messages: [{ role: "user", content: String(prompt || "") }],
    },
  };
}
export function buildMidjourneyEndpoint(kind, taskId = "") {
  const endpoints = {
    edit: "/images/edits",
    variation: "/images/variations",
    upscale: "/images/upscales",
  };
  return kind === "task" ? \`/tasks/\${encodeURIComponent(taskId)}\` : endpoints[kind] || "";
}
~~~

Assign these exports to \`window.__AI2_MJ_API\` when \`window\` exists.

- [ ] **Step 4: Verify GREEN**

Run: \`node --test tests/midjourney-api.test.mjs\`

Expected: three passing tests.

- [ ] **Step 5: Commit**

~~~powershell
git add dist/assets/midjourney-api.js tests/midjourney-api.test.mjs
git commit -m "feat: add Midjourney API helpers"
~~~

If Git metadata is unavailable, record that limitation and continue without committing.

### Task 2: Parse Output and Poll Tasks

**Files:**
- Modify: \`dist/assets/midjourney-api.js\`
- Modify: \`tests/midjourney-api.test.mjs\`

**Interfaces:**
- Consumes \`buildMidjourneyEndpoint\`.
- Produces \`extractMidjourneyResult(payload): { imageUrl, taskId, state, error }\`.
- Produces \`pollMidjourneyTask(options): Promise<string>\`.

- [ ] **Step 1: Write the failing test**

~~~js
import { extractMidjourneyResult, pollMidjourneyTask } from "../dist/assets/midjourney-api.js";

test("extracts nested image and task metadata", () => {
  assert.equal(
    extractMidjourneyResult({ data: { output: { image_url: "https://cdn.example/final.png" } } }).imageUrl,
    "https://cdn.example/final.png",
  );
  assert.deepEqual(
    extractMidjourneyResult({ data: { task_id: "task-7", status: "processing" } }),
    { imageUrl: "", taskId: "task-7", state: "processing", error: "" },
  );
});
test("polls the assumed endpoint to an image", async () => {
  const requests = [];
  const image = await pollMidjourneyTask({
    baseUrl: "https://zxai.work/v1", apiKey: "test", taskId: "task-7", intervalMs: 0, maxAttempts: 2,
    fetchImpl: async (url) => {
      requests.push(url);
      return { ok: true, json: async () => ({ data: { url: "https://cdn.example/final.png" } }) };
    },
  });
  assert.equal(image, "https://cdn.example/final.png");
  assert.deepEqual(requests, ["https://zxai.work/v1/tasks/task-7"]);
});
~~~

- [ ] **Step 2: Verify RED**

Run: \`node --test tests/midjourney-api.test.mjs\`

Expected: missing named exports.

- [ ] **Step 3: Implement parsing and bounded polling**

Recursively inspect \`url\`, \`image_url\`, \`imageUrl\`, \`output\`, \`result\`, and \`data\`; accept only \`http(s)\` URLs or image Base64 data. Collect \`task_id\`, \`taskId\`, \`id\`, \`status\`, \`state\`, \`error.message\`, and \`message\`. Poll \`GET {baseUrl}/tasks/{encodedTaskId}\` using \`Authorization: Bearer <apiKey>\`; return when an image appears, throw on \`failed\`, \`error\`, \`cancelled\`, or \`canceled\`, and time out after 60 attempts with a 2-second default interval.

- [ ] **Step 4: Verify GREEN**

Run: \`node --test tests/midjourney-api.test.mjs\`

Expected: all Task 1 and 2 tests pass.

- [ ] **Step 5: Commit**

~~~powershell
git add dist/assets/midjourney-api.js tests/midjourney-api.test.mjs
git commit -m "feat: parse Midjourney task results"
~~~

If Git metadata is unavailable, record that limitation and continue without committing.

### Task 3: Wire the Published Canvas Bundle

**Files:**
- Modify: \`dist/index.html\`
- Modify: \`dist/assets/index-v1514-gemini-strict-sizefix-v6.js:20600-21900\`
- Modify: \`tests/midjourney-api.test.mjs\`

**Interfaces:**
- Consumes the Task 1-2 API through \`window.__AI2_MJ_API\`.
- Produces direct \`mj_*\` routing for generation, image edit, variation, and upscale.

- [ ] **Step 1: Write failing static integration checks**

~~~js
import fs from "node:fs";

test("loads Midjourney runtime before the main app", () => {
  assert.match(fs.readFileSync(new URL("../dist/index.html", import.meta.url), "utf8"), /midjourney-api\.js/);
});
test("the bundle dispatches Midjourney models directly", () => {
  const bundle = fs.readFileSync(
    new URL("../dist/assets/index-v1514-gemini-strict-sizefix-v6.js", import.meta.url),
    "utf8",
  );
  assert.match(bundle, /__AI2_MJ_API/);
  assert.match(bundle, /buildMidjourneyChatRequest/);
});
~~~

- [ ] **Step 2: Verify RED**

Run: \`node --test tests/midjourney-api.test.mjs\`

Expected: both static integration checks fail.

- [ ] **Step 3: Implement dispatch**

Add \`<script type="module" src="./assets/midjourney-api.js"></script>\` before the current main module. In \`tM\`, branch on \`__AI2_MJ_API.isMidjourneyModel(model)\` before generic \`/images/generations\`. Use \`buildMidjourneyChatRequest\`, the existing \`wi\` transport, then \`extractMidjourneyResult\` and \`pollMidjourneyTask\` when a task ID is returned. Send reference-image work through multipart \`gy\` to \`buildMidjourneyEndpoint("edit")\`; wire variation and Midjourney upscale to their assumed endpoints. Reuse \`Xt\`, \`wi\`, \`gy\`, \`$i\`, and existing errors so proxy, Bearer auth, CORS, and timeout behavior are preserved.

- [ ] **Step 4: Verify GREEN**

Run: \`node --test tests/midjourney-api.test.mjs\`

Expected: all helper and static integration tests pass.

- [ ] **Step 5: Commit**

~~~powershell
git add dist/index.html dist/assets/index-v1514-gemini-strict-sizefix-v6.js tests/midjourney-api.test.mjs
git commit -m "feat: route canvas nodes through Midjourney API"
~~~

If Git metadata is unavailable, record that limitation and continue without committing.

### Task 4: Document and Verify

**Files:**
- Modify: \`README-COMFLY-v1.5.4.txt\`
- Modify: \`tests/midjourney-api.test.mjs\`

**Interfaces:**
- Consumes the shipped runtime and route dispatch.
- Produces exact configuration guidance for the deployed \`dist\` app.

- [ ] **Step 1: Write the failing documentation check**

~~~js
test("documents confirmed model and hardcoded limitations", () => {
  const readme = fs.readFileSync(new URL("../README-COMFLY-v1.5.4.txt", import.meta.url), "utf8");
  assert.match(readme, /mj_fast_imagine/);
  assert.match(readme, /硬编码假设/);
});
~~~

- [ ] **Step 2: Verify RED**

Run: \`node --test tests/midjourney-api.test.mjs\`

Expected: the documentation assertion fails.

- [ ] **Step 3: Document the shipped contract**

Append instructions to set the base URL to \`https://zxai.work/v1\`, paste a token in API settings, and list \`mj_fast_imagine\` as an image model. List all four unverified endpoints under “硬编码假设”, stating that rejected endpoints must match the provider's actual contract.

- [ ] **Step 4: Run final validation**

~~~powershell
node --test tests/midjourney-api.test.mjs
node --check dist/assets/midjourney-api.js
node --check dist/assets/index-v1514-gemini-strict-sizefix-v6.js
node --check functions/api/proxy.js
~~~

Expected: every command exits with status 0.

- [ ] **Step 5: Commit**

~~~powershell
git add README-COMFLY-v1.5.4.txt tests/midjourney-api.test.mjs
git commit -m "docs: describe Midjourney canvas setup"
~~~

If Git metadata is unavailable, record that limitation and continue without committing.

## Plan Self-Review

- Tasks 1-4 cover the confirmed chat request, all assumed routes, task polling, recursive output parsing, existing-route preservation, tests, and documentation.
- Each task begins with a concrete failing test and ends with explicit verification.
- All later integrations use only helper names defined in Tasks 1-2.

