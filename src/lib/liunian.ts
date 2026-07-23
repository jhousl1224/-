import { Solar } from "lunar-javascript";

export type LiunianCategory = "比肩" | "劫財" | "食神" | "傷官" | "偏財" | "正財" | "七殺" | "正官" | "偏印" | "正印";

const GAN_ORDER = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];

const GAN_WUXING: Record<string, string> = {
  甲: "木",
  乙: "木",
  丙: "火",
  丁: "火",
  戊: "土",
  己: "土",
  庚: "金",
  辛: "金",
  壬: "水",
  癸: "水",
};

function isYang(gan: string): boolean {
  return GAN_ORDER.indexOf(gan) % 2 === 0;
}

const WUXING_CYCLE = ["木", "火", "土", "金", "水"];

function generates(a: string, b: string): boolean {
  const i = WUXING_CYCLE.indexOf(a);
  return WUXING_CYCLE[(i + 1) % 5] === b;
}

function controls(a: string, b: string): boolean {
  const i = WUXING_CYCLE.indexOf(a);
  return WUXING_CYCLE[(i + 2) % 5] === b;
}

/**
 * Classifies a liunian year relative to the day master using the standard Ten Gods (十神) system —
 * both the wuxing sheng/ke relationship AND yin-yang polarity, so every one of the 10 gan maps to a
 * distinct category. (A 5-category version that ignores polarity was tried first, but since the gan
 * cycle pairs share wuxing two years at a time — 丙丁 both fire, 戊己 both earth, etc. — it collapsed
 * consecutive years into identical categories.)
 */
export function classifyLiunian(dayMasterGan: string, yearGan: string): LiunianCategory {
  const me = GAN_WUXING[dayMasterGan];
  const year = GAN_WUXING[yearGan];
  const samePolarity = isYang(dayMasterGan) === isYang(yearGan);

  if (me === year) return samePolarity ? "比肩" : "劫財";
  if (generates(me, year)) return samePolarity ? "食神" : "傷官";
  if (controls(me, year)) return samePolarity ? "偏財" : "正財";
  if (controls(year, me)) return samePolarity ? "七殺" : "正官";
  return samePolarity ? "偏印" : "正印";
}

/** The ganzhi (e.g. "丙午") for a given calendar year — uses June 1st to stay safely past 立春. */
export function getLiunianGanZhi(year: number): string {
  return Solar.fromYmd(year, 6, 1).getLunar().getEightChar().getYear();
}

export interface LiunianYear {
  year: number;
  ganZhi: string;
  category: LiunianCategory;
}

export function buildLiunianYears(dayMasterGan: string, startYear: number, count: number): LiunianYear[] {
  const years: LiunianYear[] = [];
  for (let i = 0; i < count; i++) {
    const year = startYear + i;
    const ganZhi = getLiunianGanZhi(year);
    years.push({ year, ganZhi, category: classifyLiunian(dayMasterGan, ganZhi[0]) });
  }
  return years;
}
