export interface Bilingual {
  zh: string;
  en: string;
}

export const ZIWEI_STAR_TRAITS: Record<string, Bilingual> = {
  紫微: {
    zh: "命宮坐紫微星，你天生帶著領袖氣場，習慣扛起責任、為身邊的人做主，也渴望被尊重與信任。",
    en: "The Purple Star anchors your Life Palace — a natural sense of authority and responsibility, someone others instinctively look to for direction.",
  },
  天機: {
    zh: "命宮坐天機星，你的頭腦轉得快，善於分析與臨機應變，是那種總能在關鍵時刻想出對策的人。",
    en: "The Star of Ingenuity shapes your mind — quick, adaptive, always three steps ahead when a plan needs to change.",
  },
  太陽: {
    zh: "命宮坐太陽星，你熱情直率、樂於照顧他人，就像陽光一樣，走到哪裡都能帶來溫暖與活力。",
    en: "The Sun Star lights your path — warm, generous, and instinctively drawn to look after the people around you.",
  },
  武曲: {
    zh: "命宮坐武曲星，你做事講求效率與實際,意志力強，認定的目標會堅持到底，是天生的行動派。",
    en: "The Star of Resolve drives you — practical, disciplined, and relentless once a goal is set.",
  },
  天同: {
    zh: "命宮坐天同星，你個性隨和溫厚，懂得知足常樂，也擅長為緊繃的氣氛帶來一份柔軟與安定。",
    en: "The Star of Contentment softens your nature — easygoing, gentle, a calming presence in any room.",
  },
  廉貞: {
    zh: "命宮坐廉貞星，你外表沉穩內心熾熱，敢愛敢恨、重視原則，是個很有個人魅力的矛盾綜合體。",
    en: "The Star of Integrity gives you a compelling duality — composed on the surface, fiercely passionate underneath.",
  },
  天府: {
    zh: "命宮坐天府星，你穩重可靠、善於理財與規劃，是朋友圈裡讓人安心依靠的「大家長」型人物。",
    en: "The Treasury Star grants stability — resourceful, dependable, the one people trust to keep things steady.",
  },
  太陰: {
    zh: "命宮坐太陰星，你心思細膩、體貼周到，擅長察言觀色，也很懂得經營溫馨的家庭與人際關係。",
    en: "The Moon Star deepens your sensitivity — attentive, nurturing, gifted at reading what others leave unsaid.",
  },
  貪狼: {
    zh: "命宮坐貪狼星，你多才多藝、交際手腕靈活，對生活充滿好奇與慾望，是天生的社交高手。",
    en: "The Star of Desire fuels your versatility — magnetic, curious, effortlessly skilled at working a room.",
  },
  巨門: {
    zh: "命宮坐巨門星，你口才犀利、觀察力強，擅長用言語表達與說服，適合需要溝通與辯證的舞台。",
    en: "The Star of Eloquence sharpens your voice — perceptive and persuasive, at your best when ideas need defending.",
  },
  天相: {
    zh: "命宮坐天相星，你注重公平與形象，做事謹慎細心，是團隊裡值得信賴的輔佐與協調者。",
    en: "The Star of Counsel refines your judgment — fair-minded, meticulous, a trustworthy right hand in any team.",
  },
  天梁: {
    zh: "命宮坐天梁星，你正直老成、樂於照顧晚輩與弱勢，天生帶點長輩緣，遇事總能化險為夷。",
    en: "The Star of Elders lends you quiet authority — principled, protective, someone who steadies a crisis.",
  },
  七殺: {
    zh: "命宮坐七殺星，你性格剛烈果決，不畏挑戰、勇於開創，是那種寧可闖蕩也不願原地踏步的人。",
    en: "The Star of the General forges your edge — bold, decisive, energized by challenges others shy from.",
  },
  破軍: {
    zh: "命宮坐破軍星，你敢於打破常規、追求變革，適應力極強，人生常在破舊立新中找到新方向。",
    en: "The Star of Transformation drives reinvention — daring, adaptable, thriving on breaking old patterns to build new ones.",
  },
};

export const ZIWEI_NO_STAR: Bilingual = {
  zh: "命宮無主星，你的命格反而更靈活多變，個性會綜合三方四正的星曜展現，可塑性很高。",
  en: "An empty Life Palace means your character is shaped by the surrounding stars — unusually adaptable and hard to box in.",
};

