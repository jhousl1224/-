export interface CardSpec {
  icon: string;
  titleZh: string;
  titleEn: string;
  frontNoteZh: string;
  frontNoteEn: string;
  bodyZh: string;
  bodyEn: string;
}

function buildCard(spec: CardSpec): HTMLElement {
  const card = document.createElement("div");
  card.className = "flip-card";
  card.innerHTML = `
    <div class="flip-card-inner">
      <div class="flip-card-face flip-card-front">
        <div class="flip-card-icon">${spec.icon}</div>
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
