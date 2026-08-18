# Midjourney Hardcoded API Integration

## Goal

Add Midjourney routing to the published browser bundle so image generation, image edit, variation, upscale, and asynchronous task retrieval use the configured OpenAI-compatible provider.

## Confirmed Contract

- Base URL: `https://zxai.work/v1` in the supplied example.
- Authentication: `Authorization: Bearer <token>`.
- Text-to-image model: `mj_fast_imagine` through `POST /v1/chat/completions`.

## Assumed Contract

The supplied reference does not document APIs for image edit, variation, upscale, or task polling. At the user's direction, these paths will be hardcoded and treated as the provider contract:

| Capability | Method | Endpoint | Request body |
| --- | --- | --- | --- |
| Text-to-image | POST | `/v1/chat/completions` | OpenAI chat completion with `model: "mj_fast_imagine"` |
| Image-to-image | POST | `/v1/images/edits` | Multipart `model`, `prompt`, `image`, `n`, `size`, `quality` |
| Variation | POST | `/v1/images/variations` | Multipart `model`, `image`, `n`, `size` |
| Upscale | POST | `/v1/images/upscales` | Multipart `model`, `image`, `size`, `quality` |
| Task polling | GET | `/v1/tasks/{id}` | No body |

## Architecture

1. Identify Midjourney models with the `mj_` prefix.
2. Route `mj_fast_imagine` directly to chat completions for prompt-only generation. The request content remains a plain string, matching the provided reference.
3. Route reference images to the hardcoded edit endpoint. Variation and upscale nodes use their dedicated endpoints.
4. Parse direct image URLs, Base64 image data, nested output fields, and task identifiers. For task responses, poll `/v1/tasks/{id}` until the returned payload contains an image or a terminal failure state.
5. Keep the current generic OpenAI and Gemini routes unchanged. A Midjourney request must not first attempt `/images/generations`.
6. Surface upstream status and response text in node errors when an assumed endpoint rejects the request.

## Error Handling

- Image output is accepted from URL, Base64, `data`, `output`, `result`, and nested response objects.
- A task ID is only considered complete after image extraction succeeds.
- Polling stops on a terminal failure/cancel status, a timeout, or a maximum attempt count.
- Unsupported responses retain the upstream diagnostic message and endpoint URL.

## Testing

- Add focused tests for model routing, the chat body for `mj_fast_imagine`, all assumed endpoint builders, task state detection, and image/task response parsing.
- First run each new test against the existing bundle helpers to record the expected failure, then implement the smallest compatible change.
- Run the relevant tests and syntax validation for the published JavaScript bundle and Cloudflare proxy.

## Scope

The browser bundle is the only available frontend source. No API keys are embedded, and no deployed provider request is made during development.
