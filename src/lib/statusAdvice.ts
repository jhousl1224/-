import type { Teaser } from "./teaserData";
import type { CareerStatus, RelationshipStatus } from "./types";

export type AgeBracket = "young" | "mid" | "senior";

export function getAgeBracket(birthYear: number): AgeBracket {
  const age = new Date().getFullYear() - birthYear;
  if (age <= 29) return "young";
  if (age <= 45) return "mid";
  return "senior";
}

export const RELATIONSHIP_ADVICE: Record<string, Record<RelationshipStatus, Teaser>> = {
  木: {
    stable: {
      visibleZh: "有伴侶的你，很容易把「陪伴」活成「帶著對方一起成長」，",
      blurredZh: "但這份用心，也可能悄悄變成對方的壓力……",
      visibleEn: "In a relationship, you naturally turn togetherness into growing side by side —",
      blurredEn: "but that good intention can quietly become pressure for your partner...",
      fullZh:
        "你會不自覺地替對方安排「進步計畫」，希望兩人一起變得更好，卻沒發現對方可能只是想單純被陪伴，而不是被推著往前走。這段關係要走得長久，重點不是停止成長，而是先問對方「你現在需要的是陪伴還是鼓勵」，而不是自己先決定答案。",
      fullEn:
        "You unconsciously draft a growth plan for the two of you, wanting to level up together, without noticing your partner might just want to be there with you, not pushed forward. What keeps this lasting isn't stopping the growth mindset — it's asking what they actually need right now, instead of deciding for them.",
    },
    single: {
      visibleZh: "單身的你，適合找一個也想一起變好、而不是等你帶領的人，",
      blurredZh: "但你在篩選對象時，很容易忽略一個重要訊號……",
      visibleEn: "Single, you're suited to someone who wants to grow alongside you — not someone waiting to be led —",
      blurredEn: "but there's an important signal you tend to overlook while sizing someone up...",
      fullZh:
        "那就是對方是不是也有自己的方向。你很容易被「需要被啟發」的人吸引，因為那讓你有發揮空間，但這種關係走到後來，常常變成你一個人在往前跑。真正適合你的對象，是那種已經在為自己的人生努力、只是剛好也想找人一起走的人——而不是等你來啟動的人。",
      fullEn:
        "whether they already have their own direction. You're drawn to people who need inspiring, because it gives you a role to play — but relationships like that tend to end up with you running ahead alone. Who actually fits you is someone already working on their own life, who just happens to want company on the way — not someone waiting for you to switch them on.",
    },
  },
  火: {
    stable: {
      visibleZh: "有伴侶的你，很擅長讓感情保持熱度，",
      blurredZh: "但這份熱情，其實藏著一個你自己都沒發現的習慣……",
      visibleEn: "In a relationship, you're genuinely good at keeping things exciting —",
      blurredEn: "but that passion hides a habit you haven't quite noticed in yourself...",
      fullZh:
        "你習慣用「製造驚喜」和「衝動表達愛」來維持關係的溫度，卻比較少花時間處理平淡日常裡的細節——記得對方隨口提過的小事、耐心聽完一件瑣碎的抱怨。長久的關係最後拚的不是誰比較會製造高潮，而是誰願意留在平淡裡。試著把一部分的熱情，轉成日常裡的耐心。",
      fullEn:
        "You keep the relationship warm through surprises and impulsive declarations of love, but spend less time on the quiet details — remembering something small they mentioned in passing, patiently hearing out a minor complaint. What long relationships actually run on isn't who creates more highs, it's who's willing to stay through the flat stretches. Try converting some of that passion into everyday patience.",
    },
    single: {
      visibleZh: "單身的你，適合找一個跟得上你節奏、又不會被你的熱度嚇跑的人，",
      blurredZh: "但你追求對象的方式，可能正在悄悄嚇跑一些好對象……",
      visibleEn: "Single, you're suited to someone who can keep pace with you without getting scared off by your intensity —",
      blurredEn: "but the way you go after someone might quietly be scaring off exactly the good ones...",
      fullZh:
        "你動心的速度很快，表達也很直接，這對同樣直率的人來說很吸引人，但對步調比較慢、需要時間確認感覺的人來說，反而會覺得壓力很大而後退。真正適合你的人，未必是跟你一樣火熱的類型，也可能是那種被你的熱情打動、卻需要你稍微放慢一點的人——放慢不是降溫，是給對方跟上的時間。",
      fullEn:
        "You fall fast and say it straight, which is magnetic to people who move the same way — but for someone slower, who needs time to be sure of their own feelings, that can feel like pressure and make them pull back. Who fits you best isn't necessarily someone as intense as you — it might be someone genuinely moved by your fire who just needs you to slow down a little. Slowing down isn't cooling off, it's giving them room to catch up.",
    },
  },
  土: {
    stable: {
      visibleZh: "有伴侶的你，很擅長把關係經營得穩定又踏實，",
      blurredZh: "但這份「穩」，久了容易變成另一種東西……",
      visibleEn: "In a relationship, you're genuinely good at making things feel stable and dependable —",
      blurredEn: "but over time, that steadiness can quietly turn into something else...",
      fullZh:
        "理所當然。你可能會覺得關係已經很穩了，不需要再刻意經營，慢慢停止說「我愛你」、停止製造小驚喜，把心力全部放到現實生活的維持上。對方感受到的不是不被愛，而是被視為理所當然。這段關係要長久，重點是偶爾提醒自己：穩定不代表可以停止表達。",
      fullEn:
        "taking it for granted. You might feel the relationship is stable enough that it doesn't need active tending anymore, gradually dropping the 'I love you's and the small surprises, pouring all your energy into keeping daily life running. What your partner feels isn't being unloved — it's being taken for granted. What keeps this lasting is remembering, every so often, that stability isn't a reason to stop showing it.",
    },
    single: {
      visibleZh: "單身的你，適合找一個個性穩定、值得長期投資的對象，",
      blurredZh: "但你在等待「確定」的過程中，可能正在錯過一件事……",
      visibleEn: "Single, you're suited to someone steady and worth investing in for the long run —",
      blurredEn: "but while you wait to feel certain, you might be missing something...",
      fullZh:
        "感情很少一開始就百分之百確定。你習慣在確認「這個人夠不夠穩定、夠不夠可靠」之後才願意投入，這讓你不容易受傷，但也容易讓你在一段關係還沒開始前，就先用理性把它否決掉了。真正適合你的對象，值得給彼此一點時間相處看看，而不是在紙上談兵階段就下結論。",
      fullEn:
        "few relationships start out 100% certain. You tend to wait until you've confirmed someone is stable and reliable enough before investing — which protects you from getting hurt, but also lets you rule out a relationship with pure logic before it even gets a chance to start. What actually fits you deserves a little real time together, not a verdict reached on paper.",
    },
  },
  金: {
    stable: {
      visibleZh: "有伴侶的你，很習慣把話說清楚、把界線劃明白，",
      blurredZh: "但這份清楚，久了會讓對方感覺到一件事……",
      visibleEn: "In a relationship, you're used to spelling things out clearly and keeping boundaries defined —",
      blurredEn: "but over time, that clarity can start to feel like one specific thing to your partner...",
      fullZh:
        "被檢查。你可能會不自覺地把對關係的高標準，用「指正」的方式表達出來，久了對方會覺得自己一直在被評分，而不是被單純地愛著。你的直接是優點，但長久的關係更需要偶爾放下標準，單純地欣賞對方本來的樣子，而不是可以改進的樣子。",
      fullEn:
        "being audited. You might unconsciously express your high standards for the relationship as corrections, and over time your partner starts to feel graded instead of simply loved. Your directness is a real strength, but a lasting relationship also needs you to occasionally drop the standards and just appreciate them as they are, not as a list of things that could be improved.",
    },
    single: {
      visibleZh: "單身的你，適合找一個一樣坦率、不會把你的直接當成冷漠的人，",
      blurredZh: "但你篩選對象的標準，可能正在幫你濾掉一些其實不錯的人……",
      visibleEn: "Single, you're suited to someone equally straightforward, who won't mistake your directness for coldness —",
      blurredEn: "but your filtering standards might be screening out some genuinely good people...",
      fullZh:
        "你很容易因為對方一個小缺點、一次表達不夠精準，就先在心裡扣分。但感情不是徵才，沒有人能一開始就完美符合你的條件。真正適合你的人，不是條件挑不出毛病的人，而是那種你越了解越覺得舒服、願意跟你一起把話說清楚的人——給對方多一點機會把話說完。",
      fullEn:
        "you're quick to dock mental points over one small flaw or one imprecisely worded sentence. But dating isn't hiring — nobody arrives already matching your spec perfectly. Who actually fits you isn't the person with no flaws on paper, it's someone who gets more comfortable the more you know them, willing to talk things through with you just as directly. Give people more room to finish making their case.",
    },
  },
  水: {
    stable: {
      visibleZh: "有伴侶的你，很懂得配合對方的步調，讓關係走得很順，",
      blurredZh: "但這份順利，其實是靠你一個人在撐著……",
      visibleEn: "In a relationship, you're skilled at adapting to your partner's pace, keeping things smooth —",
      blurredEn: "but that smoothness is often held up by you alone...",
      fullZh:
        "你太習慣把「配合」當成愛的表現，久而久之，連自己想要什麼都快忘記了，對方也漸漸習慣讓你來調整。這段關係要走得健康，不是繼續當那個負責配合的人，而是偶爾說出「這次換你配合我一次」——真正穩定的關係，是兩個人輪流退讓，而不是你一個人一直退。",
      fullEn:
        "you're so used to treating accommodation as how you show love that you start losing track of what you actually want, while your partner gets used to letting you make the adjustments. What keeps this healthy isn't staying the one who always bends — it's occasionally saying 'your turn to bend this time.' A genuinely stable relationship has both people taking turns giving ground, not just you.",
    },
    single: {
      visibleZh: "單身的你，適合找一個願意主動、會反過來照顧你的人，",
      blurredZh: "但你選對象的習慣，可能會不小心把這種人推開……",
      visibleEn: "Single, you're suited to someone who takes initiative and looks after you in return —",
      blurredEn: "but a habit of yours might accidentally push exactly that kind of person away...",
      fullZh:
        "你太容易被動地等對方主動、然後全盤配合對方的步調，這對懂得主動的人來說很輕鬆，卻也讓你難以分辨對方是真心經營，還是單純習慣被順著。真正適合你的人，是那種會主動關心「你想要什麼」的人——與其等對方展現出這個特質，不如你自己先主動一次，反而更容易篩出這種人。",
      fullEn:
        "you're too quick to wait passively and adapt fully once someone takes the lead, which makes things easy for someone who knows how to lead, but also makes it hard for you to tell whether they're genuinely invested or just used to you giving way. Who actually fits you is someone who actively asks what you want — and taking the first move yourself, instead of waiting for them to show that trait, is actually the faster way to find that kind of person.",
    },
  },
};

