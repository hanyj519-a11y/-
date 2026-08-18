# Task 1: Midjourney Request Helpers Report

## Files Changed

- `dist/assets/midjourney-api.js`: added the isolated browser ESM helper, with model detection, chat request construction, endpoint construction, and the browser global `window.__AI2_MJ_API`.
- `tests/midjourney-api.test.mjs`: added Node built-in tests for the required model detection, chat request, image endpoints, and encoded task endpoint behavior.
- `docs/superpowers/sdd/task-1-report.md`: this report.

No generated React application bundle, `index.html`, or README file was changed. No API key is present in the new source.

## RED

Command run before implementation:

```text
node --test tests/midjourney-api.test.mjs
```

Result: exit code 1, as expected. Node raised `ERR_MODULE_NOT_FOUND` for `dist/assets/midjourney-api.js`, because the required helper module had not yet been created. The test runner reported one failing test file, zero passes, and no warnings.

## GREEN

Command run after implementation:

```text
node --test tests/midjourney-api.test.mjs
```

Result: exit code 0. All three tests passed; 3 passed, 0 failed, 0 skipped, and no warnings were emitted.

## Self-Review

- `isMidjourneyModel` trims and case-normalizes string model names, then checks only the `mj_` prefix.
- The confirmed chat request uses `/chat/completions`, preserves the provided model and prompt, and sets `stream: false`.
- The endpoint helper maps only the four requested Midjourney kinds and URI-encodes task IDs.
- The global interface is assigned only in a browser environment, so Node tests can import the ESM module without a `window` reference error.
- The work is isolated from Gemini and generic OpenAI route handling; it does not wire the helper into the published bundle.

## Concerns

The task deliberately does not specify validation behavior for unsupported endpoint kinds or a missing task ID. The helper therefore limits itself to the requested endpoint construction behavior rather than imposing an undocumented validation contract.
