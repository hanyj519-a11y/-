本版修复点：v1.5.4-comfly-id-forcefix

1. API 设置已改为完全自定义平台，不再预置任何厂商 API 地址。
2. 旧缓存中的 Comfly 平台会迁移为空白自定义平台，同时保留用户密钥和手动填写的模型。
3. API 设置新增「保存设置」和「获取模型」，可从当前 API 的 /models 拉取模型后应用到图片/文本模型列表。
4. 右键菜单新增「视频生成节点」，调用无垠科技 video_google_omni 异步接口。
5. 免构建部署：Cloudflare Pages 构建命令留空，构建输出目录填 dist，functions/api/proxy.js 继续保留。

如果页面还不变，请打开：你的域名/?v=154force
或清除网站数据/localStorage 后再打开。

---

v1.5.5-lovart-multiangle-history 追加说明

本版本在原 v1.5.4-comfly-id-forcefix 基础上追加了一个前端插件，不改变原来的节点和 API 设置：

1. 右下角新增「多角度」按钮
   - 类似 Lovart Multi-Angles：选择画布里的图片，切换主体模式/相机模式。
   - 可调水平旋转、垂直俯仰、镜头远近、比例、清晰度、数量。
   - 点击「生成多角度」后调用当前 API 设置里的图片编辑接口 /v1/images/edits。
   - 结果会自动保存到历史记录。

2. 右下角新增「历史记录」按钮
   - 自动监听原工具的图片生成接口返回结果，成功生成的图片会保存到浏览器本机 IndexedDB。
   - 关闭网页后再次打开仍可查看历史记录。
   - 支持打开预览、下载、复制提示词、删除单条、清空全部。
   - 支持手动「保存当前画布图片」。

3. 数据安全
   - API 密钥仍然只保存在原工具的 localStorage。
   - 历史图片只保存在当前浏览器 IndexedDB，不会上传到其他服务器。
   - 换浏览器、清浏览器数据、无痕模式会导致历史记录不可见或被清除。

4. Cloudflare Pages 设置
   - 构建命令：留空
   - 构建输出目录：dist
   - functions/api/proxy.js 继续保留，用于 API 代理。


补丁说明（手动追加）
- Gemini 图片模型 / nano-banana 类图片模型已统一改为走 /v1beta/models/{model}:generateContent 接口结构（适用于图片生成 / 多角度 / 高清放大节点）。
- 文本 Gemini 模型未改动。
- 历史记录已关闭自动保存，仅保留手动保存。


补丁说明 v1beta-fixed
- 图片节点内 gemini / nano-banana / nanobanana 类模型强制走 /v1beta/models/{model}:generateContent。
- API 地址即使误填成 /v1/images/generation、/v1/images/generations、/v1/images/edits，也会自动归一到域名根路径再拼 generateContent。
- 历史记录继续保持只手动保存，不自动保存。


补丁说明 force-v2
- 节点里手动填写的 gemini / nano-banana 模型，即使不在模型列表里，也会直接按 generateContent 路由。
- 页面底部版本显示 V1.5.14-gemini-force-v2，可用来确认是否部署了新包。

补丁说明 force-v3-visible
- 主 JS 文件已改名为 index-v1514-gemini-force-v3-visible.js，用来避开浏览器/Cloudflare 旧缓存。
- 页面底部版本应显示：v1.5.14-gemini-force-v3-visible / V1.5.14-gemini-force-v3。
- 图片节点里模型名只要包含 gemini、nano-banana、nanobanana，就强制走 /v1beta/models/{model}:generateContent。
- 历史记录为手动保存，不再监听自动保存事件。


补丁说明 base64fix-v4
- 修复 Gemini generateContent 参考图 inline_data.data 的 Base64 清洗：去掉 dataURL 前缀、去掉空白、补齐 = padding、兼容 URL-safe base64。
- 图片 part 改为 REST 格式 inline_data / mime_type，提升第三方 API 网关兼容性。
- Gemini / nano-banana 类图片模型继续强制走 /v1beta/models/{model}:generateContent。
- 历史记录仍然只手动保存。