export const ZIWEI_STAR_EN_NAME: Record<string, string> = {
  紫微: "Purple Star",
  天機: "Star of Ingenuity",
  太陽: "Sun Star",
  武曲: "Star of Resolve",
  天同: "Star of Contentment",
  廉貞: "Star of Integrity",
  天府: "Treasury Star",
  太陰: "Moon Star",
  貪狼: "Star of Desire",
  巨門: "Star of Eloquence",
  天相: "Star of Counsel",
  天梁: "Star of Elders",
  七殺: "Star of the General",
  破軍: "Star of Transformation",
};

export const WUXING_TRAITS: Record<string, Bilingual> = {
  木: {
    zh: "八字五行以「木」氣最旺，你富有生長力與理想性，喜歡學習成長，也樂於扶持他人向上發展。",
    en: "Wood energy dominates your Four Pillars — growth-oriented, idealistic, someone who helps others rise alongside you.",
  },
  火: {
    zh: "八字五行以「火」氣最旺，你熱情積極、表達力強，行動速度快，容易感染身邊人的情緒。",
    en: "Fire energy dominates your Four Pillars — passionate, expressive, quick to act and quick to light up a room.",
  },
  土: {
    zh: "八字五行以「土」氣最旺，你踏實穩重、重視承諾，做事按部就班，是值得長期信賴的類型。",
    en: "Earth energy dominates your Four Pillars — grounded, dependable, the steady hand others build plans around.",
  },
  金: {
    zh: "八字五行以「金」氣最旺，你原則分明、意志堅定，做事講求效率，也重視是非對錯。",
    en: "Metal energy dominates your Four Pillars — principled, resolute, drawn to clarity and clean execution.",
  },
  水: {
    zh: "八字五行以「水」氣最旺，你思路靈活、適應力強，善於變通,也很懂得順勢而為。",
    en: "Water energy dominates your Four Pillars — fluid, perceptive, gifted at flowing around obstacles instead of fighting them.",
  },
};

export const ZODIAC_TRAITS: Record<string, Bilingual> = {
  鼠: {
    zh: "生肖屬鼠，你機靈敏銳、反應快，總能在資源有限的情況下找到最聰明的解法。",
    en: "Born in the Year of the Rat — sharp-witted and resourceful, quick to spot the clever way through.",
  },
  牛: {
    zh: "生肖屬牛，你踏實勤懇、耐力十足，認定的事情會默默堅持到底，不輕易服輸。",
    en: "Born in the Year of the Ox — steady and hardworking, quietly relentless once committed.",
  },
  虎: {
    zh: "生肖屬虎，你天生自信、氣場強大，勇於冒險，喜歡站在前面帶領大家往前衝。",
    en: "Born in the Year of the Tiger — bold and magnetic, a natural front-runner who leads by example.",
  },
  兔: {
    zh: "生肖屬兔，你溫和細膩、人緣極佳，擅長營造和諧氛圍，是團體裡的潤滑劑。",
    en: "Born in the Year of the Rabbit — gentle and well-liked, gifted at keeping the peace.",
  },
  龍: {
    zh: "生肖屬龍，你充滿魄力與理想，天生不甘平凡，渴望在人生舞台上發光發熱。",
    en: "Born in the Year of the Dragon — ambitious and vivid, destined to stand out rather than blend in.",
  },
  蛇: {
    zh: "生肖屬蛇，你直覺敏銳、城府深沉，善於觀察局勢，總能在關鍵時刻做出精準判斷。",
    en: "Born in the Year of the Snake — intuitive and composed, quietly reading the room before making a precise move.",
  },
  馬: {
    zh: "生肖屬馬，你熱愛自由、行動力十足，不喜歡被束縛，人生像不停奔跑的旅程。",
    en: "Born in the Year of the Horse — free-spirited and energetic, always in motion toward the next horizon.",
  },
  羊: {
    zh: "生肖屬羊，你心地善良、富有藝術氣息，重視情感連結，是很好的傾聽者與陪伴者。",
    en: "Born in the Year of the Goat — kind-hearted and artistic, a natural at emotional connection.",
  },
  猴: {
    zh: "生肖屬猴，你聰明靈活、點子特別多，適應力強，總能在變化中找到新機會。",
    en: "Born in the Year of the Monkey — clever and inventive, quick to turn change into opportunity.",
  },
  雞: {
    zh: "生肖屬雞，你做事講求效率、追求完美，觀察力細膩，對自己與他人都有一定標準。",
    en: "Born in the Year of the Rooster — precise and observant, holding both yourself and others to a high standard.",
  },
  狗: {
    zh: "生肖屬狗，你忠誠正直、重情重義，是朋友圈裡最靠得住的存在，值得深交。",
    en: "Born in the Year of the Dog — loyal and principled, the friend people know they can count on.",
  },
  豬: {
    zh: "生肖屬豬，你心胸寬厚、待人真誠，樂於分享，總是能為身邊的人帶來安心感。",
    en: "Born in the Year of the Pig — warm-hearted and sincere, generous with both time and trust.",
  },
};

