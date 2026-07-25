import type { BirthProfile } from "./types";
import {
  type Bilingual,
  WESTERN_SIGN_TRAITS,
  WUXING_TRAITS,
  ZIWEI_NO_STAR,
  ZIWEI_STAR_EN_NAME,
  ZIWEI_STAR_TRAITS,
  ZODIAC_TRAITS,
} from "./analysisData";

const WUXING_EN: Record<string, string> = { 木: "Wood", 火: "Fire", 土: "Earth", 金: "Metal", 水: "Water" };

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

  // Deliberately just names the ingredients (star / wuxing / zodiac / sign) rather than
  // quoting the card blurbs — the summary is a preview, not a spoiler for the flip cards.
  const star = profile.ziwei.soulPalaceMajorStars[0];
  const ziweiLabelZh = star ? `紫微命宮主星是「${star}」` : "紫微命宮無主星，個性更靈活多變";
  const ziweiLabelEn = star
    ? `your Zi Wei Life Palace is anchored by the ${ZIWEI_STAR_EN_NAME[star] ?? star}`
    : "your Zi Wei Life Palace has no major star, which makes you more adaptable than most";

  const summary: Bilingual = {
    zh: `綜合來看，${ziweiLabelZh}，八字「${profile.bazi.dominantWuxing}」氣當旺，屬${profile.zodiac.animal}又是${profile.western.sign}——這幾樣特質疊在一起，會拼出一張比你自己以為的更清楚的天賦地圖。往下滑，翻開四張卡片，一項一項看仔細。`,
    en: `Here's the quick version: ${ziweiLabelEn}, your Bazi runs strongest on ${WUXING_EN[profile.bazi.dominantWuxing] ?? profile.bazi.dominantWuxing} energy, and you're carrying both a ${profile.zodiac.animalEn} year and a ${profile.western.signEn} streak. Stack it all together and your gifts are more defined than you think — flip the four cards below for the full picture.`,
  };

  return { ziwei, bazi, zodiac, western, summary };
}
