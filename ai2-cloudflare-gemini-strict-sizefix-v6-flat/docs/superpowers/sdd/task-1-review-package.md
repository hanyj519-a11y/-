# Task 1 Review Package

Git metadata is unavailable in this workspace, so a Git diff cannot be produced. The complete files created by Task 1 are included below for read-only task review.

## `dist/assets/midjourney-api.js`

```js
const endpointPaths = {
  edit: "/images/edits",
  variation: "/images/variations",
  upscale: "/images/upscales",
};

export function isMidjourneyModel(model) {
  return typeof model === "string" && model.trim().toLowerCase().startsWith("mj_");
}

export function buildMidjourneyChatRequest(model, prompt) {
  return {
    path: "/chat/completions",
    body: {
      model,
      stream: false,
      messages: [{ role: "user", content: prompt }],
    },
  };
}

export function buildMidjourneyEndpoint(kind, taskId) {
  if (kind === "task") return `/tasks/${encodeURIComponent(taskId)}`;
  return endpointPaths[kind];
}

const midjourneyApi = { isMidjourneyModel, buildMidjourneyChatRequest, buildMidjourneyEndpoint };
if (typeof window !== "undefined") window.__AI2_MJ_API = midjourneyApi;
```

## `tests/midjourney-api.test.mjs`

```js
import assert from "node:assert/strict";
import test from "node:test";
import { buildMidjourneyChatRequest, buildMidjourneyEndpoint, isMidjourneyModel } from "../dist/assets/midjourney-api.js";

test("detects Midjourney models by normalized mj_ prefix", () => {
  assert.equal(isMidjourneyModel("mj_fast_imagine"), true);
  assert.equal(isMidjourneyModel("MJ_FAST_IMAGINE"), true);
  assert.equal(isMidjourneyModel("gpt-image-2"), false);
});
test("builds the confirmed Midjourney chat completion request", () => {
  assert.deepEqual(buildMidjourneyChatRequest("mj_fast_imagine", "red fox"), {
    path: "/chat/completions",
    body: { model: "mj_fast_imagine", stream: false, messages: [{ role: "user", content: "red fox" }] },
  });
});
test("builds Midjourney image and task endpoints", () => {
  assert.equal(buildMidjourneyEndpoint("edit"), "/images/edits");
  assert.equal(buildMidjourneyEndpoint("variation"), "/images/variations");
  assert.equal(buildMidjourneyEndpoint("upscale"), "/images/upscales");
  assert.equal(buildMidjourneyEndpoint("task", "job/42"), "/tasks/job%2F42");
});
```
