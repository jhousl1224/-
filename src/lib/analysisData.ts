export interface Bilingual {
  zh: string;
  en: string;
}

export const ZIWEI_STAR_TRAITS: Record<string, Bilingual> = {
  紫微: {
    zh: "命宮坐紫微星，你天生帶著領袖氣場，習慣扛起責任、為身邊的人做主，也渴望被尊重與信任。",
    en: "Your Life Palace is ruled by the Purple Star — basically the emperor of the chart. People expect you to take charge, and honestly, you kind of expect it too. What you actually want isn't attention, it's respect.",
  },
  天機: {
    zh: "命宮坐天機星，你的頭腦轉得快，善於分析與臨機應變，是那種總能在關鍵時刻想出對策的人。",
    en: "You're ruled by the Star of Ingenuity — your mind just moves faster than most. You're the friend who spots the problem before anyone else does and already has a backup plan ready.",
  },
  太陽: {
    zh: "命宮坐太陽星，你熱情直率、樂於照顧他人，就像陽光一樣，走到哪裡都能帶來溫暖與活力。",
    en: "The Sun Star has your back — warm, direct, generous with your energy. You're the one who checks in on people and somehow lifts the mood without even trying.",
  },
  武曲: {
    zh: "命宮坐武曲星，你做事講求效率與實際,意志力強，認定的目標會堅持到底，是天生的行動派。",
    en: "The Star of Resolve runs your chart — no-nonsense, practical, stubborn in the best way. Once you decide on something, you're not the type to quit halfway through.",
  },
  天同: {
    zh: "命宮坐天同星，你個性隨和溫厚，懂得知足常樂，也擅長為緊繃的氣氛帶來一份柔軟與安定。",
    en: "You've got the Star of Contentment — easygoing, low-drama, genuinely happy with simple things. You're the one who takes the tension out of a room just by being in it.",
  },
  廉貞: {
    zh: "命宮坐廉貞星，你外表沉穩內心熾熱，敢愛敢恨、重視原則，是個很有個人魅力的矛盾綜合體。",
    en: "The Star of Integrity makes you a bit of a contradiction — cool and composed on the surface, intense underneath. You love hard, you hold real principles, and that mix is what makes you magnetic.",
  },
  天府: {
    zh: "命宮坐天府星，你穩重可靠、善於理財與規劃，是朋友圈裡讓人安心依靠的「大家長」型人物。",
    en: "The Treasury Star makes you the reliable one — good with money, good at planning, the friend everyone quietly treats like the group's default parent.",
  },
  太陰: {
    zh: "命宮坐太陰星，你心思細膩、體貼周到，擅長察言觀色，也很懂得經營溫馨的家庭與人際關係。",
    en: "The Moon Star makes you sensitive in the best way — you notice what people don't say out loud, and you put real effort into the people closest to you.",
  },
  貪狼: {
    zh: "命宮坐貪狼星，你多才多藝、交際手腕靈活，對生活充滿好奇與慾望，是天生的社交高手。",
    en: "The Star of Desire keeps you curious about basically everything — talented, social, a little insatiable in the best way. You could walk into a room of strangers and leave with five new friends.",
  },
  巨門: {
    zh: "命宮坐巨門星，你口才犀利、觀察力強，擅長用言語表達與說服，適合需要溝通與辯證的舞台。",
    en: "The Star of Eloquence gave you a sharp tongue and even sharper eyes — you notice everything, and you know exactly how to argue your point. Debate-club energy, in the best way.",
  },
  天相: {
    zh: "命宮坐天相星，你注重公平與形象，做事謹慎細心，是團隊裡值得信賴的輔佐與協調者。",
    en: "The Star of Counsel makes you the fair one — careful, detail-minded, the person a team actually trusts to mediate when things get messy.",
  },
  天梁: {
    zh: "命宮坐天梁星，你正直老成、樂於照顧晚輩與弱勢，天生帶點長輩緣，遇事總能化險為夷。",
    en: "The Star of Elders gives you an old-soul quality — principled, protective, weirdly good in a crisis. Younger people naturally end up coming to you for advice.",
  },
  七殺: {
    zh: "命宮坐七殺星，你性格剛烈果決，不畏挑戰、勇於開創，是那種寧可闖蕩也不願原地踏步的人。",
    en: "The Star of the General makes you fearless — decisive, a little intense, allergic to standing still. You'd rather take the risk than spend your life wondering what if.",
  },
  破軍: {
    zh: "命宮坐破軍星，你敢於打破常規、追求變革，適應力極強，人生常在破舊立新中找到新方向。",
    en: "The Star of Transformation means you're built for reinvention — you're not afraid to tear something down and start over, and honestly, that's usually when your life gets interesting.",
  },
};

