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

const WUXING_EN_NAME: Record<string, string> = {
  木: "Wood",
  火: "Fire",
  土: "Earth",
  金: "Metal",
  水: "Water",
};

export function generateAnalysis(profile: BirthProfile): AnalysisResult {
  const ziwei = getZiweiBlurb(profile);
  const bazi = WUXING_TRAITS[profile.bazi.dominantWuxing];
  const zodiac = ZODIAC_TRAITS[profile.zodiac.animal];
  const western = WESTERN_SIGN_TRAITS[profile.western.sign];

  const baziRestZh = bazi.zh.replace(/^八字五行以「.+?」氣最旺，/, "");
  const baziRestEn = bazi.en.replace(/^[A-Za-z]+ energy dominates your Four Pillars — /, "");

  const summary: Bilingual = {
    zh: `綜合來看，${ziwei.zh}再加上八字「${profile.bazi.dominantWuxing}」氣當旺，${baziRestZh}屬${profile.zodiac.animal}又是${profile.western.sign}的你，天賦其實比自己以為的更清楚——只是還沒被好好整理出來。`,
    en: `Altogether: ${ziwei.en} Add a chart led by ${WUXING_EN_NAME[profile.bazi.dominantWuxing]} energy — ${baziRestEn} And as a ${profile.zodiac.animalEn} under ${profile.western.signEn}, your gifts are more defined than you give yourself credit for — they just haven't been named yet.`,
  };

  return { ziwei, bazi, zodiac, western, summary };
}
