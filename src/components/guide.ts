import { WESTERN_BADGE } from "../lib/icons";

const ZODIAC_SIGNS = [
  "牡羊座", "金牛座", "雙子座", "巨蟹座", "獅子座", "處女座",
  "天秤座", "天蠍座", "射手座", "摩羯座", "水瓶座", "雙魚座",
];
const CX = 100;
const CY = 100;
const TEXT_PRESENTATION_SELECTOR = "\uFE0E";

function polar(radius: number, angleDeg: number): [number, number] {
  const rad = (angleDeg * Math.PI) / 180;
  return [CX + radius * Math.cos(rad), CY + radius * Math.sin(rad)];
}

function buildTicks(radius: number, count: number, longLen: number, shortLen: number): string {
  let out = "";
  for (let i = 0; i < count; i++) {
    const angle = (360 / count) * i - 90;
    const isLong = i % 3 === 0;
    const len = isLong ? longLen : shortLen;
    const [x1, y1] = polar(radius, angle);
    const [x2, y2] = polar(radius - len, angle);
    out += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" class="guide__tick${isLong ? " guide__tick--long" : ""}" />`;
  }
  return out;
}

function buildGlyphs(): string {
  const size = 15;
  const half = size / 2;
  return ZODIAC_SIGNS.map((sign, i) => {
    const angle = (360 / ZODIAC_SIGNS.length) * i - 90;
    const [x, y] = polar(80, angle);
    const symbol = WESTERN_BADGE[sign]?.symbol ?? "";
    const text = `${symbol}${TEXT_PRESENTATION_SELECTOR}`;
    return `
      <foreignObject x="${(x - half).toFixed(1)}" y="${(y - half).toFixed(1)}" width="${size}" height="${size}">
        <div xmlns="http://www.w3.org/1999/xhtml" class="guide__unicode-glyph">${text}</div>
      </foreignObject>
    `;
  }).join("\n");
}

function buildHexagram(radius: number): string {
  const tri = (offset: number) =>
    [0, 120, 240]
      .map((a) => polar(radius, a + offset - 90).join(","))
      .join(" ");
  return `
    <polygon points="${tri(0)}" class="guide__seal" />
    <polygon points="${tri(60)}" class="guide__seal" />
  `;
}

function buildConstellation(): string {
  const pts: [number, number][] = [
    polar(44, -60), polar(44, -10), polar(44, 40), polar(44, 100), polar(44, 160), polar(44, -130),
  ];
  const path = pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" L ");
  const dots = pts.map(([x, y]) => `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="1.4" class="guide__star-dot" />`).join("\n");
  return `<path d="M ${path}" class="guide__constellation" fill="none" />\n${dots}`;
}

function buildOrbits(): string {
  const orbits = [
    { r: 62, size: 2.4, dur: "9s", color: "#D4AF7A", dir: "1" },
    { r: 48, size: 1.8, dur: "13s", color: "#F3ECDD", dir: "-1" },
    { r: 90, size: 1.6, dur: "22s", color: "#7FAC9C", dir: "1" },
  ];
  return orbits
    .map(
      (o) => `
    <g>
      <circle cx="${CX}" cy="${(CY - o.r).toFixed(1)}" r="${o.size}" fill="${o.color}" style="color:${o.color}" class="guide__orbit-dot">
        <animateTransform attributeName="transform" type="rotate" from="0 ${CX} ${CY}" to="${o.dir === "1" ? 360 : -360} ${CX} ${CY}" dur="${o.dur}" repeatCount="indefinite" />
      </circle>
    </g>`,
    )
    .join("\n");
}

function buildEmblemSvg(): string {
  const sparkles = [
    [58, 52], [142, 55], [55, 148], [145, 145], [100, 26], [100, 174], [28, 100], [172, 100],
  ]
    .map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="1.5" class="guide__spark" style="animation-delay:${i * 0.35}s" />`)
    .join("\n");

  return `
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="guideEmblemTitle">
  <title id="guideEmblemTitle">占星魔法陣 Astrology Sigil</title>
  <defs>
    <radialGradient id="guideGlow" cx="50%" cy="50%" r="55%">
      <stop offset="0%" stop-color="#D4AF7A" stop-opacity="0.45" />
      <stop offset="55%" stop-color="#5B8C7B" stop-opacity="0.16" />
      <stop offset="100%" stop-color="#5B8C7B" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="guideCore" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#F3ECDD" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#F3ECDD" stop-opacity="0" />
    </radialGradient>
  </defs>

  <circle cx="100" cy="100" r="98" fill="url(#guideGlow)" class="guide__halo" />

  <g class="guide__ring-outer">
    <circle cx="100" cy="100" r="94" fill="none" stroke="#D4AF7A" stroke-width="0.75" stroke-dasharray="1 5" opacity="0.5" />
    ${buildTicks(94, 24, 6, 3)}
  </g>

  <g class="guide__ring">
    <circle cx="100" cy="100" r="88" fill="none" stroke="#5B8C7B" stroke-width="0.75" opacity="0.35" />
    ${buildGlyphs()}
  </g>

  <g class="guide__ring-inner">
    ${buildConstellation()}
  </g>

  <g class="guide__hexagram">
    ${buildHexagram(38)}
  </g>

  ${buildOrbits()}
  ${sparkles}

  <circle cx="100" cy="100" r="30" fill="url(#guideCore)" class="guide__core-glow" />

  <g class="guide__moon">
    <path d="M100 74 A22 22 0 1 0 100 126 A16.5 16.5 0 1 1 100 74 Z" fill="#D4AF7A" />
    <circle cx="116" cy="82" r="2.4" fill="#F3ECDD" />
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
  figure.setAttribute("aria-label", "點擊占星魔法陣 / Tap the sigil");
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
