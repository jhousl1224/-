import { calcBazi } from "./bazi";
import { calcWesternSign } from "./westernSign";
import { calcZiwei } from "./ziwei";
import { calcZodiac } from "./zodiac";
import type { BirthInput, BirthProfile } from "./types";

export function buildProfile(input: BirthInput): BirthProfile {
  return {
    input,
    ziwei: calcZiwei(input),
    bazi: calcBazi(input),
    zodiac: calcZodiac(input),
    western: calcWesternSign(input),
  };
}
