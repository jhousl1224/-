import type { Teaser } from "./teaserData";
import type { LiunianCategory } from "./liunian";

export interface LiunianCategoryInfo {
  labelZh: string;
  labelEn: string;
  themeZh: string;
  themeEn: string;
}

export const LIUNIAN_CATEGORY_INFO: Record<LiunianCategory, LiunianCategoryInfo> = {
  比劫: { labelZh: "比劫年", labelEn: "Peer Year", themeZh: "自身能量旺盛，主導性變強", themeEn: "Your own drive and assertiveness surge" },
  食傷: {
    labelZh: "食傷年",
    labelEn: "Expression Year",
    themeZh: "才華外放，表達與創意特別活躍",
    themeEn: "Talent, expression, and creativity flow outward",
  },
  財星: {
    labelZh: "財星年",
    labelEn: "Wealth Year",
    themeZh: "掌控資源與成果的能力提升",
    themeEn: "Your grip on results and resources strengthens",
  },
  官殺: {
    labelZh: "官殺年",
    labelEn: "Pressure Year",
    themeZh: "外在考驗變多，責任與壓力並存",
    themeEn: "More external tests — responsibility and pressure both rise",
  },
  印星: {
    labelZh: "印星年",
    labelEn: "Support Year",
    themeZh: "資源與貴人靠近，適合休養補給",
    themeEn: "Support and mentors draw near — a year to rest and recharge",
  },
};

