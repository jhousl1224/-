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
      '<path d="M35 58 Q30 46 36 39 Q42 33 47 38 Q50 42 47 46 L47 63 M65 58 Q70 46 64 39 Q58 33 53 38 Q50 42 53 46 L53 63" />',
  },
  金牛座: {
    symbol: "♉",
    glyph:
      '<path d="M39 37 Q34 42 36 48 Q38 53 44 51 M61 37 Q66 42 64 48 Q62 53 56 51" /><circle cx="50" cy="60" r="10" />',
  },
  雙子座: {
    symbol: "♊",
    glyph: '<path d="M37 35 L63 35 M43 35 L43 65 M57 35 L57 65 M37 65 L63 65" />',
  },
  巨蟹座: {
    symbol: "♋",
    glyph:
      '<circle cx="41" cy="43" r="6.5" /><circle cx="59" cy="57" r="6.5" /><path d="M47 43 Q60 40 59 50.5 M53 57 Q40 60 41 49.5" />',
  },
  獅子座: {
    symbol: "♌",
    glyph:
      '<path d="M43 41 Q35 41 35 48 Q35 55 44 54 Q51 53 49 45 Q48 39 55 39 Q63 39 63 48 Q63 57 55 59 Q49 60.5 47 55.5" />',
  },
  處女座: {
    symbol: "♍",
    glyph:
      '<path d="M35 62 L35 38 Q35 33 40 38 L40 62 Q40 33 45 38 L45 62 Q45 40 52 43 Q59 46 56 54 Q52 61 46 57" />',
  },
  天秤座: {
    symbol: "♎",
    glyph: '<path d="M35 46 Q35 34 50 34 Q65 34 65 46 M31 63 L69 63" />',
  },
  天蠍座: {
    symbol: "♏",
    glyph:
      '<path d="M35 62 L35 38 Q35 33 40 38 L40 62 Q40 33 45 38 L45 62 Q45 40 52 43 L59 62 M59 62 L67 53 M59 62 L59 69" />',
  },
  射手座: {
    symbol: "♐",
    glyph: '<path d="M33 67 L67 33 M51 33 L67 33 L67 49 M40 51 L48 43 M45 60 L53 52" />',
  },
  摩羯座: {
    symbol: "♑",
    glyph:
      '<path d="M39 35 Q33 35 33 41 Q33 47 41 46 L41 35 M41 41 L41 61 Q41 68 49 66 Q56 64 54 58 Q52 53 58 55 Q65 57 63 63 Q61 68 55 66" />',
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
