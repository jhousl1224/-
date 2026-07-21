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

  const watchTeaserHeading = (heading: Element) => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          wrap.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -30% 0px" },
    );
    observer.observe(heading);
  };

  const existing = resultSection.querySelector('[data-role="teaser-heading"]');
  if (existing) {
    watchTeaserHeading(existing);
  } else {
    const mutationObserver = new MutationObserver(() => {
      const heading = resultSection.querySelector('[data-role="teaser-heading"]');
      if (heading) {
        watchTeaserHeading(heading);
        mutationObserver.disconnect();
      }
    });
    mutationObserver.observe(resultSection, { childList: true, subtree: true });
  }

  return { el: wrap };
}
