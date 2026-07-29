import { buildEmblemSvg, createGuide } from "./guide";
import { mountCardStack, type CardSpec } from "./cards";
import type { AnalysisResult } from "../lib/analysis";
import { ZIWEI_STAR_EN_NAME } from "../lib/analysisData";
import { WESTERN_BADGE, WUXING_BADGE, ZIWEI_NO_STAR_BADGE, ZIWEI_STAR_BADGE, ZODIAC_BADGE } from "../lib/icons";
import { buildLiunianYears, type LiunianCategory } from "../lib/liunian";
import { LIUNIAN_CAREER, LIUNIAN_CATEGORY_INFO, LIUNIAN_FAMILY, LIUNIAN_HEALTH, LIUNIAN_LOVE, LIUNIAN_WEALTH } from "../lib/liunianData";
import { ganToPinyin, ganZhiToPinyin } from "../lib/pinyin";
import { CAREER_ADVICE, CAREER_PATH_ADVICE, getAgeBracket, RELATIONSHIP_ADVICE, WEALTH_IMPROVEMENT_ADVICE } from "../lib/statusAdvice";
import { TEASER_CAREER, TEASER_FAMILY, TEASER_HEALTH, TEASER_LOVE, TEASER_WEALTH, type Teaser } from "../lib/teaserData";
import type { BirthProfile } from "../lib/types";

const TEASER_TOPICS: { labelZh: string; labelEn: string; data: Record<string, Teaser> }[] = [
  { labelZh: "💞 感情關係", labelEn: "💞 Love & Relationships", data: TEASER_LOVE },
  { labelZh: "💼 事業方向", labelEn: "💼 Career Direction", data: TEASER_CAREER },
  { labelZh: "💰 財運", labelEn: "💰 Money & Wealth", data: TEASER_WEALTH },
  { labelZh: "🌿 健康", labelEn: "🌿 Health", data: TEASER_HEALTH },
  { labelZh: "🏠 家庭關係", labelEn: "🏠 Family", data: TEASER_FAMILY },
];

const LIUNIAN_TOPICS: { labelZh: string; labelEn: string; data: Record<LiunianCategory, Teaser> }[] = [
  { labelZh: "💞 感情關係", labelEn: "💞 Love & Relationships", data: LIUNIAN_LOVE },
  { labelZh: "💼 事業方向", labelEn: "💼 Career Direction", data: LIUNIAN_CAREER },
  { labelZh: "💰 財運", labelEn: "💰 Money & Wealth", data: LIUNIAN_WEALTH },
  { labelZh: "🌿 健康", labelEn: "🌿 Health", data: LIUNIAN_HEALTH },
  { labelZh: "🏠 家庭關係", labelEn: "🏠 Family", data: LIUNIAN_FAMILY },
];

function buildHeadingEmblem(): string {
  return `<div class="heading-emblem">${buildEmblemSvg()}</div>`;
}

