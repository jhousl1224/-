import { createGuide } from "./guide";

export function mountHero(root: HTMLElement, onStart: () => void) {
  const section = document.createElement("section");
  section.className = "section hero";
  section.id = "hero";

  const guide = createGuide();

  section.innerHTML = `
    <div class="section__inner">
      <span class="hero__eyebrow">星語所 · StarSelf</span>
      <h1 class="hero__title">
        <span class="zh">看見你的命，找到你的路</span>
        <span class="en">See your chart. Find your path.</span>
      </h1>
      <p class="hero__desc">
        <span class="zh">結合紫微斗數、八字、星座與生肖，用一份出生資料，畫出屬於你的天賦地圖。</span>
        <span class="en en--body">One birthday, four ancient lenses — Zi Wei Dou Shu, Bazi, zodiac, and sun sign, woven into a map of your gifts.</span>
      </p>
      <div class="hero__pillars">
        <span class="pillar-tag">紫微斗數 Zi Wei</span>
        <span class="pillar-tag">八字 Bazi</span>
        <span class="pillar-tag">生肖 Zodiac</span>
        <span class="pillar-tag">星座 Sun Sign</span>
      </div>
    </div>
  `;

  section.querySelector(".section__inner")!.appendChild(guide.el);

  const cta = document.createElement("button");
  cta.className = "btn-primary";
  cta.innerHTML = `<span class="zh">開始探索</span><span class="en">Begin the Reading</span>`;
  cta.addEventListener("click", onStart);

  const hint = document.createElement("div");
  hint.className = "scroll-hint";
  hint.textContent = "↓";

  section.querySelector(".section__inner")!.appendChild(cta);
  section.appendChild(hint);

  root.appendChild(section);

  window.setTimeout(() => {
    guide.say("嗨，我是你的命理導覽員，準備好了嗎？", "Hi, I'm your reading guide — ready to begin?");
  }, 900);

  return { section, guide };
}
