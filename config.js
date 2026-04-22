// ================================================================
// CG LAB — 内容配置文件 / Content Configuration
// 你只需要修改这一个文件来更新网站所有内容
// Only edit this file to update all website content
// ================================================================

const CONFIG = {

  // ── 站点基本信息 ─────────────────────────────────────────
  site: {
    name:       "CG Lab",
    name_cn:    "高詠",
    tagline_cn: "汽配后市场 AI 实践社区",
    tagline_en: "AI Practice Community for Automotive Aftermarket",
    desc_cn:    "汽配后市场从业者交流 AI 实践的据点。分享工具、讨论案例、共同探索 AI 在这个行业的真实应用。",
    desc_en:    "A community for automotive aftermarket professionals to share AI tools, experiments, and real-world insights.",
    email:      "your@email.com",   // ← 改成你的邮箱
    wechat:     "",                  // ← 你的微信号
    linkedin:   "",                  // ← LinkedIn 链接
  },

  // ── 5个频道 ──────────────────────────────────────────────
  channels: [
    {
      id:      "research",
      num:     "01",
      title:   "深度研究",
      en:      "AI Research",
      desc_cn: "行业趋势调查、竞品动态捕捉、细分市场产品机会分析",
      desc_en: "Industry research, competitor tracking, market opportunity analysis",
      topics:  ["行业趋势调查", "竞品动态捕捉", "细分市场机会分析"],
    },
    {
      id:      "brand",
      num:     "02",
      title:   "品牌叙事",
      en:      "Brand Voice",
      desc_cn: "品牌产品培训、社交媒体内容制作、品牌视觉在AI内容中的应用",
      desc_en: "Brand training, social media production, brand visual identity in AI",
      topics:  ["品牌产品培训", "社交媒体内容制作", "品牌视觉应用"],
    },
    {
      id:      "pricing",
      num:     "03",
      title:   "价格管理",
      en:      "Price Intel",
      desc_cn: "日常价格管理分析工具、价格弹性分析、竞品价格采集与分析",
      desc_en: "Price management tools, elasticity analysis, competitor price tracking",
      topics:  ["日常价格管理工具", "价格弹性分析", "竞品价格采集"],
    },
    {
      id:      "channel",
      num:     "04",
      title:   "渠道运营",
      en:      "Channel Ops",
      desc_cn: "经销商联合生意计划制定、渠道健康度监测、终端管理",
      desc_en: "Distributor JBP, channel health monitoring, terminal management",
      topics:  ["经销商JBP制定", "渠道健康度监测", "终端管理"],
    },
    {
      id:      "reach",
      num:     "05",
      title:   "品牌宣传",
      en:      "Brand Reach",
      desc_cn: "GEO监测与管理、小红书内容管理、数字人内容制作",
      desc_en: "GEO monitoring, Xiaohongshu content, digital avatar production",
      topics:  ["GEO监测与管理", "小红书内容管理", "数字人内容制作"],
    },
  ],

  // ── 实验室案例 ────────────────────────────────────────────
  // 增加案例：在下方复制一个 { } 块填入内容
  cases: [
    {
      channel: "pricing",
      tag:     "PRICING",
      title:   "Price Intelligence Engine",
      cn:      "润滑油定价智能分析系统",
      desc:    "基于 Flask 的自动化工具，处理10城 Excel 价格数据，生成双语分析报告，涵盖利润率映射、价格纪律评分与 AI 洞察。",
      date:    "2026-03",
      image:   "",
      link:    "#",
    },
    {
      channel: "reach",
      tag:     "LLM MONITOR",
      title:   "GEO-Pulse Brand Tracker",
      cn:      "AI大模型品牌心智监测工具",
      desc:    "监测品牌在豆包、DeepSeek、混元等中国主流大模型中的品牌心智占有率，实时评分追踪 AI 时代的品牌声量。",
      date:    "2026-02",
      image:   "",
      link:    "#",
    },
    {
      channel: "research",
      tag:     "AUTOMATION",
      title:   "Industry News Bot",
      cn:      "润滑油行业日报自动化",
      desc:    "每日自动抓取15+润滑油行业信息源，通过 macOS launchd 静默运行，每天早晨生成精选简报，零人工干预。",
      date:    "2026-01",
      image:   "",
      link:    "#",
    },
  ],

  // ── 视频 ─────────────────────────────────────────────────
  videos: [
    {
      title:    "How I Built a Pricing Engine in 48 Hours",
      cn:       "我如何在48小时内搭建润滑油定价引擎",
      channel:  "pricing",
      duration: "12:34",
      embed:    "",   // YouTube/Bilibili 嵌入链接
      file:     "",   // 本地视频文件路径
    },
  ],

  // ── 资源下载 ──────────────────────────────────────────────
  // ⚠️ id 一旦设定不要修改（用于统计下载次数）
  resources: [
    {
      id:      "res_001",
      tag:     "PROMPT",
      title:   "Competitor Price Tracking Prompts",
      cn:      "竞品价格采集提示词模板",
      desc:    "一套经过实战验证的提示词，帮助你用 AI 系统化采集和分析竞品价格动态，覆盖线上线下多渠道。",
      type:    "PDF",
      link:    "",    // ← 填入下载链接
      channel: "pricing",
    },
    {
      id:      "res_002",
      tag:     "FRAMEWORK",
      title:   "Distributor JBP Template",
      cn:      "经销商联合生意计划框架",
      desc:    "用 AI 辅助制定经销商年度联合生意计划的完整框架，含提示词模板和数据结构建议。",
      type:    "XLSX",
      link:    "",
      channel: "channel",
    },
  ],

  // ── 关于 ──────────────────────────────────────────────────
  about: {
    name:     "CG · 高詠",
    role_en:  "Marketing & Strategy Director, Motul China",
    role_cn:  "摩特中国营销战略总监",
    bio_en:   "I've spent years navigating pricing strategy, competitive intelligence, and channel management in the automotive lubricant industry. Now I'm rebuilding these workflows with AI — and this community is where I share what I find.",
    bio_cn:   "在汽配后市场做了多年营销战略，从定价到渠道到竞品情报。现在我在用 AI 重做这些事，这个社区是我分享过程和结论的地方。欢迎同行一起探索。",
    photo:    "",   // ← 填入你的照片路径，如 "images/cg.jpg"
    email:    "your@email.com",
    stats: [
      { num: "10+",  label_cn: "AI工具已落地",  label_en: "Tools Shipped" },
      { num: "5",    label_cn: "内容频道",       label_en: "Channels" },
      { num: "APAC", label_cn: "市场覆盖",       label_en: "Market Scope" },
      { num: "48h",  label_cn: "原型周期",       label_en: "Prototype Cycle" },
    ],
  },

};
