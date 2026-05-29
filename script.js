const suits = [
  { name: "红桃", symbol: "♥", color: "red", world: "表世界", tone: "白昼现世", era: "古代常规王朝" },
  { name: "方块", symbol: "♦", color: "red", world: "表世界", tone: "白昼现世", era: "古代常规王朝" },
  { name: "黑桃", symbol: "♠", color: "black", world: "里世界", tone: "黑夜暗面", era: "近古开放通商时代" },
  { name: "梅花", symbol: "♣", color: "black", world: "里世界", tone: "黑夜暗面", era: "近古开放通商时代" }
];

const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

const identities = {
  "红桃-A": [1, "皇子/皇女牌", "皇室子嗣。皇帝可健在或大病垂危，圣明或昏聩由设定决定。"],
  "黑桃-A": [1, "皇子/皇女牌", "皇室子嗣。皇帝可健在或大病垂危，圣明或昏聩由设定决定。"],
  "方块-A": [11, "亲王牌", "同姓宗室王或异姓功臣王，可摄政权倾朝野，也可闲散富贵。"],
  "梅花-A": [11, "亲王牌", "同姓宗室王或异姓功臣王，可摄政权倾朝野，也可闲散富贵。"],
  "红桃-2": [2, "世子/贵女牌", "出身世家，父母存亡与是否撑起家族大梁均由设定决定。"],
  "黑桃-2": [2, "世子/贵女牌", "出身世家，父母存亡与是否撑起家族大梁均由设定决定。"],
  "方块-2": [12, "医生牌", "可为太医、云游方士、民间游医或隐世神医。"],
  "梅花-2": [12, "医生牌", "可为太医、云游方士、民间游医或隐世神医。"],
  "红桃-3": [3, "商人牌", "不入仕，可为大富商或小商贾；核心 OC 通常适合皇商级别。"],
  "黑桃-3": [3, "商人牌", "不入仕，可为大富商或小商贾；核心 OC 通常适合皇商级别。"],
  "方块-3": [13, "乐师/画师牌", "可上达宫廷丹青，下至市井卖艺，天然适合穿梭多场景。"],
  "梅花-3": [13, "乐师/画师牌", "可上达宫廷丹青，下至市井卖艺，天然适合穿梭多场景。"],
  "红桃-4": [4, "朝中新贵牌", "新入朝堂，前途无量但根基未稳，可为状元、探花、翰林新人。"],
  "黑桃-4": [4, "朝中新贵牌", "新入朝堂，前途无量但根基未稳，可为状元、探花、翰林新人。"],
  "方块-4": [14, "权臣牌", "文官体系顶点，丞相、首辅或天子近臣，可忠可奸。"],
  "梅花-4": [14, "权臣牌", "文官体系顶点，丞相、首辅或天子近臣，可忠可奸。"],
  "红桃-5": [5, "锦衣卫/暗卫组织牌", "隶属侦缉、暗卫、密探系统，效忠对象与权势强弱待定。"],
  "黑桃-5": [5, "锦衣卫/暗卫组织牌", "隶属侦缉、暗卫、密探系统，效忠对象与权势强弱待定。"],
  "方块-5": [15, "海外归客/探险家牌", "自西方或远陆归来，带回见闻、奇物、思想乃至危机。"],
  "梅花-5": [15, "海外归客/探险家牌", "自西方或远陆归来，带回见闻、奇物、思想乃至危机。"],
  "红桃-6": [6, "青楼牌", "必须身在其中，可为花魁或卖艺不卖身官伎；妹妹禁抽。"],
  "黑桃-6": [6, "青楼牌", "必须身在其中，可为花魁或卖艺不卖身官伎；妹妹禁抽。"],
  "方块-6": [16, "地方豪强牌", "在京城地位未必高，在当地却近似土皇帝。"],
  "梅花-6": [16, "地方豪强牌", "在京城地位未必高，在当地却近似土皇帝。"],
  "红桃-7": [7, "国师牌", "钦天监或类似机构出身，负责术数、占卜、祭祀、天象。"],
  "黑桃-7": [7, "国师牌", "钦天监或类似机构出身，负责术数、占卜、祭祀、天象。"],
  "方块-7": [17, "情报贩子/风媒牌", "朝堂江湖灰色纽带，经营情报网络，只为利益或私人目标服务。"],
  "梅花-7": [17, "情报贩子/风媒牌", "朝堂江湖灰色纽带，经营情报网络，只为利益或私人目标服务。"],
  "红桃-8": [8, "后妃牌", "帝王后宫人物，权力大小由设定决定，特殊情况可为垂帘太后。"],
  "黑桃-8": [8, "后妃牌", "帝王后宫人物，权力大小由设定决定，特殊情况可为垂帘太后。"],
  "方块-8": [18, "僧/道/教士牌", "游离于世俗权力边缘，可出世可入世。"],
  "梅花-8": [18, "僧/道/教士牌", "游离于世俗权力边缘，可出世可入世。"],
  "红桃-9": [9, "将军牌", "可出征可留京，可凭军功立身，也可世袭罔替。"],
  "黑桃-9": [9, "将军牌", "可出征可留京，可凭军功立身，也可世袭罔替。"],
  "方块-9": [19, "山野隐士/方外高人牌", "远离红尘，却因才华、恩怨或重大秘密被卷入事件。"],
  "梅花-9": [19, "山野隐士/方外高人牌", "远离红尘，却因才华、恩怨或重大秘密被卷入事件。"],
  "红桃-10": [10, "异国/异族牌", "可为使者、传教士、质子、流亡王族；族属视时代决定。"],
  "黑桃-10": [10, "异国/异族牌", "可为使者、传教士、质子、流亡王族；族属视时代决定。"],
  "方块-10": [20, "铸器师/巧匠牌", "宫廷御用或隐于市井，掌握军工、机关、精密器械等关键技术。"],
  "梅花-10": [20, "铸器师/巧匠牌", "宫廷御用或隐于市井，掌握军工、机关、精密器械等关键技术。"]
};

