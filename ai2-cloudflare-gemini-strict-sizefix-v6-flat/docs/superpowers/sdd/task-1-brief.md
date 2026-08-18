# Task 1: Midjourney Request Helpers

## Scope

Create a testable browser ESM module for model detection and URL/request construction. This is the first implementation task in the Midjourney hardcoded API plan. Do not change the generated React application bundle, `index.html`, or README in this task.

## Global Constraints

- Confirmed request: `POST /v1/chat/completions`, Bearer auth, `mj_fast_imagine`.
- Assumed endpoints: `/v1/images/edits`, `/v1/images/variations`, `/v1/images/upscales`, and `/v1/tasks/{id}`.
- API keys must not appear in source.
- Do not alter Gemini or generic OpenAI routes.
- Midjourney is detected only when normalized model name begins with `mj_`.

## Files

- Create `dist/assets/midjourney-api.js`.
- Create `tests/midjourney-api.test.mjs`.

## Required Public Interface

- `isMidjourneyModel(model): boolean`.
- `buildMidjourneyChatRequest(model, prompt): { path, body }`.
- `buildMidjourneyEndpoint(kind, taskId?): string`.
- In browsers, expose the public interface as `window.__AI2_MJ_API`.

## TDD Requirements

1. Create `tests/midjourney-api.test.mjs` containing these exact behaviors:
   - `mj_fast_imagine` and uppercase `MJ_FAST_IMAGINE` return true from `isMidjourneyModel`; `gpt-image-2` returns false.
   - `buildMidjourneyChatRequest("mj_fast_imagine", "red fox")` returns path `/chat/completions` and body `{ model: "mj_fast_imagine", stream: false, messages: [{ role: "user", content: "red fox" }] }`.
   - Endpoint kinds `edit`, `variation`, `upscale`, and `task` return `/images/edits`, `/images/variations`, `/images/upscales`, and `/tasks/job%2F42` for task ID `job/42`.
2. Run `node --test tests/midjourney-api.test.mjs` before implementation. Record the expected missing-module failure in the report.
3. Implement only the required helpers in `dist/assets/midjourney-api.js`.
4. Re-run `node --test tests/midjourney-api.test.mjs`; it must pass with no warnings.
5. There is no Git repository; do not attempt a commit.

## Report

Write the detailed report to `docs/superpowers/sdd/task-1-report.md`, including files changed, RED command and expected error, GREEN command and result, self-review, and concerns. Return only status, one-line test result, concerns, and the report path.