export const CAREER_PATH_ADVICE: Record<string, Record<CareerStatus, Teaser>> = {
  木: {
    stable: {
      visibleZh: "工作穩定、但心裡蠢蠢欲動想轉換跑道的你，其實很適合往「培育型」的方向走，",
      blurredZh: "但選錯轉職方向，可能會讓你的優勢完全用不上……",
      visibleEn: "Stable in your job but itching to switch tracks, you're actually well-suited to anything \"developmental\" —",
      blurredEn: "but picking the wrong direction could waste exactly what makes you good...",
      fullZh:
        "像是教育培訓、人才發展、內容創作，或需要規劃長期成長路線的產業經理職。你的天賦是陪著一件事或一個人從零長大，如果只是換一個「薪水更高但一樣一成不變」的位置，你很快又會倦怠。真的想加薪，不如往「能規劃、能培養」的管理職或顧問方向談；如果考慮創業，適合做教育類、成長型工作坊、或訂閱制的個人品牌——重點是找到「持續累積」的商業模式，而不是一次性的生意。",
      fullEn:
        "think education and training, talent development, content creation, or a management role built around long-term growth planning. Your gift is nurturing something — or someone — from scratch, and if you just swap into another role that pays more but stays just as repetitive, you'll burn out again fast. If a raise is the real goal, aim for management or consulting roles built around developing people. If you're considering starting something, education-style businesses, growth workshops, or a subscription-based personal brand fit you well — the key is a business model built on compounding, not one-off sales.",
    },
    unemployed: {
      visibleZh: "還在找方向的你，很適合投入需要陪伴、教學、或長期培養的產業，",
      blurredZh: "但求職時，有一種職缺會讓你特別容易迷失……",
      visibleEn: "Still searching for direction, you're well-suited to industries built around mentoring, teaching, or long-term development —",
      blurredEn: "but there's one kind of listing that's especially likely to leave you feeling lost...",
      fullZh:
        "看起來很自由、什麼都可以做、卻沒有明確成長路徑的「彈性職缺」。這種職缺聽起來輕鬆，卻會讓你失去方向感。適合你的職業類別包括：教育訓練、人資（人才發展）、社群經營、內容企劃，這些工作都有清楚的成長曲線可以依循。如果想創業，可以從「教別人一件你擅長的事」開始，例如線上課程、一對一諮詢、或社群型的知識服務——不需要一次做大，先從小規模的陪伴式生意開始最適合你。",
      fullEn:
        "flexible-sounding listings with no clear growth path, where \"you can do anything.\" They sound easy but leave you feeling directionless fast. Job categories that fit you well: education and training, HR (talent development), community management, content strategy — these all come with a visible growth curve to follow. If you're thinking about starting something, begin by teaching what you're already good at — an online course, one-on-one coaching, or a knowledge-based community service. You don't need to go big right away; a small, relationship-driven business suits you best to start.",
    },
  },
  火: {
    stable: {
      visibleZh: "工作穩定的你，如果想轉職或加薪，方向其實很明確，",
      blurredZh: "但很多人在這一步，會選錯讓自己發光的舞台……",
      visibleEn: "With a stable job, if you're eyeing a switch or a raise, the direction is actually pretty clear —",
      blurredEn: "but a lot of people take a wrong turn right at this step, picking the wrong stage to shine on...",
      fullZh:
        "往「站在最前面」的位置走，而不是往後勤或幕後角色靠。業務主管、品牌公關、活動製作、直播或內容主持，這些需要你被看見、被聽見的角色，才能真正把你的優勢換成收入。如果考慮創業，你適合做「個人品牌很重要」的生意，例如自媒體、活動策展、或需要你親自出面的服務型創業——你的魅力就是資產，千萬別把自己藏在幕後。",
      fullEn:
        "toward roles where you're front and center, not tucked into back-office or support functions. Sales leadership, brand PR, event production, hosting or livestreaming — anything that puts you in front of people is where your strengths actually convert into income. If you're weighing starting a business, go where personal branding matters: media, event curation, or a service business where you're the face of it. Your charisma is the asset — don't hide it behind the scenes.",
    },
    unemployed: {
      visibleZh: "求職中的你，很適合找需要「快速對外」的角色，",
      blurredZh: "但有一種求職方式，反而會讓你錯失機會……",
      visibleEn: "Job-hunting right now, you're well-suited to roles that need you to move outward fast —",
      blurredEn: "but one particular way of job-hunting is likely costing you opportunities...",
      fullZh:
        "投履歷後乾等通知，而不是主動聯絡、主動展現自己。業務、公關、活動企劃、行銷、直播銷售這類需要主動出擊、對外溝通的工作，會比行政內勤更快看到你的表現。如果想創業，你適合做需要「快速吸引注意力」的生意，例如直播帶貨、活動策劃、或短影音相關的內容事業——你的優勢是能快速炒熱氣氛，這在起步階段是很稀缺的能力。",
      fullEn:
        "sitting back and waiting to hear after sending an application, instead of reaching out and putting yourself forward. Sales, PR, event planning, marketing, livestream selling — anything that rewards proactive, outward-facing energy will show off what you're good at far faster than back-office admin work. If you're considering starting something, go where grabbing attention fast matters: livestream commerce, event production, or short-form content — your ability to energize a room quickly is a genuinely rare skill at the early stage of any venture.",
    },
  },
  土: {
    stable: {
      visibleZh: "工作穩定的你，如果想轉職或加薪，其實不用換到完全陌生的領域，",
      blurredZh: "因為你真正的優勢，換到哪個產業都一樣值錢……",
      visibleEn: "With a stable job, you don't actually need to jump into a totally unfamiliar field to get a raise or switch —",
      blurredEn: "because your real advantage stays valuable no matter which industry you move to...",
      fullZh:
        "那就是「把複雜的事情變得穩定可控」的能力。往流程管理、專案管理、營運、供應鏈這類需要把事情系統化的職位轉，會比跳去完全陌生的創意產業更容易加薪，也更容易被看見。如果考慮創業，你適合做「重複購買、需要長期信任」的生意，例如代辦服務、實體門市、或需要穩定交付品質的專業服務——你的可靠會變成客戶回購的理由。",
      fullEn:
        "making complicated things stable and controllable. Moving toward process management, project management, operations, or supply chain roles that need things systematized will get you a raise faster, and get you noticed faster, than jumping into an unfamiliar creative field. If you're considering starting something, go where repeat business and long-term trust matter — agency-style services, a physical storefront, or professional services where consistent delivery is the whole point. Your reliability becomes the reason customers keep coming back.",
    },
    unemployed: {
      visibleZh: "求職中的你，很適合找制度完整、有清楚 SOP 的產業，",
      blurredZh: "但你可能一直在找一種其實不適合現階段的工作……",
      visibleEn: "Job-hunting right now, you're well-suited to industries with solid structure and clear SOPs —",
      blurredEn: "but you might be chasing a type of job that doesn't actually fit where you are right now...",
      fullZh:
        "步調快、需要隨機應變、什麼都要自己摸索的新創或業務型工作。這種環境的不確定感，會讓你發揮不出真正的實力。行政管理、後勤、品保、物流、公部門或大型企業的營運職，會比新創業務更適合你現在的狀態，也更容易讓你穩定站穩腳步。如果想創業，建議先從「加盟」或「有既定模式可以複製」的生意開始，而不是完全從零摸索——你需要的是一個已經被驗證過的框架，讓你把可靠的優勢發揮出來。",
      fullEn:
        "fast-moving, improvise-as-you-go startup or sales-heavy roles. That uncertainty makes it hard for your real strengths to show. Administration, operations, quality assurance, logistics, or an operations role at a government agency or large company will fit where you are right now far better than an early-stage startup, and get you standing on solid ground faster. If you're thinking about starting something, begin with a franchise or a business model that's already proven and replicable, rather than figuring everything out from zero — what you need is a validated framework where your reliability can actually shine.",
    },
  },
  金: {
    stable: {
      visibleZh: "工作穩定的你，如果想轉職或加薪，你的專業本來就很有市場，",
      blurredZh: "但很多人在這一步，會選錯能真正放大這份專業的位置……",
      visibleEn: "With a stable job, your expertise is already genuinely marketable if you're eyeing a switch or a raise —",
      blurredEn: "but a lot of people pick the wrong kind of role at this step, one that can't actually amplify it...",
      fullZh:
        "往「需要精準判斷、有明確評鑑標準」的職位轉，而不是往需要模糊溝通、看感覺做事的角色靠。財務、法務、品管、稽核、數據分析這類職位，會讓你的高標準直接變成加薪籌碼。如果考慮創業，你適合做「專業服務」型的生意，例如顧問、審計、品質認證、或需要嚴謹流程的專業工作室——你的挑剔就是最好的品牌信任狀。",
      fullEn:
        "toward roles that actually reward precise judgment and clear evaluation criteria, not ones built on vague communication and going with the flow. Finance, legal, quality control, audit, data analysis — these turn your high standards directly into leverage for a raise. If you're weighing starting a business, professional-services models fit you well: consulting, auditing, quality certification, or a rigorously-run studio business — your exacting standards are the strongest brand trust signal you have.",
    },
    unemployed: {
      visibleZh: "求職中的你，很適合找需要嚴謹判斷、標準明確的職位，",
      blurredZh: "但有一種求職心態，反而會讓你錯過好機會……",
      visibleEn: "Job-hunting right now, you're well-suited to roles that need rigorous judgment and clear standards —",
      blurredEn: "but one particular mindset is likely costing you good opportunities...",
      fullZh:
        "覺得自己「還不夠完美」而遲遲不投履歷。你的高標準用在工作上是優勢，用在評估自己身上卻常常變成阻力。財會、法遵、品保、數據分析、編輯審校這類工作，本來就需要你這種挑剔的眼光，很適合現在投遞。如果想創業，你適合做需要「嚴格把關」的生意，例如檢驗、認證、精品代購、或高單價的專業諮詢——先從小規模、可控的範圍開始，把你的標準變成賣點，而不是拖延的理由。",
      fullEn:
        "feeling like you're \"not quite ready yet\" and holding off on applying. Your high standards are an asset at work, but turned on yourself in self-assessment, they usually become a brake. Finance, compliance, quality assurance, data analysis, editing and proofreading — these roles genuinely need your kind of exacting eye, and are worth applying to right now. If you're considering starting something, go where strict quality control matters: inspection, certification, premium sourcing, or high-value professional consulting. Start small and controlled, and turn your standards into the selling point instead of the reason you keep waiting.",
    },
  },
  水: {
    stable: {
      visibleZh: "工作穩定的你，如果想轉職或加薪，你的彈性其實是稀缺資源，",
      blurredZh: "但很多人會用錯地方，把彈性變成廉價勞力……",
      visibleEn: "With a stable job, your flexibility is actually a scarce resource if you're eyeing a switch or a raise —",
      blurredEn: "but a lot of people misuse it and let it turn into cheap, unlimited labor...",
      fullZh:
        "與其繼續當那個「什麼都能救火」的人，不如往需要跨部門協調、對外溝通的專業角色轉，例如顧問、專案經理、國際業務、或需要整合多方意見的角色——這些位置會直接把你的適應力換算成薪水，而不是繼續消耗你。如果考慮創業，你適合做需要「靈活應變」的生意，例如國際貿易、跨境電商、或提供彈性解決方案的顧問服務——你的優勢是能隨環境調整，選一個變動性本身就是常態的產業，會比穩定不變的產業更適合你發揮。",
      fullEn:
        "instead of staying the person who puts out every fire, move toward professional roles built around cross-team coordination and outward communication — consulting, project management, international sales, or roles integrating input from multiple sides. These convert your adaptability directly into pay, instead of just draining it. If you're weighing starting something, businesses that need agility fit you well: international trade, cross-border e-commerce, or a flexible-solutions consultancy. Your strength is adjusting to changing conditions, so an industry where change is the norm suits you better than a static, unchanging one.",
    },
    unemployed: {
      visibleZh: "求職中的你，很適合找需要跨領域溝通、彈性應變的角色，",
      blurredZh: "但你可能一直在等一個「完全符合條件」的職缺才敢投……",
      visibleEn: "Job-hunting right now, you're well-suited to roles needing cross-field communication and flexibility —",
      blurredEn: "but you might keep waiting for a listing that matches every single requirement before applying...",
      fullZh:
        "而錯過很多其實很適合你、只是條件寫得不完全吻合的機會。顧問、專案協調、客服、國際業務、跨部門窗口，這類角色本來就重視「能不能快速上手不同情境」，比起條件完全符合，你的適應力才是真正的加分項。如果想創業，你適合做需要「串連資源」的生意，例如仲介、代理、跨境電商、或整合型的顧問服務——你的強項是把分散的資源和人脈串在一起，這正是很多小型生意最需要的能力。",
      fullEn:
        "and missing a lot of roles that would actually suit you well, just because the posting wasn't a perfect match on paper. Consulting, project coordination, customer service, international sales, cross-department liaison roles — these value how fast you can adapt to a new situation more than a perfect checklist match, and your adaptability is the real point in your favor. If you're considering starting something, go where connecting resources matters: brokering, agency work, cross-border e-commerce, or an integrative consulting service. Your strength is linking scattered resources and relationships together — exactly what most small businesses need most.",
    },
  },
};