const fates = {
  A: ["A", "千夫所指", "现状为阶下囚、罪人，或背负重大罪名。"],
  2: ["B", "众矢之的", "主事件围绕此人展开；若是皇子皇女，主线大概率为夺嫡。"],
  3: ["C", "命比纸薄", "无法根治的旧疾、残疾、慢性毒伤或长期病弱。"],
  4: ["D", "一语成谶", "身负宏大或可怕预言，旁人态度与命运轨迹因此改变。"],
  5: ["E", "怀璧其罪", "拥有珍贵、特殊或蕴含力量之物，因此招来危险与觊觎。"],
  6: ["F", "雾锁迷津", "真实出身、父母或过往存在重大空白，成为剧情伏笔。"],
  7: ["G", "公竟渡河", "将为理想、爱情、知己或信念作出重大牺牲。"],
  8: ["H", "逆水行舟", "家族、学派、技艺或效忠势力日薄西山，仍试图挽回。"],
  9: ["I", "薪火相传", "背负必须继承或守护的传承，荣耀与枷锁并存。"],
  10: ["J", "身在曹营", "身处一方却心向另一方，本次故事必须完成一次背叛。"]
};

const identityCards = Object.values(identities).reduce((acc, item) => {
  if (!acc.some(existing => existing[0] === item[0])) acc.push(item);
  return acc;
}, []).sort((a, b) => a[0] - b[0]);

const newGameBtn = document.querySelector("#newGameBtn");
const eraBtn = document.querySelector("#eraBtn");
const identityBtn = document.querySelector("#identityBtn");
const fateBtn = document.querySelector("#fateBtn");
const addOcBtn = document.querySelector("#addOcBtn");
const clearBtn = document.querySelector("#clearBtn");
const dramaMode = document.querySelector("#dramaMode");
const resultScroll = document.querySelector("#resultScroll");
const mainCard = document.querySelector("#mainCard");
const rosterCount = document.querySelector("#rosterCount");
const rosterList = document.querySelector("#rosterList");
const tabs = document.querySelectorAll(".tab");

let state = createEmptyState();

function createEmptyState() {
  return {
    deck: [],
    eraCard: null,
    main: null,
    mainRevealed: false,
    fateCards: [],
    fateStageDone: false,
    bonds: [],
    eventZone: [],
    roster: [],
    log: [],
    started: false
  };
}

