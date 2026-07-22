export interface BadgeSpec {
  symbol: string;
  color?: string;
  motif?: string;
  /** Hand-drawn SVG path/circle markup for a richer glyph than a text symbol. */
  glyph?: string;
}

const MOTIF_WOOD = "M50 28 C36 34 32 52 50 72 C68 52 64 34 50 28 Z M50 34 L50 68";
const MOTIF_FIRE =
  "M50 26 C40 38 34 48 38 60 C40 67 45 71 50 71 C55 71 60 67 62 60 C66 48 60 38 50 26 Z M50 46 C46 52 45 58 48 63";
const MOTIF_EARTH = "M28 68 L42 40 L52 56 L62 36 L72 68 Z";
const MOTIF_METAL = "M50 28 L68 46 L50 72 L32 46 Z M32 46 L68 46 M50 28 L50 72";
const MOTIF_WATER = "M28 42 Q38 34 48 42 Q58 50 68 42 M28 54 Q38 46 48 54 Q58 62 68 54 M28 66 Q38 58 48 66 Q58 74 68 66";

export const WUXING_BADGE: Record<string, BadgeSpec> = {
  木: { symbol: "木", color: "#7fac9c", motif: MOTIF_WOOD },
  火: { symbol: "火", color: "#d98a5f", motif: MOTIF_FIRE },
  土: { symbol: "土", color: "#c9a86a", motif: MOTIF_EARTH },
  金: { symbol: "金", color: "#d9d4c5", motif: MOTIF_METAL },
  水: { symbol: "水", color: "#7fa6c9", motif: MOTIF_WATER },
};

export const ZODIAC_BADGE: Record<string, BadgeSpec> = {
  鼠: { symbol: "鼠" },
  牛: { symbol: "牛" },
  虎: { symbol: "虎" },
  兔: { symbol: "兔" },
  龍: { symbol: "龍" },
  蛇: { symbol: "蛇" },
  馬: { symbol: "馬" },
  羊: { symbol: "羊" },
  猴: { symbol: "猴" },
  雞: { symbol: "雞" },
  狗: { symbol: "狗" },
  豬: { symbol: "豬" },
};

export const WESTERN_BADGE: Record<string, BadgeSpec> = {
  牡羊座: {
    symbol: "♈",
    glyph:
      '<path d="M50 60 Q50 48 45 44 Q40 40 41 34 Q42 30 46 33 M50 60 Q50 48 55 44 Q60 40 59 34 Q58 30 54 33" />',
  },
  金牛座: {
    symbol: "♉",
    glyph:
      '<path d="M38 46 Q33 40 35 32 Q37 25 43 28 M62 46 Q67 40 65 32 Q63 25 57 28" /><circle cx="50" cy="56" r="12" />',
  },
  雙子座: {
    symbol: "♊",
    glyph: '<path d="M37 35 L63 35 M43 35 L43 65 M57 35 L57 65 M37 65 L63 65" />',
  },
  巨蟹座: {
    symbol: "♋",
    glyph:
      '<circle cx="39" cy="41" r="8" /><circle cx="61" cy="59" r="8" /><path d="M46 45 Q59 47 58 58 M54 55 Q41 53 42 42" /><circle cx="39" cy="41" r="2" class="glyph-dot" /><circle cx="61" cy="59" r="2" class="glyph-dot" />',
  },
  獅子座: {
    symbol: "♌",
    glyph:
      '<circle cx="40" cy="43" r="9" /><path d="M49 43 Q49 34 58 35 Q68 36 66 47 Q64 56 55 57" /><circle cx="36" cy="40" r="2" class="glyph-dot" />',
  },
  處女座: {
    symbol: "♍",
    glyph:
      '<path d="M33 62 Q33 38 38 38 Q43 38 43 62 M43 62 Q43 38 48 38 Q53 38 53 58 Q53 66 60 64 Q66 62 63 56 Q61 52 55 54" />',
  },
  天秤座: {
    symbol: "♎",
    glyph: '<path d="M35 46 Q35 34 50 34 Q65 34 65 46 M31 62 L69 62" />',
  },
  天蠍座: {
    symbol: "♏",
    glyph:
      '<path d="M33 62 Q33 38 38 38 Q43 38 43 62 M43 62 Q43 38 48 38 Q53 38 53 58 L60 65 M60 65 L68 61 M60 65 L63 73" />',
  },
  射手座: {
    symbol: "♐",
    glyph: '<path d="M33 67 L67 33 M51 33 L67 33 L67 49 M40 51 L48 43 M45 60 L53 52" />',
  },
  摩羯座: {
    symbol: "♑",
    glyph:
      '<path d="M36 32 Q30 32 30 39 Q30 45 38 44 L38 32 M38 39 L38 61 Q38 69 47 68 Q57 67 57 59 Q57 53 50 54" /><circle cx="53" cy="56" r="2.2" class="glyph-dot" />',
  },
  水瓶座: {
    symbol: "♒",
    glyph: '<path d="M32 44 L40 50 L48 44 L56 50 L64 44 M32 58 L40 64 L48 58 L56 64 L64 58" />',
  },
  雙魚座: {
    symbol: "♓",
    glyph: '<path d="M41 34 Q35 50 41 66 M59 34 Q65 50 59 66 M41 50 L59 50" />',
  },
};

export const ZIWEI_STAR_BADGE: Record<string, BadgeSpec> = {
  紫微: { symbol: "紫" },
  天機: { symbol: "機" },
  太陽: { symbol: "陽" },
  武曲: { symbol: "武" },
  天同: { symbol: "同" },
  廉貞: { symbol: "廉" },
  天府: { symbol: "府" },
  太陰: { symbol: "陰" },
  貪狼: { symbol: "狼" },
  巨門: { symbol: "門" },
  天相: { symbol: "相" },
  天梁: { symbol: "梁" },
  七殺: { symbol: "殺" },
  破軍: { symbol: "軍" },
};

export const ZIWEI_NO_STAR_BADGE: BadgeSpec = { symbol: "☯" };
