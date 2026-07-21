export interface BadgeSpec {
  symbol: string;
  color?: string;
}

export const WUXING_BADGE: Record<string, BadgeSpec> = {
  木: { symbol: "木", color: "#7fac9c" },
  火: { symbol: "火", color: "#d98a5f" },
  土: { symbol: "土", color: "#c9a86a" },
  金: { symbol: "金", color: "#d9d4c5" },
  水: { symbol: "水", color: "#7fa6c9" },
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