export const WESTERN_SIGN_TRAITS: Record<string, Bilingual> = {
  牡羊座: {
    zh: "太陽星座是牡羊座，你行動力十足、勇於嘗試，喜歡當第一個舉手挑戰新事物的人。",
    en: "Your sun sign is Aries — impulsive and courageous, first to raise a hand for something new.",
  },
  金牛座: {
    zh: "太陽星座是金牛座，你重視安全感與品質，做事踏實穩健，喜歡把生活過得扎實又舒適。",
    en: "Your sun sign is Taurus — steady and sensory, building a life that feels secure and well-made.",
  },
  雙子座: {
    zh: "太陽星座是雙子座，你腦筋靈活、興趣廣泛，擅長溝通交流，總有說不完的新鮮話題。",
    en: "Your sun sign is Gemini — curious and quick, endlessly fluent in whatever conversation comes next.",
  },
  巨蟹座: {
    zh: "太陽星座是巨蟹座，你重視家庭與情感連結，體貼細心，是很懂得照顧人的暖心存在。",
    en: "Your sun sign is Cancer — deeply caring and protective, devoted to the people you call home.",
  },
  獅子座: {
    zh: "太陽星座是獅子座，你自信閃耀、天生舞台感十足，樂於在眾人面前展現真實的自己。",
    en: "Your sun sign is Leo — radiant and confident, most alive when the spotlight finds you.",
  },
  處女座: {
    zh: "太陽星座是處女座，你注重細節、追求精確，習慣把事情做到盡善盡美才安心。",
    en: "Your sun sign is Virgo — meticulous and discerning, at ease only once every detail is right.",
  },
  天秤座: {
    zh: "太陽星座是天秤座，你重視和諧與美感，善於權衡多方立場，是天生的協調高手。",
    en: "Your sun sign is Libra — balanced and diplomatic, gifted at finding fairness between competing views.",
  },
  天蠍座: {
    zh: "太陽星座是天蠍座，你洞察力強、情感濃烈，一旦投入便全心全意，愛恨都很分明。",
    en: "Your sun sign is Scorpio — intense and perceptive, all-in once your heart decides to commit.",
  },
  射手座: {
    zh: "太陽星座是射手座，你熱愛自由與探索，樂觀開朗，總是嚮往著下一段未知的旅程。",
    en: "Your sun sign is Sagittarius — optimistic and adventurous, always eyeing the next horizon.",
  },
  摩羯座: {
    zh: "太陽星座是摩羯座，你務實堅毅、目標明確，願意腳踏實地一步步爬向自己想要的高度。",
    en: "Your sun sign is Capricorn — disciplined and ambitious, climbing steadily toward a clearly defined summit.",
  },
  水瓶座: {
    zh: "太陽星座是水瓶座，你思想獨立、富有創意，喜歡跳脫框架，總能提出令人驚喜的新觀點。",
    en: "Your sun sign is Aquarius — independent and inventive, drawn to ideas nobody else has thought of yet.",
  },
  雙魚座: {
    zh: "太陽星座是雙魚座，你想像力豐富、感受力強，心思細膩浪漫，容易與人產生深刻共鳴。",
    en: "Your sun sign is Pisces — dreamy and empathetic, easily attuned to what others quietly feel.",
  },
};
