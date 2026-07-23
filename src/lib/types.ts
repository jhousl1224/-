export type CalendarType = "solar" | "lunar";
export type Gender = "male" | "female";

export interface Birthplace {
  id: string;
  nameZh: string;
  nameEn: string;
  countryZh: string;
  countryEn: string;
  lat: number;
  lon: number;
  utcOffset: number;
}

export interface BirthInput {
  calendarType: CalendarType;
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  gender: Gender;
  isLeapMonth: boolean;
  birthplace: Birthplace;
}

export interface ZiweiPalaceInfo {
  name: string;
  heavenlyStem: string;
  earthlyBranch: string;
  majorStars: string[];
  isSoulPalace: boolean;
  isBodyPalace: boolean;
}

export interface ZiweiResult {
  soulStar: string;
  bodyStar: string;
  soulPalace: string;
  soulPalaceMajorStars: string[];
  fiveElementsClass: string;
  palaces: ZiweiPalaceInfo[];
}

export interface BaziPillar {
  gan: string;
  zhi: string;
  ganZhi: string;
  wuxing: string;
}

export interface BaziResult {
  year: BaziPillar;
  month: BaziPillar;
  day: BaziPillar;
  time: BaziPillar;
  dayMaster: string;
  wuxingCount: Record<string, number>;
  dominantWuxing: string;
  lackingWuxing: string[];
}

export interface ZodiacResult {
  animal: string;
  animalEn: string;
}

export interface WesternSignResult {
  sign: string;
  signEn: string;
}

export interface BirthProfile {
  input: BirthInput;
  ziwei: ZiweiResult;
  bazi: BaziResult;
  zodiac: ZodiacResult;
  western: WesternSignResult;
}
