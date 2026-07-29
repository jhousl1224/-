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
        <span class="zh">看見你的命<br />找到你的路</span>
        <span class="en">See your chart. Find your path.</span>
      </h1>
      <p class="hero__desc">
        <span class="zh">結合紫微斗數、八字、星座與生肖，<br />用一份出生資料，畫出屬於你的天賦地圖。</span>
        <span class="en en--body">One birthday, four different systems — Zi Wei Dou Shu, Bazi, Chinese Zodiac, and Star Sign — all pointing at the same thing: what you're actually good at.</span>
      </p>
      <div class="hero__pillars">
        <span class="pillar-tag">紫微斗數 Zi Wei</span>
        <span class="pillar-tag">八字 Bazi</span>
        <span class="pillar-tag">生肖 Chinese Zodiac</span>
        <span class="pillar-tag">星座 Star Sign</span>
      </div>

      <div class="hero__pricing">
        <p class="hero__pricing-title"><span class="zh">服務定價</span><span class="en">Pricing</span></p>
        <div class="hero__pricing-item">
          <span><span class="zh">基礎完整報告</span><span class="en">Full Base Report</span></span>
          <span class="hero__pricing-amount">NT$149</span>
        </div>
        <div class="hero__pricing-item">
          <span><span class="zh">今年流年解析</span><span class="en">This Year's Forecast</span></span>
          <span class="hero__pricing-amount">NT$69</span>
        </div>
        <div class="hero__pricing-item">
          <span><span class="zh">明年流年解析</span><span class="en">Next Year's Forecast</span></span>
          <span class="hero__pricing-amount">NT$69</span>
        </div>
        <div class="hero__pricing-item hero__pricing-item--bundle">
          <span>
            <span class="hero__pricing-badge"><span class="zh">最划算</span><span class="en">Best Value</span></span>
            <span><span class="zh">🎁 一次全部解鎖</span><span class="en">🎁 Unlock Everything</span></span>
          </span>
          <span class="hero__pricing-amount">
            <span class="hero__pricing-strike">NT$287</span>
            NT$249
          </span>
        </div>
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
