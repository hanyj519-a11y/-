(function () {
  'use strict';
  const DB_NAME = 'ai2_canvas_history_db_v2';
  const STORE = 'snapshots';
  const state = { open: false, items: [], status: '', statusKind: '' };
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  function uid(prefix='snap') { return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`; }
  function esc(s='') { return String(s).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch])); }
  function escAttr(s='') { return esc(s).replace(/`/g, '&#96;'); }
  function bridge() { return window.__AI2_CANVAS_BRIDGE || null; }
  function setStatus(text, kind='') { state.status = text || ''; state.statusKind = kind; render(); }

  function openDB() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, 1);
      req.onupgradeneeded = () => {
        const db = req.result;
        if (!db.objectStoreNames.contains(STORE)) {
          const s = db.createObjectStore(STORE, { keyPath: 'id' });
          s.createIndex('createdAt', 'createdAt');
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }
  function reqWrap(req) {
    return new Promise((resolve, reject) => {
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }
  async function tx(mode, fn) {
    const db = await openDB();
    try {
      return await new Promise((resolve, reject) => {
        const t = db.transaction(STORE, mode);
        const store = t.objectStore(STORE);
        let result;
        Promise.resolve(fn(store)).then(r => { result = r; }).catch(reject);
        t.oncomplete = () => resolve(result);
        t.onerror = () => reject(t.error);
        t.onabort = () => reject(t.error);
      });
    } finally { db.close(); }
  }
  async function listItems() {
    const db = await openDB();
    try {
      const t = db.transaction(STORE, 'readonly');
      const items = await reqWrap(t.objectStore(STORE).getAll());
      return (items || []).sort((a,b)=>(b.createdAt||0)-(a.createdAt||0));
    } finally { db.close(); }
  }
  async function putItem(item) { await tx('readwrite', s => s.put(item)); await refresh(); }
  async function delItem(id) { await tx('readwrite', s => s.delete(id)); await refresh(); }
  async function clearItems() { await tx('readwrite', s => s.clear()); await refresh(); }

  function cloneSnapshot(snap) {
    return JSON.parse(JSON.stringify(snap, (k,v) => typeof v === 'function' ? undefined : v));
  }
  function firstImage(snapshot) {
    const nodes = snapshot && Array.isArray(snapshot.nodes) ? snapshot.nodes : [];
    for (const n of nodes) {
      const d = n.data || {};
      if (typeof d.image === 'string' && d.image) return d.image;
      if (Array.isArray(d.outputImages) && d.outputImages[0]) return d.outputImages[0];
      if (Array.isArray(d.upstreamImages) && d.upstreamImages[0]) return d.upstreamImages[0];
    }
    return '';
  }
  function countImages(snapshot) {
    let c = 0;
    const nodes = snapshot && Array.isArray(snapshot.nodes) ? snapshot.nodes : [];
    for (const n of nodes) {
      const d = n.data || {};
      if (d.image) c += 1;
      if (Array.isArray(d.outputImages)) c += d.outputImages.filter(Boolean).length;
    }
    return c;
  }
  function titleFor(snapshot, title) {
    const nodes = snapshot && Array.isArray(snapshot.nodes) ? snapshot.nodes : [];
    return title || `画布快照 · ${nodes.length} 个节点`;
  }
  async function saveCanvas(title='手动保存画布') {
    try {
      const b = bridge();
      if (!b || typeof b.get !== 'function') throw new Error('画布还没初始化完成，请打开网页后稍等一下再保存。');
      const snapshot = cloneSnapshot(b.get());
      const nodes = Array.isArray(snapshot.nodes) ? snapshot.nodes : [];
      const edges = Array.isArray(snapshot.edges) ? snapshot.edges : [];
      if (!nodes.length) throw new Error('当前画布没有节点。');
      await putItem({
        id: uid(),
        createdAt: Date.now(),
        title: titleFor(snapshot, title),
        thumb: firstImage(snapshot),
        nodeCount: nodes.length,
        edgeCount: edges.length,
        imageCount: countImages(snapshot),
        snapshot
      });
      setStatus('已保存整个画布历史：节点、连线、图片都会保留。', 'ok');
    } catch (e) { setStatus(e && e.message ? e.message : String(e), 'error'); }
  }
  async function restoreCanvas(item) {
    try {
      const b = bridge();
      if (!b || typeof b.load !== 'function') throw new Error('画布还没初始化完成，无法打开历史。');
      b.load(item.snapshot);
      state.open = false;
      render();
    } catch (e) { setStatus(e && e.message ? e.message : String(e), 'error'); }
  }
  async function refresh() { state.items = await listItems(); render(); }

  function itemHtml(item) {
    const time = item.createdAt ? new Date(item.createdAt).toLocaleString() : '';
    const thumb = item.thumb ? `<img class="ai2-history-thumb" src="${escAttr(item.thumb)}" />` : `<div class="ai2-history-thumb ai2-history-thumb-empty">画布</div>`;
    return `<div class="ai2-history-item" data-id="${escAttr(item.id)}">
      ${thumb}
      <div class="ai2-history-meta">
        <div class="ai2-history-name" title="${escAttr(item.title)}">${esc(item.title || '画布快照')}</div>
        <div class="ai2-history-time">${esc(time)} · ${item.nodeCount || 0}节点 / ${item.edgeCount || 0}连线 / ${item.imageCount || 0}图</div>
        <div class="ai2-history-actions">
          <button class="ai2-btn primary" data-act="open">打开整个画布</button>
          <button class="ai2-btn" data-act="save-copy">另存当前</button>
          <button class="ai2-btn danger" data-act="delete">删除</button>
        </div>
      </div>
    </div>`;
  }
  function panelHtml() {
    return `<div class="ai2-canvas-panel ${state.open ? 'is-open' : ''}">
      <div class="ai2-canvas-head">
        <div><div class="ai2-canvas-title">画布历史记录</div><div class="ai2-canvas-sub">保存的是整个画布：所有节点、连线、图片、节点参数。关闭网页后还能打开。</div></div>
        <button class="ai2-canvas-close" data-close>×</button>
      </div>
      <div class="ai2-canvas-body">
        <div class="ai2-row ai2-between">
          <button class="ai2-btn primary" data-save>保存当前整个画布</button>
          <button class="ai2-btn" data-refresh>刷新</button>
          <button class="ai2-btn danger" data-clear>清空历史</button>
        </div>
        <div class="ai2-mini">当前只支持手动保存。打开历史会替换当前画布。</div>
        ${state.status ? `<div class="ai2-status ${state.statusKind}">${esc(state.status)}</div>` : ''}
        <div class="ai2-history-list">${state.items.length ? state.items.map(itemHtml).join('') : '<div class="ai2-empty">还没有画布历史。点击“保存当前整个画布”创建第一条。</div>'}</div>
      </div>
    </div>`;
  }
  function bind(root) {
    const close = $('[data-close]', root); if (close) close.onclick = () => { state.open = false; render(); };
    const save = $('[data-save]', root); if (save) save.onclick = () => saveCanvas('手动保存画布');
    const refreshBtn = $('[data-refresh]', root); if (refreshBtn) refreshBtn.onclick = refresh;
    const clear = $('[data-clear]', root); if (clear) clear.onclick = async () => { if (confirm('确定清空所有画布历史吗？')) await clearItems(); };
    $$('.ai2-history-item', root).forEach(el => {
      const item = state.items.find(x => x.id === el.getAttribute('data-id'));
      if (!item) return;
      $('[data-act="open"]', el).onclick = () => { if (confirm('打开这条历史会替换当前画布，确定打开吗？')) restoreCanvas(item); };
      $('[data-act="save-copy"]', el).onclick = () => saveCanvas('打开历史前备份');
      $('[data-act="delete"]', el).onclick = async () => { if (confirm('确定删除这条画布历史吗？')) await delItem(item.id); };
    });
  }
  function render() {
    let root = document.getElementById('ai2-canvas-history-root');
    if (!root) { root = document.createElement('div'); root.id = 'ai2-canvas-history-root'; document.body.appendChild(root); }
    root.innerHTML = `${panelHtml()}<div class="ai2-fab-wrap"><button class="ai2-fab" data-open>画布历史 ${state.items.length ? `(${state.items.length})` : ''}</button></div>`;
    const open = $('[data-open]', root); if (open) open.onclick = async () => { state.open = !state.open; await refresh(); render(); };
    bind(root);
  }
  function injectCss() {
    if (document.getElementById('ai2-canvas-history-css')) return;
    const link = document.createElement('link'); link.id = 'ai2-canvas-history-css'; link.rel = 'stylesheet'; link.href = './assets/lovart-history-plugin.css'; document.head.appendChild(link);
  }
  function init() { setTimeout(() => { injectCss(); refresh(); render(); }, 900); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true }); else init();
})();
