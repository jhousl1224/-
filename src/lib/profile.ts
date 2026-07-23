import { calcBazi } from "./bazi";
import { applyTrueSolarTime } from "./solarTime";
import { calcWesternSign } from "./westernSign";
import { calcZiwei } from "./ziwei";
import { calcZodiac } from "./zodiac";
import type { BirthInput, BirthProfile } from "./types";

export function buildProfile(input: BirthInput): BirthProfile {
  // Ziwei/Bazi read off the true solar time at the birthplace (corrects for longitude
  // and the equation of time); the Chinese zodiac animal and Western sun sign stay on
  // the civil calendar date the user actually entered.
  const solarCorrected = applyTrueSolarTime(input);
  return {
    input,
    ziwei: calcZiwei(solarCorrected),
    bazi: calcBazi(solarCorrected),
    zodiac: calcZodiac(input),
    western: calcWesternSign(input),
  };
}
