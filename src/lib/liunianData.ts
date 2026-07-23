import type { Teaser } from "./teaserData";
import type { LiunianCategory } from "./liunian";

export interface LiunianCategoryInfo {
  labelZh: string;
  labelEn: string;
  themeZh: string;
  themeEn: string;
}

export const LIUNIAN_CATEGORY_INFO: Record<LiunianCategory, LiunianCategoryInfo> = {
  比肩: { labelZh: "比肩年", labelEn: "Peer Year", themeZh: "自身能量穩定發揮，適合靠實力單打獨鬥", themeEn: "Your own strength runs steady — a good year to go it alone on merit" },
  劫財: { labelZh: "劫財年", labelEn: "Rivalry Year", themeZh: "競爭氣氛升高，小心資源被搶或誤判夥伴", themeEn: "Competition heats up — watch for resources slipping to rivals or misjudged partners" },
  食神: { labelZh: "食神年", labelEn: "Expression Year", themeZh: "才華與表達自然流露，適合享受生活", themeEn: "Talent and expression flow naturally — a good year to enjoy life" },
  傷官: { labelZh: "傷官年", labelEn: "Outspoken Year", themeZh: "敏銳直言，容易因說話太直而起摩擦", themeEn: "Sharp and outspoken — bluntness risks friction" },
  偏財: { labelZh: "偏財年", labelEn: "Windfall Year", themeZh: "意外機會變多，財來得快也去得快", themeEn: "More unexpected opportunities — money arrives fast, and can leave just as fast" },
  正財: { labelZh: "正財年", labelEn: "Steady Wealth Year", themeZh: "掌控實質成果，適合穩紮穩打累積", themeEn: "Your grip on real results strengthens — a good year for steady accumulation" },
  七殺: { labelZh: "七殺年", labelEn: "High-Stakes Year", themeZh: "高張力的挑戰與競爭，撐過去會脫胎換骨", themeEn: "Intense, high-stakes challenges — getting through them changes you" },
  正官: { labelZh: "正官年", labelEn: "Structure Year", themeZh: "外在規範與考驗增加，適合按部就班往上爬", themeEn: "More external structure and tests — a good year to climb step by step" },
  偏印: { labelZh: "偏印年", labelEn: "Insight Year", themeZh: "獨到思考與鑽研心強，小心過度抽離", themeEn: "Strong independent insight and focus — watch for withdrawing too far" },
  正印: { labelZh: "正印年", labelEn: "Support Year", themeZh: "資源與貴人靠近，適合休養補給", themeEn: "Support and mentors draw near — a year to rest and recharge" },
};

