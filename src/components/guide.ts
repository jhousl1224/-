const GUIDE_SVG = `
<svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="guideTitle">
  <title id="guideTitle">命理導覽員 Guide</title>
  <defs>
    <radialGradient id="guideHalo" cx="50%" cy="38%" r="60%">
      <stop offset="0%" stop-color="#D4AF7A" stop-opacity="0.35" />
      <stop offset="100%" stop-color="#D4AF7A" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="guideRobe" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#2a3170" />
      <stop offset="100%" stop-color="#1a2054" />
    </linearGradient>
  </defs>

  <circle cx="100" cy="120" r="95" fill="url(#guideHalo)" />

  <g class="guide__collar">
    <path d="M45 260 Q55 175 100 168 Q145 175 155 260 Z" fill="url(#guideRobe)" />
    <path d="M78 178 Q100 210 122 178 L112 168 Q100 178 88 168 Z" fill="#D4AF7A" />
    <path d="M45 260 Q60 195 88 174" fill="none" stroke="#5B8C7B" stroke-width="3" opacity="0.7" />
    <path d="M155 260 Q140 195 112 174" fill="none" stroke="#5B8C7B" stroke-width="3" opacity="0.7" />
  </g>

  <g class="guide__head-group">
    <ellipse cx="100" cy="112" rx="42" ry="48" fill="#f3ddc2" />

    <path class="guide__hair" d="M55 108 Q50 55 100 46 Q150 55 145 108 Q140 78 100 74 Q60 78 58 112 Q56 100 55 108 Z" fill="#241f2e" />
    <path class="guide__hair" d="M55 100 Q48 130 62 152 Q54 122 62 100 Z" fill="#241f2e" />
    <path class="guide__hair" d="M145 100 Q152 130 138 152 Q146 122 138 100 Z" fill="#241f2e" />

    <g class="guide__eyes">
      <rect x="78" y="112" width="14" height="3.5" rx="1.75" fill="#3a2f22" />
      <rect x="108" y="112" width="14" height="3.5" rx="1.75" fill="#3a2f22" />
    </g>

    <path d="M83 110 Q85 106 91 106" fill="none" stroke="#3a2f22" stroke-width="2" stroke-linecap="round" opacity="0.6" />
    <path d="M109 106 Q115 106 117 110" fill="none" stroke="#3a2f22" stroke-width="2" stroke-linecap="round" opacity="0.6" />

    <path d="M100 116 Q97 128 94 132" fill="none" stroke="#d9a679" stroke-width="2" stroke-linecap="round" opacity="0.7" />
    <path d="M86 140 Q100 148 114 140" fill="none" stroke="#8a4a3a" stroke-width="2.5" stroke-linecap="round" />
    <circle cx="72" cy="128" r="7" fill="#e8927a" opacity="0.35" />
    <circle cx="128" cy="128" r="7" fill="#e8927a" opacity="0.35" />
  </g>
</svg>
`;

export interface GuideController {
  el: HTMLElement;
  say: (zh: string, en: string) => void;
}

export function createGuide(sizeClass = ""): GuideController {
  const wrap = document.createElement("div");
  wrap.className = `guide ${sizeClass}`.trim();

  const figure = document.createElement("div");
  figure.className = "guide__figure";
  figure.innerHTML = GUIDE_SVG;
  figure.setAttribute("role", "button");
  figure.setAttribute("aria-label", "點擊命理導覽員 / Tap the guide");
  figure.tabIndex = 0;

  const bubble = document.createElement("div");
  bubble.className = "guide__bubble";
  bubble.innerHTML = `<span class="guide__bubble-zh"></span><span class="guide__bubble-en en"></span>`;

  wrap.appendChild(figure);
  wrap.appendChild(bubble);

  const zhEl = bubble.querySelector(".guide__bubble-zh") as HTMLElement;
  const enEl = bubble.querySelector(".guide__bubble-en") as HTMLElement;

  function say(zh: string, en: string) {
    zhEl.textContent = zh;
    enEl.textContent = en;
    bubble.classList.add("is-visible");
  }

  function playfulGesture() {
    const gesture = Math.random() > 0.5 ? "guide--nod" : "guide--blink";
    figure.classList.remove("guide--nod", "guide--blink");
    void figure.offsetWidth;
    figure.classList.add(gesture);
    window.setTimeout(() => figure.classList.remove(gesture), 700);
  }

  figure.addEventListener("click", playfulGesture);
  figure.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      playfulGesture();
    }
  });

  return { el: wrap, say };
}
