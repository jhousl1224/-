import { createGuide } from "./guide";
import { mountCardDeck, type CardSpec } from "./cards";
import type { AnalysisResult } from "../lib/analysis";
import { ZIWEI_STAR_EN_NAME } from "../lib/analysisData";
import { ganToPinyin, ganZhiToPinyin } from "../lib/pinyin";
import type { BirthProfile } from "../lib/types";

const PROGRESS_STEPS = [
  { pct: 25, zh: "正在排紫微斗數星盤…", en: "Charting your Zi Wei Dou Shu palaces..." },
  { pct: 55, zh: "正在推算八字四柱…", en: "Calculating your Bazi Four Pillars..." },
  { pct: 80, zh: "正在對照生肖與星座…", en: "Cross-referencing Chinese zodiac and star sign..." },
  { pct: 100, zh: "完成！為你整理白話分析…", en: "Done! Writing your reading in plain words..." },
];

export function mountResult(root: HTMLElement) {
  const section = document.createElement("section");
  section.className = "section";
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

    const deckWrap = document.createElement("div");
    deckWrap.style.width = "100%";
    content.appendChild(deckWrap);

    const ziweiStars = profile.ziwei.soulPalaceMajorStars;
    const ziweiStarsEn = ziweiStars.map((s) => ZIWEI_STAR_EN_NAME[s] ?? s);

    const cards: CardSpec[] = [
      {
        icon: "☯",
        titleZh: `紫微・${profile.ziwei.soulPalace}`,
        titleEn: "Zi Wei Dou Shu",
        frontNoteZh: ziweiStars.length > 0 ? `命宮主星：${ziweiStars.join("、")}` : "命宮無主星",
        frontNoteEn:
          ziweiStarsEn.length > 0 ? `Life Palace star(s): ${ziweiStarsEn.join(" & ")}` : "No major star in the Life Palace",
        bodyZh: analysis.ziwei.zh,
        bodyEn: analysis.ziwei.en,
      },
      {
        icon: "🔥",
        titleZh: `八字・${profile.bazi.dominantWuxing}氣旺`,
        titleEn: "Bazi Four Pillars",
        frontNoteZh: `日主：${profile.bazi.dayMaster}　${profile.bazi.year.ganZhi} ${profile.bazi.month.ganZhi} ${profile.bazi.day.ganZhi} ${profile.bazi.time.ganZhi}`,
        frontNoteEn: `Day Master: ${ganToPinyin(profile.bazi.dayMaster)} · ${ganZhiToPinyin(profile.bazi.year.ganZhi)} / ${ganZhiToPinyin(profile.bazi.month.ganZhi)} / ${ganZhiToPinyin(profile.bazi.day.ganZhi)} / ${ganZhiToPinyin(profile.bazi.time.ganZhi)}`,
        bodyZh: analysis.bazi.zh,
        bodyEn: analysis.bazi.en,
      },
      {
        icon: "🐉",
        titleZh: `生肖・${profile.zodiac.animal}`,
        titleEn: `Chinese Zodiac · ${profile.zodiac.animalEn}`,
        frontNoteZh: "點擊看看你的生肖特質",
        frontNoteEn: "Tap to reveal your zodiac traits",
        bodyZh: analysis.zodiac.zh,
        bodyEn: analysis.zodiac.en,
      },
      {
        icon: "✦",
        titleZh: `星座・${profile.western.sign}`,
        titleEn: `Star Sign · ${profile.western.signEn}`,
        frontNoteZh: "點擊看看你的星座特質",
        frontNoteEn: "Tap to reveal your star sign traits",
        bodyZh: analysis.western.zh,
        bodyEn: analysis.western.en,
      },
    ];

    mountCardDeck(deckWrap, cards);
    content.appendChild(guide.el);

    const cta = document.createElement("p");
    cta.className = "result-cta";
    cta.innerHTML = `<span class="zh">完整命盤細節報告，敬請期待付費解鎖 🔒</span><span class="en">Full in-depth report — unlock coming soon.</span>`;
    content.appendChild(cta);

    guide.say(
      "這只是你命盤的縮影，之後會有更完整的深度報告喔！",
      "This is just a glimpse — a fuller, deeper report is on the way.",
    );
  }

  async function showResult(profile: BirthProfile, analysis: AnalysisResult) {
    renderLoading();
    await runProgress();
    renderReport(profile, analysis);
  }

  return { section, showResult };
}
