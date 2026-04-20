"use client";

import { useEffect, useMemo, useState } from "react";

type Lang = "en" | "ru" | "de" | "es" | "ar" | "zh";

type MarketRow = {
  symbol: string;
  price: string;
  change: string;
  confidence: number;
  sentiment: "Bullish" | "Bearish" | "Neutral" | "Risk-On" | "Risk-Off" | "Mixed";
};

const content = {
  en: {
    nav: {
      features: "Features",
      signals: "Signals",
      news: "News",
      rewards: "Rewards",
      pricing: "Pricing",
      login: "Login",
      join: "Join Now",
    },
    hero: {
      badge: "Global AI Trading Intelligence",
      title: "Trade faster with live market intelligence",
      subtitle:
        "Live prices, market mood, confidence scores, AI signals, premium news flow, referral rewards, and multilingual access for crypto, forex, gold, indices, and macro traders.",
      cta1: "Start Free",
      cta2: "Open Dashboard",
    },
    sections: {
      features: "Platform Features",
      live: "Live Markets",
      signals: "AI Signals",
      news: "Breaking News",
      rewards: "Bonus & Referral Rewards",
      pricing: "Membership Plans",
      register: "Create Account",
      ta: "Technical View",
    },
    form: {
      email: "Email address",
      password: "Password",
      button: "Create Account",
    },
    pricing: {
      free: "Free",
      pro: "Pro",
      vip: "VIP",
      month: "/month",
      choose: "Choose Plan",
    },
  },
  ru: {
    nav: {
      features: "Функции",
      signals: "Сигналы",
      news: "Новости",
      rewards: "Бонусы",
      pricing: "Тарифы",
      login: "Войти",
      join: "Присоединиться",
    },
    hero: {
      badge: "Глобальная AI аналитика рынков",
      title: "Торгуй быстрее с живой аналитикой рынков",
      subtitle:
        "Живые цены, настроение рынка, процент уверенности, AI сигналы, новостной поток, реферальные бонусы и мультиязычный доступ для крипты, forex, золота, индексов и макро.",
      cta1: "Начать бесплатно",
      cta2: "Открыть дашборд",
    },
    sections: {
      features: "Функции платформы",
      live: "Живые рынки",
      signals: "AI сигналы",
      news: "Срочные новости",
      rewards: "Бонусы и рефералы",
      pricing: "Тарифные планы",
      register: "Создать аккаунт",
      ta: "Технический обзор",
    },
    form: {
      email: "Email адрес",
      password: "Пароль",
      button: "Создать аккаунт",
    },
    pricing: {
      free: "Бесплатно",
      pro: "Про",
      vip: "VIP",
      month: "/месяц",
      choose: "Выбрать план",
    },
  },
  de: {
    nav: {
      features: "Funktionen",
      signals: "Signale",
      news: "News",
      rewards: "Belohnungen",
      pricing: "Preise",
      login: "Login",
      join: "Jetzt starten",
    },
    hero: {
      badge: "Globale KI-Trading-Intelligenz",
      title: "Schneller handeln mit Live-Marktintelligenz",
      subtitle:
        "Live-Preise, Marktstimmung, Vertrauenswerte, KI-Signale, Premium-Newsflow, Empfehlungsboni und mehrsprachiger Zugang.",
      cta1: "Kostenlos starten",
      cta2: "Dashboard öffnen",
    },
    sections: {
      features: "Plattform-Funktionen",
      live: "Live Märkte",
      signals: "KI-Signale",
      news: "Breaking News",
      rewards: "Bonus & Empfehlungen",
      pricing: "Mitgliedschaften",
      register: "Konto erstellen",
      ta: "Technischer Überblick",
    },
    form: {
      email: "E-Mail-Adresse",
      password: "Passwort",
      button: "Konto erstellen",
    },
    pricing: {
      free: "Kostenlos",
      pro: "Pro",
      vip: "VIP",
      month: "/Monat",
      choose: "Plan wählen",
    },
  },
  es: {
    nav: {
      features: "Funciones",
      signals: "Señales",
      news: "Noticias",
      rewards: "Bonos",
      pricing: "Precios",
      login: "Entrar",
      join: "Únete ahora",
    },
    hero: {
      badge: "Inteligencia global de trading con IA",
      title: "Opera más rápido con inteligencia de mercado en vivo",
      subtitle:
        "Precios en vivo, sentimiento del mercado, puntuación de confianza, señales IA, noticias premium, recompensas por referidos y acceso multilingüe.",
      cta1: "Comenzar gratis",
      cta2: "Abrir panel",
    },
    sections: {
      features: "Funciones de la plataforma",
      live: "Mercados en vivo",
      signals: "Señales IA",
      news: "Noticias urgentes",
      rewards: "Bonos y referidos",
      pricing: "Planes",
      register: "Crear cuenta",
      ta: "Vista técnica",
    },
    form: {
      email: "Correo electrónico",
      password: "Contraseña",
      button: "Crear cuenta",
    },
    pricing: {
      free: "Gratis",
      pro: "Pro",
      vip: "VIP",
      month: "/mes",
      choose: "Elegir plan",
    },
  },
  ar: {
    nav: {
      features: "المميزات",
      signals: "الإشارات",
      news: "الأخبار",
      rewards: "المكافآت",
      pricing: "الأسعار",
      login: "تسجيل الدخول",
      join: "ابدأ الآن",
    },
    hero: {
      badge: "ذكاء تداول عالمي بالذكاء الاصطناعي",
      title: "تداول أسرع مع معلومات السوق الحية",
      subtitle:
        "أسعار مباشرة ومزاج السوق ونسب الثقة وإشارات الذكاء الاصطناعي وتدفق الأخبار ومكافآت الإحالة والوصول متعدد اللغات.",
      cta1: "ابدأ مجاناً",
      cta2: "افتح اللوحة",
    },
    sections: {
      features: "مميزات المنصة",
      live: "الأسواق المباشرة",
      signals: "إشارات الذكاء الاصطناعي",
      news: "الأخبار العاجلة",
      rewards: "المكافآت والإحالات",
      pricing: "الخطط",
      register: "إنشاء حساب",
      ta: "نظرة فنية",
    },
    form: {
      email: "البريد الإلكتروني",
      password: "كلمة المرور",
      button: "إنشاء حساب",
    },
    pricing: {
      free: "مجاني",
      pro: "برو",
      vip: "VIP",
      month: "/شهرياً",
      choose: "اختر الخطة",
    },
  },
  zh: {
    nav: {
      features: "功能",
      signals: "信号",
      news: "新闻",
      rewards: "奖励",
      pricing: "价格",
      login: "登录",
      join: "立即加入",
    },
    hero: {
      badge: "全球AI交易情报平台",
      title: "用实时市场情报更快交易",
      subtitle:
        "实时价格、市场情绪、置信度、AI信号、新闻流、推荐奖励和多语言访问。",
      cta1: "免费开始",
      cta2: "打开面板",
    },
    sections: {
      features: "平台功能",
      live: "实时市场",
      signals: "AI信号",
      news: "快讯",
      rewards: "奖励与推荐",
      pricing: "会员计划",
      register: "创建账户",
      ta: "技术视图",
    },
    form: {
      email: "邮箱地址",
      password: "密码",
      button: "创建账户",
    },
    pricing: {
      free: "免费",
      pro: "专业版",
      vip: "VIP",
      month: "/月",
      choose: "选择方案",
    },
  },
} as const;

