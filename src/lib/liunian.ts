import { Solar } from "lunar-javascript";

export type LiunianCategory = "比劫" | "食傷" | "財星" | "官殺" | "印星";

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

const WUXING_CYCLE = ["木", "火", "土", "金", "水"];

function generates(a: string, b: string): boolean {
  const i = WUXING_CYCLE.indexOf(a);
  return WUXING_CYCLE[(i + 1) % 5] === b;
}

function controls(a: string, b: string): boolean {
  const i = WUXING_CYCLE.indexOf(a);
  return WUXING_CYCLE[(i + 2) % 5] === b;
}

/** Classifies a liunian year relative to the day master, using the standard Ten Gods grouping. */
export function classifyLiunian(dayMasterGan: string, yearGan: string): LiunianCategory {
  const me = GAN_WUXING[dayMasterGan];
  const year = GAN_WUXING[yearGan];
  if (me === year) return "比劫";
  if (generates(me, year)) return "食傷";
  if (controls(me, year)) return "財星";
  if (controls(year, me)) return "官殺";
  return "印星";
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
