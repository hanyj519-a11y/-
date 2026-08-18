# ZX Midjourney Native Protocol Integration

## Goal

Replace the existing hardcoded OpenAI-compatible Midjourney path with the ZX native asynchronous Midjourney protocol described in `ZX-API-Midjourney-使用文档.md`. Preserve all non-Midjourney OpenAI behavior. Fix image-node model synchronization after the user changes the default image model in settings.

## Scope

The Midjourney adapter supports both Fast and Relax modes.

| Capability | ZX path suffix | Request body |
| --- | --- | --- |
| Imagine | `/submit/imagine` | `prompt`, `base64Array`, optional `state` |
| Blend | `/submit/blend` | `base64Array` |
| Describe | `/submit/describe` | `base64` data URI or Base64 string, Fast only |
| Upload | `/submit/upload-discord-images` | `base64Array` |
| Action | `/submit/action` | `taskId`, `customId` from the source task |
| Fetch | `/task/{id}/fetch` | GET |
| Batch fetch | `/task/list-by-condition` | `ids` |

Fast uses `https://zxai.work/mj-fast/mj`; Relax uses `https://zxai.work/mj-relax/mj`. The UI exposes an explicit mode setting for Midjourney operations. Describe is unavailable in Relax mode and Turbo is not exposed.

## Architecture

1. `midjourney-api.js` becomes the isolated ZX request-contract and response-normalization module. It builds URLs, validates modes and actions, normalizes submit responses, task data, images, progress, failures, and returned buttons.
2. The main bundle routes only Midjourney-selected models through this adapter. It submits an operation, stores the returned task ID, then polls at a 3-5 second interval until `status=SUCCESS` with an `imageUrl` or a terminal failure.
3. Follow-up work derives its `customId` only from the source task's returned `buttons`; it never constructs button identifiers. Button labels are preserved for the node UI.
4. OpenAI-compatible image/chat paths remain untouched for non-MJ models.
5. The existing Pages proxy continues forwarding `Authorization`, `Content-Type`, and `Accept`; no browser-side code embeds an API key.

## Default Image Model Synchronization

Each image-capable node receives a `modelSource` state:

- `default`: model follows the active platform's default image model.
- `manual`: model is retained when the user explicitly chooses a node-level model.

Changing the default updates every `default` image generation, multi-angle, and upscale node for the active platform. Manual node selections remain unchanged. Newly created nodes begin with `modelSource: default` and use the current default model.

## Error Handling

- Every submit response validates `code === 1` before accepting `result` as a task ID.
- Task failures surface `failReason`, then `description`, then a generic diagnostic.
- Polling uses a bounded timeout and may retry temporary query failures with backoff. Paid POST submissions are never automatically retried.
- The adapter rejects missing prompts, unsupported Relax Describe, missing task IDs, and actions whose `customId` does not come from a fetched task.

## Testing

Tests cover Fast/Relax endpoint construction, each supported request payload, submit/result parsing, task success/failure extraction, `customId` action building, 3-5 second polling configuration, OpenAI isolation, and default/manual model synchronization. New behavioral tests are written and observed failing before implementation. Final verification runs the focused test suite and JavaScript syntax checks for the bundle, adapter, and Pages proxy.