const staticNews = [
  {
    tag: "MACRO",
    title: "Central bank comments and inflation data remain the main volatility driver.",
    time: "Now",
  },
  {
    tag: "CRYPTO",
    title: "Bitcoin momentum stays firm as traders watch liquidity around range highs.",
    time: "2m ago",
  },
  {
    tag: "GOLD",
    title: "Gold responds to yield movement and defensive demand.",
    time: "4m ago",
  },
  {
    tag: "FOREX",
    title: "London and New York overlap expected to increase movement in major pairs.",
    time: "8m ago",
  },
];

const signals = [
  {
    market: "BTC/USD",
    direction: "LONG",
    entry: "84,100 - 84,350",
    sl: "83,620",
    tp: "85,500 / 86,200 / 87,150",
    confidence: "87%",
    mood: "Bullish",
  },
  {
    market: "XAU/USD",
    direction: "SHORT",
    entry: "3,344 - 3,349",
    sl: "3,358",
    tp: "3,332 / 3,326 / 3,318",
    confidence: "76%",
    mood: "Bearish",
  },
  {
    market: "EUR/USD",
    direction: "LONG",
    entry: "1.0838 - 1.0844",
    sl: "1.0817",
    tp: "1.0860 / 1.0878",
    confidence: "71%",
    mood: "Mixed",
  },
];

