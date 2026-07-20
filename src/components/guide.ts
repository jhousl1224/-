import guideImg from "../assets/guide-character.png";

export interface GuideController {
  el: HTMLElement;
  say: (zh: string, en: string) => void;
}

export function createGuide(sizeClass = ""): GuideController {
  const wrap = document.createElement("div");
  wrap.className = `guide ${sizeClass}`.trim();

  const figure = document.createElement("div");
  figure.className = "guide__figure";
  figure.innerHTML = `<img src="${guideImg}" alt="命理導覽員 Guide" draggable="false" />`;
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
    figure.classList.remove("guide--greet");
    void figure.offsetWidth;
    figure.classList.add("guide--greet");
    window.setTimeout(() => figure.classList.remove("guide--greet"), 700);
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
