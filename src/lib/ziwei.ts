import { astro, util } from "iztro";
import type { BirthInput, ZiweiResult } from "./types";

export function calcZiwei(input: BirthInput): ZiweiResult {
  const dateStr = `${input.year}-${input.month}-${input.day}`;
  const timeIndex = util.timeToIndex(input.hour);
  const genderName = input.gender === "male" ? "男" : "女";

  const astrolabe =
    input.calendarType === "solar"
      ? astro.bySolar(dateStr, timeIndex, genderName, true, "zh-TW")
      : astro.byLunar(dateStr, timeIndex, genderName, input.isLeapMonth, true, "zh-TW");

  const palaces = astrolabe.palaces.map((palace) => ({
    name: palace.name,
    heavenlyStem: palace.heavenlyStem,
    earthlyBranch: palace.earthlyBranch,
    majorStars: palace.majorStars.map((s) => s.name),
    isSoulPalace: palace.earthlyBranch === astrolabe.earthlyBranchOfSoulPalace,
    isBodyPalace: palace.isBodyPalace,
  }));

  const soulPalace = palaces.find((p) => p.isSoulPalace);

  return {
    soulStar: astrolabe.soul,
    bodyStar: astrolabe.body,
    soulPalace: soulPalace?.name ?? "命宮",
    soulPalaceMajorStars: soulPalace?.majorStars ?? [],
    fiveElementsClass: astrolabe.fiveElementsClass,
    palaces,
  };
}
