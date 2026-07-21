const ZODIAC_GLYPHS = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"];

function buildEmblemSvg(): string {
  const cx = 100;
  const cy = 100;
  const glyphRadius = 84;

  const glyphs = ZODIAC_GLYPHS.map((glyph, i) => {
    const angle = (Math.PI * 2 * i) / ZODIAC_GLYPHS.length - Math.PI / 2;
    const x = cx + glyphRadius * Math.cos(angle);
    const y = cy + glyphRadius * Math.sin(angle);
    return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" text-anchor="middle" dominant-baseline="central" class="guide__glyph">${glyph}</text>`;
  }).join("\n");

  const sparkles = [
    [60, 55], [140, 58], [58, 145], [142, 142], [100, 32], [100, 168],
  ]
    .map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="1.6" class="guide__spark" style="animation-delay:${i * 0.4}s" />`)
    .join("\n");

  return `
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="guideEmblemTitle">
  <title id="guideEmblemTitle">占星圖騰 Astrology Emblem</title>
  <defs>
    <radialGradient id="guideGlow" cx="50%" cy="50%" r="55%">
      <stop offset="0%" stop-color="#D4AF7A" stop-opacity="0.4" />
      <stop offset="100%" stop-color="#D4AF7A" stop-opacity="0" />
    </radialGradient>
  </defs>

  <circle cx="100" cy="100" r="96" fill="url(#guideGlow)" />

  <g class="guide__ring">
    <circle cx="100" cy="100" r="92" fill="none" stroke="#D4AF7A" stroke-width="1" stroke-dasharray="2 6" opacity="0.55" />
    <circle cx="100" cy="100" r="70" fill="none" stroke="#5B8C7B" stroke-width="1" opacity="0.4" />
    ${glyphs}
  </g>

  ${sparkles}

  <g class="guide__moon">
    <path d="M100 66 A28 28 0 1 0 100 134 A21 21 0 1 1 100 66 Z" fill="#D4AF7A" />
    <circle cx="122" cy="76" r="3" fill="#F3ECDD" />
  </g>
</svg>
`;
}

export interface GuideController {
  el: HTMLElement;
  say: (zh: string, en: string) => void;
}

export function createGuide(sizeClass = ""): GuideController {
  const wrap = document.createElement("div");
  wrap.className = `guide ${sizeClass}`.trim();

  const figure = document.createElement("div");
  figure.className = "guide__figure";
  figure.innerHTML = buildEmblemSvg();
  figure.setAttribute("role", "button");
  figure.setAttribute("aria-label", "點擊占星圖騰 / Tap the emblem");
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
    figure.classList.remove("guide--pulse");
    void figure.offsetWidth;
    figure.classList.add("guide--pulse");
    window.setTimeout(() => figure.classList.remove("guide--pulse"), 700);
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