const technicalRows = [
  {
    market: "BTC/USD",
    trend: "Bullish",
    setup: "Breakout + retest",
    levels: "83.8k / 85.5k / 87.2k",
    volume: "Rising",
  },
  {
    market: "ETH/USD",
    trend: "Neutral",
    setup: "Compression below resistance",
    levels: "1940 / 1998 / 2030",
    volume: "Mixed",
  },
  {
    market: "XAU/USD",
    trend: "Bearish",
    setup: "Resistance rejection",
    levels: "3332 / 3348 / 3358",
    volume: "Heavy",
  },
];

const plans = [
  {
    key: "free",
    price: "$0",
    features: ["Delayed news", "Basic sentiment", "Watchlist", "Limited signals"],
  },
  {
    key: "pro",
    price: "$49",
    features: ["Fast market feed", "AI signals", "Confidence score", "Referral rewards"],
  },
  {
    key: "vip",
    price: "$149",
    features: ["Priority alerts", "Advanced TA", "VIP bonus level", "Premium access"],
  },
];

function cardStyle(): React.CSSProperties {
  return {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 24,
    padding: 20,
    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
  };
}

export default function Page() {
  const [lang, setLang] = useState<Lang>("en");
  const [markets, setMarkets] = useState<MarketRow[]>([]);
  const [loadingMarkets, setLoadingMarkets] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const t = useMemo(() => content[lang], [lang]);
  const isRTL = lang === "ar";

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const loadMarkets = async () => {
      try {
        const res = await fetch("/api/live-markets", { cache: "no-store" });
        const data = await res.json();
        setMarkets(data.markets || []);
      } catch {
        setMarkets([
          { symbol: "BTC/USD", price: "$84,240", change: "+2.41%", confidence: 87, sentiment: "Bullish" },
          { symbol: "ETH/USD", price: "$1,985", change: "+1.33%", confidence: 74, sentiment: "Neutral" },
          { symbol: "XAU/USD", price: "$3,341", change: "-0.42%", confidence: 76, sentiment: "Bearish" },
          { symbol: "EUR/USD", price: "1.0842", change: "+0.18%", confidence: 69, sentiment: "Mixed" },
          { symbol: "NASDAQ", price: "18,442", change: "-0.31%", confidence: 61, sentiment: "Risk-Off" },
          { symbol: "DXY", price: "104.18", change: "+0.22%", confidence: 65, sentiment: "Risk-On" },
        ]);
      } finally {
        setLoadingMarkets(false);
      }
    };

    loadMarkets();
    timer = setInterval(loadMarkets, 10000);

    return () => clearInterval(timer);
  }, []);

  const submitDemo = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Demo registration\nEmail: ${email}\nPassword: ${password}\nLanguage: ${lang}`);
  };

  const tone = (value: string) => {
    if (value.startsWith("+")) return "#4ade80";
    if (value.startsWith("-")) return "#fb7185";
    return "#facc15";
  };

  const sentimentColor = (sentiment: string) => {
    if (sentiment === "Bullish" || sentiment === "Risk-On") return "#4ade80";
    if (sentiment === "Bearish" || sentiment === "Risk-Off") return "#fb7185";
    return "#facc15";
  };

  return (
    <main
      dir={isRTL ? "rtl" : "ltr"}
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, rgba(34,211,238,0.16), transparent 24%), linear-gradient(180deg, #071019 0%, #030712 100%)",
        color: "white",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backdropFilter: "blur(14px)",
          background: "rgba(7,16,25,0.86)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "18px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <div>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#67e8f9" }}>AlphaScope AI</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)" }}>
              Global Trading Intelligence
            </div>
          </div>

          <nav
            style={{
              display: "flex",
              gap: 18,
              flexWrap: "wrap",
              color: "rgba(255,255,255,0.8)",
              fontSize: 14,
            }}
          >
            <a href="#features">{t.nav.features}</a>
            <a href="#signals">{t.nav.signals}</a>
            <a href="#news">{t.nav.news}</a>
            <a href="#rewards">{t.nav.rewards}</a>
            <a href="#pricing">{t.nav.pricing}</a>
          </nav>

          <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as Lang)}
              style={{
                background: "rgba(255,255,255,0.06)",
                color: "white",
                border: "1px solid rgba(255,255,255,0.1)",
                padding: "10px 12px",
                borderRadius: 12,
              }}
            >
              <option value="en">EN</option>
              <option value="ru">RU</option>
              <option value="de">DE</option>
              <option value="es">ES</option>
              <option value="ar">AR</option>
              <option value="zh">ZH</option>
            </select>

            <button
              style={{
                padding: "10px 14px",
                borderRadius: 12,
                background: "transparent",
                color: "white",
                border: "1px solid rgba(255,255,255,0.12)",
                cursor: "pointer",
              }}
            >
              {t.nav.login}
            </button>

            <button
              style={{
                padding: "10px 16px",
                borderRadius: 12,
                background: "#22d3ee",
                color: "black",
                border: "none",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              {t.nav.join}
            </button>
          </div>
        </div>
      </header>

      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "70px 24px 40px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: 28,
          }}
        >
          <div>
            <div
              style={{
                display: "inline-block",
                marginBottom: 18,
                padding: "10px 16px",
                borderRadius: 999,
                background: "rgba(34,211,238,0.12)",
                border: "1px solid rgba(34,211,238,0.18)",
                color: "#67e8f9",
                fontSize: 14,
              }}
            >
              {t.hero.badge}
            </div>

            <h1
              style={{
                fontSize: 58,
                lineHeight: 1.03,
                margin: 0,
                maxWidth: 840,
              }}
            >
              {t.hero.title}
            </h1>

            <p
              style={{
                marginTop: 24,
                maxWidth: 760,
                fontSize: 18,
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.72)",
              }}
            >
              {t.hero.subtitle}
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 28 }}>
              <button
                style={{
                  padding: "14px 20px",
                  borderRadius: 16,
                  background: "#22d3ee",
                  color: "black",
                  border: "none",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                {t.hero.cta1}
              </button>
              <button
                style={{
                  padding: "14px 20px",
                  borderRadius: 16,
                  background: "rgba(255,255,255,0.06)",
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.12)",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                {t.hero.cta2}
              </button>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0,1fr))",
                gap: 14,
                marginTop: 28,
                maxWidth: 760,
              }}
            >
              {[
                { label: "Members", value: "128k+" },
                { label: "Signals / Month", value: "94k" },
                { label: "Tracked Markets", value: "250+" },
              ].map((item) => (
                <div key={item.label} style={cardStyle()}>
                  <div style={{ fontSize: 28, fontWeight: 700 }}>{item.value}</div>
                  <div style={{ marginTop: 4, color: "rgba(255,255,255,0.55)", fontSize: 13 }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={cardStyle()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
              <div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 13 }}>
                  {t.sections.live}
                </div>
                <div style={{ fontSize: 24, fontWeight: 700 }}>Live Market Terminal</div>
              </div>
              <div
                style={{
                  background: "rgba(74,222,128,0.12)",
                  color: "#4ade80",
                  borderRadius: 999,
                  padding: "8px 12px",
                  fontSize: 12,
                  fontWeight: 700,
                }}
              >
                {loadingMarkets ? "SYNCING" : "LIVE"}
              </div>
            </div>

            <div style={{ display: "grid", gap: 12 }}>
              {markets.map((item) => (
                <div
                  key={item.symbol}
                  style={{
                    background: "rgba(0,0,0,0.28)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 18,
                    padding: 14,
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
                    <div>
                      <div style={{ fontWeight: 700 }}>{item.symbol}</div>
                      <div style={{ color: "rgba(255,255,255,0.58)", fontSize: 14 }}>{item.price}</div>
                    </div>
                    <div style={{ textAlign: isRTL ? "left" : "right" }}>
                      <div style={{ color: tone(item.change), fontWeight: 700 }}>{item.change}</div>
                      <div style={{ color: sentimentColor(item.sentiment), fontSize: 13 }}>
                        {item.sentiment}
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: 12 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: 12,
                        color: "rgba(255,255,255,0.56)",
                        marginBottom: 6,
                      }}
                    >
                      <span>Confidence</span>
                      <span>{item.confidence}%</span>
                    </div>
                    <div
                      style={{
                        height: 8,
                        background: "rgba(255,255,255,0.08)",
                        borderRadius: 999,
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: `${item.confidence}%`,
                          height: "100%",
                          background: sentimentColor(item.sentiment),
                          borderRadius: 999,
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="features" style={{ maxWidth: 1280, margin: "0 auto", padding: "14px 24px 30px" }}>
        <h2 style={{ fontSize: 32, marginBottom: 20 }}>{t.sections.features}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0,1fr))", gap: 16 }}>
          {[
            {
              title: "Live Prices",
              text: "Auto-refreshing market prices across crypto, forex, gold and indices.",
            },
            {
              title: "Confidence %",
              text: "AI confidence score for each market setup and trend condition.",
            },
            {
              title: "Market Sentiment",
              text: "Bullish, bearish, neutral and risk-mode view for fast decisions.",
            },
            {
              title: "Bonus Rewards",
              text: "Referral bonuses, partner levels and invite-based premium upgrades.",
            },
          ].map((item) => (
            <div key={item.title} style={cardStyle()}>
              <div style={{ fontSize: 18, fontWeight: 700 }}>{item.title}</div>
              <div style={{ marginTop: 10, color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="signals" style={{ maxWidth: 1280, margin: "0 auto", padding: "26px 24px" }}>
        <h2 style={{ fontSize: 32, marginBottom: 20 }}>{t.sections.signals}</h2>
        <div style={{ display: "grid", gap: 16 }}>
          {signals.map((s) => (
            <div key={s.market} style={cardStyle()}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                <div>
                  <div style={{ fontSize: 22, fontWeight: 700 }}>{s.market}</div>
                  <div
                    style={{
                      display: "inline-block",
                      marginTop: 8,
                      padding: "6px 10px",
                      borderRadius: 999,
                      background: s.direction === "LONG" ? "rgba(74,222,128,0.12)" : "rgba(251,113,133,0.12)",
                      color: s.direction === "LONG" ? "#4ade80" : "#fb7185",
                      fontWeight: 700,
                      fontSize: 13,
                    }}
                  >
                    {s.direction}
                  </div>
                </div>
                <div style={{ textAlign: isRTL ? "left" : "right" }}>
                  <div style={{ fontSize: 14, color: "rgba(255,255,255,0.6)" }}>Confidence</div>
                  <div style={{ fontSize: 22, fontWeight: 700 }}>{s.confidence}</div>
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(5, minmax(0,1fr))",
                  gap: 14,
                  marginTop: 18,
                }}
              >
                {[
                  ["Entry", s.entry],
                  ["SL", s.sl],
                  ["TP", s.tp],
                  ["Mood", s.mood],
                  ["Setup", "Confirmed"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    style={{
                      background: "rgba(0,0,0,0.24)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 16,
                      padding: 14,
                    }}
                  >
                    <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>{k}</div>
                    <div style={{ marginTop: 8, fontWeight: 700, lineHeight: 1.5 }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="news" style={{ maxWidth: 1280, margin: "0 auto", padding: "26px 24px" }}>
        <h2 style={{ fontSize: 32, marginBottom: 20 }}>{t.sections.news}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: 16 }}>
          {staticNews.map((n) => (
            <div key={n.title} style={cardStyle()}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
                <span
                  style={{
                    padding: "6px 10px",
                    borderRadius: 999,
                    background: "rgba(34,211,238,0.12)",
                    color: "#67e8f9",
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  {n.tag}
                </span>
                <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 12 }}>{n.time}</span>
              </div>
              <div style={{ marginTop: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.85)" }}>
                {n.title}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="rewards" style={{ maxWidth: 1280, margin: "0 auto", padding: "26px 24px" }}>
        <h2 style={{ fontSize: 32, marginBottom: 20 }}>{t.sections.rewards}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0,1fr))", gap: 16 }}>
          {[
            { title: "Invite 1 User", value: "7 Premium Days" },
            { title: "Invite 3 Users", value: "Pro Unlocked" },
            { title: "Invite 10 Users", value: "VIP Partner" },
            { title: "Recurring Bonus", value: "30% Monthly" },
          ].map((item) => (
            <div key={item.title} style={cardStyle()}>
              <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 13 }}>{item.title}</div>
              <div style={{ marginTop: 10, fontSize: 24, fontWeight: 700, color: "#67e8f9" }}>
                {item.value}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            ...cardStyle(),
            marginTop: 16,
            background: "linear-gradient(135deg, rgba(34,211,238,0.12), rgba(255,255,255,0.03))",
          }}
        >
          <div style={{ fontSize: 20, fontWeight: 700 }}>Referral Link</div>
          <div style={{ marginTop: 10, color: "#67e8f9", fontSize: 18 }}>
            alphascope.ai/invite/ROM123
          </div>
          <div style={{ marginTop: 10, color: "rgba(255,255,255,0.62)", lineHeight: 1.7 }}>
            Invite traders, unlock monthly partner rewards, and turn your membership into a growth engine.
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "26px 24px" }}>
        <h2 style={{ fontSize: 32, marginBottom: 20 }}>{t.sections.ta}</h2>
        <div style={cardStyle()}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, minmax(0,1fr))",
              gap: 12,
              paddingBottom: 14,
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              color: "rgba(255,255,255,0.5)",
              fontSize: 12,
              textTransform: "uppercase",
            }}
          >
            <div>Market</div>
            <div>Trend</div>
            <div>Setup</div>
            <div>Levels</div>
            <div>Volume</div>
          </div>

          {technicalRows.map((row) => (
            <div
              key={row.market}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, minmax(0,1fr))",
                gap: 12,
                padding: "16px 0",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div>{row.market}</div>
              <div
                style={{
                  color:
                    row.trend === "Bullish"
                      ? "#4ade80"
                      : row.trend === "Bearish"
                      ? "#fb7185"
                      : "#facc15",
                  fontWeight: 700,
                }}
              >
                {row.trend}
              </div>
              <div>{row.setup}</div>
              <div>{row.levels}</div>
              <div>{row.volume}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" style={{ maxWidth: 1280, margin: "0 auto", padding: "26px 24px" }}>
        <h2 style={{ fontSize: 32, marginBottom: 20 }}>{t.sections.pricing}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 16 }}>
          {plans.map((plan, idx) => (
            <div
              key={plan.key}
              style={{
                ...cardStyle(),
                border:
                  idx === 1 ? "1px solid rgba(34,211,238,0.4)" : "1px solid rgba(255,255,255,0.1)",
                background:
                  idx === 1 ? "rgba(34,211,238,0.10)" : "rgba(255,255,255,0.05)",
              }}
            >
              <div style={{ fontSize: 20, fontWeight: 700 }}>
                {plan.key === "free"
                  ? t.pricing.free
                  : plan.key === "pro"
                  ? t.pricing.pro
                  : t.pricing.vip}
              </div>

              <div style={{ marginTop: 14, fontSize: 44, fontWeight: 700 }}>
                {plan.price}
                <span style={{ fontSize: 16, color: "rgba(255,255,255,0.45)" }}>
                  {t.pricing.month}
                </span>
              </div>

              <div style={{ marginTop: 18, display: "grid", gap: 10 }}>
                {plan.features.map((f) => (
                  <div
                    key={f}
                    style={{
                      background: "rgba(0,0,0,0.24)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 14,
                      padding: 12,
                      color: "rgba(255,255,255,0.82)",
                    }}
                  >
                    {f}
                  </div>
                ))}
              </div>

              <button
                style={{
                  marginTop: 18,
                  width: "100%",
                  padding: "14px 18px",
                  borderRadius: 16,
                  background: idx === 1 ? "#22d3ee" : "rgba(255,255,255,0.06)",
                  color: idx === 1 ? "black" : "white",
                  border: idx === 1 ? "none" : "1px solid rgba(255,255,255,0.12)",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                {t.pricing.choose}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "26px 24px 70px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 0.9fr", gap: 18 }}>
          <div style={cardStyle()}>
            <h2 style={{ fontSize: 32, marginTop: 0 }}>{t.sections.register}</h2>
            <p style={{ color: "rgba(255,255,255,0.66)", lineHeight: 1.8 }}>
              Register to access AI signals, market confidence, referral rewards, technical views,
              faster alerts, and premium trading intelligence.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 14, marginTop: 20 }}>
              {[
                { title: "Live Prices", value: "24/7" },
                { title: "Confidence", value: "AI Score" },
                { title: "Bonus", value: "30% Monthly" },
              ].map((item) => (
                <div key={item.title} style={{ ...cardStyle(), padding: 16 }}>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>{item.title}</div>
                  <div style={{ marginTop: 8, fontWeight: 700, fontSize: 22 }}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={submitDemo} style={cardStyle()}>
            <label style={{ display: "block", marginBottom: 8, color: "rgba(255,255,255,0.66)" }}>
              {t.form.email}
            </label>
            <input
              type="email"
              placeholder={t.form.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "14px 16px",
                borderRadius: 16,
                background: "rgba(0,0,0,0.25)",
                color: "white",
                border: "1px solid rgba(255,255,255,0.1)",
                outline: "none",
                marginBottom: 16,
              }}
            />

            <label style={{ display: "block", marginBottom: 8, color: "rgba(255,255,255,0.66)" }}>
              {t.form.password}
            </label>
            <input
              type="password"
              placeholder={t.form.password}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "14px 16px",
                borderRadius: 16,
                background: "rgba(0,0,0,0.25)",
                color: "white",
                border: "1px solid rgba(255,255,255,0.1)",
                outline: "none",
                marginBottom: 18,
              }}
            />

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "14px 18px",
                borderRadius: 16,
                background: "#22d3ee",
                color: "black",
                border: "none",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              {t.form.button}
            </button>

            <div style={{ marginTop: 14, color: "rgba(255,255,255,0.42)", fontSize: 12, lineHeight: 1.7 }}>
              Risk Disclaimer: Trading involves risk. This site should be presented as market intelligence,
              analysis, alerts, and education, not guaranteed profit.
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
