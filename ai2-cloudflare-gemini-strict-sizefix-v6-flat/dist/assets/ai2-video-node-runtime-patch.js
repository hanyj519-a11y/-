(() => {
  const VIDEO_ENDPOINT = "video_google_omni";
  const RATIO_OPTIONS = [
    { label: "3：4", value: "3:4", apiSize: "720x960" },
    { label: "4：3", value: "4:3", apiSize: "960x720" },
    { label: "9：16", value: "9:16", apiSize: "720x1280" },
    { label: "16：6", value: "16:6", apiSize: "1280x480" },
  ];
  const RATIO_TO_SIZE = Object.fromEntries(
    RATIO_OPTIONS.map((item) => [item.value, item.apiSize]),
  );
  const LEGACY_SIZE_TO_RATIO = {
    "1280x720": "4:3",
    "1920x1080": "4:3",
    "720x1280": "9:16",
    "1080x1920": "9:16",
  };
  const IMPORTED_VIDEOS = new WeakMap();
  const IMPORTED_VIDEO_VALUES = new Map();
  const LOCAL_VIDEO_PREFIX = "ai2-local-video:";
  let lastImportedVideo = null;
  window.__AI2_VIDEO_NODE_RUNTIME_PATCH__ = "video-drop-ratio-row-v4";
  const VIDEO_FILE_EXTENSIONS = /\.(mp4|mov|m4v|webm|mkv|avi|mpeg|mpg|wmv)$/i;

  const normalizeRatio = (value) =>
    String(value || "")
      .replace(/：/g, ":")
      .trim();

  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const setNativeValue = (element, value) => {
    const proto = element instanceof HTMLSelectElement
      ? HTMLSelectElement.prototype
      : element instanceof HTMLInputElement
        ? HTMLInputElement.prototype
        : HTMLTextAreaElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(proto, "value");
    if (descriptor && descriptor.set) descriptor.set.call(element, value);
    else element.value = value;
  };

  const dispatchInput = (element) => {
    element.dispatchEvent(new Event("input", { bubbles: true }));
    element.dispatchEvent(new Event("change", { bubbles: true }));
  };

  const labelText = (label) =>
    Array.from(label.childNodes)
      .filter((node) => node.nodeType === Node.TEXT_NODE)
      .map((node) => node.textContent || "")
      .join(" ")
      .replace(/\s+/g, " ")
      .trim();

  const getVideoNodes = () => Array.from(document.querySelectorAll(".video-node"));

  const injectCss = () => {
    if (document.getElementById("ai2-video-runtime-patch-style")) return;
    const style = document.createElement("style");
    style.id = "ai2-video-runtime-patch-style";
    style.textContent = `
      .video-node .ai2-video-size-duration-row {
        display: grid !important;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        gap: 8px;
        align-items: end;
        width: 100%;
      }
      .video-node .ai2-video-size-duration-row > label {
        min-width: 0;
        margin: 0 !important;
      }
      .video-node [data-ai2-hidden-video-url-control="true"] {
        display: none !important;
      }
      .video-node .ai2-imported-video-preview {
        width: 100%;
        margin-top: 8px;
        overflow: hidden;
        border-radius: 8px;
        background: #0b0b0d;
      }
      .video-node .ai2-imported-video-preview video {
        display: block;
        width: 100%;
        max-height: 180px;
        object-fit: contain;
        background: #0b0b0d;
      }
      .video-node.ai2-video-drag-over {
        outline: 2px solid rgba(79, 70, 229, 0.72);
        outline-offset: 3px;
      }
    `;
    document.head.appendChild(style);
  };

  const patchSizeSelect = (label) => {
    const select = label.querySelector("select");
    if (!select) return;

    const current = normalizeRatio(select.value);
    const nextRatio = RATIO_TO_SIZE[current]
      ? current
      : LEGACY_SIZE_TO_RATIO[current] || "4:3";

    const needsOptions =
      select.options.length !== RATIO_OPTIONS.length ||
      RATIO_OPTIONS.some((item, index) =>
        !select.options[index] ||
        select.options[index].value !== item.value ||
        select.options[index].textContent !== item.label,
      );

    if (needsOptions) {
      select.replaceChildren(
        ...RATIO_OPTIONS.map((item) => {
          const option = document.createElement("option");
          option.value = item.value;
          option.textContent = item.label;
          return option;
        }),
      );
    }

    if (select.value !== nextRatio) {
      setNativeValue(select, nextRatio);
      dispatchInput(select);
    }
  };

  const hideUrlControl = (label) => {
    label.hidden = true;
    label.style.display = "none";
    label.setAttribute("data-ai2-hidden-video-url-control", "true");
  };

  const layoutSizeAndDuration = (node) => {
    const labels = Array.from(node.querySelectorAll(":scope label"));
    const sizeLabel = labels.find((label) => /^尺寸/.test(labelText(label)));
    const durationLabel = labels.find((label) => /^时长/.test(labelText(label)));
    if (!sizeLabel || !durationLabel) return;

    let row = node.querySelector(":scope .ai2-video-size-duration-row");
    if (!row) {
      row = document.createElement("div");
      row.className = "ai2-video-size-duration-row";
      sizeLabel.parentNode.insertBefore(row, sizeLabel);
    }
    if (sizeLabel.parentNode !== row) row.appendChild(sizeLabel);
    if (durationLabel.parentNode !== row) row.appendChild(durationLabel);
  };

  const patchVideoNodes = () => {
    injectCss();
    getVideoNodes().forEach((node) => {
      Array.from(node.querySelectorAll("label")).forEach((label) => {
        const text = labelText(label);
        if (/^尺寸/.test(text)) {
          patchSizeSelect(label);
          return;
        }
        if (
          /参考(图|图片).*URL/i.test(text) ||
          /参考视频.*URL/i.test(text) ||
          /^视频\s*URL$/i.test(text)
        ) {
          hideUrlControl(label);
        }
      });
      layoutSizeAndDuration(node);
    });
  };

  const isVideoFile = (file) =>
    !!file &&
    (String(file.type || "").startsWith("video/") ||
      VIDEO_FILE_EXTENSIONS.test(String(file.name || "")));

  const isLikelyVideoDragItem = (item) =>
    String(item?.type || "").startsWith("video/") ||
    (item?.kind === "file" && !item.type);

  const hasVideoFile = (dataTransfer) =>
    Array.from(dataTransfer?.items || []).some((item) =>
      isLikelyVideoDragItem(item),
    ) ||
    Array.from(dataTransfer?.files || []).some((file) =>
      isVideoFile(file),
    );

  const getDroppedVideoFile = (dataTransfer) =>
    Array.from(dataTransfer?.files || []).find((file) =>
      isVideoFile(file),
    );

  const readFileAsDataUrl = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result || ""));
      reader.onerror = () => reject(new Error("读取视频失败"));
      reader.readAsDataURL(file);
    });

  const findVideoUrlControl = (node) =>
    Array.from(node.querySelectorAll("label")).find((label) => {
      const text = labelText(label);
      return /参考视频.*URL/i.test(text) || /^视频\s*URL$/i.test(text);
    })?.querySelector("input, textarea") || null;

  const showImportedVideoPreview = (node, file) => {
    let preview = node.querySelector(":scope .ai2-imported-video-preview");
    if (!preview) {
      preview = document.createElement("div");
      preview.className = "ai2-imported-video-preview";
      preview.innerHTML = "<video controls playsinline></video>";
      node.appendChild(preview);
    }
    const video = preview.querySelector("video");
    const previousUrl = preview.getAttribute("data-object-url");
    if (previousUrl) URL.revokeObjectURL(previousUrl);
    const objectUrl = URL.createObjectURL(file);
    preview.setAttribute("data-object-url", objectUrl);
    video.src = objectUrl;
  };

  const attachVideoFileToNode = async (node, file) => {
    if (!node || !file) return false;
    node.classList.remove("ai2-video-drag-over");
    const token = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
    const imported = { token, file, dataUrl: "", name: file.name, type: file.type, size: file.size };
    IMPORTED_VIDEOS.set(node, imported);
    IMPORTED_VIDEO_VALUES.set(token, imported);
    lastImportedVideo = imported;
    showImportedVideoPreview(node, file);

    const control = findVideoUrlControl(node);
    if (control) {
      setNativeValue(control, `${LOCAL_VIDEO_PREFIX}${token}`);
      dispatchInput(control);
    }
    return true;
  };

  const waitForNewVideoNode = async (before, timeoutMs = 1200) => {
    const started = Date.now();
    while (Date.now() - started < timeoutMs) {
      const node = getVideoNodes().find((item) => !before.has(item));
      if (node) return node;
      await wait(50);
    }
    return null;
  };

  const clickAddVideoNodeMenuItem = () => {
    const items = Array.from(document.querySelectorAll("button, [role='menuitem'], .context-menu *, .node-menu *"));
    const item = items.find((button) =>
      String(button.textContent || "").includes("视频生成节点"),
    );
    if (!item) return false;
    item.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true }));
    return true;
  };

  const createVideoNodeAtDrop = async (event) => {
    const before = new Set(getVideoNodes());
    const pointTarget = document.elementFromPoint(event.clientX, event.clientY);
    const candidates = Array.from(
      new Set([
        pointTarget,
        pointTarget?.closest?.(".react-flow__pane"),
        pointTarget?.closest?.(".react-flow"),
        document.querySelector(".react-flow__pane"),
        document.querySelector(".react-flow"),
        document.body,
      ].filter(Boolean)),
    );
    const openMenu = (target) => {
      const common = {
        bubbles: true,
        cancelable: true,
        button: 2,
        buttons: 2,
        clientX: event.clientX,
        clientY: event.clientY,
      };
      target.dispatchEvent(new MouseEvent("mousedown", common));
      target.dispatchEvent(new MouseEvent("mouseup", common));
      target.dispatchEvent(new MouseEvent("contextmenu", common));
    };
    candidates.forEach(openMenu);
    await wait(140);
    if (!clickAddVideoNodeMenuItem()) return null;
    return waitForNewVideoNode(before);
  };

  document.addEventListener("dragover", (event) => {
    if (!hasVideoFile(event.dataTransfer)) return;
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
    const node = event.target.closest?.(".video-node");
    getVideoNodes().forEach((item) =>
      item.classList.toggle("ai2-video-drag-over", item === node),
    );
  }, true);

  document.addEventListener("dragleave", (event) => {
    if (!event.relatedTarget) {
      getVideoNodes().forEach((item) => item.classList.remove("ai2-video-drag-over"));
    }
  }, true);

  document.addEventListener("drop", async (event) => {
    if (!hasVideoFile(event.dataTransfer)) return;
    const file = getDroppedVideoFile(event.dataTransfer);
    if (!file) return;
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();

    patchVideoNodes();
    let node = event.target.closest?.(".video-node") || null;
    if (!node) node = await createVideoNodeAtDrop(event);
    if (!node) node = getVideoNodes().at(-1) || null;
    await attachVideoFileToNode(node, file);
  }, true);

  const originalFetch = window.fetch.bind(window);
  const ensureImportedVideoDataUrl = async (imported) => {
    if (!imported) return "";
    if (!imported.dataUrl && imported.file) {
      imported.dataUrl = await readFileAsDataUrl(imported.file);
    }
    return imported.dataUrl || "";
  };

  window.fetch = async (input, init = {}) => {
    const url = typeof input === "string" ? input : input && input.url;
    const decodedUrl = (() => {
      try {
        return decodeURIComponent(url || "");
      } catch {
        return url || "";
      }
    })();

    if (
      decodedUrl.includes(VIDEO_ENDPOINT) &&
      init &&
      typeof init.body === "string"
    ) {
      try {
        const payload = JSON.parse(init.body);
        const size = normalizeRatio(payload.size);
        const ratio = RATIO_TO_SIZE[size] ? size : LEGACY_SIZE_TO_RATIO[size];
        if (ratio) payload.size = RATIO_TO_SIZE[ratio];
        const videoValue = String(payload.video || "");
        if (videoValue.startsWith(LOCAL_VIDEO_PREFIX)) {
          const imported = IMPORTED_VIDEO_VALUES.get(videoValue.slice(LOCAL_VIDEO_PREFIX.length));
          const dataUrl = await ensureImportedVideoDataUrl(imported);
          if (dataUrl) payload.video = dataUrl;
        } else if (!payload.video && lastImportedVideo?.dataUrl) {
          payload.video = await ensureImportedVideoDataUrl(lastImportedVideo);
        } else if (!payload.video && lastImportedVideo?.file) {
          payload.video = await ensureImportedVideoDataUrl(lastImportedVideo);
        }
        if (!payload.images) delete payload.images;
        if (!payload.video) delete payload.video;
        init = { ...init, body: JSON.stringify(payload) };
      } catch {
        // Leave non-JSON requests untouched.
      }
    }

    return originalFetch(input, init);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", patchVideoNodes, { once: true });
  } else {
    patchVideoNodes();
  }

  new MutationObserver(patchVideoNodes).observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
})();
