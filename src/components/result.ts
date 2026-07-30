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

const WUXING_EN_LABEL: Record<string, string> = { 木: "Wood", 火: "Fire", 土: "Earth", 金: "Metal", 水: "Water" };

// Extra wuxing-specific closing advice appended to each liunian card, decoupled
// from the ten-god category (which only has 10 values total, one per day
// master) so two people sharing a day master still get substantially
// different card text once their own dominant wuxing is factored in.
const LIUNIAN_WUXING_ACTION: Record<string, Record<string, { zh: string; en: string }>> = {
  love: {
    木: { zh: "以你「木」氣的個性來說，最實際的做法是把這份年運能量，用在陪伴一個人一起成長，而不是要求對方立刻跟上你的步調。", en: "Practically speaking, with Wood energy, the move is to put this year's momentum into growing alongside someone — not demanding they keep pace with you right away." },
    火: { zh: "以你「火」氣的個性來說，最實際的做法是把這份年運能量，用在勇敢表達心意，但記得留一點時間讓感情降溫沉澱。", en: "Practically speaking, with Fire energy, the move is to speak your feelings boldly, but leave room for things to cool and settle afterward." },
    土: { zh: "以你「土」氣的個性來說，最實際的做法是把這份年運能量，用在務實地經營關係，同時記得偶爾也要主動說出真心話。", en: "Practically speaking, with Earth energy, the move is to keep building the relationship steadily, while remembering to say what you actually feel out loud sometimes." },
    金: { zh: "以你「金」氣的個性來說，最實際的做法是把這份年運能量，用在把話說清楚，但記得先給對方多一點溫柔和空間。", en: "Practically speaking, with Metal energy, the move is to say things clearly, but give the other person a bit more warmth and space first." },
    水: { zh: "以你「水」氣的個性來說，最實際的做法是把這份年運能量，用在適度表達自己的需求，而不是一味配合對方。", en: "Practically speaking, with Water energy, the move is to actually voice your own needs, instead of only adapting to theirs." },
  },
  career: {
    木: { zh: "以你「木」氣的個性來說，這一年最值得做的，是把握機會學新東西，把年運能量轉換成實際的成長動力。", en: "Practically speaking, with Wood energy, the most worthwhile move this year is seizing chances to learn — turning this year's energy into real growth." },
    火: { zh: "以你「火」氣的個性來說，這一年最值得做的，是勇敢站出來表現，但記得把亮眼的表現落實成扎實的成果。", en: "Practically speaking, with Fire energy, the most worthwhile move this year is stepping up boldly, then following through until it's a solid result." },
    土: { zh: "以你「土」氣的個性來說，這一年最值得做的，是穩紮穩打地累積實力，同時記得替自己爭取應得的肯定。", en: "Practically speaking, with Earth energy, the most worthwhile move this year is building steadily while remembering to actually claim the credit you've earned." },
    金: { zh: "以你「金」氣的個性來說，這一年最值得做的，是善用你的高標準去把關品質，同時多留意跟同事合作的方式。", en: "Practically speaking, with Metal energy, the most worthwhile move this year is using your high standards to guard quality, while watching how that lands with coworkers." },
    水: { zh: "以你「水」氣的個性來說，這一年最值得做的，是發揮你的靈活應變能力，主動爭取需要彈性的任務。", en: "Practically speaking, with Water energy, the most worthwhile move this year is putting your adaptability to work, actively volunteering for anything that needs flexibility." },
  },
  wealth: {
    木: { zh: "以你「木」氣的個性來說，理財上最實際的做法是把投資自己的預算設個上限，別讓成長型支出吃掉存款。", en: "Practically speaking, with Wood energy, the smartest money move is capping your self-investment budget so growth spending doesn't eat your savings." },
    火: { zh: "以你「火」氣的個性來說，理財上最實際的做法是替衝動消費設一個緩衝期，讓花錢的決定更踏實。", en: "Practically speaking, with Fire energy, the smartest money move is building in a buffer before impulse purchases, so spending decisions land more solidly." },
    土: { zh: "以你「土」氣的個性來說，理財上最實際的做法是適度承擔一點可控風險，別讓過度保守錯過複利機會。", en: "Practically speaking, with Earth energy, the smartest money move is taking on a bit of controlled risk, so caution doesn't cost you compounding." },
    金: { zh: "以你「金」氣的個性來說，理財上最實際的做法是替猶豫已久的財務決定設一個明確期限，別讓完美主義拖延行動。", en: "Practically speaking, with Metal energy, the smartest money move is setting a real deadline on a financial decision you've been sitting on, instead of letting perfectionism stall you." },
    水: { zh: "以你「水」氣的個性來說，理財上最實際的做法是定期整理收支，把分散的財務狀況集中看清楚。", en: "Practically speaking, with Water energy, the smartest money move is regularly reviewing your finances, pulling scattered income and spending into one clear view." },
  },
  health: {
    木: { zh: "以你「木」氣的個性來說，健康上最該注意的是情緒累積的壓力，記得替自己安排真正放鬆的時間。", en: "Practically speaking, with Wood energy, watch for stress building up emotionally — schedule real downtime for yourself." },
    火: { zh: "以你「火」氣的個性來說，健康上最該注意的是心血管和熬夜的影響，情緒高漲時記得刻意放慢步調。", en: "Practically speaking, with Fire energy, watch your heart and your late nights — deliberately slow down when your emotions run high." },
    土: { zh: "以你「土」氣的個性來說，健康上最該注意的是腸胃和代謝，別再用吃東西處理壓力。", en: "Practically speaking, with Earth energy, watch your gut and metabolism — stop using food to manage stress." },
    金: { zh: "以你「金」氣的個性來說，健康上最該注意的是換季時的呼吸道和皮膚，提早預防會比事後治療省力。", en: "Practically speaking, with Metal energy, watch your lungs and skin as seasons change — prevention beats treatment here." },
    水: { zh: "以你「水」氣的個性來說，健康上最該注意的是循環系統，別忽略手腳冰冷這類不痛不癢的小訊號。", en: "Practically speaking, with Water energy, watch your circulation — don't ignore small signs like cold hands and feet." },
  },
  family: {
    木: { zh: "以你「木」氣的個性來說，家庭關係上最實際的做法是偶爾放下想幫大家變好的念頭，單純陪伴就好。", en: "Practically speaking, with Wood energy, the move for family is occasionally dropping the urge to help everyone improve — just being there is enough." },
    火: { zh: "以你「火」氣的個性來說，家庭關係上最實際的做法是記得把舞台讓給比較安靜的家人，主動問問他們的近況。", en: "Practically speaking, with Fire energy, the move for family is handing the spotlight to quieter family members and actually asking how they're doing." },
    土: { zh: "以你「土」氣的個性來說，家庭關係上最實際的做法是適度求助，別把所有責任都自己扛下來。", en: "Practically speaking, with Earth energy, the move for family is asking for help sometimes, instead of carrying every responsibility alone." },
    金: { zh: "以你「金」氣的個性來說，家庭關係上最實際的做法是講道理之前先講感受，會讓溝通更順利。", en: "Practically speaking, with Metal energy, the move for family is leading with feelings before logic — it makes communication land better." },
    水: { zh: "以你「水」氣的個性來說，家庭關係上最實際的做法是主動說出自己的意見，而不是一味配合家人的安排。", en: "Practically speaking, with Water energy, the move for family is actually voicing your own opinion, instead of just going along with everyone else's plan." },
  },
};

