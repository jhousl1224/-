import { Lunar, Solar } from "lunar-javascript";
import type { BaziPillar, BaziResult, BirthInput } from "./types";

const WUXING_ORDER = ["木", "火", "土", "金", "水"];

function toPillar(ganZhi: string, wuxing: string): BaziPillar {
  return {
    gan: ganZhi[0],
    zhi: ganZhi[1],
    ganZhi,
    wuxing,
  };
}

export function calcBazi(input: BirthInput): BaziResult {
  const lunar =
    input.calendarType === "solar"
      ? Solar.fromYmdHms(input.year, input.month, input.day, input.hour, input.minute, 0).getLunar()
      : Lunar.fromYmdHms(
          input.year,
          input.isLeapMonth ? -input.month : input.month,
          input.day,
          input.hour,
          input.minute,
          0,
        );

  const eightChar = lunar.getEightChar();

  const year = toPillar(eightChar.getYear(), eightChar.getYearWuXing());
  const month = toPillar(eightChar.getMonth(), eightChar.getMonthWuXing());
  const day = toPillar(eightChar.getDay(), eightChar.getDayWuXing());
  const time = toPillar(eightChar.getTime(), eightChar.getTimeWuXing());

  const wuxingCount: Record<string, number> = { 木: 0, 火: 0, 土: 0, 金: 0, 水: 0 };
  for (const pillar of [year, month, day, time]) {
    for (const ch of pillar.wuxing) {
      if (ch in wuxingCount) wuxingCount[ch] += 1;
    }
  }

  const dominantWuxing = WUXING_ORDER.reduce((a, b) => (wuxingCount[b] > wuxingCount[a] ? b : a));
  const lackingWuxing = WUXING_ORDER.filter((el) => wuxingCount[el] === 0);

  return {
    year,
    month,
    day,
    time,
    dayMaster: day.gan,
    wuxingCount,
    dominantWuxing,
    lackingWuxing,
  };
}
