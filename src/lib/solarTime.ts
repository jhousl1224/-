import { Lunar, Solar } from "lunar-javascript";
import type { BirthInput } from "./types";

function getDayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 1);
  return Math.floor((date.getTime() - start.getTime()) / 86_400_000) + 1;
}

/** Standard approximation of the equation of time (mean vs. apparent solar time), in minutes. */
function equationOfTimeMinutes(dayOfYear: number): number {
  const b = ((2 * Math.PI) / 365) * (dayOfYear - 81);
  return 9.87 * Math.sin(2 * b) - 7.53 * Math.cos(b) - 1.5 * Math.sin(b);
}

/**
 * Adjusts a birth time to true solar time at the given birthplace: corrects for how far the
 * city's longitude sits from its civil time zone's reference meridian, plus the equation of
 * time. Returns an equivalent BirthInput expressed in the solar (Gregorian) calendar, since the
 * correction is computed via plain calendar arithmetic. Does not account for historical DST.
 */
export function applyTrueSolarTime(input: BirthInput): BirthInput {
  if (!input.birthplace) return input;
  const { lat: _lat, lon, utcOffset } = input.birthplace;

  const solar =
    input.calendarType === "solar"
      ? Solar.fromYmdHms(input.year, input.month, input.day, input.hour, input.minute, 0)
      : Lunar.fromYmdHms(input.year, input.isLeapMonth ? -input.month : input.month, input.day, input.hour, input.minute, 0).getSolar();

  const date = new Date(solar.getYear(), solar.getMonth() - 1, solar.getDay(), solar.getHour(), solar.getMinute());

  const standardMeridian = utcOffset * 15;
  const longitudeCorrectionMin = (lon - standardMeridian) * 4;
  const eotMin = equationOfTimeMinutes(getDayOfYear(date));
  const totalCorrectionMin = Math.round(longitudeCorrectionMin + eotMin);

  date.setMinutes(date.getMinutes() + totalCorrectionMin);

  return {
    ...input,
    calendarType: "solar",
    isLeapMonth: false,
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
  };
}
