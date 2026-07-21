import { createGuide } from "./guide";
import { mountCardStack, type CardSpec } from "./cards";
import type { AnalysisResult } from "../lib/analysis";
import { ZIWEI_STAR_EN_NAME } from "../lib/analysisData";
import { WESTERN_BADGE, WUXING_BADGE, ZIWEI_NO_STAR_BADGE, ZIWEI_STAR_BADGE, ZODIAC_BADGE } from "../lib/icons";
import { ganToPinyin, ganZhiToPinyin } from "../lib/pinyin";
import { TEASER_CAREER, TEASER_HEALTH, TEASER_LOVE, TEASER_WEALTH, type Teaser } from "../lib/teaserData";
import type { BirthProfile } from "../lib/types";

const TEASER_TOPICS: { labelZh: string; labelEn: string; data: Record<string, Teaser> }[] = [
  { labelZh: "💞 感情關係", labelEn: "Love & Relationships", data: TEASER_LOVE },
  { labelZh: "💼 事業方向", labelEn: "Career Direction", data: TEASER_CAREER },
  { labelZh: "💰 財運", labelEn: "Money & Wealth", data: TEASER_WEALTH },
  { labelZh: "🌿 健康", labelEn: "Health", data: TEASER_HEALTH },
];

function buildTeaserCard(labelZh: string, labelEn: string, teaser: Teaser): string {
  return `
    <div class="teaser-card">
      <p class="teaser-label"><span class="zh">${labelZh}</span> <span class="en" style="display:inline;">${labelEn}</span></p>
      <div class="teaser-text">
        <p class="zh">${teaser.visibleZh}<span class="teaser-text-blurred">${teaser.blurredZh}</span></p>
        <p class="en">${teaser.visibleEn} <span class="teaser-text-blurred">${teaser.blurredEn}</span></p>
        <div class="teaser-fade"></div>
      </div>
      <div class="teaser-unlock">🔒 <span class="zh">解鎖完整分析</span><span class="en" style="display:inline;">Unlock full analysis</span></div>
    </div>
  `;
}

const PROGRESS_STEPS = [
  { pct: 25, zh: "正在排紫微斗數星盤…", en: "Mapping out your Zi Wei Dou Shu palaces..." },
  { pct: 55, zh: "正在推算八字四柱…", en: "Crunching your Bazi Four Pillars..." },
  { pct: 80, zh: "正在對照生肖與星座…", en: "Checking your Chinese zodiac and star sign..." },
  { pct: 100, zh: "完成！為你整理白話分析…", en: "Done! Putting it all into plain English..." },
];

