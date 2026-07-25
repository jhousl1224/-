type ZoneKey = "base" | "thisyear" | "nextyear";

const ZONE_ORDER: ZoneKey[] = ["base", "thisyear", "nextyear"];

const ZONE_CONFIG: Record<ZoneKey, { eventName: string; label: string; toast: string }> = {
  base: {
    eventName: "starself:unlock-request",
    label: `<span class="zh">🔒 解鎖完整報告</span><span class="en">🔒 Unlock Full Report</span>`,
    toast: `<span class="zh">🎉 完整報告已解鎖！</span><span class="en">🎉 Unlocked! Enjoy your full report.</span>`,
  },
  thisyear: {
    eventName: "starself:unlock-request:thisyear",
    label: `<span class="zh">🔒 解鎖今年流年</span><span class="en">🔒 Unlock This Year's Forecast</span>`,
    toast: `<span class="zh">🎉 今年流年已解鎖！</span><span class="en">🎉 Unlocked! This year's forecast is ready.</span>`,
  },
  nextyear: {
    eventName: "starself:unlock-request:nextyear",
    label: `<span class="zh">🔒 解鎖明年流年</span><span class="en">🔒 Unlock Next Year's Forecast</span>`,
    toast: `<span class="zh">🎉 明年流年已解鎖！</span><span class="en">🎉 Unlocked! Next year's forecast is ready.</span>`,
  },
};

export function mountFloatingUnlock(root: HTMLElement) {
  const wrap = document.createElement("div");
  wrap.className = "floating-unlock";
  wrap.innerHTML = `
    <button type="button" class="btn-primary" data-role="floating-unlock-btn">
      ${ZONE_CONFIG.base.label}
    </button>
  `;

  const toast = document.createElement("div");
  toast.className = "floating-toast";

  root.appendChild(wrap);
  root.appendChild(toast);

  const btn = wrap.querySelector("button") as HTMLButtonElement;
  let toastTimer: number | undefined;
  let activeZone: ZoneKey | null = null;

  btn.addEventListener("click", () => {
    if (!activeZone) return;
    const config = ZONE_CONFIG[activeZone];
    window.dispatchEvent(new CustomEvent(config.eventName));
    toast.innerHTML = config.toast;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
  });

  // A fresh form submission means a brand-new report — drop any leftover
  // zone/visibility state from a previous chart until scroll re-evaluates it.
  window.addEventListener("starself:report-reset", () => {
    activeZone = null;
    wrap.classList.remove("is-visible");
  });

  const resultSectionEl = document.getElementById("result");
  if (!resultSectionEl) return { el: wrap };
  const resultSection = resultSectionEl;

  function zoneIsLocked(key: ZoneKey): boolean {
    return resultSection.querySelector(`[data-lock-zone="${key}"] [data-role="teaser-unlock-btn"]`) !== null;
  }

  function zoneRange(key: ZoneKey): { top: number; bottom: number } | null {
    const els = resultSection.querySelectorAll<HTMLElement>(`[data-lock-zone="${key}"]`);
    if (els.length === 0) return null;
    return { top: els[0].getBoundingClientRect().top, bottom: els[els.length - 1].getBoundingClientRect().bottom };
  }

  let ticking = false;

  function updateVisibility() {
    ticking = false;
    // Zones sit back-to-back in document order, so walking them in order and
    // stopping at the first one whose range contains the reference line finds
    // whichever locked section is currently in view — never more than one.
    const referenceY = window.innerHeight * 0.85;
    let matched: ZoneKey | null = null;
    for (const key of ZONE_ORDER) {
      const range = zoneRange(key);
      if (!range) continue;
      if (referenceY < range.top) break;
      if (referenceY <= range.bottom) {
        matched = key;
        break;
      }
    }

    if (matched && zoneIsLocked(matched)) {
      activeZone = matched;
      btn.innerHTML = ZONE_CONFIG[matched].label;
      wrap.classList.add("is-visible");
    } else {
      activeZone = null;
      wrap.classList.remove("is-visible");
    }
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(updateVisibility);
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);

  // The report's DOM is rebuilt on submit and rewritten in place on each
  // unlock click — re-check visibility whenever any of that happens instead
  // of holding stale element references.
  const mutationObserver = new MutationObserver(onScroll);
  mutationObserver.observe(resultSection, { childList: true, subtree: true });

  updateVisibility();

  return { el: wrap };
}
