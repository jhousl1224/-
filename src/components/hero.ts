import { createGuide } from "./guide";

export function mountHero(root: HTMLElement, onStart: () => void) {
  const section = document.createElement("section");
  section.className = "section hero";
  section.id = "hero";

  const guide = createGuide();

  section.innerHTML = `<div class="section__inner"></div>`;
  const inner = section.querySelector(".section__inner") as HTMLElement;

  inner.appendChild(guide.el);

  const cta = document.createElement("button");
  cta.className = "btn-primary";
  cta.innerHTML = `<span class="zh">開始探索</span><span class="en">Begin the Reading</span>`;
  cta.addEventListener("click", onStart);
  inner.appendChild(cta);

  inner.insertAdjacentHTML(
    "beforeend",
    `
      <span class="hero__eyebrow">星語所 · StarSelf</span>
      <h1 class="hero__title">
        <span class="zh">看見你的命，找到你的路</span>
        <span class="en">See your chart. Find your path.</span>
      </h1>
      <p class="hero__desc">
        <span class="zh">結合紫微斗數、八字、星座與生肖，用一份出生資料，畫出屬於你的天賦地圖。</span>
        <span class="en en--body">One birthday, four different systems — Zi Wei Dou Shu, Bazi, Chinese Zodiac, and Star Sign — all pointing at the same thing: what you're actually good at.</span>
      </p>
      <div class="hero__pillars">
        <span class="pillar-tag">紫微斗數 Zi Wei</span>
        <span class="pillar-tag">八字 Bazi</span>
        <span class="pillar-tag">生肖 Chinese Zodiac</span>
        <span class="pillar-tag">星座 Star Sign</span>
      </div>
    `,
  );

  const hint = document.createElement("div");
  hint.className = "scroll-hint";
  hint.textContent = "↓";

  section.appendChild(hint);

  root.appendChild(section);

  window.setTimeout(() => {
    guide.say("嗨，準備好看見你的命盤了嗎？", "Hey — ready to see what your chart says?");
  }, 900);

  return { section, guide };
}
