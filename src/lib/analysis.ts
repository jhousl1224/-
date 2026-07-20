import type { BirthProfile } from "./types";
import {
  type Bilingual,
  WESTERN_SIGN_TRAITS,
  WUXING_TRAITS,
  ZIWEI_NO_STAR,
  ZIWEI_STAR_TRAITS,
  ZODIAC_TRAITS,
} from "./analysisData";

export interface AnalysisResult {
  ziwei: Bilingual;
  bazi: Bilingual;
  zodiac: Bilingual;
  western: Bilingual;
  summary: Bilingual;
}

function getZiweiBlurb(profile: BirthProfile): Bilingual {
  const star = profile.ziwei.soulPalaceMajorStars[0];
  return star && ZIWEI_STAR_TRAITS[star] ? ZIWEI_STAR_TRAITS[star] : ZIWEI_NO_STAR;
}

export function generateAnalysis(profile: BirthProfile): AnalysisResult {
  const ziwei = getZiweiBlurb(profile);
  const bazi = WUXING_TRAITS[profile.bazi.dominantWuxing];
  const zodiac = ZODIAC_TRAITS[profile.zodiac.animal];
  const western = WESTERN_SIGN_TRAITS[profile.western.sign];

  const baziRestZh = bazi.zh.replace(/^八字五行以「.+?」氣最旺，/, "");

  const summary: Bilingual = {
    zh: `綜合來看，${ziwei.zh}再加上八字「${profile.bazi.dominantWuxing}」氣當旺，${baziRestZh}屬${profile.zodiac.animal}又是${profile.western.sign}的你，天賦其實比自己以為的更清楚——只是還沒被好好整理出來。`,
    en: `So here's the short version: ${ziwei.en} ${bazi.en} Throw in a ${profile.zodiac.animalEn} year and a ${profile.western.signEn} streak, and your gifts are honestly clearer than you give yourself credit for — they just haven't been named yet.`,
  };

  return { ziwei, bazi, zodiac, western, summary };
}