export const CAREER_ADVICE: Record<string, Record<CareerStatus, Teaser>> = {
  木: {
    stable: {
      visibleZh: "工作穩定的你，很容易在目前的位置上做得順手，",
      blurredZh: "但這份順手，也可能是一個警訊……",
      visibleEn: "With a stable job, you tend to get comfortable in your current role —",
      blurredEn: "but that comfort might actually be a warning sign...",
      fullZh:
        "代表你可能已經很久沒有真正學到新東西了。你的動力來自持續成長，一旦停止進步，你會比別人更快感到倦怠，只是自己可能還沒意識到。這段穩定期最該做的，不是繼續原地打轉，而是主動替自己找一個新技能、新專案，讓「穩定」變成「累積」，而不是「停滯」。",
      fullEn:
        "it might mean you haven't genuinely learned anything new in a while. Your drive comes from continuous growth, and once that stalls, you burn out faster than most people — often before you even notice it happening. What's worth doing during this stable stretch isn't spinning in place, it's actively finding a new skill or project so 'stable' becomes 'compounding' instead of 'stuck.'",
    },
    unemployed: {
      visibleZh: "現在還在找工作的你，適合找那種有明確成長路徑的角色，",
      blurredZh: "但求職的時候，你可能會不小心把一種機會排除掉……",
      visibleEn: "Job-hunting right now, you're suited to roles with a clearly visible growth path —",
      blurredEn: "but you might be unintentionally ruling out one kind of opportunity...",
      fullZh:
        "看起來「起薪不高但學得到東西」的機會。你很容易被薪水數字或職稱吸引，卻忽略了一份工作能不能讓你持續成長，才是你真正在意、也最能發揮實力的地方。找工作時不妨多問一句：這個位置一年後、三年後，會不會有明顯的進步空間？這比起薪多少更值得你考慮。",
      fullEn:
        "roles that pay less upfront but teach you a lot. You're easily drawn to the salary number or the job title, while overlooking whether a job actually lets you keep growing — which is what you genuinely care about, and where you perform best. Worth asking in interviews: will this role look meaningfully different in a year, in three years? That matters more to you than the starting number.",
    },
  },
  火: {
    stable: {
      visibleZh: "工作穩定的你，很適合當團隊裡帶氣氛、衝業績的角色，",
      blurredZh: "但這份亮眼，也讓你容易忽略一件事……",
      visibleEn: "With a stable job, you're a natural at energizing the team and driving results —",
      blurredEn: "but being the bright spot makes it easy to overlook one thing...",
      fullZh:
        "後續的細節收尾。你擅長把場子炒熱、把案子啟動，卻不一定有耐心跟到最後的執行細節，久了主管可能會覺得你「很會開始，但要別人幫你收尾」。這段穩定期值得練習的，是挑一件事從頭跟到尾，把「收尾」也變成你的強項，而不只是「啟動」。",
      fullEn:
        "the follow-through on the details. You're great at firing up a room and kicking off a project, but not always patient enough to see the execution details through, and over time your manager may notice you're great at starting but need others to close things out. Worth practicing during this stable stretch: pick one thing and carry it all the way through, making follow-through a strength too, not just the launch.",
    },
    unemployed: {
      visibleZh: "現在還在找工作的你，適合找步調快、需要對外溝通的角色，",
      blurredZh: "但求職的時候，有一種環境你最好先避開……",
      visibleEn: "Job-hunting right now, you're suited to fast-paced roles involving a lot of outward communication —",
      blurredEn: "but there's one kind of environment you're better off avoiding for now...",
      fullZh:
        "節奏慢、流程繁瑣、決策要等很久的環境。這種環境會讓你的優勢完全發揮不出來，甚至讓你在還沒真正上手前就先感到倦怠。業務、活動企劃、公關、對客戶端的角色，會比後台行政或流程冗長的大型組織更適合你現階段發揮實力。",
      fullEn:
        "slow-moving, process-heavy places where decisions take forever. That kind of environment blunts your strengths completely, and can burn you out before you've even really gotten started. Sales, event planning, PR, and client-facing roles will let you perform at your best right now, more than back-office admin work or a large organization with long approval chains.",
    },
  },
  土: {
    stable: {
      visibleZh: "工作穩定的你，很擅長把事情做得踏實可靠，",
      blurredZh: "但這份可靠，也可能讓你錯過一些機會……",
      visibleEn: "With a stable job, you're genuinely good at getting things done reliably —",
      blurredEn: "but that reliability can also make you miss some opportunities...",
      fullZh:
        "因為太害怕改變，你可能會把「現在還算安穩」當成不去爭取新機會的理由，即使心裡其實想要更多。穩定不代表要停在原地，試著在安全範圍內，主動爭取一個你原本會猶豫的機會——你的抗壓性遠比自己以為的更強，只是很少給自己機會證明。",
      fullEn:
        "being too afraid of change can make you treat 'good enough for now' as a reason not to reach for something new, even when part of you wants more. Stability doesn't mean staying put. Try, within a safe margin, actively going for an opportunity you'd normally hesitate on — your tolerance for pressure is stronger than you give yourself credit for, you just rarely get to prove it.",
    },
    unemployed: {
      visibleZh: "現在還在找工作的你，適合找制度完整、有明確流程的公司，",
      blurredZh: "但求職期間，有一種選擇會讓你特別不安……",
      visibleEn: "Job-hunting right now, you're suited to companies with solid structure and clear processes —",
      blurredEn: "but one kind of choice during your search is likely to make you especially uneasy...",
      fullZh:
        "步調混亂、什麼都要自己摸索的新創或小團隊。這種環境不是不適合你，而是現階段的不確定感，會讓你原本的優勢——穩定、可靠——完全發揮不出來。找工作時，可以優先考慮有完整教育訓練、制度清楚的公司，讓你先站穩腳步，之後再談挑戰也不遲。",
      fullEn:
        "chaotic startups or small teams where you have to figure everything out yourself. It's not that you can't handle it — it's that the uncertainty right now would blunt exactly what makes you strong: steadiness and reliability. When job-hunting, prioritize companies with solid onboarding and clear structure, so you can find your footing first. There's plenty of time for a bigger challenge later.",
    },
  },
  金: {
    stable: {
      visibleZh: "工作穩定的你，很擅長把標準訂高、把事情做得精準，",
      blurredZh: "但這份高標準，久了會讓同事對你有一種觀感……",
      visibleEn: "With a stable job, you're skilled at setting high standards and executing with precision —",
      blurredEn: "but that high bar can build one specific reputation with your coworkers over time...",
      fullZh:
        "難合作。你對品質的要求是真本事，但如果每次都用「這樣不對」開頭，久了大家會不太敢跟你合作，怕被挑剔。試著在指出問題之前，先肯定對方已經做對的部分——你的專業不會因此打折，反而更容易被人接受，也更有影響力。",
      fullEn:
        "hard to work with. Your standard for quality is a genuine strength, but if every piece of feedback opens with 'this is wrong,' people eventually get hesitant to collaborate with you, worried about being picked apart. Try acknowledging what's already right before pointing out the problem — your expertise doesn't get diluted, it just lands better and carries more actual influence.",
    },
    unemployed: {
      visibleZh: "現在還在找工作的你，適合找需要精準判斷、標準明確的角色，",
      blurredZh: "但求職的時候，有一種職缺你最好特別小心……",
      visibleEn: "Job-hunting right now, you're suited to roles that need precise judgment and clear standards —",
      blurredEn: "but there's one kind of listing you should be especially careful with...",
      fullZh:
        "職責模糊、什麼都要做一點的「萬用型」職缺。這種角色沒有明確的評判標準，會讓你很難施展你最擅長的能力——精準判斷、品質把關。品管、審核、分析、編輯這類需要明確標準的工作，會比職責模糊的職缺更能發揮你的實力，也更容易做出成績被看見。",
      fullEn:
        "vague 'jack of all trades' roles with fuzzy responsibilities. Without a clear standard to work against, it's hard for you to use what you're best at — precise judgment and quality control. Roles like quality assurance, review, analysis, or editing, which have clear criteria, let you perform at your best and get your results actually noticed, far more than an ill-defined catch-all position.",
    },
  },
  水: {
    stable: {
      visibleZh: "工作穩定的你，很容易因為好配合，被交付越來越多任務，",
      blurredZh: "但這份好配合，也可能讓你陷入一個處境……",
      visibleEn: "With a stable job, being easy to work with means you keep getting handed more —",
      blurredEn: "but that easygoing nature can also land you in a tricky spot...",
      fullZh:
        "被視為理所當然。你很少拒絕額外的請求，久了大家會覺得「反正找你就對了」，工作量在不知不覺中越堆越多，卻沒有相對應的肯定或報酬。這段穩定期最該練習的，是學會說「這個我需要先確認一下」，而不是每次都直接答應——你的彈性是資源，不是無限供應。",
      fullEn:
        "being taken for granted. You rarely say no to extra requests, and over time people default to 'just ask them,' quietly piling on more work without matching recognition or pay. What's worth practicing during this stable stretch is saying 'let me check on that first' instead of agreeing on the spot every time — your flexibility is a resource, not an unlimited supply.",
    },
    unemployed: {
      visibleZh: "現在還在找工作的你，適合找需要彈性應變、跨部門溝通的角色，",
      blurredZh: "但求職的時候，有一件事你反而最容易忽略……",
      visibleEn: "Job-hunting right now, you're suited to roles needing flexibility and cross-team communication —",
      blurredEn: "but there's one thing you're most likely to overlook during your search...",
      fullZh:
        "把「適應力強」講出來當成你的優勢。你可能覺得這是理所當然的特質，不值得特別提，但對很多公司來說，一個能快速融入不同團隊、隨情況調整做法的人非常稀缺。顧問、專案協調、客戶服務這類需要彈性和溝通的角色，會特別適合你，面試時記得主動把這個特質講出來。",
      fullEn:
        "actually naming 'highly adaptable' as one of your strengths. You might think it's just how you are and not worth mentioning, but for a lot of companies, someone who can blend into different teams fast and adjust their approach on the fly is genuinely rare. Roles like consulting, project coordination, and client services — anything needing flexibility and communication — suit you especially well. Remember to actually say this out loud in interviews.",
    },
  },
};