export const LIUNIAN_LOVE: Record<LiunianCategory, Teaser> = {
  比肩: {
    visibleZh: "這一年，你在感情裡的主導性會明顯變強，比較敢主動、也比較敢說出「我要什麼」，",
    blurredZh: "但這股底氣，也可能讓你在關係裡不小心做錯一件事……",
    visibleEn: "This year, you'll feel noticeably more assertive in relationships — more willing to make the first move, more willing to say what you actually want —",
    blurredEn: "but that confidence can also lead you into one specific mistake...",
    fullZh:
      "把「堅持自己」當成理所當然，忘記感情是兩個人的事。你會比平常更有主見，也更不容易被說服妥協，這在單身時是加分，但在關係中，如果對方也剛好想法強硬，很容易演變成互不相讓的拉扯。這一年真正該練習的，不是收起自己的主見，而是學會在「我要什麼」之後，多問一句「我們要什麼」。",
    fullEn:
      "treating standing your ground as automatically right, forgetting a relationship runs on two people's terms. You'll be more opinionated and harder to talk out of things than usual — great if you're single, but if your partner is just as firm this year, it can turn into a standoff where neither side backs down. What's worth practicing this year isn't quieting your own voice — it's adding one more question after 'what do I want': 'what do we want.'",
  },
  劫財: {
    visibleZh: "這一年你的感情世界可能會出現「競爭」的味道——喜歡的人身邊不只你一個追求者，或是你也在猶豫要不要為了誰主動出擊，",
    blurredZh: "但這種帶點較勁意味的氛圍，容易讓你做出一個容易後悔的舉動……",
    visibleEn: "This year your love life might carry a competitive edge — you're not the only one interested in someone, or you're hesitating over whether to make a bold move for someone —",
    blurredEn: "but that slightly competitive undertone can push you into a move you'll likely regret...",
    fullZh:
      "為了贏過對方，把感情當成一場非贏不可的比賽，急著用行動證明自己更值得被選，卻忘記了問自己，這份急切究竟是因為真心喜歡，還是不甘示弱。這一年感情裡最該提防的，不是遇到競爭者，而是在較勁的情緒裡，把自己真正想要的關係，弄丟了方向。",
    fullEn:
      "turning it into a contest you have to win, rushing to prove you're the better choice without asking whether that urgency comes from real feeling or from refusing to lose. What's actually worth watching this year isn't the competition itself — it's losing sight of what kind of relationship you actually wanted, somewhere in the middle of trying to win.",
  },
  食神: {
    visibleZh: "這一年你在感情裡會變得更會表達，也更懂得製造情趣和驚喜，",
    blurredZh: "但這份「很會經營氣氛」的能力，也可能讓你不小心說錯一句話……",
    visibleEn: "This year you'll get better at expressing yourself in relationships, and better at creating spark and surprise —",
    blurredEn: "but that same knack for setting the mood can slip out at exactly the wrong moment...",
    fullZh:
      "把「想到什麼就說什麼」用在了不該直說的時刻。這一年你的表達欲會特別旺盛，話多、點子多，對方一開始會覺得你很有趣，但如果對方正處在低潮或需要被聆聽的時刻，你的滔滔不絕反而會變成一種打斷。這一年感情要顧好，重點不是少說，而是在說之前，先確認對方現在需要的，是被逗笑，還是被聽見。",
    fullEn:
      "saying whatever comes to mind when it's actually not the moment for it. Your urge to express will run high this year — more talk, more ideas — and at first your partner will find you delightful, but if they're going through a low point and need to be heard, your stream of talk can start feeling like an interruption. The key to relationships this year isn't talking less — it's checking, before you speak, whether they need to be made to laugh or need to be listened to.",
  },
  傷官: {
    visibleZh: "這一年你在感情裡會變得很敢講真話，看到問題就直接點出來，不太會拐彎抹角，",
    blurredZh: "但這份直言不諱，容易讓親密的人接收到一種你沒打算傳達的訊息……",
    visibleEn: "This year you'll get more outspoken in relationships, pointing out problems the moment you see them, without much sugarcoating —",
    blurredEn: "but that bluntness tends to land as a message you never meant to send...",
    fullZh:
      "「你在挑剔我」。你可能只是想讓關係變得更好，才把心裡的不滿說出來，但少了一點鋪墊和溫度，話一出口，對方聽到的常常不是建議，而是否定。這一年感情裡最值得練習的，不是把話吞回去，而是在說出「這裡可以更好」之前，先說一句「我在乎你，所以才想講」。",
    fullEn:
      "'you're criticizing me.' You probably just want the relationship to get better, so you say what's bothering you, but without much softening or warmth, what lands often isn't advice — it's rejection. The thing worth practicing in relationships this year isn't swallowing your words — it's saying 'I care about you, that's why I'm bringing this up' before you say what could be better.",
  },
  偏財: {
    visibleZh: "這一年你的感情機會可能會變多，容易被不只一個人吸引，或是感情來得比較快、比較突然，",
    blurredZh: "但這種「機會變多」的狀態，也藏著一個容易讓關係不穩的因素……",
    visibleEn: "This year your romantic opportunities may multiply — drawn to more than one person, or a relationship arriving faster and more suddenly than usual —",
    blurredEn: "but all these extra options hide something that can destabilize a relationship...",
    fullZh:
      "三心二意。你可能還沒把一段關係想清楚，就已經被下一個吸引你的人分走了注意力，讓原本可以穩定發展的感情，因為你的猶豫不決而變得曖昧不明。這一年感情的課題，不是拒絕所有機會，而是在心動的當下，誠實問自己：我是真的想認識這個人，還是單純享受「被喜歡」的感覺。",
    fullEn:
      "scattered attention. You might get distracted by the next person who catches your eye before you've even sorted out how you feel about the current one, leaving something that could have grown steady stuck in ambiguity because of your own indecision. The lesson this year isn't turning down every opportunity — it's being honest with yourself in the moment: do you actually want to get to know this person, or are you just enjoying being wanted.",
  },
  正財: {
    visibleZh: "這一年你會很清楚自己在感情裡要什麼，也更懂得主動經營、投入資源，",
    blurredZh: "但這份「主動經營」的心態，一不小心就會變成另一種東西……",
    visibleEn: "This year you'll know exactly what you want in a relationship, and get better at actively investing in it —",
    blurredEn: "but that actively-invested mindset can slide into something else without you noticing...",
    fullZh:
      "把感情當成一項要管理的專案。你會很認真規劃約會、記得重要日子、甚至衡量這段關係「值不值得投入」，對方一開始會覺得被重視，但久了可能會感覺自己像被KPI檢核，而不是被單純地愛著。這一年感情要顧好，是記得偶爾放下「經營」的腦袋，單純浪費時間陪對方發呆，而不是每件事都要有產出。",
    fullEn:
      "managing the relationship like a project. You'll plan dates carefully, remember important dates, even weigh whether the relationship is worth the investment — your partner will feel valued at first, but over time it can start to feel like being tracked against a KPI instead of simply loved. The thing to remember this year is to occasionally drop the management mindset and just waste time together doing nothing in particular, instead of needing every moment to produce something.",
  },
  七殺: {
    visibleZh: "這一年感情裡可能會出現比較激烈的考驗——爭吵變得更直接、或是有外力（家庭、第三者、距離）強勢介入，",
    blurredZh: "但這種來勢洶洶的壓力，其實在逼你面對一件你一直迴避的事……",
    visibleEn: "This year relationships may hit sharper tests — arguments getting more direct, or outside forces (family, a third party, distance) pushing in hard —",
    blurredEn: "but that intense pressure is actually forcing you to face something you've been avoiding...",
    fullZh:
      "這段關係到底能不能撐過真正的考驗。平常風平浪靜看不出來的問題，會在這一年被放大檢視，逼你們必須攤牌、做決定，而不能再含糊下去。這一年感情不是不好，而是「決定性」的一年——撐過去的關係會變得很難被打倒，撐不過去的，某種程度上也是提早止損。",
    fullEn:
      "whether this relationship can actually survive a real test. Problems that stayed quiet in calmer times get magnified this year, forcing you to lay it all out and decide, instead of staying vague. This isn't a bad year for love so much as a decisive one — a relationship that gets through it becomes very hard to shake, and one that doesn't is, in its own way, an earlier exit from something that wasn't working.",
  },
  正官: {
    visibleZh: "這一年感情中會出現比較多需要面對的現實問題，像是家庭期待、責任分配、未來規劃，",
    blurredZh: "但這些壓力出現的方式，常常會被你誤會成一件事……",
    visibleEn: "This year, relationships will run into more real-world pressures to face — family expectations, division of responsibility, planning ahead —",
    blurredEn: "but the way this pressure shows up tends to get misread as one specific thing...",
    fullZh:
      "你可能會覺得「是不是我們感情出了什麼問題」，但其實這些壓力多半來自關係之外——家人的意見、經濟現實、時間分配，而不是你們彼此不合適。這一年感情的課題，不是逃開這些現實問題，而是學會跟對方一起面對，把「我們要不要撐過這關」變成「我們怎麼一起撐過這關」。撐過這一年的關係，通常會變得更扎實。",
    fullEn:
      "you might start wondering if something's wrong between the two of you, when most of this pressure is actually coming from outside the relationship — family opinions, financial reality, time constraints — not incompatibility. The lesson this year isn't avoiding these real problems, it's facing them together, turning 'are we going to make it through this' into 'how do we make it through this together.' Relationships that get through this year tend to come out sturdier.",
  },
  偏印: {
    visibleZh: "這一年你在感情裡會變得比較抽離、喜歡先想清楚再行動，甚至會用邏輯分析這段關係值不值得繼續，",
    blurredZh: "但這種先想後做的習慣，容易讓身邊的人感受到一件事……",
    visibleEn: "This year you'll get more detached in relationships, wanting to think things through before acting, even weighing logically whether it's worth continuing —",
    blurredEn: "but that think-before-you-act habit tends to leave the people close to you feeling one specific way...",
    fullZh:
      "你人在，心卻好像沒有完全在。你可能是想把關係想透徹才不會做錯決定，但對方感受到的，常常是一種若即若離的距離感，好像自己在被觀察，而不是被靠近。這一年感情要維繫，重點不是想得更透徹，而是偶爾放下分析，讓自己真的「在場」——單純陪伴，不急著下結論。",
    fullEn:
      "that you're there, but not quite fully there. You might just be trying to think things through so you don't make the wrong call, but what your partner feels is often a kind of distance, like they're being observed rather than being close to. What keeps things going this year isn't thinking it through more — it's occasionally dropping the analysis and actually being present, just there, without rushing to a conclusion.",
  },
  正印: {
    visibleZh: "這一年你會感覺自己在感情裡被照顧得比較多，對方也更願意主動付出，",
    blurredZh: "但這種被好好對待的狀態，也容易讓你養成一個習慣……",
    visibleEn: "This year you'll feel more taken care of in your relationship, with your partner more willing to give first —",
    blurredEn: "but being treated this well can quietly build a habit...",
    fullZh:
      "漸漸把「對方主動」當成理所當然，自己反而越來越被動。這一年確實適合休息、被愛、被照顧，但如果你完全停止主動付出，把所有的溫柔都當成單方面的供應，關係的天秤會慢慢傾斜。這一年感情要長久，重點不是拒絕被照顧，而是記得偶爾主動一次，讓對方知道，這份好被你放在心上、也被你回應著。",
    fullEn:
      "starting to treat their initiative as a given, while you get more and more passive. This is genuinely a good year to rest, be loved, be cared for — but if you stop giving entirely and treat all that warmth as a one-way supply, the balance in the relationship starts to tip. What keeps this good this year isn't refusing to be cared for — it's remembering to take the lead occasionally, so they know their effort is noticed and returned.",
  },
};