export function mountResult(root: HTMLElement) {
  const section = document.createElement("section");
  section.className = "section section--locked";
  section.id = "result";

  const guide = createGuide();

  section.innerHTML = `<div class="section__inner" data-role="content"></div>`;
  root.appendChild(section);

  const content = section.querySelector('[data-role="content"]') as HTMLElement;

  function renderLoading() {
    content.innerHTML = `
      <h2 class="zh">正在為你排盤</h2>
      <span class="en">Reading the stars for you</span>
      <div class="progress-wrap">
        <div class="progress-track"><div class="progress-fill" data-role="fill"></div></div>
        <p class="progress-label" data-role="label">準備中… Preparing...</p>
      </div>
    `;
    content.appendChild(guide.el);
  }

  async function runProgress() {
    const fill = content.querySelector('[data-role="fill"]') as HTMLElement;
    const label = content.querySelector('[data-role="label"]') as HTMLElement;
    for (const step of PROGRESS_STEPS) {
      await new Promise((r) => setTimeout(r, 380));
      fill.style.width = `${step.pct}%`;
      label.textContent = `${step.zh} ${step.en}`;
      guide.say(step.zh, step.en);
    }
    await new Promise((r) => setTimeout(r, 300));
  }

  function renderReport(profile: BirthProfile, analysis: AnalysisResult) {
    content.innerHTML = `
      <h2 class="zh">你的命理速寫</h2>
      <span class="en">Your Reading, At a Glance</span>
      <div class="result-summary">
        <p class="zh">${analysis.summary.zh}</p>
        <p class="en">${analysis.summary.en}</p>
      </div>
    `;

    const stackWrap = document.createElement("div");
    stackWrap.style.width = "100%";
    content.appendChild(stackWrap);

    const ziweiStars = profile.ziwei.soulPalaceMajorStars;
    const ziweiStarsEn = ziweiStars.map((s) => ZIWEI_STAR_EN_NAME[s] ?? s);
    const ziweiBadge = ziweiStars.length > 0 ? (ZIWEI_STAR_BADGE[ziweiStars[0]] ?? ZIWEI_NO_STAR_BADGE) : ZIWEI_NO_STAR_BADGE;

    const cards: CardSpec[] = [
      {
        badge: ziweiBadge,
        titleZh: `紫微・${profile.ziwei.soulPalace}`,
        titleEn: "Zi Wei Dou Shu",
        frontNoteZh: ziweiStars.length > 0 ? `命宮主星：${ziweiStars.join("、")}` : "命宮無主星",
        frontNoteEn:
          ziweiStarsEn.length > 0 ? `Your Life Palace star: ${ziweiStarsEn.join(" & ")}` : "No major star in your Life Palace",
        bodyZh: analysis.ziwei.zh,
        bodyEn: analysis.ziwei.en,
      },
      {
        badge: WUXING_BADGE[profile.bazi.dominantWuxing],
        titleZh: `八字・${profile.bazi.dominantWuxing}氣旺`,
        titleEn: "Bazi Four Pillars",
        frontNoteZh: `日主：${profile.bazi.dayMaster}　${profile.bazi.year.ganZhi} ${profile.bazi.month.ganZhi} ${profile.bazi.day.ganZhi} ${profile.bazi.time.ganZhi}`,
        frontNoteEn: `Day Master: ${ganToPinyin(profile.bazi.dayMaster)} · ${ganZhiToPinyin(profile.bazi.year.ganZhi)} / ${ganZhiToPinyin(profile.bazi.month.ganZhi)} / ${ganZhiToPinyin(profile.bazi.day.ganZhi)} / ${ganZhiToPinyin(profile.bazi.time.ganZhi)}`,
        bodyZh: analysis.bazi.zh,
        bodyEn: analysis.bazi.en,
      },
      {
        badge: ZODIAC_BADGE[profile.zodiac.animal],
        titleZh: `生肖・${profile.zodiac.animal}`,
        titleEn: `Chinese Zodiac · ${profile.zodiac.animalEn}`,
        frontNoteZh: "點擊看看你的生肖特質",
        frontNoteEn: "Tap to see what your animal says about you",
        bodyZh: analysis.zodiac.zh,
        bodyEn: analysis.zodiac.en,
      },
      {
        badge: WESTERN_BADGE[profile.western.sign],
        titleZh: `星座・${profile.western.sign}`,
        titleEn: `Star Sign · ${profile.western.signEn}`,
        frontNoteZh: "點擊看看你的星座特質",
        frontNoteEn: "Tap to see what your sign says about you",
        bodyZh: analysis.western.zh,
        bodyEn: analysis.western.en,
      },
    ];

    mountCardStack(stackWrap, cards);

    const teaserHeading = document.createElement("div");
    teaserHeading.dataset.role = "teaser-heading";
    teaserHeading.innerHTML = `<h2 class="zh">還有更多藏在命盤裡</h2><span class="en">There's more hiding in your chart</span>`;
    content.appendChild(teaserHeading);

    const teaserStack = document.createElement("div");
    teaserStack.className = "teaser-stack";
    teaserStack.innerHTML = TEASER_TOPICS.map((topic) =>
      buildTeaserCard(topic.labelZh, topic.labelEn, topic.data[profile.bazi.dominantWuxing]),
    ).join("");
    content.appendChild(teaserStack);

    content.appendChild(guide.el);

    const cta = document.createElement("p");
    cta.className = "result-cta";
    cta.innerHTML = `<span class="zh">完整命盤細節報告，敬請期待付費解鎖 🔒</span><span class="en">The full deep-dive report is coming soon — stay tuned.</span>`;
    content.appendChild(cta);

    guide.say(
      "這只是你命盤的縮影，感情、事業、財運、健康的完整解讀之後會在深度報告裡揭曉！",
      "This is just the trailer — the full story on love, career, money, and health is coming in the deep-dive report.",
    );
  }

  async function showResult(profile: BirthProfile, analysis: AnalysisResult) {
    renderLoading();
    await runProgress();
    renderReport(profile, analysis);
  }

  return { section, showResult };
}