const TEASER_TOPICS: { labelZh: string; labelEn: string; data: Record<string, Teaser> }[] = [
  { labelZh: "💞 感情關係", labelEn: "💞 Love & Relationships", data: TEASER_LOVE },
  { labelZh: "💼 事業方向", labelEn: "💼 Career Direction", data: TEASER_CAREER },
  { labelZh: "💰 財運", labelEn: "💰 Money & Wealth", data: TEASER_WEALTH },
  { labelZh: "🌿 健康", labelEn: "🌿 Health", data: TEASER_HEALTH },
  { labelZh: "🏠 家庭關係", labelEn: "🏠 Family", data: TEASER_FAMILY },
];

const LIUNIAN_TOPICS: { labelZh: string; labelEn: string; data: Record<LiunianCategory, Teaser>; actionKey: keyof typeof LIUNIAN_WUXING_ACTION }[] = [
  { labelZh: "💞 感情關係", labelEn: "💞 Love & Relationships", data: LIUNIAN_LOVE, actionKey: "love" },
  { labelZh: "💼 事業方向", labelEn: "💼 Career Direction", data: LIUNIAN_CAREER, actionKey: "career" },
  { labelZh: "💰 財運", labelEn: "💰 Money & Wealth", data: LIUNIAN_WEALTH, actionKey: "wealth" },
  { labelZh: "🌿 健康", labelEn: "🌿 Health", data: LIUNIAN_HEALTH, actionKey: "health" },
  { labelZh: "🏠 家庭關係", labelEn: "🏠 Family", data: LIUNIAN_FAMILY, actionKey: "family" },
];