export const LIUNIAN_CAREER: Record<LiunianCategory, Teaser> = {
  比肩: {
    visibleZh: "這一年你的行動力會拉到最高，想到就做，也比較敢單槍匹馬扛下大案子，",
    blurredZh: "但這股衝勁，同時也在職場上悄悄立起一道牆……",
    visibleEn: "This year your drive to act hits a peak — you move the moment you think of something, and you're readier than usual to carry a big project solo —",
    blurredEn: "but that same drive is quietly building a wall at work...",
    fullZh:
      "那道牆，是「不容易接受別人的意見」。你會對自己的判斷特別有信心，遇到不同看法時，第一反應常常是說服對方而不是聽對方講完。這一年適合單打獨鬥開疆闢土，卻不適合團隊共識型的專案——如果你正在帶團隊，要留意自己是不是把「效率」變成了「我說了算」。真正該做的，是把這股旺盛的行動力，拿去開一條沒人走過的路，而不是拿來跟身邊的人爭對錯。",
    fullEn:
      "a wall made of not easily taking other people's input. You'll trust your own judgment more than usual, and when someone disagrees, your first instinct is to convince them rather than hear them out. This is a good year to strike out on your own into new territory — a harder one for consensus-driven team projects. If you're leading people, watch whether efficiency has quietly turned into 'I decide.' What this drive is actually for is breaking new ground nobody's walked yet — not winning arguments with the people around you.",
  },
  劫財: {
    visibleZh: "這一年職場上可能會出現搶同一個機會、同一個位置的對手，合作關係裡也容易冒出意見不合的角力，",
    blurredZh: "但這股較勁的氣氛，正在悄悄消耗一個你平常很依賴的東西……",
    visibleEn: "This year you may run into rivals gunning for the same opportunity or the same role, and partnerships can develop friction over disagreements —",
    blurredEn: "but that competitive atmosphere is quietly wearing down something you usually rely on...",
    fullZh:
      "你跟同事之間原本的信任感。這一年你可能會不自覺把身邊的夥伴也當成假想敵，資訊留一手、功勞搶著講，短期看似保護了自己，長期卻讓人不敢跟你深度合作。真正該做的，不是把每個人都當對手，而是分清楚「誰才是真正在跟我搶」，把力氣放在刀口上，其餘的合作關係好好維護。",
    fullEn:
      "your baseline trust with the people around you. You might start treating colleagues as rivals without meaning to — holding back information, rushing to claim credit — which protects you short-term but makes people hesitant to collaborate deeply with you long-term. What's actually worth doing is figuring out who's really competing with you, saving your energy for that, and keeping the rest of your working relationships intact.",
  },
  食神: {
    visibleZh: "這一年你的創意和表達會特別搶眼，很適合提案、發表、對外溝通，",
    blurredZh: "但這股才華外露的狀態，也藏著一個容易被忽略的風險……",
    visibleEn: "This year your creativity and communication will stand out — great for pitching, presenting, speaking to the outside world —",
    blurredEn: "but all that visible talent hides one easily overlooked risk...",
    fullZh:
      "說得比做得多。這一年你會有很多想法冒出來，也很擅長把想法講得漂亮，讓人一聽就心動，但如果每個想法都只停在「講出來」的階段，沒有真的落地執行，時間久了，別人對你的評價會慢慢從「很有才華」變成「很會講」。這一年最值得做的，是挑一兩個真正想做的點子，把它做到收尾，而不是讓十個點子都停在提案階段。",
    fullEn:
      "talking more than doing. Plenty of ideas will surface this year, and you're good at making them sound compelling — but if every idea only ever gets as far as being pitched, never actually built, people's read on you will drift from 'so talented' to 'all talk.' What's worth doing this year is picking one or two ideas you actually care about and carrying them through to the end, instead of letting ten ideas all stall at the pitch stage.",
  },
  傷官: {
    visibleZh: "這一年你看事情特別敏銳，也很敢對不合理的規定、決策提出質疑，",
    blurredZh: "但這份敢言的個性，容易讓你在職場上得罪一種特定的人……",
    visibleEn: "This year you'll read situations sharply, and you're not afraid to question rules or decisions that don't make sense —",
    blurredEn: "but that outspokenness tends to put you at odds with one specific kind of person at work...",
    fullZh:
      "你的主管，或是握有決定權的人。你可能只是就事論事，指出流程裡真正的問題，卻因為說話方式太直接、太快，讓對方感覺自己的權威被挑戰，而不是收到有建設性的意見。這一年你的洞察力其實是你的優勢，重點是把「這樣不對」包裝成「如果這樣調整會更好」，效果會差很多。",
    fullEn:
      "your boss, or whoever holds the decision-making power. You might just be pointing out a real problem in the process, but if it comes out too fast and too directly, they hear a challenge to their authority instead of constructive input. Your sharp insight is genuinely an asset this year — the difference is in how you frame it: swap 'this is wrong' for 'here's how this could work better,' and the reception changes a lot.",
  },
  偏財: {
    visibleZh: "這一年你可能會遇到一些意外的合作機會、斜槓案子，或是靠人脈介紹來的好差事，",
    blurredZh: "但這種「機會自己送上門」的好運，也容易讓你分心到一件事上……",
    visibleEn: "This year you may run into unexpected collaborations, side projects, or good opportunities that come through connections —",
    blurredEn: "but this streak of opportunities landing in your lap can pull your focus in one costly direction...",
    fullZh:
      "同時接太多案子。你可能因為每個機會看起來都不錯，捨不得拒絕，結果手上同時扛著好幾條線，反而每一個都做得不夠深入，甚至因為分身乏術而錯過真正重要的那一個。這一年最划算的做法，不是機會來者不拒，而是先篩選出一兩個真正符合你長期方向的，把資源集中在那上面。",
    fullEn:
      "taking on too much at once. Every opportunity might look good enough that you can't bring yourself to say no, and you end up juggling several threads at once, none of them getting the depth they need, possibly missing the one that actually mattered because you were stretched too thin. The smartest move this year isn't saying yes to everything — it's filtering down to the one or two that actually fit your longer-term direction, and putting your resources there.",
  },
  正財: {
    visibleZh: "這一年你對「成果」會特別有感，做事更講求效率，也更會替自己爭取實質利益，",
    blurredZh: "但這股務實的衝勁，也悄悄改變了你看同事的方式……",
    visibleEn: "This year you'll be sharply tuned to results — more efficient, more deliberate about securing real gains for yourself —",
    blurredEn: "but that practical drive is quietly changing how you see your coworkers...",
    fullZh:
      "你會開始用「這個人對我的目標有沒有幫助」來衡量身邊的人，合作變得更精打細算，人情味卻淡了一點。這一年確實適合拚成果、談加薪、爭取升遷，你的判斷力和執行力都在高點，但如果把每一段職場關係都算成利益交換，長期反而會少了願意在你低潮時拉你一把的人。這一年最划算的投資，其實是偶爾不計較地幫別人一次。",
    fullEn:
      "you'll start measuring people by whether they help your goals, making collaboration more calculated and a little less warm. This is genuinely a good year to chase results, negotiate a raise, push for a promotion — your judgment and execution are both running high — but if every workplace relationship gets counted as a transaction, you end up with fewer people willing to pull you up when you're down. The best investment this year is helping someone once without keeping score.",
  },
  七殺: {
    visibleZh: "這一年職場上可能會出現真正有威脅性的競爭——搶你位置的人、緊縮的預算，或是一次不能失敗的大案子，",
    blurredZh: "但這種高張力的挑戰，其實在幫你完成一件平常做不到的事……",
    visibleEn: "This year you may face genuinely threatening competition at work — someone gunning for your position, tighter budgets, or a high-stakes project you can't afford to fail —",
    blurredEn: "but that high-tension challenge is actually forcing out something you don't normally access...",
    fullZh:
      "逼出你的真本事。壓力小的時候，你很容易安於現狀；但這一年的高風險環境，會逼著你把潛力全部發揮出來，做出平常不敢做的決定、扛下平常會迴避的責任。這一年辛苦是真的，但撐過這一關的人，通常會被看見、被記住，甚至因此換到完全不同的位置。",
    fullEn:
      "forcing out your real capability. When pressure is low, it's easy to settle for the status quo; but this year's high-stakes environment pushes you to use everything you've got, to make calls you'd normally avoid and carry responsibility you'd normally sidestep. It's genuinely hard this year, but the people who get through it tend to get noticed, remembered, and sometimes moved into a completely different position because of it.",
  },
  正官: {
    visibleZh: "這一年你在工作上會遇到比較多考驗——上級的高標準、更嚴格的規則、或是難搞的合作對象，",
    blurredZh: "但這些考驗背後，其實藏著一個對你有利的安排……",
    visibleEn: "This year you'll hit more tests at work — higher standards from above, stricter rules, or a difficult person to work with —",
    blurredEn: "but hidden behind these tests is an arrangement that actually works in your favor...",
    fullZh:
      "撐過這些考驗的人，通常會被放到更重要的位置上——這一年的壓力，某種程度上是在替你做篩選。你可能會覺得委屈、被要求得比別人多，但這正是主管或環境在測試你「扛不扛得住責任」。這一年不適合抱怨規則不合理，而適合把每一次被刁難，都當成一次證明自己的機會——撐過去，升遷或加重用的機會通常就在後面。",
    fullEn:
      "the people who get through these tests are usually the ones who get moved into more important positions — this year's pressure is, in a sense, doing the sorting for you. You might feel like you're being asked to do more than everyone else and it feels unfair, but that's exactly the environment testing whether you can carry real responsibility. This isn't the year to complain the rules are unreasonable — it's the year to treat every hard moment as a chance to prove yourself. Getting through it usually puts a promotion or bigger role right behind it.",
  },
  偏印: {
    visibleZh: "這一年你會對某個領域產生特別深的鑽研欲望，喜歡自己摸索、自己找答案，",
    blurredZh: "但這種喜歡自己來的傾向，也容易讓你在職場上顯得有點……",
    visibleEn: "This year you'll want to dig deep into a specific area, preferring to figure things out on your own —",
    blurredEn: "but that self-reliant streak can make you come across, at work, as a little...",
    fullZh:
      "難以合作。你可能覺得跟別人解釋太麻煩，或是別人的做法不夠深入，乾脆自己悶頭做，結果雖然鑽研出獨到的見解，卻沒有人知道你在做什麼、也沒辦法跟你一起完成。這一年你的深度思考是真本事，但記得偶爾把研究成果講給別人聽——你的獨到，需要被看見，才能變成影響力。",
    fullEn:
      "hard to work with. Explaining yourself to others might feel like too much effort, or their approach might feel too shallow, so you just go quiet and figure it out alone — and while you come out with genuinely original insight, nobody knows what you've been working on, and nobody can build on it with you. Your depth of thinking is a real asset this year, but remember to occasionally share what you've found — your originality needs to be seen to actually become influence.",
  },
  正印: {
    visibleZh: "這一年你會遇到願意提拔你、教你的人，學習資源和機會也比較容易找上門，",
    blurredZh: "但這些送上門的資源，也可能讓你養成一種依賴……",
    visibleEn: "This year you'll run into people willing to mentor and promote you, with learning opportunities coming easier than usual —",
    blurredEn: "but resources that show up this easily can also build a dependency...",
    fullZh:
      "你可能會習慣「有人會告訴我怎麼做」，遇到問題先等指示，而不是自己先想辦法。這一年的貴人運確實旺，但真正決定你未來高度的，不是你遇到多少貴人，而是你有沒有把這些資源真的學進去、變成自己的能力。與其被動等別人餵養，不如主動去請教、去學，把這一年送到你面前的機會，吃乾抹淨。",
    fullEn:
      "getting used to someone always telling you what to do, waiting for instructions instead of figuring it out yourself first. Your luck with mentors is genuinely strong this year, but what actually determines how far you go isn't how many mentors you meet — it's whether you actually absorb what they offer and turn it into your own ability. Instead of passively waiting to be fed, go actively ask, actively learn, and get everything you can out of what shows up this year.",
  },
};

