import { Lunar } from "lunar-javascript";
import type { BirthInput, WesternSignResult } from "./types";

const SIGNS: { zh: string; en: string; endMonth: number; endDay: number }[] = [
  { zh: "摩羯座", en: "Capricorn", endMonth: 1, endDay: 19 },
  { zh: "水瓶座", en: "Aquarius", endMonth: 2, endDay: 18 },
  { zh: "雙魚座", en: "Pisces", endMonth: 3, endDay: 20 },
  { zh: "牡羊座", en: "Aries", endMonth: 4, endDay: 19 },
  { zh: "金牛座", en: "Taurus", endMonth: 5, endDay: 20 },
  { zh: "雙子座", en: "Gemini", endMonth: 6, endDay: 21 },
  { zh: "巨蟹座", en: "Cancer", endMonth: 7, endDay: 22 },
  { zh: "獅子座", en: "Leo", endMonth: 8, endDay: 22 },
  { zh: "處女座", en: "Virgo", endMonth: 9, endDay: 22 },
  { zh: "天秤座", en: "Libra", endMonth: 10, endDay: 23 },
  { zh: "天蠍座", en: "Scorpio", endMonth: 11, endDay: 21 },
  { zh: "射手座", en: "Sagittarius", endMonth: 12, endDay: 21 },
  { zh: "摩羯座", en: "Capricorn", endMonth: 12, endDay: 31 },
];

export function calcWesternSign(input: BirthInput): WesternSignResult {
  let month = input.month;
  let day = input.day;

  if (input.calendarType === "lunar") {
    const lunar = Lunar.fromYmd(input.year, input.isLeapMonth ? -input.month : input.month, input.day);
    const solar = lunar.getSolar();
    month = solar.getMonth();
    day = solar.getDay();
  }

  const match = SIGNS.find((s) => month === s.endMonth && day <= s.endDay) ?? SIGNS.find((s) => month < s.endMonth);
  const sign = match ?? SIGNS[SIGNS.length - 1];

  return { sign: sign.zh, signEn: sign.en };
}