export const LIUNIAN_LOVE: Record<LiunianCategory, Teaser> = {
  比劫: {
    visibleZh: "這一年，你在感情裡的主導性會明顯變強，比較敢主動、也比較敢說出「我要什麼」，",
    blurredZh: "但這股底氣，也可能讓你在關係裡不小心做錯一件事……",
    visibleEn: "This year, you'll feel noticeably more assertive in relationships — more willing to make the first move, more willing to say what you actually want —",
    blurredEn: "but that confidence can also lead you into one specific mistake...",
    fullZh:
      "把「堅持自己」當成理所當然，忘記感情是兩個人的事。你會比平常更有主見，也更不容易被說服妥協，這在單身時是加分，但在關係中，如果對方也剛好想法強硬，很容易演變成互不相讓的拉扯。這一年真正該練習的，不是收起自己的主見，而是學會在「我要什麼」之後，多問一句「我們要什麼」。",
    fullEn:
      "treating standing your ground as automatically right, forgetting a relationship runs on two people's terms. You'll be more opinionated and harder to talk out of things than usual — great if you're single, but if your partner is just as firm this year, it can turn into a standoff where neither side backs down. What's worth practicing this year isn't quieting your own voice — it's adding one more question after 'what do I want': 'what do we want.'",
  },
  食傷: {
    visibleZh: "這一年你在感情裡會變得更會表達，也更懂得製造情趣和驚喜，",
    blurredZh: "但這份「很會經營氣氛」的能力，也可能讓你不小心說錯一句話……",
    visibleEn: "This year you'll get better at expressing yourself in relationships, and better at creating spark and surprise —",
    blurredEn: "but that same knack for setting the mood can slip out at exactly the wrong moment...",
    fullZh:
      "把「想到什麼就說什麼」用在了不該直說的時刻。這一年你的表達欲會特別旺盛，話多、點子多，對方一開始會覺得你很有趣，但如果對方正處在低潮或需要被聆聽的時刻，你的滔滔不絕反而會變成一種打斷。這一年感情要顧好，重點不是少說，而是在說之前，先確認對方現在需要的，是被逗笑，還是被聽見。",
    fullEn:
      "saying whatever comes to mind when it's actually not the moment for it. Your urge to express will run high this year — more talk, more ideas — and at first your partner will find you delightful, but if they're going through a low point and need to be heard, your stream of talk can start feeling like an interruption. The key to relationships this year isn't talking less — it's checking, before you speak, whether they need to be made to laugh or need to be listened to.",
  },
  財星: {
    visibleZh: "這一年你會很清楚自己在感情裡要什麼，也更懂得主動經營、投入資源，",
    blurredZh: "但這份「主動經營」的心態，一不小心就會變成另一種東西……",
    visibleEn: "This year you'll know exactly what you want in a relationship, and get better at actively investing in it —",
    blurredEn: "but that actively-invested mindset can slide into something else without you noticing...",
    fullZh:
      "把感情當成一項要管理的專案。你會很認真規劃約會、記得重要日子、甚至衡量這段關係「值不值得投入」，對方一開始會覺得被重視，但久了可能會感覺自己像被KPI檢核，而不是被單純地愛著。這一年感情要顧好，是記得偶爾放下「經營」的腦袋，單純浪費時間陪對方發呆，而不是每件事都要有產出。",
    fullEn:
      "managing the relationship like a project. You'll plan dates carefully, remember important dates, even weigh whether the relationship is worth the investment — your partner will feel valued at first, but over time it can start to feel like being tracked against a KPI instead of simply loved. The thing to remember this year is to occasionally drop the management mindset and just waste time together doing nothing in particular, instead of needing every moment to produce something.",
  },
  官殺: {
    visibleZh: "這一年感情中會出現比較多需要面對的現實問題，像是家庭期待、責任分配、未來規劃，",
    blurredZh: "但這些壓力出現的方式，常常會被你誤會成一件事……",
    visibleEn: "This year, relationships will run into more real-world pressures to face — family expectations, division of responsibility, planning ahead —",
    blurredEn: "but the way this pressure shows up tends to get misread as one specific thing...",
    fullZh:
      "你可能會覺得「是不是我們感情出了什麼問題」，但其實這些壓力多半來自關係之外——家人的意見、經濟現實、時間分配，而不是你們彼此不合適。這一年感情的課題，不是逃開這些現實問題，而是學會跟對方一起面對，把「我們要不要撐過這關」變成「我們怎麼一起撐過這關」。撐過這一年的關係，通常會變得更扎實。",
    fullEn:
      "you might start wondering if something's wrong between the two of you, when most of this pressure is actually coming from outside the relationship — family opinions, financial reality, time constraints — not incompatibility. The lesson this year isn't avoiding these real problems, it's facing them together, turning 'are we going to make it through this' into 'how do we make it through this together.' Relationships that get through this year tend to come out sturdier.",
  },
  印星: {
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
  比劫: {
    visibleZh: "這一年你的行動力會拉到最高，想到就做，也比較敢單槍匹馬扛下大案子，",
    blurredZh: "但這股衝勁，同時也在職場上悄悄立起一道牆……",
    visibleEn: "This year your drive to act hits a peak — you move the moment you think of something, and you're readier than usual to carry a big project solo —",
    blurredEn: "but that same drive is quietly building a wall at work...",
    fullZh:
      "那道牆，是「不容易接受別人的意見」。你會對自己的判斷特別有信心，遇到不同看法時，第一反應常常是說服對方而不是聽對方講完。這一年適合單打獨鬥開疆闢土，卻不適合團隊共識型的專案——如果你正在帶團隊，要留意自己是不是把「效率」變成了「我說了算」。真正該做的，是把這股旺盛的行動力，拿去開一條沒人走過的路，而不是拿來跟身邊的人爭對錯。",
    fullEn:
      "a wall made of not easily taking other people's input. You'll trust your own judgment more than usual, and when someone disagrees, your first instinct is to convince them rather than hear them out. This is a good year to strike out on your own into new territory — a harder one for consensus-driven team projects. If you're leading people, watch whether efficiency has quietly turned into 'I decide.' What this drive is actually for is breaking new ground nobody's walked yet — not winning arguments with the people around you.",
  },
  食傷: {
    visibleZh: "這一年你的創意和表達會特別搶眼，很適合提案、發表、對外溝通，",
    blurredZh: "但這股才華外露的狀態，也藏著一個容易被忽略的風險……",
    visibleEn: "This year your creativity and communication will stand out — great for pitching, presenting, speaking to the outside world —",
    blurredEn: "but all that visible talent hides one easily overlooked risk...",
    fullZh:
      "說得比做得多。這一年你會有很多想法冒出來，也很擅長把想法講得漂亮，讓人一聽就心動，但如果每個想法都只停在「講出來」的階段，沒有真的落地執行，時間久了，別人對你的評價會慢慢從「很有才華」變成「很會講」。這一年最值得做的，是挑一兩個真正想做的點子，把它做到收尾，而不是讓十個點子都停在提案階段。",
    fullEn:
      "talking more than doing. Plenty of ideas will surface this year, and you're good at making them sound compelling — but if every idea only ever gets as far as being pitched, never actually built, people's read on you will drift from 'so talented' to 'all talk.' What's worth doing this year is picking one or two ideas you actually care about and carrying them through to the end, instead of letting ten ideas all stall at the pitch stage.",
  },
  財星: {
    visibleZh: "這一年你對「成果」會特別有感，做事更講求效率，也更會替自己爭取實質利益，",
    blurredZh: "但這股務實的衝勁，也悄悄改變了你看同事的方式……",
    visibleEn: "This year you'll be sharply tuned to results — more efficient, more deliberate about securing real gains for yourself —",
    blurredEn: "but that practical drive is quietly changing how you see your coworkers...",
    fullZh:
      "你會開始用「這個人對我的目標有沒有幫助」來衡量身邊的人，合作變得更精打細算，人情味卻淡了一點。這一年確實適合拚成果、談加薪、爭取升遷，你的判斷力和執行力都在高點，但如果把每一段職場關係都算成利益交換，長期反而會少了願意在你低潮時拉你一把的人。這一年最划算的投資，其實是偶爾不計較地幫別人一次。",
    fullEn:
      "you'll start measuring people by whether they help your goals, making collaboration more calculated and a little less warm. This is genuinely a good year to chase results, negotiate a raise, push for a promotion — your judgment and execution are both running high — but if every workplace relationship gets counted as a transaction, you end up with fewer people willing to pull you up when you're down. The best investment this year is helping someone once without keeping score.",
  },
  官殺: {
    visibleZh: "這一年你在工作上會遇到比較多考驗——上級的高標準、更嚴格的規則、或是難搞的合作對象，",
    blurredZh: "但這些考驗背後，其實藏著一個對你有利的安排……",
    visibleEn: "This year you'll hit more tests at work — higher standards from above, stricter rules, or a difficult person to work with —",
    blurredEn: "but hidden behind these tests is an arrangement that actually works in your favor...",
    fullZh:
      "撐過這些考驗的人，通常會被放到更重要的位置上——這一年的壓力，某種程度上是在替你做篩選。你可能會覺得委屈、被要求得比別人多，但這正是主管或環境在測試你「扛不扛得住責任」。這一年不適合抱怨規則不合理，而適合把每一次被刁難，都當成一次證明自己的機會——撐過去，升遷或加重用的機會通常就在後面。",
    fullEn:
      "the people who get through these tests are usually the ones who get moved into more important positions — this year's pressure is, in a sense, doing the sorting for you. You might feel like you're being asked to do more than everyone else and it feels unfair, but that's exactly the environment testing whether you can carry real responsibility. This isn't the year to complain the rules are unreasonable — it's the year to treat every hard moment as a chance to prove yourself. Getting through it usually puts a promotion or bigger role right behind it.",
  },
  印星: {
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
  比劫: {
    visibleZh: "這一年賺錢的企圖心會變得很明顯，你會比平常更想靠自己的本事多賺一點，",
    blurredZh: "但這股「靠自己」的心態，同時也會讓你的錢包多一個破洞……",
    visibleEn: "This year your drive to earn on your own terms gets noticeably stronger — you'll want to prove you can make more through your own ability —",
    blurredEn: "but that same I'll-do-it-myself mindset opens up a leak in your wallet...",
    fullZh:
      "那個破洞是「不服輸的花費」。你可能會為了證明自己過得不差，或是不想在朋友、同輩面前輸人一截，而做出一些其實沒必要的支出。這一年真正的財運關鍵，不在賺多少，而在你能不能把「證明自己」的衝動，跟「花錢」這件事分開來看。把想爭一口氣的力氣，拿去投資自己的能力，會比拿去消費更划算。",
    fullEn:
      "a leak made of spending just to not lose face. You might make some genuinely unnecessary purchases just to prove you're doing fine, or to avoid feeling like you're falling behind friends and peers. The real key to money this year isn't how much you earn — it's whether you can separate the urge to prove yourself from the act of spending. Putting that competitive energy into building your own skills pays off better than putting it into your wallet.",
  },
  食傷: {
    visibleZh: "這一年你會有不少靠專長、才華或副業賺外快的機會，",
    blurredZh: "但賺得快的同時，也有一個花錢的習慣容易跟著冒出來……",
    visibleEn: "This year you'll get more chances to earn extra through your skills, talents, or a side hustle —",
    blurredEn: "but earning it fast comes with a spending habit that tends to show up right alongside it...",
    fullZh:
      "那就是「賺多少花多少」。這一年你的收入來源可能比較多元、比較活，但同時你也更容易因為手頭寬鬆而放鬆消費警覺，尤其是花在興趣、體驗、社交上的錢，會不知不覺變多。這一年財運的關鍵不是賺不到錢，而是能不能在錢進來的當下，先留一部分下來，而不是等到月底才發現全部花完了。",
    fullEn:
      "spending as much as you make. Your income sources may get more varied and lively this year, but that same looseness makes you quicker to relax your guard on spending — especially on hobbies, experiences, and socializing, which quietly add up. The key to money this year isn't earning enough — it's whether you can set some aside the moment it comes in, instead of realizing at month's end that it's all gone.",
  },
  財星: {
    visibleZh: "這一年你對錢的掌控感會變得很強，理財、投資、談判都特別有手感，",
    blurredZh: "但這股「一切都在我掌握中」的自信，也容易讓你踩到一個坑……",
    visibleEn: "This year your sense of control over money will feel strong — investing, negotiating, managing your finances all come easily —",
    blurredEn: "but that I've-got-this-handled confidence tends to walk you into one specific trap...",
    fullZh:
      "低估風險。這一年你可能會因為前面幾次判斷準確而變得更敢下注，加碼投入更多資源在同一個機會上，卻忘記市場或情勢從來不是完全可控的。這一年財運確實旺，但真正該守住的，不是賺更多，而是替自己設一個「就算判斷錯了也不會傷筋動骨」的停損點，再放手去衝。",
    fullEn:
      "underestimating risk. A few accurate calls early on may make you bolder, pushing more resources into the same bet, forgetting that markets and circumstances are never fully within your control. Money is genuinely strong for you this year, but what's actually worth protecting isn't earning more — it's setting a stop-loss point that won't seriously hurt you if you're wrong, before you go all in.",
  },
  官殺: {
    visibleZh: "這一年可能會出現比較多非預期的支出——罰款、修繕、人情往來、或是突發狀況，",
    blurredZh: "但這些花費的出現，其實在提醒你一件平常容易忽略的事……",
    visibleEn: "This year you may run into more unexpected expenses — a fine, a repair, an obligation, a sudden situation —",
    blurredEn: "but those expenses are actually pointing at something you usually overlook...",
    fullZh:
      "你的財務體質有沒有留緩衝空間。這一年不是財運不好，而是考驗你有沒有準備好應急金，能不能在意外發生時，不慌不亂地處理，而不是動用到不該動的錢。與其把這一年的支出都當成「倒楣」，不如趁機會建立起「有狀況也不怕」的財務安全網——這筆準備金，以後每一年都用得到。",
    fullEn:
      "whether your finances have any buffer built in. This isn't a bad money year so much as a test of whether you have an emergency fund, and whether you can handle a surprise calmly instead of dipping into money you shouldn't touch. Rather than writing this year's expenses off as bad luck, use it as a push to build a financial safety net that can take a hit without panic — one you'll keep using for years after this one.",
  },
  印星: {
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
  比劫: {
    visibleZh: "這一年你會覺得自己精力特別旺盛，做什麼都比較有勁，",
    blurredZh: "但這種「感覺自己很強」的狀態，反而容易讓你忽略一件事……",
    visibleEn: "This year you'll feel unusually energetic, like you've got the stamina for anything —",
    blurredEn: "but feeling this strong makes it easy to overlook one thing...",
    fullZh:
      "身體其實有極限，不會因為你意志力強就跟著變強。你可能會把行程排得很滿，硬撐著不休息，覺得累一下沒關係，結果反而在年底前後，身體用一次「小病一場」提醒你該停下來。這一年的健康課題，是學會在「還撐得住」的時候就先休息，而不是等到「撐不住」才停下來。",
    fullEn:
      "your body has limits that don't stretch just because your willpower does. You might overpack your schedule and push through fatigue, telling yourself a little tiredness is fine — until your body eventually cashes that in with a minor illness that forces you to stop. The health lesson this year is learning to rest while you can still push through, instead of waiting until you can't.",
  },
  食傷: {
    visibleZh: "這一年你話會變多，社交、應酬、對外溝通的場合也會變多，",
    blurredZh: "但這種「一直在輸出」的狀態，對身體其實有個明確的消耗部位……",
    visibleEn: "This year you'll be talking more, with more socializing, more outward communication —",
    blurredEn: "but all that output wears on one specific part of your body...",
    fullZh:
      "喉嚨、腸胃和神經系統。你可能會比平常更容易嗓子啞、消化不良，或是晚上腦袋停不下來睡不好，這些都是「說太多、想太多」留下的痕跡。這一年的健康課題，是練習「留白」——每天留一小段完全不說話、不對外輸出的時間，讓身體有機會把消耗掉的能量補回來。",
    fullEn:
      "your throat, your gut, and your nervous system. You may find your voice going hoarse more easily, digestion acting up, or your mind refusing to switch off at night — all signs of talking and thinking too much. The health lesson this year is practicing blank space: leave a short stretch of every day where you say nothing and put nothing out, so your body gets a chance to recover what it spent.",
  },
  財星: {
    visibleZh: "這一年你會把大部分精力投入在「做出成果」這件事上，",
    blurredZh: "但這種拚勁，容易讓你把身體發出的訊號，也一起排入待辦清單……",
    visibleEn: "This year most of your energy goes toward getting results —",
    blurredEn: "but that drive tends to shove your body's signals onto the to-do list too...",
    fullZh:
      "你可能會把疲勞、痠痛、睡不好都當成「先忍一下，等這個案子/目標做完再說」的小事，結果一延再延，小狀況拖成了慢性問題。這一年的健康課題，是把自己的身體也當成一項「該投資的資產」來看待——你願意花時間管理財務，也該用同樣的認真程度，替健康檢查排進行程表，而不是無限期往後延。",
    fullEn:
      "you might treat fatigue, aches, and bad sleep as things to just push through until the project or goal is done — and then keep pushing, until a small issue turns into a chronic one. The health lesson this year is treating your own body as an asset worth investing in too — you're willing to spend time managing your finances, so give your health check-up the same seriousness, on the actual calendar, instead of pushing it back indefinitely.",
  },
  官殺: {
    visibleZh: "這一年你身上的壓力感會比較明顯，肩頸、腰背、或情緒緊繃的狀況容易被放大，",
    blurredZh: "但這種緊繃感，其實是身體在提醒你一個一直被忽略的習慣……",
    visibleEn: "This year you'll feel more visible pressure on your body — tight shoulders, back strain, or emotional tension that's easy to underestimate —",
    blurredEn: "but that tension is actually pointing at a habit you keep ignoring...",
    fullZh:
      "你習慣獨自扛所有事，很少主動說「我需要休息」或「我需要幫忙」。這一年外在的壓力本來就比較大，如果再加上你不肯示弱，身體只好用痠痛、失眠、免疫力下降來替你喊停。這一年的健康課題，是練習在還沒垮掉之前，就先開口求助——不管是找人分擔工作，還是單純去看醫生、按摩放鬆，都是必要的，不是軟弱。",
    fullEn:
      "you're used to carrying everything alone, rarely saying out loud that you need rest or need help. External pressure is already running higher this year, and if you refuse to show any weakness on top of that, your body ends up calling time-out through aches, insomnia, or a weaker immune system. The health lesson this year is asking for help before you actually break — whether that's handing off some work, or just seeing a doctor or getting a massage — none of that is weakness, it's necessary.",
  },
  印星: {
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
