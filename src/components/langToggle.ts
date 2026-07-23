export type Lang = "zh" | "en";

const STORAGE_KEY = "starself-lang";

export function getStoredLang(): Lang {
  return localStorage.getItem(STORAGE_KEY) === "en" ? "en" : "zh";
}

export function applyLang(lang: Lang) {
  document.documentElement.dataset.lang = lang;
  document.documentElement.lang = lang === "en" ? "en" : "zh-Hant";
  window.dispatchEvent(new CustomEvent<Lang>("starself:lang-changed", { detail: lang }));
}

export function mountLangToggle(root: HTMLElement) {
  const wrap = document.createElement("div");
  wrap.className = "lang-toggle";
  wrap.innerHTML = `
    <button type="button" data-lang="zh">中文</button>
    <button type="button" data-lang="en">EN</button>
  `;
  root.appendChild(wrap);

  function updateActive(lang: Lang) {
    wrap.querySelectorAll<HTMLButtonElement>("button").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.lang === lang);
    });
  }

  updateActive(getStoredLang());

  wrap.addEventListener("click", (e) => {
    const btn = (e.target as HTMLElement).closest<HTMLButtonElement>("button");
    if (!btn) return;
    const lang = btn.dataset.lang as Lang;
    localStorage.setItem(STORAGE_KEY, lang);
    applyLang(lang);
    updateActive(lang);
  });
}
