/* Reveal the navigation when the incoming content reaches its lower edge.
   The threshold follows the reference site's approach; existing SPA views stay navigable. */
(() => {
  const header = document.querySelector('header');
  const main = document.getElementById('main-view');
  const sheet = document.querySelector('.main-sheet');
  const opening = document.querySelector('.photo-opening');
  const caption = document.querySelector('.opening-caption');
  if (!header || !main || !sheet || !opening) return;
  const graphic = opening.querySelector('.opening-graphic');
  const name = opening.querySelector('.opening-name');
  const thread = name?.querySelector('.opening-name-thread path');
  const letters = name ? [...name.querySelectorAll('.opening-glyph-body')] : [];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  const pointer = { x: 0, y: 0, active: false };
  const glyphs = [...opening.querySelectorAll('.opening-glyph')].map(element => ({
    element, body: element.querySelector('.opening-glyph-body'),
    small: name?.contains(element), egg: element.classList.contains('opening-glyph-egg'),
    x: 0, y: 0
  }));
  let threadFrame = 0;
  let previousTime = 0;

  function clearPointer() { pointer.active = false; }
  function resetOffsets() {
    clearPointer();
    previousTime = 0;
    glyphs.forEach(glyph => {
      glyph.x = glyph.y = 0;
      glyph.element.style.removeProperty('--pointer-x');
      glyph.element.style.removeProperty('--pointer-y');
    });
  }

  // Translate outside the existing drift/rotation, so approaching letters never stops them.
  function updatePointer(time) {
    const elapsed = previousTime ? Math.min(time - previousTime, 40) : 16;
    previousTime = time;
    if (!pointer.active && glyphs.every(glyph => !glyph.x && !glyph.y)) return;
    const bounds = opening.getBoundingClientRect();
    const sheetTop = sheet.getBoundingClientRect().top;
    const active = pointer.active && finePointer.matches &&
      pointer.x >= bounds.left && pointer.x <= bounds.right &&
      pointer.y >= bounds.top && pointer.y < Math.min(bounds.bottom, sheetTop) &&
      (header.classList.contains('on-opening') || pointer.y > header.getBoundingClientRect().bottom);
    const ease = 1 - Math.exp(-elapsed / 210);
    // Read all animated bounds before writing offsets. Remove our own displacement
    // from each center to avoid chasing the pointer in a feedback loop.
    const rects = glyphs.map(glyph => glyph.body.getBoundingClientRect());
    glyphs.forEach((glyph, i) => {
      const rect = rects[i];
      const left = rect.left - glyph.x, right = rect.right - glyph.x;
      const top = rect.top - glyph.y, bottom = rect.bottom - glyph.y;
      const dx = (left + right) / 2 - pointer.x;
      const dy = (top + bottom) / 2 - pointer.y;
      const distance = Math.hypot(dx, dy);
      const radius = glyph.small ? 90 : 200;
      const force = active ? Math.pow(Math.max(0, 1 - distance / radius), 2) : 0;
      const limit = glyph.small ? 8 : glyph.egg ? 48 : 38;
      const targetX = distance > .01 ? dx / distance * force * limit : 0;
      const targetY = distance > .01 ? dy / distance * force * limit : -force * limit;
      // Do not let the additional cursor movement take a glyph off the canvas.
      const minX = Math.min(0, bounds.left + 6 - left);
      const maxX = Math.max(0, bounds.right - 6 - right);
      const minY = Math.min(0, bounds.top + 6 - top);
      const maxY = Math.max(0, bounds.bottom - 6 - bottom);
      glyph.x = Math.max(minX, Math.min(maxX, glyph.x + (targetX - glyph.x) * ease));
      glyph.y = Math.max(minY, Math.min(maxY, glyph.y + (targetY - glyph.y) * ease));
      if (!force && Math.abs(glyph.x) < .02) glyph.x = 0;
      if (!force && Math.abs(glyph.y) < .02) glyph.y = 0;
      glyph.element.style.setProperty('--pointer-x', `${glyph.x.toFixed(3)}px`);
      glyph.element.style.setProperty('--pointer-y', `${glyph.y.toFixed(3)}px`);
    });
  }

  // The sticky opening is intentionally pointer-transparent to the incoming sheet.
  window.addEventListener('pointermove', event => {
    if (!finePointer.matches || reducedMotion.matches || event.pointerType !== 'mouse' ||
        !opening.classList.contains('is-drifting')) return;
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    pointer.active = true;
  }, { passive: true });
  document.documentElement.addEventListener('pointerleave', clearPointer);
  window.addEventListener('blur', clearPointer);
  window.addEventListener('scroll', clearPointer, { passive: true });
  finePointer.addEventListener('change', resetOffsets);

  // Follow the actual drifting letters, leaving a small gap around each glyph.
  function drawNameThread() {
    if (!name || !thread) return;
    const box = name.getBoundingClientRect();
    if (!box.width || !box.height) return;
    const points = letters.map(letter => {
      const rect = letter.getBoundingClientRect();
      return { x: (rect.left + rect.right) / 2 - box.left,
        y: (rect.top + rect.bottom) / 2 - box.top,
        halfWidth: rect.width / 2 + 2, halfHeight: rect.height / 2 + 2 };
    });
    const segments = [];
    for (let i = 1; i < points.length; i++) {
      const a = points[i - 1], b = points[i];
      const distance = Math.hypot(b.x - a.x, b.y - a.y);
      if (!distance) continue;
      const ux = (b.x - a.x) / distance, uy = (b.y - a.y) / distance;
      const gapA = Math.min(a.halfWidth / Math.abs(ux), a.halfHeight / Math.abs(uy));
      const gapB = Math.min(b.halfWidth / Math.abs(ux), b.halfHeight / Math.abs(uy));
      if (gapA + gapB >= distance) continue;
      segments.push(`M${a.x + ux * gapA},${a.y + uy * gapA}L${b.x - ux * gapB},${b.y - uy * gapB}`);
    }
    thread.setAttribute('d', segments.join(' '));
  }

  function animateNameThread(time) {
    threadFrame = 0;
    updatePointer(time);
    drawNameThread();
    if (opening.classList.contains('is-drifting')) threadFrame = requestAnimationFrame(animateNameThread);
  }

  function updateMotion() {
    const visible = !main.hidden && !document.hidden && graphic &&
      sheet.getBoundingClientRect().top > graphic.getBoundingClientRect().top &&
      opening.getBoundingClientRect().bottom > 0;
    const running = !!visible && !reducedMotion.matches;
    opening.classList.toggle('is-drifting', running);
    if (!running && threadFrame) {
      cancelAnimationFrame(threadFrame);
      threadFrame = 0;
    }
    if (!running) resetOffsets();
    if (!threadFrame) {
      drawNameThread();
      if (running) threadFrame = requestAnimationFrame(animateNameThread);
    }
  }
  reducedMotion.addEventListener('change', updateMotion);
  document.addEventListener('visibilitychange', updateMotion);
  document.fonts?.ready.then(drawNameThread);

  function updateHeader() {
    const hide = !main.hidden && sheet.getBoundingClientRect().top > header.offsetHeight;
    header.classList.toggle('on-opening', hide);
    header.inert = hide;
    // The incoming sheet can cover the sticky caption while it is still in the viewport.
    // Hide the complete text from assistive technology when that group is obscured.
    if (caption) opening.inert = main.hidden || sheet.getBoundingClientRect().top < caption.getBoundingClientRect().bottom + 8;
    if (hide) header.setAttribute('aria-hidden', 'true');
    else header.removeAttribute('aria-hidden');
    updateMotion();
  }

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
  window.addEventListener('resize', updateHeader, { passive: true });
  window.addEventListener('pageshow', updateHeader);
  window.addEventListener('load', updateHeader);
  new MutationObserver(updateHeader).observe(main, { attributes: true, attributeFilter: ['hidden'] });
  if ('ResizeObserver' in window) {
    const observer = new ResizeObserver(updateHeader);
    observer.observe(opening);
    observer.observe(header);
    if (name) observer.observe(name);
  }
})();