export const LIUNIAN_WEALTH: Record<LiunianCategory, Teaser> = {
  比肩: {
    visibleZh: "這一年賺錢的企圖心會變得很明顯，你會比平常更想靠自己的本事多賺一點，",
    blurredZh: "但這股「靠自己」的心態，同時也會讓你的錢包多一個破洞……",
    visibleEn: "This year your drive to earn on your own terms gets noticeably stronger — you'll want to prove you can make more through your own ability —",
    blurredEn: "but that same I'll-do-it-myself mindset opens up a leak in your wallet...",
    fullZh:
      "那個破洞是「不服輸的花費」。你可能會為了證明自己過得不差，或是不想在朋友、同輩面前輸人一截，而做出一些其實沒必要的支出。這一年真正的財運關鍵，不在賺多少，而在你能不能把「證明自己」的衝動，跟「花錢」這件事分開來看。把想爭一口氣的力氣，拿去投資自己的能力，會比拿去消費更划算。",
    fullEn:
      "a leak made of spending just to not lose face. You might make some genuinely unnecessary purchases just to prove you're doing fine, or to avoid feeling like you're falling behind friends and peers. The real key to money this year isn't how much you earn — it's whether you can separate the urge to prove yourself from the act of spending. Putting that competitive energy into building your own skills pays off better than putting it into your wallet.",
  },
  劫財: {
    visibleZh: "這一年錢財進出會變得比較頻繁，也容易因為跟人合夥、借貸、或搶快進場而牽動財運，",
    blurredZh: "但這種「怕慢一步就被搶走」的心情，特別容易讓你漏財在一個地方……",
    visibleEn: "This year money will move in and out more often, often tangled up with partnerships, loans, or rushing to get in before someone else does —",
    blurredEn: "but that fear of missing out is exactly what tends to leak money in one specific spot...",
    fullZh:
      "合夥或借貸的糾紛。這一年你可能會因為不想錯過機會，倉促答應合夥投資，或是礙於面子借錢給人、跟人共同背負開銷，事後卻發現條件沒談清楚，錢的去向也說不明白。這一年財運要顧好，重點是任何牽涉到「別人的錢」或「共同承擔」的決定，都先白紙黑字講清楚，再點頭。",
    fullEn:
      "disputes over partnerships or loans. Afraid of missing out, you might rush into a joint investment, or lend money or share expenses out of pride, only to realize later the terms were never clearly settled. The key to money this year is getting anything involving someone else's money or shared costs in writing before you say yes.",
  },
  食神: {
    visibleZh: "這一年你會有不少靠專長、才華或副業賺外快的機會，",
    blurredZh: "但賺得快的同時，也有一個花錢的習慣容易跟著冒出來……",
    visibleEn: "This year you'll get more chances to earn extra through your skills, talents, or a side hustle —",
    blurredEn: "but earning it fast comes with a spending habit that tends to show up right alongside it...",
    fullZh:
      "那就是「賺多少花多少」。這一年你的收入來源可能比較多元、比較活，但同時你也更容易因為手頭寬鬆而放鬆消費警覺，尤其是花在興趣、體驗、社交上的錢，會不知不覺變多。這一年財運的關鍵不是賺不到錢，而是能不能在錢進來的當下，先留一部分下來，而不是等到月底才發現全部花完了。",
    fullEn:
      "spending as much as you make. Your income sources may get more varied and lively this year, but that same looseness makes you quicker to relax your guard on spending — especially on hobbies, experiences, and socializing, which quietly add up. The key to money this year isn't earning enough — it's whether you can set some aside the moment it comes in, instead of realizing at month's end that it's all gone.",
  },
  傷官: {
    visibleZh: "這一年你可能會靠「說真話」或打破常規的做法賺到意外的收入，",
    blurredZh: "但這股敢衝敢說的性格，也容易讓你在錢的事情上得罪不該得罪的人……",
    visibleEn: "This year you may earn unexpected income by speaking bluntly or breaking from convention —",
    blurredEn: "but that same bold, outspoken streak can needlessly put you at odds with people involved in your money...",
    fullZh:
      "像是跟客戶、廠商或合作對象因為太直接的議價方式或批評，弄僵了原本可以談成的生意。這一年財運不差，但你需要多留一道緩衝——在牽涉到錢的對話裡，先聽完對方的立場，再表達自己的看法，而不是想到什麼就直接反駁，這樣能保住原本會流失的合作機會。",
    fullEn:
      "like straining a deal with a client, vendor, or partner because your negotiating or feedback style was too blunt. Money isn't bad this year, but you need to build in more of a buffer — in any conversation involving money, hear out the other side before you push back, instead of countering the moment something occurs to you. That keeps opportunities from slipping away that would otherwise have closed.",
  },
  偏財: {
    visibleZh: "這一年你的偏財運特別明顯——投資、副業、意外之財的機會都比平常多，",
    blurredZh: "但這種「來得快」的財運，背後也藏著一樣快的風險……",
    visibleEn: "This year your luck with windfall income stands out — more opportunities than usual for investments, side income, and unexpected gains —",
    blurredEn: "but money that arrives this fast hides a risk that moves just as fast...",
    fullZh:
      "去得也快。你可能會因為前面幾次小賺，就把膽子養大，把更多本金投入風險更高的機會，一旦市場轉向，回吐的速度會比賺的時候還快。這一年財運確實活絡，真正該做的，是把偏財賺到的部分，一部分拿去做穩健的累積，而不是全部滾回下一個更大的賭注裡。",
    fullEn:
      "it can leave just as fast. A few early wins might embolden you to put more capital into riskier bets, and when the market turns, you can give it back faster than you made it. Money is genuinely lively this year — what's actually worth doing is taking part of what you make from these windfalls and putting it toward something stable, instead of rolling all of it into an even bigger bet.",
  },
  正財: {
    visibleZh: "這一年你對錢的掌控感會變得很強，理財、投資、談判都特別有手感，",
    blurredZh: "但這股「一切都在我掌握中」的自信，也容易讓你踩到一個坑……",
    visibleEn: "This year your sense of control over money will feel strong — investing, negotiating, managing your finances all come easily —",
    blurredEn: "but that I've-got-this-handled confidence tends to walk you into one specific trap...",
    fullZh:
      "低估風險。這一年你可能會因為前面幾次判斷準確而變得更敢下注，加碼投入更多資源在同一個機會上，卻忘記市場或情勢從來不是完全可控的。這一年財運確實旺，但真正該守住的，不是賺更多，而是替自己設一個「就算判斷錯了也不會傷筋動骨」的停損點，再放手去衝。",
    fullEn:
      "underestimating risk. A few accurate calls early on may make you bolder, pushing more resources into the same bet, forgetting that markets and circumstances are never fully within your control. Money is genuinely strong for you this year, but what's actually worth protecting isn't earning more — it's setting a stop-loss point that won't seriously hurt you if you're wrong, before you go all in.",
  },
  七殺: {
    visibleZh: "這一年財務上可能會遇到比較大的挑戰——大筆支出、突然的資金壓力，或是投資判斷被迫在短時間內做決定，",
    blurredZh: "但這種逼到牆角的感覺，其實在提醒你一件平常你不願面對的事……",
    visibleEn: "This year you may run into bigger financial challenges — a large expense, sudden pressure on your cash flow, or an investment call you're forced to make fast —",
    blurredEn: "but that up-against-the-wall feeling is pointing at something you'd normally rather not face...",
    fullZh:
      "你的財務結構有沒有真正的抗壓性。這一年不是財運差，而是考驗你敢不敢在壓力下做出果斷的取捨——該停損的停損，該砍的支出砍掉，而不是拖著僥倖心態硬撐。撐過這一年財務考驗的人，通常會建立起一套真正經得起考驗的理財習慣，而不只是運氣好而已。",
    fullEn:
      "whether your financial structure can actually hold up under stress. This isn't a bad money year so much as a test of whether you can make decisive cuts under pressure — cutting losses when you need to, trimming spending when you need to, instead of dragging it out on hope. People who get through this year's financial test usually come out with money habits that actually hold up, not just luck.",
  },
  正官: {
    visibleZh: "這一年可能會出現比較多非預期的支出——罰款、修繕、人情往來、或是突發狀況，",
    blurredZh: "但這些花費的出現，其實在提醒你一件平常容易忽略的事……",
    visibleEn: "This year you may run into more unexpected expenses — a fine, a repair, an obligation, a sudden situation —",
    blurredEn: "but those expenses are actually pointing at something you usually overlook...",
    fullZh:
      "你的財務體質有沒有留緩衝空間。這一年不是財運不好，而是考驗你有沒有準備好應急金，能不能在意外發生時，不慌不亂地處理，而不是動用到不該動的錢。與其把這一年的支出都當成「倒楣」，不如趁機會建立起「有狀況也不怕」的財務安全網——這筆準備金，以後每一年都用得到。",
    fullEn:
      "whether your finances have any buffer built in. This isn't a bad money year so much as a test of whether you have an emergency fund, and whether you can handle a surprise calmly instead of dipping into money you shouldn't touch. Rather than writing this year's expenses off as bad luck, use it as a push to build a financial safety net that can take a hit without panic — one you'll keep using for years after this one.",
  },
  偏印: {
    visibleZh: "這一年你可能會靠一些比較冷門、獨特的專長或見解，接觸到不錯的財源，",
    blurredZh: "但這種靠「自己一套」賺錢的方式，也藏著一個容易被忽略的風險……",
    visibleEn: "This year you may tap into good income through a niche skill or unconventional insight —",
    blurredEn: "but earning through your own singular approach hides a risk that's easy to overlook...",
    fullZh:
      "資訊不透明。你可能習慣自己研究、自己判斷，較少跟別人討論財務決定，這讓你能抓到別人看不到的機會，卻也少了一層「被提醒風險」的保護網。這一年財運不錯，但重要的財務決定，還是值得找一個信任的人聊聊，不是要你聽他的，而是讓自己的判斷多一個檢查的機會。",
    fullEn:
      "a lack of outside input. You might prefer to research and decide alone, rarely discussing financial calls with anyone else — which lets you spot opportunities others miss, but also strips away a layer of protection that would've flagged the risk. Money is good this year, but it's still worth talking through the big financial decisions with someone you trust — not to follow their lead, but to give your own judgment one more check.",
  },
  正印: {
    visibleZh: "這一年你可能會收到一些意外的資源——長輩幫忙、退稅、獎金，或是別人主動幫你介紹好機會，",
    blurredZh: "但這種「錢自己送上門」的好運，也藏著一個容易鬆懈的陷阱……",
    visibleEn: "This year you may receive some unexpected resources — help from an elder, a tax refund, a bonus, or someone introducing you to a good opportunity —",
    blurredEn: "but money showing up this easily hides one trap that's easy to fall into...",
    fullZh:
      "不自覺放鬆對錢的規劃，覺得反正之後還會有意外之財，所以現在花得隨性一點也沒關係。這一年財運確實輕鬆，但真正該做的，是把這些意外收入的一部分，存下來或拿去投資，而不是全部當成「多出來的零用錢」花掉。讓好運變成長期的底氣，而不只是這一年的手頭寬裕。",
    fullEn:
      "unconsciously loosening your financial planning, assuming more windfalls are coming so it's fine to spend a bit more freely now. Money is genuinely easy this year, but what's actually worth doing is saving or investing part of that windfall, instead of treating all of it as extra pocket money to spend. Turn this luck into long-term security, not just a comfortable year.",
  },
};

