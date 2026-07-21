export function mountFloatingUnlock(root: HTMLElement) {
  const wrap = document.createElement("div");
  wrap.className = "floating-unlock";
  wrap.innerHTML = `
    <button type="button" class="btn-primary" data-role="floating-unlock-btn">
      <span class="zh">🔒 解鎖完整報告</span><span class="en">Unlock Full Report</span>
    </button>
  `;

  const toast = document.createElement("div");
  toast.className = "floating-toast";
  toast.innerHTML = `<span class="zh">完整報告即將推出，敬請期待！</span><span class="en">Coming soon — the full report is on its way!</span>`;

  root.appendChild(wrap);
  root.appendChild(toast);

  const btn = wrap.querySelector("button") as HTMLButtonElement;
  let toastTimer: number | undefined;

  btn.addEventListener("click", () => {
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
  });

  const resultSection = document.getElementById("result");
  if (!resultSection) return { el: wrap };

  let heading: HTMLElement | null = null;
  let ticking = false;

  function updateVisibility() {
    ticking = false;
    if (!heading) return;
    // Show once we've scrolled down past the teaser heading; hide again once
    // we've scrolled back up into the flip-card area above it.
    const pastHeading = heading.getBoundingClientRect().bottom < window.innerHeight * 0.85;
    wrap.classList.toggle("is-visible", pastHeading);
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(updateVisibility);
    }
  }

  function attach(headingEl: HTMLElement) {
    heading = headingEl;
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    updateVisibility();
  }

  const existing = resultSection.querySelector('[data-role="teaser-heading"]') as HTMLElement | null;
  if (existing) {
    attach(existing);
  } else {
    const mutationObserver = new MutationObserver(() => {
      const found = resultSection.querySelector('[data-role="teaser-heading"]') as HTMLElement | null;
      if (found) {
        attach(found);
        mutationObserver.disconnect();
      }
    });
    mutationObserver.observe(resultSection, { childList: true, subtree: true });
  }

  return { el: wrap };
}