function makeDeck() {
  const deck = [];
  suits.forEach(suit => ranks.forEach(rank => deck.push({ ...suit, rank, key: `${suit.name}-${rank}` })));
  deck.push({ name: "大王", symbol: "王", rank: "大王", color: "joker", world: "王权事件", key: "大王" });
  deck.push({ name: "小王", symbol: "伪", rank: "小王", color: "joker", world: "王权事件", key: "小王" });
  return shuffle(deck);
}

function shuffle(cards) {
  const copy = [...cards];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function startNewGame() {
  const oldRoster = state.roster;
  state = createEmptyState();
  state.roster = oldRoster;
  state.deck = makeDeck();
  state.started = true;
  state.log.push("新牌局已洗牌。");
  resetCurrentCard();
  renderResult();
  renderRoster();
  updateControls();
}

function drawEra() {
  if (!ensureStarted() || state.eraCard) return;
  const card = state.deck.shift();
  state.eraCard = card;
  collectSpecial(card, state.eventZone, state.bonds);
  state.log.push(`时代牌：${cardLabel(card)}。`);
  renderResult();
  updateControls();
}

function drawIdentity() {
  if (!ensureStarted() || !state.eraCard || state.main) return;
  const skipped = [];
  while (state.deck.length && !state.main) {
    const card = state.deck.shift();
    if (isIdentityCard(card)) {
      state.main = card;
      state.mainRevealed = false;
      state.log.push(`主身份牌已抽出：${cardLabel(card)}，点击牌面揭晓结果。`);
      renderMainCard(card, false);
    } else {
      collectSpecial(card, state.eventZone, state.bonds);
      skipped.push(cardLabel(card));
    }
  }
  if (skipped.length) state.log.push(`身份前置牌入区：${skipped.join("、")}。`);
  renderResult();
  updateControls();
}

function drawFateAndBonds() {
  if (!ensureStarted() || !state.main || !state.mainRevealed) return;
  if (state.fateStageDone || state.fateCards.length >= 3) return;

  const before = state.fateCards.length;
  const revealed = [];
  let flips = 0;
  while (state.deck.length && state.fateCards.length < 3) {
    const card = state.deck.shift();
    flips += 1;
    revealed.push(cardLabel(card));
    if (isFateCard(card)) state.fateCards.push(card);
    else collectSpecial(card, state.eventZone, state.bonds);
    if (!dramaMode.checked && flips >= 3) break;
  }

  const gained = state.fateCards.length - before;
  state.fateStageDone = true;
  state.log.push(`宿命/羁绊阶段翻出：${revealed.join("、") || "无牌"}；新增宿命 ${gained} 道。`);
  renderResult();
  updateControls();
}

function addCurrentOc() {
  if (!state.main || !state.mainRevealed) return;
  const mainInfo = identities[state.main.key];
  state.roster.push({
    id: state.roster.length + 1,
    card: state.main,
    mainInfo,
    fates: [...state.fateCards],
    bonds: [...state.bonds],
    events: [...state.eventZone]
  });
  state.log.push(`已将第 ${state.roster.length} 名 OC 收录入群像名册。`);
  state.main = null;
  state.mainRevealed = false;
  state.fateCards = [];
  state.fateStageDone = false;
  state.bonds = [];
  resetCurrentCard();
  renderResult();
  renderRoster();
  updateControls();
}

function ensureStarted() {
  if (state.started) return true;
  startNewGame();
  return true;
}

function isIdentityCard(card) { return identities[card.key]; }
function isFateCard(card) { return fates[card.rank]; }
function isBondCard(card) { return ["J", "Q", "K"].includes(card.rank); }
function isJoker(card) { return card.rank === "大王" || card.rank === "小王"; }
function collectSpecial(card, eventZone, bonds) {
  if (isJoker(card)) eventZone.push(card);
  if (isBondCard(card)) bonds.push(card);
}

function renderResult() {
  if (!state.started) {
    resultScroll.innerHTML = `<div class="empty-state"><span>未启封</span><p>点击“新开牌局”洗牌，再依次抽时代、主身份、宿命/羁绊；也可以把当前角色加入群像名册。</p></div>`;
    return;
  }

  const era = state.eraCard ? formatEra(state.eraCard) : "尚未抽取时代牌";
  const mainInfo = state.main ? identities[state.main.key] : null;
  const mainMarkup = state.main
    ? state.mainRevealed
      ? `<strong>${state.main.name}${state.main.rank} · ${mainInfo[0]} ${mainInfo[1]}</strong><p>${state.main.world} / ${state.main.tone}。${mainInfo[2]}</p>`
      : `<strong>主身份牌已封存</strong><p>点击左侧牌面翻开，揭晓身份、表里世界与后续宿命入口。</p>`
    : `<strong>尚未抽取主身份</strong><p>点击“抽主身份”，系统会翻到第一张 A-10，并把沿途 J/Q/K、大小王放入对应区域。</p>`;

  const fateMarkup = !state.mainRevealed && state.main
    ? "<p>主身份尚未揭晓，宿命暂不可启封。</p>"
    : state.fateCards.length
    ? state.fateCards.map(card => {
      const fate = fates[card.rank];
      return `<p><b>${card.name}${card.rank}</b> · ${fate[0]}【${fate[1]}】：${fate[2]}</p>`;
    }).join("")
    : "<p>当前角色尚未绑定宿命。强剧情模式会抽到 3 道宿命；关闭后只翻 3 张，可能没有宿命。</p>";

  const bondMarkup = state.bonds.length
    ? state.bonds.map(card => `<p><b>${card.name}${card.rank}</b> · ${bondName(card.rank)}：${bondHint(card)}</p>`).join("")
    : "<p>未翻出 J/Q/K，默认可按主身份自由补充 NPC 羁绊。</p>";

  const eventText = formatEventText(state.eventZone);
  const promptText = state.main && state.mainRevealed
    ? makePrompt(state, mainInfo)
    : state.main
      ? "先翻开主身份牌，再整合宿命、羁绊与王权事件。"
      : "先抽出主身份，再整合宿命、羁绊与王权事件。";
  const logMarkup = state.log.slice(-5).map(item => `<p>${item}</p>`).join("");

  resultScroll.innerHTML = `
    <div class="result-list">
      <article class="result-item"><span>时代牌</span><strong>${era}</strong><p>时代决定异国、探险家与宫廷开放程度。</p></article>
      <article class="result-item"><span>主身份</span>${mainMarkup}</article>
      <article class="result-item"><span>宿命札</span><strong>${state.fateCards.length ? `${state.fateCards.length} 道命数` : "未定宿命"}</strong>${fateMarkup}</article>
      <article class="result-item"><span>羁绊区</span><strong>${state.bonds.length ? `${state.bonds.length} 张羁绊牌` : "未现羁绊牌"}</strong>${bondMarkup}</article>
      <article class="result-item"><span>王权事件</span><strong>${eventText}</strong><p>${promptText}</p></article>
      <article class="result-item"><span>牌局记录</span><strong>余牌 ${state.deck.length} 张</strong>${logMarkup}</article>
    </div>`;
}

function renderMainCard(card, revealed = true) {
  state.mainRevealed = revealed;
  mainCard.className = `revealed-card drawn ${card.color}${revealed ? "" : " flipped can-flip"}`;
  mainCard.setAttribute("aria-label", revealed ? "主身份牌已翻开" : "点击翻开主身份牌");
  mainCard.innerHTML = `<div class="card-face card-front"><span class="card-suit">${card.symbol}</span><strong>${card.rank}</strong><small>${card.name}</small></div><div class="card-face card-reverse" aria-hidden="true"><img src="assets/card-back.svg" alt="" /><span>点击</span></div>`;
}

function revealMainCard() {
  if (!state.main || state.mainRevealed) return;
  state.mainRevealed = true;
  mainCard.classList.remove("flipped", "can-flip");
  mainCard.setAttribute("aria-label", "主身份牌已翻开");
  state.log.push(`主身份揭晓：${cardLabel(state.main)}。`);
  renderResult();
  updateControls();
}

function resetCurrentCard() {
  mainCard.className = "revealed-card";
  mainCard.setAttribute("aria-label", "点击翻开主身份牌");
  mainCard.innerHTML = `<div class="card-face card-front"><span class="card-suit">?</span><strong>未抽</strong><small>主身份</small></div><div class="card-face card-reverse" aria-hidden="true"><img src="assets/card-back.svg" alt="" /><span>待揭</span></div>`;
}

function formatEra(card) {
  return isJoker(card)
    ? `${card.rank}启局：${card.rank === "大王" ? "正统皇权极盛或重建法统" : "皇权失序、伪王当道"}`
    : `${card.name}${card.rank}：${card.era}`;
}

function formatEventText(eventZone) {
  const hasTrue = eventZone.some(card => card.rank === "大王");
  const hasFalse = eventZone.some(card => card.rank === "小王");
  if (hasTrue && hasFalse) return "大小王齐出，【真王假王·表里世界对峙】强制开启。";
  if (hasTrue) return "大王出现：正统皇权明确存在，皇室线权重上升。";
  if (hasFalse) return "小王出现：伪王权或幕后操盘者正在暗处施压。";
  return "大小王未出，本局不强制开启皇权大主线。";
}

function cardLabel(card) {
  return isJoker(card) ? card.rank : `${card.name}${card.rank}`;
}

function bondName(rank) {
  return rank === "J" ? "近卫属臣位" : rank === "Q" ? "内眷贵女位" : "王权位";
}

function bondHint(card) {
  if (card.rank === "J") return `同花色主君或贵人天然牵连，可为暗卫、谋士、侍从、护卫。`;
  if (card.rank === "Q") return `可生成后妃、贵女、公主、花魁、家眷或政治婚姻对象。`;
  return `可生成帝王、亲王、宗室、皇子皇女或权力核心。`;
}

function makePrompt(game, mainInfo) {
  const f = game.fateCards.map(card => fates[card.rank][1]).join("、") || "无宿命";
  return `写作引子：一个身在${game.main.world}的${mainInfo[1]}，被${f}牵引入局。先写 TA 最想隐瞒的秘密，再写 TA 必须面对的第一场局。`;
}

function clearResult() {
  state = createEmptyState();
  resetCurrentCard();
  renderResult();
  renderRoster();
  updateControls();
}

function renderRoster() {
  rosterCount.textContent = `${state.roster.length} 人入局`;
  if (!state.roster.length) {
    rosterList.innerHTML = "<p>尚未收录 OC。完成主身份后可加入群像角色。</p>";
    return;
  }
  rosterList.innerHTML = state.roster.map(item => {
    const fateNames = item.fates.map(card => fates[card.rank][1]).join("、") || "无宿命";
    return `<article class="roster-card">
      <span>第 ${item.id} 人 · ${item.card.name}${item.card.rank}</span>
      <strong>${item.mainInfo[1]}</strong>
      <p>${item.card.world}。宿命：${fateNames}。</p>
    </article>`;
  }).join("");
}

function updateControls() {
  const started = state.started;
  eraBtn.disabled = !started || Boolean(state.eraCard);
  identityBtn.disabled = !started || !state.eraCard || Boolean(state.main);
  fateBtn.disabled = !started || !state.main || !state.mainRevealed || state.fateStageDone || state.fateCards.length >= 3;
  addOcBtn.disabled = !started || !state.main || !state.mainRevealed;
}

function renderRuleCards() {
  document.querySelector("#identities").innerHTML = `<div class="card-grid">${identityCards.map(item => `
    <article class="rule-card" data-mark="${item[0]}">
      <small>身份 ${item[0]}</small>
      <h3>${item[1]}</h3>
      <p>${item[2]}</p>
    </article>`).join("")}</div>`;

  document.querySelector("#fates").innerHTML = `<div class="card-grid">${Object.entries(fates).map(([rank, fate]) => `
    <article class="rule-card" data-mark="${fate[0]}">
      <small>实体牌 ${rank} / 宿命 ${fate[0]}</small>
      <h3>${fate[1]}</h3>
      <p>${fate[2]}</p>
    </article>`).join("")}</div>`;
}

function bindTabs() {
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(item => item.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach(panel => panel.classList.remove("active"));
      tab.classList.add("active");
      document.querySelector(`#${tab.dataset.tab}`).classList.add("active");
    });
  });
}

newGameBtn.addEventListener("click", startNewGame);
eraBtn.addEventListener("click", drawEra);
identityBtn.addEventListener("click", drawIdentity);
fateBtn.addEventListener("click", drawFateAndBonds);
addOcBtn.addEventListener("click", addCurrentOc);
clearBtn.addEventListener("click", clearResult);
mainCard.addEventListener("click", revealMainCard);
mainCard.addEventListener("keydown", event => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    revealMainCard();
  }
});
renderRuleCards();
renderResult();
renderRoster();
updateControls();
bindTabs();