function buildTeaserCard(labelZh: string, labelEn: string, teaser: Teaser, unlocked: boolean): string {
  if (unlocked) {
    return `
      <div class="teaser-card teaser-card--unlocked">
        <p class="teaser-label"><span class="zh">${labelZh}</span> <span class="en" style="display:inline;">${labelEn}</span></p>
        <div class="teaser-text">
          <p class="zh">${teaser.visibleZh}${teaser.blurredZh}${teaser.fullZh}</p>
          <p class="en">${teaser.visibleEn} ${teaser.blurredEn} ${teaser.fullEn}</p>
        </div>
        <span class="teaser-unlocked-badge">✅ <span class="zh">已解鎖</span><span class="en">Unlocked</span></span>
      </div>
    `;
  }
  return `
    <div class="teaser-card">
      <p class="teaser-label"><span class="zh">${labelZh}</span> <span class="en" style="display:inline;">${labelEn}</span></p>
      <div class="teaser-text">
        <p class="zh">${teaser.visibleZh}<span class="teaser-text-blurred">${teaser.blurredZh}</span></p>
        <p class="en">${teaser.visibleEn} <span class="teaser-text-blurred">${teaser.blurredEn}</span></p>
        <div class="teaser-fade"></div>
      </div>
      <button type="button" class="teaser-unlock" data-role="teaser-unlock-btn">🔒 <span class="zh">解鎖完整分析</span><span class="en" style="display:inline;">Unlock full analysis</span></button>
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
      <h2 class="en">Reading the stars for you</h2>
      <div class="progress-wrap">
        <div class="progress-track"><div class="progress-fill" data-role="fill"></div></div>
        <p class="progress-label" data-role="label"><span class="zh">準備中…</span> <span class="en">Preparing...</span></p>
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
      label.innerHTML = `<span class="zh">${step.zh}</span> <span class="en">${step.en}</span>`;
      guide.say(step.zh, step.en);
    }
    await new Promise((r) => setTimeout(r, 300));
  }

  function renderReport(profile: BirthProfile, analysis: AnalysisResult) {
    content.innerHTML = `
      ${buildHeadingEmblem()}
      <h2 class="zh">你的命理速寫</h2>
      <h2 class="en">Your Reading, At a Glance</h2>
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
        frontNoteZh: `日主：${profile.bazi.dayMaster}　${profile.bazi.year.ganZhi} ${profile.bazi.month.ganZhi} ${profile.bazi.day.ganZhi} ${profile.bazi.time.ganZhi}　·　出生地：${profile.input.birthplace.nameZh}`,
        frontNoteEn: `Day Master: ${ganToPinyin(profile.bazi.dayMaster)} · ${ganZhiToPinyin(profile.bazi.year.ganZhi)} / ${ganZhiToPinyin(profile.bazi.month.ganZhi)} / ${ganZhiToPinyin(profile.bazi.day.ganZhi)} / ${ganZhiToPinyin(profile.bazi.time.ganZhi)} · Born in ${profile.input.birthplace.nameEn}`,
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

    const cardStackDivider = document.createElement("div");
    cardStackDivider.className = "result-divider";
    content.appendChild(cardStackDivider);

    content.appendChild(guide.el);

    const teaserHeading = document.createElement("div");
    teaserHeading.dataset.role = "teaser-heading";
    teaserHeading.dataset.lockZone = "base";
    teaserHeading.innerHTML = `<h2 class="zh">還有更多藏在命盤裡</h2><h2 class="en">There's more hiding in your chart</h2>`;
    content.appendChild(teaserHeading);

    const cta = document.createElement("p");
    cta.className = "result-cta";
    cta.dataset.lockZone = "base";
    content.appendChild(cta);

    const teaserStack = document.createElement("div");
    teaserStack.className = "teaser-stack";
    teaserStack.dataset.lockZone = "base";
    content.appendChild(teaserStack);

    const teaserDivider = document.createElement("div");
    teaserDivider.className = "result-divider";
    content.appendChild(teaserDivider);

    // --- Independent section: current-life-stage advice (relationship + career status) ---

    const statusHeading = document.createElement("div");
    statusHeading.dataset.lockZone = "base";
    statusHeading.innerHTML = `${buildHeadingEmblem()}<h2 class="zh">現階段狀況</h2><h2 class="en">Where You Stand Right Now</h2>`;
    content.appendChild(statusHeading);

    const statusCta = document.createElement("p");
    statusCta.className = "result-cta";
    statusCta.dataset.lockZone = "base";
    content.appendChild(statusCta);

    const statusStack = document.createElement("div");
    statusStack.className = "teaser-stack";
    statusStack.dataset.lockZone = "base";
    content.appendChild(statusStack);

    const statusDivider = document.createElement("div");
    statusDivider.className = "result-divider";
    statusDivider.dataset.lockZone = "base";
    content.appendChild(statusDivider);

    window.dispatchEvent(new CustomEvent("starself:report-reset"));

    let unlocked = false;

    const relationshipLabelZh = profile.input.relationshipStatus === "stable" ? "💞 感情狀態・穩定交往" : "💞 感情狀態・單身";
    const relationshipLabelEn = profile.input.relationshipStatus === "stable" ? "💞 Relationship Status · Coupled Up" : "💞 Relationship Status · Single";
    const careerLabelZh = profile.input.careerStatus === "stable" ? "💼 職場狀態・在職穩定" : "💼 職場狀態・待業中";
    const careerLabelEn = profile.input.careerStatus === "stable" ? "💼 Career Status · Employed" : "💼 Career Status · Job Hunting";

    const ageBracket = getAgeBracket(profile.input.year);

    const statusTopics: { labelZh: string; labelEn: string; teaser: Teaser }[] = [
      { labelZh: relationshipLabelZh, labelEn: relationshipLabelEn, teaser: RELATIONSHIP_ADVICE[profile.bazi.dominantWuxing][profile.input.relationshipStatus] },
      { labelZh: careerLabelZh, labelEn: careerLabelEn, teaser: CAREER_ADVICE[profile.bazi.dominantWuxing][profile.input.careerStatus] },
      {
        labelZh: "🧭 適合的職涯方向",
        labelEn: "🧭 Career Direction Fit",
        teaser: CAREER_PATH_ADVICE[profile.bazi.dominantWuxing][profile.input.careerStatus],
      },
      {
        labelZh: "💰 財務改善建議",
        labelEn: "💰 Money Improvement Plan",
        teaser: WEALTH_IMPROVEMENT_ADVICE[profile.bazi.dominantWuxing][ageBracket],
      },
    ];

    function renderTeasers() {
      teaserStack.innerHTML = TEASER_TOPICS.map((topic) =>
        buildTeaserCard(topic.labelZh, topic.labelEn, topic.data[profile.bazi.dominantWuxing], unlocked),
      ).join("");

      statusStack.innerHTML = statusTopics
        .map((topic) => buildTeaserCard(topic.labelZh, topic.labelEn, topic.teaser, unlocked))
        .join("");

      if (unlocked) {
        cta.innerHTML = `<span class="zh">🎉 完整報告已解鎖！</span><span class="en">🎉 Unlocked — here's your full report.</span>`;
        statusCta.innerHTML = `<span class="zh">🎉 現階段狀況分析已解鎖！</span><span class="en">🎉 Unlocked — your current-stage advice is ready.</span>`;
        window.dispatchEvent(new CustomEvent("starself:unlocked"));
      } else {
        cta.innerHTML = `<span class="zh">完整命盤細節報告，付費解鎖 NT$149 🔒</span><span class="en">🔒 Unlock the full deep-dive report for NT$149.</span>`;
        statusCta.innerHTML = `<span class="zh">感情與職場現況分析，同一次解鎖即可看到 🔒</span><span class="en">🔒 Included in the same NT$149 unlock above.</span>`;
        [teaserStack, statusStack].forEach((stack) => {
          stack.querySelectorAll<HTMLButtonElement>('[data-role="teaser-unlock-btn"]').forEach((btn) => {
            btn.addEventListener("click", unlock);
          });
        });
      }
    }

    function unlock() {
      if (unlocked) return;
      unlocked = true;
      renderTeasers();
      guide.say(
        "感情、事業、財運、健康完整解鎖，解讀都在上面嘍！",
        "Everything's unlocked now — love, career, money, and health, all laid out above.",
      );
    }

    window.addEventListener("starself:unlock-request", unlock);
    renderTeasers();

    const currentYear = new Date().getFullYear();
    const [thisYear] = buildLiunianYears(profile.bazi.dayMaster, currentYear, 1);
    const [nextYear] = buildLiunianYears(profile.bazi.dayMaster, currentYear + 1, 1);

    // --- Tier 2: this year's liunian, as one whole-year reading ---

    const thisYearHeading = document.createElement("div");
    thisYearHeading.dataset.lockZone = "thisyear";
    thisYearHeading.innerHTML = `${buildHeadingEmblem()}<h2 class="zh">今年流年</h2><h2 class="en">This Year's Forecast</h2>`;
    content.appendChild(thisYearHeading);

    const thisYearCta = document.createElement("p");
    thisYearCta.className = "result-cta";
    content.appendChild(thisYearCta);

    const thisYearMeta = document.createElement("div");
    thisYearMeta.className = "liunian-year-meta";
    thisYearMeta.innerHTML = `
      <p class="zh">${thisYear.year}年（${thisYear.ganZhi}年）・${LIUNIAN_CATEGORY_INFO[thisYear.category].labelZh}：${LIUNIAN_CATEGORY_INFO[thisYear.category].themeZh}</p>
      <p class="en">${thisYear.year} (${thisYear.ganZhi}) · ${LIUNIAN_CATEGORY_INFO[thisYear.category].labelEn}: ${LIUNIAN_CATEGORY_INFO[thisYear.category].themeEn}</p>
    `;
    content.appendChild(thisYearMeta);

    const thisYearCards = document.createElement("div");
    thisYearCards.className = "teaser-stack";
    thisYearCards.dataset.lockZone = "thisyear";
    content.appendChild(thisYearCards);

    const thisYearDivider = document.createElement("div");
    thisYearDivider.className = "result-divider";
    thisYearDivider.dataset.lockZone = "thisyear";
    content.appendChild(thisYearDivider);

    let thisYearUnlocked = false;

    function renderThisYearCards() {
      thisYearCards.innerHTML = LIUNIAN_TOPICS.map((topic) =>
        buildTeaserCard(topic.labelZh, topic.labelEn, topic.data[thisYear.category], thisYearUnlocked),
      ).join("");

      if (thisYearUnlocked) {
        thisYearCta.innerHTML = `<span class="zh">🎉 今年的流年運勢已解鎖！</span><span class="en">🎉 Unlocked — this year's forecast is all yours.</span>`;
      } else {
        thisYearCta.innerHTML = `<span class="zh">今年的完整流年解析，付費解鎖 NT$69 🔒</span><span class="en">🔒 Unlock this year's full forecast for NT$69.</span>`;
        thisYearCards.querySelectorAll<HTMLButtonElement>('[data-role="teaser-unlock-btn"]').forEach((btn) => {
          btn.addEventListener("click", unlockThisYear);
        });
      }
    }

    function unlockThisYear() {
      if (thisYearUnlocked) return;
      thisYearUnlocked = true;
      renderThisYearCards();
      guide.say(
        "今年的流年運勢解鎖囉，感情、事業、財運、健康都幫你看好了！",
        "This year's forecast is unlocked — love, career, money, and health, all mapped out for you!",
      );
    }

    window.addEventListener("starself:unlock-request:thisyear", unlockThisYear);
    renderThisYearCards();

    // --- Tier 3: next year's liunian, as one whole-year reading ---

    const nextYearHeading = document.createElement("div");
    nextYearHeading.dataset.lockZone = "nextyear";
    nextYearHeading.innerHTML = `${buildHeadingEmblem()}<h2 class="zh">明年流年</h2><h2 class="en">Next Year's Forecast</h2>`;
    content.appendChild(nextYearHeading);

    const nextYearCta = document.createElement("p");
    nextYearCta.className = "result-cta";
    content.appendChild(nextYearCta);

    const nextYearMeta = document.createElement("div");
    nextYearMeta.className = "liunian-year-meta";
    nextYearMeta.innerHTML = `
      <p class="zh">${nextYear.year}年（${nextYear.ganZhi}年）・${LIUNIAN_CATEGORY_INFO[nextYear.category].labelZh}：${LIUNIAN_CATEGORY_INFO[nextYear.category].themeZh}</p>
      <p class="en">${nextYear.year} (${nextYear.ganZhi}) · ${LIUNIAN_CATEGORY_INFO[nextYear.category].labelEn}: ${LIUNIAN_CATEGORY_INFO[nextYear.category].themeEn}</p>
    `;
    content.appendChild(nextYearMeta);

    const nextYearCards = document.createElement("div");
    nextYearCards.className = "teaser-stack";
    nextYearCards.dataset.lockZone = "nextyear";
    content.appendChild(nextYearCards);

    const nextYearDivider = document.createElement("div");
    nextYearDivider.className = "result-divider";
    nextYearDivider.dataset.lockZone = "nextyear";
    content.appendChild(nextYearDivider);

    let nextYearUnlocked = false;

    function renderNextYearCards() {
      nextYearCards.innerHTML = LIUNIAN_TOPICS.map((topic) =>
        buildTeaserCard(topic.labelZh, topic.labelEn, topic.data[nextYear.category], nextYearUnlocked),
      ).join("");

      if (nextYearUnlocked) {
        nextYearCta.innerHTML = `<span class="zh">🎉 明年的流年運勢已解鎖！</span><span class="en">🎉 Unlocked — next year's forecast is all yours.</span>`;
      } else {
        nextYearCta.innerHTML = `<span class="zh">明年的完整流年解析，付費解鎖 NT$69 🔒</span><span class="en">🔒 Unlock next year's full forecast for NT$69.</span>`;
        nextYearCards.querySelectorAll<HTMLButtonElement>('[data-role="teaser-unlock-btn"]').forEach((btn) => {
          btn.addEventListener("click", unlockNextYear);
        });
      }
    }

    function unlockNextYear() {
      if (nextYearUnlocked) return;
      nextYearUnlocked = true;
      renderNextYearCards();
      guide.say(
        "明年的流年運勢也解鎖囉，提早幫你看好方向！",
        "Next year's forecast is unlocked too — a head start on what's coming!",
      );
    }

    window.addEventListener("starself:unlock-request:nextyear", unlockNextYear);
    renderNextYearCards();

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
