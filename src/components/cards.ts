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

export function mountCardDeck(container: HTMLElement, specs: CardSpec[]) {
  const deck = document.createElement("div");
  deck.className = "card-deck";
  specs.forEach((spec) => deck.appendChild(buildCard(spec)));

  const dots = document.createElement("div");
  dots.className = "deck-dots";
  specs.forEach((_, i) => {
    const dot = document.createElement("span");
    if (i === 0) dot.classList.add("is-active");
    dots.appendChild(dot);
  });

  deck.addEventListener("scroll", () => {
    const index = Math.round(deck.scrollLeft / (deck.firstElementChild as HTMLElement).clientWidth);
    dots.querySelectorAll("span").forEach((dot, i) => dot.classList.toggle("is-active", i === index));
  });

  container.appendChild(deck);
  container.appendChild(dots);
}
