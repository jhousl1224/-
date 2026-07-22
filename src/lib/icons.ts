export interface BadgeSpec {
  symbol: string;
  color?: string;
  motif?: string;
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
  牡羊座: { symbol: "♈" },
  金牛座: { symbol: "♉" },
  雙子座: { symbol: "♊" },
  巨蟹座: { symbol: "♋" },
  獅子座: { symbol: "♌" },
  處女座: { symbol: "♍" },
  天秤座: { symbol: "♎" },
  天蠍座: { symbol: "♏" },
  射手座: { symbol: "♐" },
  摩羯座: { symbol: "♑" },
  水瓶座: { symbol: "♒" },
  雙魚座: { symbol: "♓" },
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
