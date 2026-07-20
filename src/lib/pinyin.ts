const GAN_PINYIN: Record<string, string> = {
  甲: "Jia",
  乙: "Yi",
  丙: "Bing",
  丁: "Ding",
  戊: "Wu",
  己: "Ji",
  庚: "Geng",
  辛: "Xin",
  壬: "Ren",
  癸: "Gui",
};

const ZHI_PINYIN: Record<string, string> = {
  子: "Zi",
  丑: "Chou",
  寅: "Yin",
  卯: "Mao",
  辰: "Chen",
  巳: "Si",
  午: "Wu",
  未: "Wei",
  申: "Shen",
  酉: "You",
  戌: "Xu",
  亥: "Hai",
};

export function ganToPinyin(gan: string): string {
  return GAN_PINYIN[gan] ?? gan;
}

export function ganZhiToPinyin(ganZhi: string): string {
  const [gan, zhi] = ganZhi;
  return `${GAN_PINYIN[gan] ?? gan}-${ZHI_PINYIN[zhi] ?? zhi}`;
}