export const ZIWEI_NO_STAR: Bilingual = {
  zh: "命宮無主星，你的命格反而更靈活多變，個性會綜合三方四正的星曜展現，可塑性很高。",
  en: "There's no major star sitting in your Life Palace — and that's actually a good thing. It means your personality isn't locked into one type; you pull from everything around you, which makes you hard to predict and easy to underestimate.",
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
    en: "Wood energy runs your chart — you're built for growth: always learning, always leveling up, and genuinely happiest when you're helping someone else do the same.",
  },
  火: {
    zh: "八字五行以「火」氣最旺，你熱情積極、表達力強，行動速度快，容易感染身邊人的情緒。",
    en: "Fire energy is what drives you — passionate, expressive, quick to act. Your mood is contagious, and people feel it the second you walk into a room.",
  },
  土: {
    zh: "八字五行以「土」氣最旺，你踏實穩重、重視承諾，做事按部就班，是值得長期信賴的類型。",
    en: "Earth energy keeps you grounded — steady, dependable, a person of your word. You don't cut corners, which is exactly why people trust you with the important stuff.",
  },
  金: {
    zh: "八字五行以「金」氣最旺，你原則分明、意志堅定，做事講求效率，也重視是非對錯。",
    en: "Metal energy gives you a sharp sense of right and wrong — disciplined, efficient, not big on gray areas. You'd rather be clear and a little blunt than vague and easy.",
  },
  水: {
    zh: "八字五行以「水」氣最旺，你思路靈活、適應力強，善於變通,也很懂得順勢而為。",
    en: "Water energy makes you adaptable — quick on your feet, good at reading a room, and smart enough to know when to push and when to just let it flow.",
  },
};

export const ZODIAC_TRAITS: Record<string, Bilingual> = {
  鼠: {
    zh: "生肖屬鼠，你機靈敏銳、反應快，總能在資源有限的情況下找到最聰明的解法。",
    en: "Year of the Rat — quick-witted and resourceful. Give you limited options and you'll still find the smart way out.",
  },
  牛: {
    zh: "生肖屬牛，你踏實勤懇、耐力十足，認定的事情會默默堅持到底，不輕易服輸。",
    en: "Year of the Ox — hardworking, patient, built for the long haul. Once you commit to something, you grind through it quietly instead of making a big deal of it.",
  },
  虎: {
    zh: "生肖屬虎，你天生自信、氣場強大，勇於冒險，喜歡站在前面帶領大家往前衝。",
    en: "Year of the Tiger — confident, bold, hard to miss in a room. You'd rather take the risk and lead from the front than wait for someone else to go first.",
  },
  兔: {
    zh: "生肖屬兔，你溫和細膩、人緣極佳，擅長營造和諧氛圍，是團體裡的潤滑劑。",
    en: "Year of the Rabbit — gentle, well-liked, the person who smooths things over without anyone noticing you did it. Group chats just run better with you in them.",
  },
  龍: {
    zh: "生肖屬龍，你充滿魄力與理想，天生不甘平凡，渴望在人生舞台上發光發熱。",
    en: "Year of the Dragon — big energy, big ambitions. You were never going to be content blending into the background, and honestly, you shouldn't have to.",
  },
  蛇: {
    zh: "生肖屬蛇，你直覺敏銳、城府深沉，善於觀察局勢，總能在關鍵時刻做出精準判斷。",
    en: "Year of the Snake — intuitive, hard to read, always watching before you act. You rarely make a move without already knowing how it'll play out.",
  },
  馬: {
    zh: "生肖屬馬，你熱愛自由、行動力十足，不喜歡被束縛，人生像不停奔跑的旅程。",
    en: "Year of the Horse — freedom-loving, always in motion, allergic to feeling boxed in. Your life looks less like a straight line and more like a road trip.",
  },
  羊: {
    zh: "生肖屬羊，你心地善良、富有藝術氣息，重視情感連結，是很好的傾聽者與陪伴者。",
    en: "Year of the Goat — kind, a little artsy, genuinely good at being there for people. You're the friend who actually listens instead of waiting for your turn to talk.",
  },
  猴: {
    zh: "生肖屬猴，你聰明靈活、點子特別多，適應力強，總能在變化中找到新機會。",
    en: "Year of the Monkey — clever, full of ideas, quick to adapt. When everything changes overnight, you're the one who somehow spots the opportunity in it.",
  },
  雞: {
    zh: "生肖屬雞，你做事講求效率、追求完美，觀察力細膩，對自己與他人都有一定標準。",
    en: "Year of the Rooster — sharp-eyed, a bit of a perfectionist, efficient to a fault. You hold yourself to a high standard, and yes, you expect the same from everyone else.",
  },
  狗: {
    zh: "生肖屬狗，你忠誠正直、重情重義，是朋友圈裡最靠得住的存在，值得深交。",
    en: "Year of the Dog — loyal to the core, the friend people know will actually show up. You take relationships seriously, and it shows.",
  },
  豬: {
    zh: "生肖屬豬，你心胸寬厚、待人真誠，樂於分享，總是能為身邊的人帶來安心感。",
    en: "Year of the Pig — warm, sincere, generous without keeping score. Being around you just feels safe, which is a rarer quality than people realize.",
  },
};