function buildHeadingEmblem(): string {
  return `<div class="heading-emblem">${buildEmblemSvg()}</div>`;
}

// Liunian content is keyed only by (day-master × year), so two people who
// happen to share a day master get byte-for-byte identical liunian cards —
// there are only 10 possible day masters. Prepend a line drawn from the
// user's own zodiac + dominant wuxing, and append a wuxing-specific closing
// action tip (both come from their full birth data, not just the day
// master), so same-day-master users see meaningfully different text at both
// the start and end of every liunian card, not just a cosmetic intro line.
function personalizeLiunianTeaser(teaser: Teaser, profile: BirthProfile, actionKey: keyof typeof LIUNIAN_WUXING_ACTION): Teaser {
  const wux = profile.bazi.dominantWuxing;
  const prefixZh = `身為${profile.zodiac.animal}年、八字「${wux}」氣旺的你，`;
  const prefixEn = `As a ${profile.zodiac.animalEn} with ${WUXING_EN_LABEL[wux] ?? wux} energy running your Bazi, `;
  const visibleEn = teaser.visibleEn.charAt(0).toLowerCase() + teaser.visibleEn.slice(1);
  const action = LIUNIAN_WUXING_ACTION[actionKey]?.[wux];
  return {
    ...teaser,
    visibleZh: prefixZh + teaser.visibleZh,
    visibleEn: prefixEn + visibleEn,
    fullZh: action ? `${teaser.fullZh}${action.zh}` : teaser.fullZh,
    fullEn: action ? `${teaser.fullEn} ${action.en}` : teaser.fullEn,
  };
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

    const bundleOffer = document.createElement("div");
    bundleOffer.className = "bundle-offer";
    bundleOffer.innerHTML = `
      <p class="bundle-offer-badge"><span class="zh">最划算</span><span class="en">Best Value</span></p>
      <p class="bundle-offer-title"><span class="zh">🎁 一次全部解鎖</span><span class="en">🎁 Unlock Everything</span></p>
      <p class="bundle-offer-price">
        <span class="bundle-offer-strike">NT$287</span>
        <span class="bundle-offer-amount">NT$249</span>
      </p>
      <p class="bundle-offer-desc"><span class="zh">完整報告＋今年流年＋明年流年，一次解鎖省 NT$38</span><span class="en">Full report + this year + next year forecast — save NT$38</span></p>
      <button type="button" class="btn-primary" data-role="unlock-all-btn">
        <span class="zh">🔓 立即解鎖全部</span><span class="en">🔓 Unlock Everything Now</span>
      </button>
    `;
    content.appendChild(bundleOffer);

    const bundleOfferBtn = bundleOffer.querySelector('[data-role="unlock-all-btn"]') as HTMLButtonElement;
    bundleOfferBtn.addEventListener("click", () => {
      window.dispatchEvent(new CustomEvent("starself:unlock-request:all"));
    });

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
      updateBundleOfferVisibility();
      guide.say(
        "感情、事業、財運、健康完整解鎖，解讀都在上面嘍！",
        "Everything's unlocked now — love, career, money, and health, all laid out above.",
      );
    }

    window.addEventListener("starself:unlock-request", unlock);
    window.addEventListener("starself:unlock-request:all", unlock);
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
        buildTeaserCard(
          topic.labelZh,
          topic.labelEn,
          personalizeLiunianTeaser(topic.data[thisYear.category], profile, topic.actionKey),
          thisYearUnlocked,
        ),
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
      updateBundleOfferVisibility();
      guide.say(
        "今年的流年運勢解鎖囉，感情、事業、財運、健康都幫你看好了！",
        "This year's forecast is unlocked — love, career, money, and health, all mapped out for you!",
      );
    }

    window.addEventListener("starself:unlock-request:thisyear", unlockThisYear);
    window.addEventListener("starself:unlock-request:all", unlockThisYear);
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
        buildTeaserCard(
          topic.labelZh,
          topic.labelEn,
          personalizeLiunianTeaser(topic.data[nextYear.category], profile, topic.actionKey),
          nextYearUnlocked,
        ),
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
      updateBundleOfferVisibility();
      guide.say(
        "明年的流年運勢也解鎖囉，提早幫你看好方向！",
        "Next year's forecast is unlocked too — a head start on what's coming!",
      );
    }

    function updateBundleOfferVisibility() {
      if (unlocked && thisYearUnlocked && nextYearUnlocked) {
        bundleOffer.style.display = "none";
      }
    }

    window.addEventListener("starself:unlock-request:nextyear", unlockNextYear);
    window.addEventListener("starself:unlock-request:all", unlockNextYear);
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
