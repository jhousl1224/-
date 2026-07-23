const LOCKED_LABEL = `<span class="zh">🔒 解鎖完整報告</span><span class="en">Unlock Full Report</span>`;
const UNLOCKED_LABEL = `<span class="zh">✅ 已解鎖</span><span class="en">Unlocked</span>`;

export function mountFloatingUnlock(root: HTMLElement) {
  const wrap = document.createElement("div");
  wrap.className = "floating-unlock";
  wrap.innerHTML = `
    <button type="button" class="btn-primary" data-role="floating-unlock-btn">
      ${LOCKED_LABEL}
    </button>
  `;

  const toast = document.createElement("div");
  toast.className = "floating-toast";
  toast.innerHTML = `<span class="zh">🎉 完整報告已解鎖！</span><span class="en">Unlocked! Enjoy your full report.</span>`;

  root.appendChild(wrap);
  root.appendChild(toast);

  const btn = wrap.querySelector("button") as HTMLButtonElement;
  let toastTimer: number | undefined;

  btn.addEventListener("click", () => {
    window.dispatchEvent(new CustomEvent("starself:unlock-request"));
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
  });

  window.addEventListener("starself:unlocked", () => {
    btn.innerHTML = UNLOCKED_LABEL;
    wrap.classList.add("is-unlocked");
  });

  // A fresh form submission means a brand-new, never-unlocked report — drop
  // any leftover "unlocked" visual state from a previous chart.
  window.addEventListener("starself:report-reset", () => {
    btn.innerHTML = LOCKED_LABEL;
    wrap.classList.remove("is-unlocked");
  });

  const resultSectionEl = document.getElementById("result");
  if (!resultSectionEl) return { el: wrap };
  const resultSection = resultSectionEl;

  let heading: HTMLElement | null = null;
  let ticking = false;
  let listenersAttached = false;

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
    if (!listenersAttached) {
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      listenersAttached = true;
    }
    updateVisibility();
  }

  // Re-submitting the form rebuilds the card stack, which replaces the teaser
  // heading with a new DOM node — keep watching indefinitely so we re-attach
  // to it instead of holding a stale reference to the detached old one.
  function checkHeading() {
    const found = resultSection.querySelector('[data-role="teaser-heading"]') as HTMLElement | null;
    if (found && found !== heading) {
      attach(found);
    } else if (!found && heading) {
      heading = null;
      wrap.classList.remove("is-visible");
    }
  }

  checkHeading();
  const mutationObserver = new MutationObserver(checkHeading);
  mutationObserver.observe(resultSection, { childList: true, subtree: true });

  return { el: wrap };
}
