import type { BadgeSpec } from "../lib/icons";

export interface CardSpec {
  badge: BadgeSpec;
  titleZh: string;
  titleEn: string;
  frontNoteZh: string;
  frontNoteEn: string;
  bodyZh: string;
  bodyEn: string;
}

function buildTicks(): string {
  let out = "";
  for (let i = 0; i < 16; i++) {
    const angle = (360 / 16) * i - 90;
    const rad = (angle * Math.PI) / 180;
    const isLong = i % 4 === 0;
    const rOuter = 46;
    const len = isLong ? 5 : 2.5;
    const x1 = 50 + rOuter * Math.cos(rad);
    const y1 = 50 + rOuter * Math.sin(rad);
    const x2 = 50 + (rOuter - len) * Math.cos(rad);
    const y2 = 50 + (rOuter - len) * Math.sin(rad);
    out += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" class="card-badge-tick${isLong ? " card-badge-tick--long" : ""}" />`;
  }
  return out;
}

const TEXT_PRESENTATION_SELECTOR = "\uFE0E";

function buildSymbol(badge: BadgeSpec): string {
  const fontSize = badge.symbol.length > 1 ? 24 : 32;
  const text = `${badge.symbol}${TEXT_PRESENTATION_SELECTOR}`;
  return `
    <foreignObject x="18" y="18" width="64" height="64">
      <div xmlns="http://www.w3.org/1999/xhtml" class="card-badge-unicode" style="font-size:${fontSize}px;">${text}</div>
    </foreignObject>
  `;
}

function buildBadge(badge: BadgeSpec): string {
  const color = badge.color ?? "var(--gold)";
  const motif = badge.motif
    ? `<path d="${badge.motif}" class="card-badge-motif" />`
    : "";
  return `
    <svg viewBox="0 0 100 100" class="card-badge" style="--badge-color:${color};">
      <circle cx="50" cy="50" r="48" class="card-badge-glow" />
      <g class="card-badge-ticks">${buildTicks()}</g>
      <rect x="28" y="28" width="44" height="44" class="card-badge-diamond" />
      <circle cx="50" cy="50" r="40" class="card-badge-ring-outer" stroke-dasharray="1 3.5" />
      <circle cx="50" cy="50" r="33" class="card-badge-ring" />
      ${motif}
      <circle cx="50" cy="50" r="21" class="card-badge-core" />
      ${buildSymbol(badge)}
    </svg>
  `;
}

function buildCard(spec: CardSpec): HTMLElement {
  const card = document.createElement("div");
  card.className = "flip-card";
  card.innerHTML = `
    <div class="flip-card-inner">
      <div class="flip-card-face flip-card-front">
        ${buildBadge(spec.badge)}
        <h3 class="flip-card-title zh">${spec.titleZh}</h3>
        <span class="en">${spec.titleEn}</span>
        <p class="zh" style="font-size:0.8rem; margin-top:0.4rem;">${spec.frontNoteZh}</p>
        <p class="en en--body" style="font-size:0.72rem;">${spec.frontNoteEn}</p>
        <span class="flip-card-hint">點擊翻牌 Tap to flip</span>
      </div>
      <div class="flip-card-face flip-card-back">
        <p class="zh">${spec.bodyZh}</p>
        <p class="en">${spec.bodyEn}</p>
      </div>
    </div>
  `;
  card.addEventListener("click", () => card.classList.toggle("is-flipped"));
  return card;
}

export function mountCardStack(container: HTMLElement, specs: CardSpec[]) {
  const stack = document.createElement("div");
  stack.className = "card-stack";

  specs.forEach((spec, i) => {
    const item = document.createElement("div");
    item.className = "card-stack-item";

    const index = document.createElement("span");
    index.className = "card-stack-index";
    index.textContent = `${i + 1} / ${specs.length}`;
    item.appendChild(index);

    item.appendChild(buildCard(spec));

    if (i < specs.length - 1) {
      const hint = document.createElement("div");
      hint.className = "card-stack-hint";
      hint.textContent = "↓";
      item.appendChild(hint);
    }

    stack.appendChild(item);
  });

  container.appendChild(stack);
}