export const WEALTH_IMPROVEMENT_ADVICE: Record<string, Record<AgeBracket, Teaser>> = {
  木: {
    young: {
      visibleZh: "木屬性的人錢留不住，很多時候不是花太多，",
      blurredZh: "而是你一直把「賺更多」這件事，排在另一件事後面……",
      visibleEn: "Money not sticking around for a Wood element usually isn't about spending too much —",
      blurredEn: "it's that you keep putting 'earning more' behind something else...",
      fullZh:
        "排在「先讓自己變得更好」後面。你把大部分心力放在學習、進修、累積能力上，卻遲遲沒有讓這些投資真正轉換成收入——你現在最該做的，不是再多上一堂課，而是找一個方法，把你已經會的東西變現，哪怕只是接一個小案子、賣一個小技能，先讓「成長」開始產生現金流。",
      fullEn:
        "behind 'becoming better first.' You pour most of your energy into learning, training, building skills, but rarely turn that investment into actual income. What's worth doing right now isn't one more course — it's finding a way to monetize what you already know, even a small gig or a small skill sold, so 'growth' starts generating cash flow instead of just costing it.",
    },
    mid: {
      visibleZh: "木屬性的人錢留不住，很多時候不是花太多，",
      blurredZh: "而是你一直把「賺更多」這件事，排在另一件事後面……",
      visibleEn: "Money not sticking around for a Wood element usually isn't about spending too much —",
      blurredEn: "it's that you keep putting 'earning more' behind something else...",
      fullZh:
        "排在照顧家庭、栽培他人的責任後面。這個階段你可能一邊扛著房貸、孩子的教育費，一邊還在想著怎麼讓自己更好，卻沒把「增加收入」排進待辦清單的前幾名。這個年紀最該做的，是重新盤點一次現有的專業和人脈，看看有沒有能直接加薪或轉職的機會，而不是繼續用「進修」拖延「賺更多」這件事。",
      fullEn:
        "behind responsibilities — caring for family, developing other people. At this stage you might be juggling a mortgage and school fees while still thinking about self-improvement, without putting 'increase my income' anywhere near the top of the list. What's worth doing at this age is taking stock of your existing expertise and network for a real raise or career move, instead of letting more training keep postponing actually earning more.",
    },
    senior: {
      visibleZh: "木屬性的人錢留不住，很多時候不是花太多，",
      blurredZh: "而是你一直把「賺更多」這件事，排在另一件事後面……",
      visibleEn: "Money not sticking around for a Wood element usually isn't about spending too much —",
      blurredEn: "it's that you keep putting 'earning more' behind something else...",
      fullZh:
        "排在還想繼續學習、還想證明自己的心態後面。這個階段你可能仍然把資源投入在新的證照、新的領域，卻沒有把已經累積幾十年的專業，變成穩定的被動收入或顧問收入。這個年紀最該做的，是盤點一次自己真正值錢的能力，把它變成一項可以持續產生收入的資產，而不是繼續當學生。",
      fullEn:
        "behind still wanting to learn, still wanting to prove yourself. At this stage you might still be pouring resources into new certifications or new fields, without turning decades of accumulated expertise into steady passive or consulting income. What's worth doing at this age is taking stock of what you're genuinely worth, and turning it into an asset that keeps generating income — instead of staying a student.",
    },
  },
  火: {
    young: {
      visibleZh: "火屬性的人錢留不住，關鍵不只是衝動消費，",
      blurredZh: "而是你的財務系統，一直靠「當下的感覺」在運作……",
      visibleEn: "Money not sticking around for a Fire element isn't only about impulse spending —",
      blurredEn: "it's that your whole financial system runs on how you feel in the moment...",
      fullZh:
        "有錢就花、沒特別記帳、投資也常常憑感覺進出。這個階段本錢還不多，靠感覺理財的代價相對可以承受，但也是建立習慣的黃金期。你現在最該做的，是強迫自己設一個最簡單的規則——薪水一入帳，先自動轉一筆固定比例到另一個帳戶，不用管感覺，先讓「存錢」變成反射動作。",
      fullEn:
        "spend when there's money, skip the tracking, and buy or sell investments on a whim. Your capital is still small at this stage, so the cost of feeling-based money management is manageable, but it's also the best window to build a habit. What's worth doing right now is forcing one simple rule on yourself: the moment your paycheck lands, auto-transfer a fixed percentage to another account, no feelings involved — make saving a reflex.",
    },
    mid: {
      visibleZh: "火屬性的人錢留不住，關鍵不只是衝動消費，",
      blurredZh: "而是你的財務系統，一直靠「當下的感覺」在運作……",
      visibleEn: "Money not sticking around for a Fire element isn't only about impulse spending —",
      blurredEn: "it's that your whole financial system runs on how you feel in the moment...",
      fullZh:
        "收入可能變高了，花錢的手筆也跟著變大，但資產配置卻沒有跟著變得更有系統，重要的保險、儲蓄計畫常常因為「最近心情不好想犒賞自己」而一延再延。這個年紀最該做的，是把「保障」跟「投資」設成自動扣款，讓理財不再需要靠意志力或心情，而是變成不用思考的固定機制。",
      fullEn:
        "your income may have grown, and your spending grew right along with it, while your asset allocation never got more systematic — important insurance and savings plans keep getting pushed back because 'I'm in a mood, I deserve a treat.' What's worth doing at this age is putting protection and investing on autopilot, so managing money no longer needs willpower or mood — it just runs.",
    },
    senior: {
      visibleZh: "火屬性的人錢留不住，關鍵不只是衝動消費，",
      blurredZh: "而是你的財務系統，一直靠「當下的感覺」在運作……",
      visibleEn: "Money not sticking around for a Fire element isn't only about impulse spending —",
      blurredEn: "it's that your whole financial system runs on how you feel in the moment...",
      fullZh:
        "可能已經累積了不少資產，但因為太習慣憑感覺做決定，資產配置可能還是偏向衝動、缺乏長期規劃，退休準備容易因為一時的心動投資而受影響。這個年紀最該做的，是把重要的資產交給一個穩定的機制或值得信任的顧問管理，減少讓「一時的感覺」影響退休後的生活品質。",
      fullEn:
        "you may have built up real assets by now, but being this used to deciding on feeling can leave your allocation still impulsive and short on long-term planning, with retirement prep vulnerable to whatever investment catches your eye that week. What's worth doing at this age is handing the important assets to a stable system or a trusted advisor, so a passing feeling doesn't get to decide your quality of life in retirement.",
    },
  },
  土: {
    young: {
      visibleZh: "土屬性的人明明很會存錢，錢卻還是留不住，",
      blurredZh: "因為你的錢，很多時候不是花在自己身上……",
      visibleEn: "An Earth element is genuinely good at saving, yet money still doesn't stick around —",
      blurredEn: "because a lot of it never actually gets spent on you...",
      fullZh:
        "花在幫忙家人、朋友周轉，或是承擔了不屬於你的開銷。你天生可靠，大家有需要都會想到你，你也很難拒絕，結果存下來的錢常常變成別人的應急金。這個年紀最該練習的，是替自己的存款設一條「不能動用」的底線，家人朋友需要幫忙時，用你能負擔的方式量力而為，而不是每次都全額承擔。",
      fullEn:
        "on bailing out family or friends, or covering costs that were never really yours. You're reliable by nature, people default to asking you first, and you find it hard to say no, so your savings often end up as someone else's emergency fund. What's worth practicing at this age is setting a hard line around your savings that can't be touched, and helping family or friends within what you can actually afford, instead of covering the full cost every time.",
    },
    mid: {
      visibleZh: "土屬性的人明明很會存錢，錢卻還是留不住，",
      blurredZh: "因為你的錢，很多時候不是花在自己身上……",
      visibleEn: "An Earth element is genuinely good at saving, yet money still doesn't stick around —",
      blurredEn: "because a lot of it never actually gets spent on you...",
      fullZh:
        "花在照顧家庭、栽培孩子、或負擔長輩的開銷上，而你自己的退休金和保障，反而被排到最後面才考慮。這個年紀最容易陷入「先顧好每個人，才輪到自己」的循環。你最該做的，是把自己的退休準備當成一筆不能被挪用的固定支出，優先程度要排在其他人的需求前面，而不是等有剩才存。",
      fullEn:
        "on caring for family, raising kids, or supporting elders, while your own retirement and protection keep getting pushed to the very end of the list. This age is where it's easiest to fall into 'take care of everyone else first, myself last.' What's worth doing is treating your own retirement savings as a fixed, untouchable expense, prioritized ahead of everyone else's needs, instead of only saving what's left over.",
    },
    senior: {
      visibleZh: "土屬性的人明明很會存錢，錢卻還是留不住，",
      blurredZh: "因為你的錢，很多時候不是花在自己身上……",
      visibleEn: "An Earth element is genuinely good at saving, yet money still doesn't stick around —",
      blurredEn: "because a lot of it never actually gets spent on you...",
      fullZh:
        "花在資助已經成年的子女、或持續負擔家族裡其他人的開銷，退休後的資產反而因此被慢慢掏空。你習慣當那個「什麼都罩得住」的人，但這個年紀最重要的，是保護好自己的退休生活品質——學著溫和地說「這件事我沒辦法再全額幫忙了」，把照顧自己放在照顧別人的前面。",
      fullEn:
        "on supporting grown children, or continuing to cover costs for other family members, quietly draining the retirement assets you've built. You're used to being the one who can handle anything, but the most important thing at this age is protecting your own quality of life in retirement — practice gently saying 'I can't cover the whole thing anymore,' and put taking care of yourself ahead of taking care of everyone else.",
    },
  },
  金: {
    young: {
      visibleZh: "金屬性的人錢留不住，很多時候是因為一個標準，",
      blurredZh: "那就是「東西一定要買最好的，將就會讓你不舒服」……",
      visibleEn: "Money not sticking around for a Metal element often comes down to one standard —",
      blurredEn: "everything has to be the best; settling for less makes you genuinely uncomfortable...",
      fullZh:
        "所以你在3C、穿著、生活用品上，常常選擇單價最高的選項，理由是「品質好才划算」，但這個階段收入還沒完全跟上，這種堅持容易讓存款壓力變大。這個年紀最該做的，不是降低標準，而是把「買最好」的預算限定在真正常用、影響大的品項上，其他的東西，容許自己先選「夠好」的版本。",
      fullEn:
        "so you tend to pick the highest-priced option in electronics, clothes, everyday items, reasoning that good quality is worth it — but at a stage where your income hasn't fully caught up, that insistence puts real strain on your savings. What's worth doing at this age isn't lowering your standards — it's limiting the 'buy the best' budget to items you actually use often and that genuinely matter, and letting yourself pick 'good enough' for the rest.",
    },
    mid: {
      visibleZh: "金屬性的人錢留不住，很多時候是因為一個標準，",
      blurredZh: "那就是「東西一定要買最好的，將就會讓你不舒服」……",
      visibleEn: "Money not sticking around for a Metal element often comes down to one standard —",
      blurredEn: "everything has to be the best; settling for less makes you genuinely uncomfortable...",
      fullZh:
        "所以在孩子的教育、居住品質、生活用品上，你都傾向選擇最高規格的選項，這些支出加總起來，往往遠超過你原本的預算規劃。這個年紀最該做的，是誠實列出「哪些高標準真的值得」，哪些其實只是為了面子或安心，把預算集中在前者，其他項目允許自己降低一階。",
      fullEn:
        "so for your kids' education, your home, everyday items, you lean toward the top-spec option every time, and those costs added up usually blow well past your original budget. What's worth doing at this age is honestly listing which high standards are truly worth it, and which are really just about appearances or peace of mind — concentrate the budget on the former, and allow yourself one tier down on the rest.",
    },
    senior: {
      visibleZh: "金屬性的人錢留不住，很多時候是因為一個標準，",
      blurredZh: "那就是「東西一定要買最好的，將就會讓你不舒服」……",
      visibleEn: "Money not sticking around for a Metal element often comes down to one standard —",
      blurredEn: "everything has to be the best; settling for less makes you genuinely uncomfortable...",
      fullZh:
        "所以退休後的生活規劃，你也習慣用「最好的」當標準，不管是醫療、居住還是照護，都想選擇最頂級的方案，卻沒有精算過這樣的標準需要多少資產支撐。這個年紀最該做的，是找專業的財務規劃，實際算清楚「維持你要的生活品質」需要多少資產，再決定哪些「最好」是現階段真正負擔得起的。",
      fullEn:
        "so your retirement planning defaults to 'the best' too — healthcare, housing, care, you want the top-tier option for all of it, without actually running the numbers on what that standard requires in assets. What's worth doing at this age is getting a real financial plan done, working out exactly what assets it takes to sustain the life you want, then deciding which 'bests' you can actually afford right now.",
    },
  },
  水: {
    young: {
      visibleZh: "水屬性的人錢留不住，通常不是因為亂花，",
      blurredZh: "而是因為你很難拒絕別人開口的那個瞬間……",
      visibleEn: "Money not sticking around for a Water element usually isn't about spending carelessly —",
      blurredEn: "it's about the moment someone asks you for something, and you can't say no...",
      fullZh:
        "不管是朋友揪團投資、揪合資、還是借錢周轉，你總是很難拒絕，甚至會為了維持關係，硬著頭皮答應超出自己能力的金額。這個年紀最該練習的，是先幫自己設一個「這個月能動用的彈性額度」，超過這個數字，不管誰開口，都先說「我要想一下」，而不是當下就答應。",
      fullEn:
        "whether it's a friend rallying a group investment, a joint venture, or someone needing to borrow — you find it hard to say no, sometimes agreeing to amounts beyond what you can actually afford just to keep the relationship intact. What's worth practicing at this age is setting yourself a flexible monthly limit ahead of time; past that number, no matter who's asking, the answer is 'let me think about it,' not an answer on the spot.",
    },
    mid: {
      visibleZh: "水屬性的人錢留不住，通常不是因為亂花，",
      blurredZh: "而是因為你很難拒絕別人開口的那個瞬間……",
      visibleEn: "Money not sticking around for a Water element usually isn't about spending carelessly —",
      blurredEn: "it's about the moment someone asks you for something, and you can't say no...",
      fullZh:
        "不管是親戚朋友的投資邀約、還是需要出資的人情往來，你都容易因為不好意思拒絕而讓錢流出去，這個階段金額通常也比年輕時更大，一次判斷失誤的代價也更高。這個年紀最該做的，是把重要的財務決定「拉長決策時間」，任何超過一定金額的請求，都先跟信任的人討論過一次，再回覆對方。",
      fullEn:
        "whether it's relatives or friends pitching an investment, or social obligations that call for money, you tend to let money flow out because saying no feels awkward — and at this stage the amounts are usually bigger than they were when you were younger, so one bad call costs more. What's worth doing at this age is stretching out the decision time on anything financial — for any request past a certain amount, talk it through with someone you trust before you answer.",
    },
    senior: {
      visibleZh: "水屬性的人錢留不住，通常不是因為亂花，",
      blurredZh: "而是因為你很難拒絕別人開口的那個瞬間……",
      visibleEn: "Money not sticking around for a Water element usually isn't about spending carelessly —",
      blurredEn: "it's about the moment someone asks you for something, and you can't say no...",
      fullZh:
        "不管是子女的創業資金、朋友的投資邀約，你都可能因為心軟而挪用退休準備金去支援別人，這個階段的每一次挪用，對你自己的退休生活影響都更直接。這個年紀最該做的，是把退休金明確劃分成「絕對不能動」的部分，任何人情上的資助，都只能從劃分出來的「可動用」額度裡出，保護好自己晚年的底線。",
      fullEn:
        "whether it's a child's startup funding or a friend's investment pitch, you may soften and dip into retirement savings to help someone out, and at this stage every withdrawal hits your own retirement more directly. What's worth doing at this age is clearly ring-fencing a portion of your retirement fund as absolutely untouchable — any favor involving money can only come from what's left outside that fence, protecting the floor under your own later years.",
    },
  },
};
