(() => {
  const LOCALES = ["zh-Hant", "zh-Hans", "en"];
  const STORAGE_KEY = "aq.landing.locale";

  const copy = {
    "zh-Hant": {
      "meta.title": "StratCue — 紙上交易終端",
      "meta.description":
        "StratCue 是給單一操作者的交易終端。AI 看盤、畫線、提出進出場；訂單先經風控，再進模擬帳戶。實盤預設關閉。",
      "lang.label": "語言",
      "mark.sub": "終端 · 紙上",
      "nav.flow": "怎麼走",
      "nav.desk": "終端裡有什麼",
      "nav.boundary": "邊界",
      "hero.eyebrow": "本機運行 · 模擬帳戶 · 實盤鎖定",
      "hero.title1": "AI 負責看盤和建議。",
      "hero.title2": "成交只進紙上帳戶。",
      "hero.lede":
        "StratCue 是給單一操作者的交易終端。模型可以讀 K 線、在圖上畫線、提出做多或做空。訂單先過風控，再寫進模擬持倉。實盤那一道預設是關的。",
      "hero.ctaFlow": "看這條線怎麼走",
      "hero.ctaBoundary": "它不做什麼",
      "waitlist.ph": "電郵地址",
      "waitlist.cta": "加入等候名單",
      "waitlist.ok": "收到。你已在等候名單上，開放時會通知你。",
      "waitlist.err": "這個電郵唔啱，檢查一下再試。",
      "waitlist.mail": "等候名單未接通，可直接電郵 support@stratcue.com。",
      "desk.aria": "終端示意：行情、圖表、待批准建議",
      "desk.market": "行情",
      "desk.hline": "水平線",
      "chart.aria": "示意 K 線",
      "chart.foot": "來源依序嘗試公開行情 · 不下單",
      "ticket.k": "待批准",
      "ticket.r": "建議先停在佇列。批准之後才寫進模擬持倉。",
      "ticket.reject": "拒絕",
      "ticket.approve": "批准",
      "flow.h": "一筆單要經過的地方",
      "flow.p": "模型沒有直接改帳戶的路。中間是風控，最後才是模擬成交。",
      "flow.1h": "看盤",
      "flow.1p": "K 線、均線、畫線在同一張圖。公開行情按交易所順序接，某個來源被擋就換下一個。",
      "flow.2h": "建議",
      "flow.2p":
        "對話裡的模型用同一套工具讀行情、查紀錄、把價位畫回圖上。進出場先變成一張待批准的建議。",
      "flow.3h": "模擬成交",
      "flow.3p": "人點批准，風控看過倉位、比例和止損，才記入紙上帳戶。平倉、盈虧和教訓留在本機。",
      "desk.h": "終端裡已經在用的",
      "desk.p": "不是功能清單的廣告。這些是現在這套終端裡真的有的畫面。",
      "feat.chart.h": "圖表",
      "feat.chart.p": "K 線、成交量、EMA，左側畫線。AI 畫的線和人手畫的線走同一張圖。",
      "feat.chat.h": "對話",
      "feat.chat.p":
        "多個模型接同一組工具。工具可以單獨關掉，關掉之後模型看不到，呼叫也等於沒有這個工具。",
      "feat.approve.h": "批准",
      "feat.approve.p": "建議價偏離現價、行情過期，就不能照舊單成交。要重看，再送一次。",
      "feat.risk.h": "持倉與風控",
      "feat.risk.p": "模擬權益、未平倉、單筆上限、日虧熔斷。熔斷要手動解除。",
      "feat.backtest.h": "回測與計分板",
      "feat.backtest.p": "用已存的 K 線重播策略。計分板看樣本外和模擬結果，不過關就留在構想。",
      "feat.research.h": "研究紀錄",
      "feat.research.p": "對話、平倉和教訓寫在本機資料庫。問舊績效要先查紀錄，不靠模型現編。",
      "boundary.h": "這頁不接單，終端也不接實盤。",
      "boundary.p":
        "StratCue 不是券商，也不代客下單。交易所金鑰不會交給模型。實盤入口保持鎖定。這個網站只說明產品；看盤和下單的終端在操作者自己的電腦上跑。",
      "boundary.1": "紙上帳戶，不是真實資金",
      "boundary.2": "建議可拒絕，批准才成交",
      "boundary.3": "行情是公開資料，會有地區限制",
      "footer.tag": "紙上交易終端",
      "desk.pick": "點左側工具，圖上換成那個畫法。",
      "stage.play": "點一下，自己點選裡面的畫面",
      "stage.full": "全屏試用",
      "stage.exit": "離開全屏",
      "screen.chart": "圖表",
      "screen.chat": "對話",
      "screen.approval": "批准",
      "screen.positions": "持倉",
      "chat.you": "你",
      "chat.model": "模型",
      "chat.ask": "看一下 BTCUSDT 1h，先不要下單。",
      "chat.reply": "可以在圖上畫線。進出場只會變成待批准，不會直接改帳戶。",
      "pos.equity": "模擬權益",
      "pos.local": "本機紙上帳戶",
      "pos.open": "未平倉",
      "pos.none": "沒有",
      "pos.halt": "日虧熔斷",
      "pos.clear": "未觸發",
      "pos.note": "這頁的批准不會寫進終端，也不會送出訂單。",
      "side.trade": "交易",
      "side.research": "研究",
      "side.workspace": "工作區",
      "nav.market": "行情",
      "nav.chart": "圖表",
      "nav.positions": "持倉",
      "nav.accounts": "帳戶",
      "nav.alerts": "警示",
      "nav.agent": "AI Agent",
      "nav.backtest": "回測",
      "nav.strategy": "策略",
      "nav.journal": "日誌",
      "nav.scoreboard": "計分板",
      "nav.heatmap": "熱力圖",
      "nav.workspace": "總覽",
      "top.blocked": "行情被擋",
      "book.title": "訂單簿",
      "book.trades": "成交",
      "book.blocked": "此地區無法連上交易所公開行情（HTTP 451）。報價維持空白，不會用樣本或合成價填補。",
      "book.empty": "沒有成交可顯示。",
      "watch.title": "觀察清單",
      "watch.search": "搜尋幣種，例如",
      "watch.gainers": "前十漲幅",
      "watch.losers": "前十跌幅",
      "watch.volume": "前十成交量",
      "chat.title": "AI 對話",
      "chat.placeholder": "輸入…",
      "chat.live": "行情即時 · 最新 K 線",
      "chat.line": "模型可以讀這張圖、畫線，進出場先停在待批准。這頁不能下單。",
      "chart.agent": "Agent",
      "chart.region": "地區封鎖",
      "pane.accounts": "紙上帳戶在本機。交易所金鑰不會交給模型。",
      "pane.alerts": "警示留在本機。行情中斷時不會用假價補上。",
      "pane.backtest": "用已存的 K 線重播。不過關就留在構想。",
      "pane.strategy": "策略先是構想。計分板看樣本外和模擬結果。",
      "pane.journal": "對話、平倉和教訓寫在本機資料庫。",
      "pane.scoreboard": "計分板只看已有結果，不把構想算成績效。",
      "pane.heatmap": "熱力圖用公開行情的漲跌上色。來源被擋時這一格是空的。",
      "pane.workspace": "工作區把終端裡正在看的畫面放在一起。",
      "tool.crosshair": "十字線",
      "tool.hline": "水平線",
      "tool.trend": "趨勢線",
      "tool.ray": "射線",
      "tool.fib": "回撤",
      "tool.rect": "矩形",
      "tool.position": "倉位",
      "tool.range": "區間",
      "tool.textSample": "支撐",
      "ticket.doneReject": "已拒絕",
      "ticket.doneApprove": "已批准",
      "ticket.noteReject": "這筆停在這裡，不會進模擬持倉。",
      "ticket.noteApprove": "這頁只示範批准，不會送出訂單。",
    },
    "zh-Hans": {
      "meta.title": "StratCue — 纸上交易终端",
      "meta.description":
        "StratCue 是给单一操作者的交易终端。AI 看盘、画线、提出进出场；订单先经风控，再进模拟账户。实盘默认关闭。",
      "lang.label": "语言",
      "mark.sub": "终端 · 纸上",
      "nav.flow": "怎么走",
      "nav.desk": "终端里有什么",
      "nav.boundary": "边界",
      "hero.eyebrow": "本机运行 · 模拟账户 · 实盘锁定",
      "hero.title1": "AI 负责看盘和建议。",
      "hero.title2": "成交只进纸上账户。",
      "hero.lede":
        "StratCue 是给单一操作者的交易终端。模型可以读 K 线、在图上画线、提出做多或做空。订单先过风控，再写进模拟持仓。实盘那一道默认是关的。",
      "hero.ctaFlow": "看这条线怎么走",
      "hero.ctaBoundary": "它不做什么",
      "waitlist.ph": "邮箱地址",
      "waitlist.cta": "加入等候名单",
      "waitlist.ok": "收到。你已在等候名单上，开放时会通知你。",
      "waitlist.err": "这个邮箱不对，检查一下再试。",
      "waitlist.mail": "等候名单未接通，可直接邮件 support@stratcue.com。",
      "desk.aria": "终端示意：行情、图表、待批准建议",
      "desk.market": "行情",
      "desk.hline": "水平线",
      "chart.aria": "示意 K 线",
      "chart.foot": "来源依序尝试公开行情 · 不下单",
      "ticket.k": "待批准",
      "ticket.r": "建议先停在队列。批准之后才写进模拟持仓。",
      "ticket.reject": "拒绝",
      "ticket.approve": "批准",
      "flow.h": "一笔单要经过的地方",
      "flow.p": "模型没有直接改账户的路。中间是风控，最后才是模拟成交。",
      "flow.1h": "看盘",
      "flow.1p": "K 线、均线、画线在同一张图。公开行情按交易所顺序接，某个来源被挡就换下一个。",
      "flow.2h": "建议",
      "flow.2p":
        "对话里的模型用同一套工具读行情、查记录、把价位画回图上。进出场先变成一张待批准的建议。",
      "flow.3h": "模拟成交",
      "flow.3p": "人点批准，风控看过仓位、比例和止损，才记入纸上账户。平仓、盈亏和教训留在本机。",
      "desk.h": "终端里已经在用的",
      "desk.p": "不是功能清单的广告。这些是现在这套终端里真的有的画面。",
      "feat.chart.h": "图表",
      "feat.chart.p": "K 线、成交量、EMA，左侧画线。AI 画的线和人手画的线走同一张图。",
      "feat.chat.h": "对话",
      "feat.chat.p":
        "多个模型接同一组工具。工具可以单独关掉，关掉之后模型看不到，调用也等于没有这个工具。",
      "feat.approve.h": "批准",
      "feat.approve.p": "建议价偏离现价、行情过期，就不能照旧单成交。要重看，再送一次。",
      "feat.risk.h": "持仓与风控",
      "feat.risk.p": "模拟权益、未平仓、单笔上限、日亏熔断。熔断要手动解除。",
      "feat.backtest.h": "回测与计分板",
      "feat.backtest.p": "用已存的 K 线重播策略。计分板看样本外和模拟结果，不过关就留在构想。",
      "feat.research.h": "研究记录",
      "feat.research.p": "对话、平仓和教训写在本机数据库。问旧绩效要先查记录，不靠模型现编。",
      "boundary.h": "这页不接单，终端也不接实盘。",
      "boundary.p":
        "StratCue 不是券商，也不代客下单。交易所密钥不会交给模型。实盘入口保持锁定。这个网站只说明产品；看盘和下单的终端在操作者自己的电脑上跑。",
      "boundary.1": "纸上账户，不是真实资金",
      "boundary.2": "建议可拒绝，批准才成交",
      "boundary.3": "行情是公开数据，会有地区限制",
      "footer.tag": "纸上交易终端",
      "desk.pick": "点左侧工具，图上换成那个画法。",
      "stage.play": "点一下，自己点选里面的画面",
      "stage.full": "全屏试用",
      "stage.exit": "离开全屏",
      "screen.chart": "图表",
      "screen.chat": "对话",
      "screen.approval": "批准",
      "screen.positions": "持仓",
      "chat.you": "你",
      "chat.model": "模型",
      "chat.ask": "看一下 BTCUSDT 1h，先不要下单。",
      "chat.reply": "可以在图上画线。进出场只会变成待批准，不会直接改账户。",
      "pos.equity": "模拟权益",
      "pos.local": "本机纸上账户",
      "pos.open": "未平仓",
      "pos.none": "没有",
      "pos.halt": "日亏熔断",
      "pos.clear": "未触发",
      "pos.note": "这页的批准不会写进终端，也不会送出订单。",
      "side.trade": "交易",
      "side.research": "研究",
      "side.workspace": "工作区",
      "nav.market": "行情",
      "nav.chart": "图表",
      "nav.positions": "持仓",
      "nav.accounts": "账户",
      "nav.alerts": "警示",
      "nav.agent": "AI Agent",
      "nav.backtest": "回测",
      "nav.strategy": "策略",
      "nav.journal": "日志",
      "nav.scoreboard": "计分板",
      "nav.heatmap": "热力图",
      "nav.workspace": "总览",
      "top.blocked": "行情被挡",
      "book.title": "订单簿",
      "book.trades": "成交",
      "book.blocked": "此地区无法连上交易所公开行情（HTTP 451）。报价维持空白，不会用样本或合成价填补。",
      "book.empty": "没有成交可显示。",
      "watch.title": "观察清单",
      "watch.search": "搜索币种，例如",
      "watch.gainers": "前十涨幅",
      "watch.losers": "前十跌幅",
      "watch.volume": "前十成交量",
      "chat.title": "AI 对话",
      "chat.placeholder": "输入…",
      "chat.live": "行情即时 · 最新 K 线",
      "chat.line": "模型可以读这张图、画线，进出场先停在待批准。这页不能下单。",
      "chart.agent": "Agent",
      "chart.region": "地区封锁",
      "pane.accounts": "纸上账户在本机。交易所密钥不会交给模型。",
      "pane.alerts": "警示留在本机。行情中断时不会用假价补上。",
      "pane.backtest": "用已存的 K 线重播。不过关就留在构想。",
      "pane.strategy": "策略先是构想。计分板看样本外和模拟结果。",
      "pane.journal": "对话、平仓和教训写在本机数据库。",
      "pane.scoreboard": "计分板只看已有结果，不把构想算成绩效。",
      "pane.heatmap": "热力图用公开行情的涨跌上色。来源被挡时这一格是空的。",
      "pane.workspace": "工作区把终端里正在看的画面放在一起。",
      "tool.crosshair": "十字线",
      "tool.hline": "水平线",
      "tool.trend": "趋势线",
      "tool.ray": "射线",
      "tool.fib": "回撤",
      "tool.rect": "矩形",
      "tool.position": "仓位",
      "tool.range": "区间",
      "tool.textSample": "支撑",
      "ticket.doneReject": "已拒绝",
      "ticket.doneApprove": "已批准",
      "ticket.noteReject": "这笔停在这里，不会进模拟持仓。",
      "ticket.noteApprove": "这页只示范批准，不会送出订单。",
    },
    en: {
      "meta.title": "StratCue — Paper trading terminal",
      "meta.description":
        "StratCue is a trading terminal for one operator. The AI reads the tape, draws on the chart, and proposes entries and exits. Orders pass a risk gate, then land in a paper account. Live trading stays off.",
      "lang.label": "Language",
      "mark.sub": "TERMINAL · PAPER",
      "nav.flow": "The path",
      "nav.desk": "The desk",
      "nav.boundary": "Limits",
      "hero.eyebrow": "Runs locally · Paper account · Live trading locked",
      "hero.title1": "The AI reads the tape and proposes.",
      "hero.title2": "Fills go only to the paper account.",
      "hero.lede":
        "StratCue is a trading terminal for one operator. The model can read candles, draw on the chart, and propose long or short. An order passes the risk gate before it is written into the paper book. The live-trading gate stays off.",
      "hero.ctaFlow": "See the path",
      "hero.ctaBoundary": "What it does not do",
      "waitlist.ph": "Email address",
      "waitlist.cta": "Join the waitlist",
      "waitlist.ok": "You are on the waitlist. We will email you when it opens.",
      "waitlist.err": "That email does not look right. Check it and try again.",
      "waitlist.mail": "The waitlist is not connected yet. Email support@stratcue.com instead.",
      "desk.aria": "Terminal sketch: market, chart, and a proposal waiting for approval",
      "desk.market": "Market",
      "desk.hline": "hline",
      "chart.aria": "Sketch candles",
      "chart.foot": "Public quotes, tried in order · no orders",
      "ticket.k": "Pending",
      "ticket.r": "The proposal waits in the queue. It is booked only after approval.",
      "ticket.reject": "Reject",
      "ticket.approve": "Approve",
      "flow.h": "Where an order has to pass",
      "flow.p": "The model has no path that edits the account. Risk sits in the middle. A paper fill is last.",
      "flow.1h": "Read",
      "flow.1p":
        "Candles, moving averages, and drawings share one chart. Public quotes are tried exchange by exchange. If one source is blocked, the next is used.",
      "flow.2h": "Propose",
      "flow.2p":
        "In chat, the model uses the same tools to read the market, look up records, and draw prices back onto the chart. An entry or exit becomes a proposal waiting for approval.",
      "flow.3h": "Paper fill",
      "flow.3p":
        "A person approves. The risk gate checks size, exposure, and the stop, then the fill is booked to the paper account. Closes, PnL, and lessons stay on this machine.",
      "desk.h": "Already on the desk",
      "desk.p": "Not a feature list. These are screens that exist in the terminal now.",
      "feat.chart.h": "Chart",
      "feat.chart.p":
        "Candles, volume, and EMAs, with drawing tools on the left. Lines from the AI and lines drawn by hand share the same chart.",
      "feat.chat.h": "Chat",
      "feat.chat.p":
        "Several models share one tool set. A tool can be switched off on its own. Once it is off, the model is not offered it, and a call is treated as if the tool does not exist.",
      "feat.approve.h": "Approval",
      "feat.approve.p":
        "If the proposed price has drifted, or the quote is stale, the old ticket cannot fill. It has to be reviewed and sent again.",
      "feat.risk.h": "Positions and risk",
      "feat.risk.p":
        "Paper equity, open positions, a per-order cap, and a daily-loss halt. The halt is cleared by hand.",
      "feat.backtest.h": "Backtest and scoreboard",
      "feat.backtest.p":
        "Replay a strategy on stored candles. The scoreboard looks at out-of-sample and paper results. If it does not pass, it stays an idea.",
      "feat.research.h": "Research log",
      "feat.research.p":
        "Chats, closes, and lessons are written to a local database. Questions about past performance look up those records. The model does not invent them.",
      "boundary.h": "This page takes no orders. The terminal does not trade live.",
      "boundary.p":
        "StratCue is not a broker, and it does not place orders for clients. Exchange keys are not given to the model. The live-trading entrance stays locked. This site only explains the product. The terminal that reads the market and books orders runs on the operator's own computer.",
      "boundary.1": "A paper account, not real funds",
      "boundary.2": "A proposal can be rejected. It fills only after approval",
      "boundary.3": "Quotes are public data, and regions can block them",
      "footer.tag": "Paper trading terminal",
      "desk.pick": "Pick a tool on the left. The chart switches to that drawing.",
      "stage.play": "Click, then choose a screen inside",
      "stage.full": "Try fullscreen",
      "stage.exit": "Leave fullscreen",
      "screen.chart": "Chart",
      "screen.chat": "Chat",
      "screen.approval": "Approval",
      "screen.positions": "Positions",
      "chat.you": "You",
      "chat.model": "Model",
      "chat.ask": "Look at BTCUSDT 1h. Do not place an order.",
      "chat.reply": "It can draw on the chart. An entry only becomes a proposal. It does not edit the account.",
      "pos.equity": "Paper equity",
      "pos.local": "Local paper account",
      "pos.open": "Open positions",
      "pos.none": "None",
      "pos.halt": "Daily-loss halt",
      "pos.clear": "Not tripped",
      "pos.note": "Approving on this page does not write to the terminal or send an order.",
      "side.trade": "Trade",
      "side.research": "Research",
      "side.workspace": "Workspace",
      "nav.market": "Market",
      "nav.chart": "Chart",
      "nav.positions": "Positions",
      "nav.accounts": "Accounts",
      "nav.alerts": "Alerts",
      "nav.agent": "AI Agent",
      "nav.backtest": "Backtest",
      "nav.strategy": "Strategy",
      "nav.journal": "Journal",
      "nav.scoreboard": "Scoreboard",
      "nav.heatmap": "Heatmap",
      "nav.workspace": "Overview",
      "top.blocked": "Quotes blocked",
      "book.title": "Order book",
      "book.trades": "Trades",
      "book.blocked": "Public exchange quotes are blocked in this region (HTTP 451). The book stays empty. Sample or synthetic prices are not filled in.",
      "book.empty": "No trades to show.",
      "watch.title": "Watchlist",
      "watch.search": "Search a symbol",
      "watch.gainers": "Top gainers",
      "watch.losers": "Top losers",
      "watch.volume": "Top volume",
      "chat.title": "AI chat",
      "chat.placeholder": "Message…",
      "chat.live": "Live quote · latest candle",
      "chat.line": "The model can read this chart and draw on it. An entry waits for approval. This page cannot send an order.",
      "chart.agent": "Agent",
      "chart.region": "Region blocked",
      "pane.accounts": "The paper account stays on this machine. Exchange keys are not given to the model.",
      "pane.alerts": "Alerts stay local. A blocked quote is not replaced with a fake price.",
      "pane.backtest": "Replay stored candles. If it does not pass, it stays an idea.",
      "pane.strategy": "A strategy starts as an idea. The scoreboard looks at out-of-sample and paper results.",
      "pane.journal": "Chats, closes, and lessons are written to a local database.",
      "pane.scoreboard": "The scoreboard only counts results that already exist.",
      "pane.heatmap": "The heatmap colors public 24h moves. A blocked source leaves the cell empty.",
      "pane.workspace": "The workspace keeps the screens you are using together.",
      "tool.crosshair": "Crosshair",
      "tool.hline": "Horizontal line",
      "tool.trend": "Trend line",
      "tool.ray": "Ray",
      "tool.fib": "Retracement",
      "tool.rect": "Rectangle",
      "tool.position": "Position",
      "tool.range": "Range",
      "tool.textSample": "Support",
      "ticket.doneReject": "Rejected",
      "ticket.doneApprove": "Approved",
      "ticket.noteReject": "It stops here and does not enter the paper book.",
      "ticket.noteApprove": "This page only demonstrates approval. No order is sent.",
    },
  };

  function isLocale(value) {
    return LOCALES.includes(value);
  }

  function detect() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (isLocale(stored)) return stored;
    } catch {
      /* private mode */
    }
    const lang = (navigator.language || "").toLowerCase();
    if (lang.startsWith("en")) return "en";
    if (lang === "zh-cn" || lang === "zh-sg" || lang.includes("hans")) return "zh-Hans";
    return "zh-Hant";
  }

  function apply(locale) {
    const pack = copy[locale] || copy["zh-Hant"];
    const htmlLang = locale === "en" ? "en" : locale;
    document.documentElement.lang = htmlLang;
    document.title = pack["meta.title"];
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", pack["meta.description"]);
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.getAttribute("data-i18n");
      if (key && pack[key] != null) node.textContent = pack[key];
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
      const key = node.getAttribute("data-i18n-aria");
      if (key && pack[key] != null) node.setAttribute("aria-label", pack[key]);
    });
    document.querySelectorAll("[data-i18n-title]").forEach((node) => {
      const key = node.getAttribute("data-i18n-title");
      if (key && pack[key] != null) {
        node.setAttribute("title", pack[key]);
        node.setAttribute("aria-label", pack[key]);
      }
    });
    document.querySelectorAll("[data-i18n-ph]").forEach((node) => {
      const key = node.getAttribute("data-i18n-ph");
      if (key && pack[key] != null && node instanceof HTMLInputElement) node.placeholder = pack[key];
    });
    const select = document.querySelector("#lang");
    if (select instanceof HTMLSelectElement) {
      select.value = locale;
      select.setAttribute("aria-label", pack["lang.label"]);
    }
    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      /* ignore */
    }
  }

  let current = detect();
  apply(current);
  const select = document.querySelector("#lang");
  if (select instanceof HTMLSelectElement) {
    select.addEventListener("change", () => {
      if (!isLocale(select.value)) return;
      current = select.value;
      apply(current);
    });
  }
  window.AQ_LANDING = {
    apply(locale) {
      if (isLocale(locale)) current = locale;
      apply(current);
    },
  };
})();