export const LIUNIAN_HEALTH: Record<LiunianCategory, Teaser> = {
  比肩: {
    visibleZh: "這一年你會覺得自己精力特別旺盛，做什麼都比較有勁，",
    blurredZh: "但這種「感覺自己很強」的狀態，反而容易讓你忽略一件事……",
    visibleEn: "This year you'll feel unusually energetic, like you've got the stamina for anything —",
    blurredEn: "but feeling this strong makes it easy to overlook one thing...",
    fullZh:
      "身體其實有極限，不會因為你意志力強就跟著變強。你可能會把行程排得很滿，硬撐著不休息，覺得累一下沒關係，結果反而在年底前後，身體用一次「小病一場」提醒你該停下來。這一年的健康課題，是學會在「還撐得住」的時候就先休息，而不是等到「撐不住」才停下來。",
    fullEn:
      "your body has limits that don't stretch just because your willpower does. You might overpack your schedule and push through fatigue, telling yourself a little tiredness is fine — until your body eventually cashes that in with a minor illness that forces you to stop. The health lesson this year is learning to rest while you can still push through, instead of waiting until you can't.",
  },
  劫財: {
    visibleZh: "這一年你比較容易感覺到「不服輸」的緊繃感，身體也會跟著繃緊神經，",
    blurredZh: "但這種隨時準備競爭的狀態，正在悄悄影響你身體的一個系統……",
    visibleEn: "This year you're more likely to feel a refuse-to-lose kind of tension, and your body tenses right along with it —",
    blurredEn: "but staying braced for competition is quietly affecting one system in your body...",
    fullZh:
      "你的肌肉和關節。長期處在備戰、不肯放鬆的狀態，容易讓肩頸和腰背特別緊繃，甚至因為求快、求勝而在運動或勞動時受傷。這一年的健康課題，是刻意安排「不用跟誰比較」的放鬆時間——不管是伸展、按摩，還是單純什麼都不做，讓身體知道，現在不是戰鬥時間。",
    fullEn:
      "your muscles and joints. Staying braced for competition without letting up tends to leave your shoulders, neck, and back especially tight, and can even lead to injury when you push for speed or a win during exercise or physical work. The health lesson this year is deliberately scheduling downtime where you're not competing with anyone — stretching, a massage, or genuinely doing nothing — so your body knows it's not fight mode right now.",
  },
  食神: {
    visibleZh: "這一年你話會變多，社交、應酬、對外溝通的場合也會變多，",
    blurredZh: "但這種「一直在輸出」的狀態，對身體其實有個明確的消耗部位……",
    visibleEn: "This year you'll be talking more, with more socializing, more outward communication —",
    blurredEn: "but all that output wears on one specific part of your body...",
    fullZh:
      "喉嚨、腸胃和神經系統。你可能會比平常更容易嗓子啞、消化不良，或是晚上腦袋停不下來睡不好，這些都是「說太多、想太多」留下的痕跡。這一年的健康課題，是練習「留白」——每天留一小段完全不說話、不對外輸出的時間，讓身體有機會把消耗掉的能量補回來。",
    fullEn:
      "your throat, your gut, and your nervous system. You may find your voice going hoarse more easily, digestion acting up, or your mind refusing to switch off at night — all signs of talking and thinking too much. The health lesson this year is practicing blank space: leave a short stretch of every day where you say nothing and put nothing out, so your body gets a chance to recover what it spent.",
  },
  傷官: {
    visibleZh: "這一年你的情緒和想法會比較容易「衝出來」，反應快，也比較坐不住，",
    blurredZh: "但這種一觸即發的狀態，正在特別消耗你身體的一個部位……",
    visibleEn: "This year your emotions and thoughts will surface fast — quick reactions, harder to sit still —",
    blurredEn: "but that hair-trigger state is wearing on one specific part of your body...",
    fullZh:
      "你的肝和情緒系統。容易因為看不慣的事情而動氣，或是話說出口後又忍不住反覆想「剛剛是不是說太重了」，這種反覆的情緒起伏，比單純的疲勞更耗神。這一年的健康課題，是找到一個能讓情緒「先落地」的出口——運動、寫下來、找人聊，而不是任由念頭在腦中一直打轉。",
    fullEn:
      "your liver and your emotional system. You're quick to get worked up over things that bother you, or replay a conversation afterward wondering if you came on too strong — and that kind of emotional back-and-forth drains you more than plain fatigue does. The health lesson this year is finding somewhere for that emotion to actually land — exercise, writing it down, talking it through — instead of letting it loop in your head.",
  },
  偏財: {
    visibleZh: "這一年你的生活步調可能會變得比較不規律——應酬變多、行程變動大、作息跟著被打亂，",
    blurredZh: "但這種東奔西跑的狀態，容易讓你的身體出現一個明顯的訊號……",
    visibleEn: "This year your daily rhythm may get less regular — more social obligations, a schedule that keeps shifting, sleep thrown off along with it —",
    blurredEn: "but all that running around tends to send your body one clear signal...",
    fullZh:
      "腸胃和睡眠週期紊亂。你可能因為機會多而把行程排得又滿又亂，三餐時間不固定，也常常在該睡的時候還在忙下一件事。這一年的健康課題，是不管行程再怎麼變動，都替自己保留一個固定的「基本盤」——像是固定的用餐時間或睡前儀式，讓身體至少有一個可以依靠的節奏。",
    fullEn:
      "digestion and sleep getting thrown off. With more opportunities pulling at you, your schedule may get packed and erratic — irregular mealtimes, still handling the next thing when you should be asleep. The health lesson this year is keeping one fixed baseline no matter how much the schedule shifts — a regular mealtime, or a wind-down ritual before bed — so your body has at least one rhythm it can count on.",
  },
  正財: {
    visibleZh: "這一年你會把大部分精力投入在「做出成果」這件事上，",
    blurredZh: "但這種拚勁，容易讓你把身體發出的訊號，也一起排入待辦清單……",
    visibleEn: "This year most of your energy goes toward getting results —",
    blurredEn: "but that drive tends to shove your body's signals onto the to-do list too...",
    fullZh:
      "你可能會把疲勞、痠痛、睡不好都當成「先忍一下，等這個案子/目標做完再說」的小事，結果一延再延，小狀況拖成了慢性問題。這一年的健康課題，是把自己的身體也當成一項「該投資的資產」來看待——你願意花時間管理財務，也該用同樣的認真程度，替健康檢查排進行程表，而不是無限期往後延。",
    fullEn:
      "you might treat fatigue, aches, and bad sleep as things to just push through until the project or goal is done — and then keep pushing, until a small issue turns into a chronic one. The health lesson this year is treating your own body as an asset worth investing in too — you're willing to spend time managing your finances, so give your health check-up the same seriousness, on the actual calendar, instead of pushing it back indefinitely.",
  },
  七殺: {
    visibleZh: "這一年身體承受的壓力會比較直接，容易出現急性的狀況——突發的痠痛、感冒、或情緒上的崩潰邊緣，",
    blurredZh: "但這些比較劇烈的警訊，其實是身體在做一件事……",
    visibleEn: "This year your body may carry more direct strain — sudden aches, a cold, or emotional moments that feel close to breaking —",
    blurredEn: "but these more intense warning signs are actually your body doing one specific thing...",
    fullZh:
      "逼你不得不停下來。平常小小的不舒服你可能會忽略，但這一年身體選擇用比較劇烈的方式提醒你——因為溫和的訊號你都沒聽進去。這一年的健康課題，不是硬撐過每一個警訊，而是這次真的認真對待——該就醫就醫，該休息就休息，把這次的「劇烈」，當成最後一次不用更嚴重的方式提醒你的機會。",
    fullEn:
      "forcing you to actually stop. The small discomforts you'd normally shrug off might get ignored, so this year your body switches to a more intense way of getting your attention — because the gentle signals never landed. The health lesson this year isn't pushing through every warning — it's finally taking one seriously: see a doctor when you need to, rest when you need to, and treat this intensity as the last warning you get before it gets worse.",
  },
  正官: {
    visibleZh: "這一年你身上的壓力感會比較明顯，肩頸、腰背、或情緒緊繃的狀況容易被放大，",
    blurredZh: "但這種緊繃感，其實是身體在提醒你一個一直被忽略的習慣……",
    visibleEn: "This year you'll feel more visible pressure on your body — tight shoulders, back strain, or emotional tension that's easy to underestimate —",
    blurredEn: "but that tension is actually pointing at a habit you keep ignoring...",
    fullZh:
      "你習慣獨自扛所有事，很少主動說「我需要休息」或「我需要幫忙」。這一年外在的壓力本來就比較大，如果再加上你不肯示弱，身體只好用痠痛、失眠、免疫力下降來替你喊停。這一年的健康課題，是練習在還沒垮掉之前，就先開口求助——不管是找人分擔工作，還是單純去看醫生、按摩放鬆，都是必要的，不是軟弱。",
    fullEn:
      "you're used to carrying everything alone, rarely saying out loud that you need rest or need help. External pressure is already running higher this year, and if you refuse to show any weakness on top of that, your body ends up calling time-out through aches, insomnia, or a weaker immune system. The health lesson this year is asking for help before you actually break — whether that's handing off some work, or just seeing a doctor or getting a massage — none of that is weakness, it's necessary.",
  },
  偏印: {
    visibleZh: "這一年你會花比較多時間獨處、思考，甚至喜歡把自己關起來研究一件事，",
    blurredZh: "但這種向內收的狀態，容易讓身體出現一個不容易被發現的變化……",
    visibleEn: "This year you'll spend more time alone, thinking, maybe shutting yourself away to dig into something —",
    blurredEn: "but that inward-turned state tends to create a change in your body that's easy to miss...",
    fullZh:
      "睡眠變淺、容易想太多而失眠，或是因為久坐鑽研而缺乏活動。你可能不覺得自己「累」，因為腦袋一直很活躍，但身體其實一直沒有真正休息。這一年的健康課題，是刻意安排跟人接觸、動起來的時間——找人聊聊天、出門走走，讓自己從「想」的狀態，切換回「動」的狀態。",
    fullEn:
      "lighter sleep, insomnia from overthinking, or a lack of movement from sitting and researching for long stretches. You might not feel 'tired,' because your mind stays active, but your body never actually gets to rest. The health lesson this year is deliberately scheduling time with other people and time to move — talk to someone, go for a walk, switch yourself out of thinking mode and back into moving mode.",
  },
  正印: {
    visibleZh: "這一年你的身體會比較容易獲得休息的機會，睡眠品質和恢復力也會變好，",
    blurredZh: "但這種「容易恢復」的狀態，也可能讓你放鬆了一個平常有的警覺……",
    visibleEn: "This year your body will find it easier to get real rest, with better sleep quality and recovery —",
    blurredEn: "but recovering this easily can loosen a guard you'd normally keep up...",
    fullZh:
      "覺得反正睡一覺就會好，所以對小病小痛變得比較不在意，延遲該做的健康檢查或治療。這一年身體底子確實比較穩，是很適合調養、進補、恢復元氣的一年，但別把這份餘裕，變成忽略警訊的理由——該追蹤的數值、該回診的項目，還是要按時完成，才不會浪費了這一年身體給你的好狀態。",
    fullEn:
      "assuming a good night's sleep will fix anything, so you start dismissing small aches and pains, and put off check-ups or treatment you actually need. Your baseline health is genuinely solid this year, a good one for recuperating and rebuilding your reserves — but don't let that ease become a reason to ignore warning signs. Keep up with the numbers you're supposed to track and the follow-ups you're supposed to do, so you don't waste the good condition your body's giving you this year.",
  },
};