export const WESTERN_SIGN_TRAITS: Record<string, Bilingual> = {
  牡羊座: {
    zh: "太陽星座是牡羊座，你行動力十足、勇於嘗試，喜歡當第一個舉手挑戰新事物的人。",
    en: "You're an Aries — first to raise your hand, first to try the thing everyone else is still overthinking. Ready, then aim.",
  },
  金牛座: {
    zh: "太陽星座是金牛座，你重視安全感與品質，做事踏實穩健，喜歡把生活過得扎實又舒適。",
    en: "You're a Taurus — you want things solid: good quality, real comfort, no shortcuts. Slow and steady isn't a compromise for you, it's the whole point.",
  },
  雙子座: {
    zh: "太陽星座是雙子座，你腦筋靈活、興趣廣泛，擅長溝通交流，總有說不完的新鮮話題。",
    en: "You're a Gemini — quick-minded, endlessly curious, never short on something to talk about. Conversations with you never really run out of road.",
  },
  巨蟹座: {
    zh: "太陽星座是巨蟹座，你重視家庭與情感連結，體貼細心，是很懂得照顧人的暖心存在。",
    en: "You're a Cancer — home, and the people in it, matter more to you than almost anything. You notice the small stuff and take care of people without being asked.",
  },
  獅子座: {
    zh: "太陽星座是獅子座，你自信閃耀、天生舞台感十足，樂於在眾人面前展現真實的自己。",
    en: "You're a Leo — confident, a little main-character, and completely fine with people watching. You don't shrink to make others comfortable.",
  },
  處女座: {
    zh: "太陽星座是處女座，你注重細節、追求精確，習慣把事情做到盡善盡美才安心。",
    en: "You're a Virgo — detail-obsessed in a good way. You can't really relax until something's actually right, not just good enough.",
  },
  天秤座: {
    zh: "太陽星座是天秤座，你重視和諧與美感，善於權衡多方立場，是天生的協調高手。",
    en: "You're a Libra — you can see every side of an argument, which makes you great at keeping the peace and occasionally terrible at picking a restaurant.",
  },
  天蠍座: {
    zh: "太陽星座是天蠍座，你洞察力強、情感濃烈，一旦投入便全心全意，愛恨都很分明。",
    en: "You're a Scorpio — sharp instincts, deep feelings, all in once you decide to be. You don't really do lukewarm.",
  },
  射手座: {
    zh: "太陽星座是射手座，你熱愛自由與探索，樂觀開朗，總是嚮往著下一段未知的旅程。",
    en: "You're a Sagittarius — restless in the best way, already half-planning the next trip before this one's even done. Optimism is basically your default setting.",
  },
  摩羯座: {
    zh: "太陽星座是摩羯座，你務實堅毅、目標明確，願意腳踏實地一步步爬向自己想要的高度。",
    en: "You're a Capricorn — you know exactly where you're headed, and you're willing to put in years of quiet work to get there. No shortcuts, no complaints.",
  },
  水瓶座: {
    zh: "太陽星座是水瓶座，你思想獨立、富有創意，喜歡跳脫框架，總能提出令人驚喜的新觀點。",
    en: "You're an Aquarius — independent, a little unconventional, the one who suggests the idea nobody else saw coming. You'd rather be interesting than agreeable.",
  },
  雙魚座: {
    zh: "太陽星座是雙魚座，你想像力豐富、感受力強，心思細膩浪漫，容易與人產生深刻共鳴。",
    en: "You're a Pisces — dreamy, deeply feeling, tuned into things other people miss entirely. You connect with people on a level that's hard to put into words.",
  },
};