补丁说明 local-save-video-node
- API 设置新增「保存设置」按钮，地址、密钥、图片模型、文本模型和默认模型会显式保存到当前浏览器 localStorage。
- 默认 API 平台不再预置任何厂商 API 地址；历史 Comfly 缓存会迁移为空白自定义平台，旧地址识别字符串也已从前端包移除。
- 右键菜单新增「视频生成节点」，调用无垠科技 video_google_omni 异步接口，支持提示词、尺寸、时长、参考图 URL 和参考视频 URL。


补丁说明 strict-sizefix-v6
- 修复 sizefix-v5 中 Gemini image_config 同时传 snake_case/camelCase 导致 oneof 重复字段报错的问题。
- Gemini / nano-banana 的 generateContent 请求体改为严格 REST 字段：generation_config.image_config.aspect_ratio / image_size。
- 删除 image_config 内无效字段 size、resolution、quality。
- 仍保留提示词中的 2K/3K/4K 输出要求。
- 历史记录仍然只手动保存。

补丁说明 video-node-ratio-ui
- 视频生成节点前端尺寸显示改为 3：4、4：3、9：16、16：6。
- 视频生成节点隐藏参考图 URL 和视频 URL 输入，参考图继续通过画布上游节点连接传入。
- 拖入视频文件到空白画布时会自动新增视频生成节点；拖到已有视频节点时会直接导入并显示预览。
- v3 加强 Windows 本地视频拖拽识别，支持 mp4、mov、m4v、webm、mkv、avi、mpeg、mpg、wmv 扩展名兜底。
- v4 改为运行时再读取拖入视频，避免导入时把大视频写进本地存储。
- 尺寸和时长控件强制显示在同一排两个独立选项。
- 发起 video_google_omni 请求前会把比例转换成接口需要的 widthxheight 尺寸。


Midjourney 调用说明
- 在右上角「API 设置」中，把 API 地址填写为：https://zxai.work
- 在 API 密钥中填写令牌。页面会以 Authorization: Bearer <TOKEN> 方式发送。
- 在「图片模型」中添加 `mj_fast_imagine` 或 `mj_relax_imagine`，并设为默认生图模型或在图片节点中选择它。
- Fast 请求走 `/mj-fast/mj`，Relax 请求走 `/mj-relax/mj`；请求体不携带 OpenAI 的 `model` 字段。
- 文生图和参考图生图提交到 `/submit/imagine`，完成后页面按 4 秒间隔查询 `/task/{id}/fetch`，直到任务返回 `SUCCESS` 和 `imageUrl`。
- 图片生成节点在选择 Midjourney 后可切换「想象生图」或「多图融合」；多图融合直接复用已连接图片的 Data URI。
- 反推提示词节点可选择 `mj_fast_*` 模型调用 Describe。Describe 仅支持 Fast；Turbo 和 Relax Describe 不可用。
- 适配层同时提供图片上传和批量查询的文档请求体；常规画布流程无需预上传，因为 Imagine 和 Blend 已直接接受 Data URI。
- 放大、变体、重绘等后续动作必须读取原任务 `buttons[].customId` 后提交 `/submit/action`。高清节点会显示已连接任务实际返回的按钮，不会自行拼接 customId。
- 付费提交操作不自动重试；查询任务遇到 429 或临时 5xx 时会进行有限退避。
- 非 Midjourney 图片模型仍保持原有 OpenAI/Gemini 调用方式，不会走 ZX Midjourney 协议。

默认模型同步
- 修改「默认生图模型」后，仍跟随默认值的图片生成、多角度和高清放大节点会立即同步。
- 在节点内手动选择模型后，该节点会保持手动模型，不会被后续默认设置覆盖。
