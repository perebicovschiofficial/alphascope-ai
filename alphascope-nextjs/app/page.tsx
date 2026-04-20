'use client';
import { useState } from 'react';
import { t } from './translations';

type Lang = 'en' | 'ru' | 'zh' | 'es' | 'ar' | 'fr';

const pricing = [
  {
    name: 'Free',
    price: '£0',
    description: 'For discovering the platform',
    features: ['Daily market snapshot', 'Delayed alerts', 'Public AI news feed'],
  },
  {
    name: 'Starter',
    price: '£19',
    description: 'For active retail traders',
    features: ['Live AI news summaries', 'Core signal feed', 'Email alerts'],
  },
  {
    name: 'Pro',
    price: '£49',
    description: 'For serious traders',
    features: ['BTC, Gold, Forex signals', 'Priority alerts', 'Private dashboard access'],
    featured: true,
  },
  {
    name: 'Elite',
    price: '£99',
    description: 'For high-conviction members',
    features: ['Whale flow watch', 'Macro briefings', 'VIP community + referral boosts'],
  },
];

const marketCards = [
  { label: 'BTC', signal: 'Bullish breakout watch', meta: 'Funding cooling + OI rising' },
  { label: 'XAU/USD', signal: 'Reaction near key support', meta: 'London + NY session focus' },
  { label: 'EUR/USD', signal: 'Range breakout setup', meta: 'Macro catalysts in play' },
  { label: 'AI News', signal: 'Fast summaries, no noise', meta: 'Global tech + markets coverage' },
];

export default function HomePage() {
  const [lang, setLang] = useState<Lang>('en');
  const T = t[lang];

  return (
    <main className="page-shell">
      <div className="orb orb-a" />
      <div className="orb orb-b" />

      <header className="topbar">
        <div className="brand">AlphaScope AI</div>
        <nav className="nav">
          <a href="#markets">{T.markets}</a>
          <a href="#pricing">{T.pricing}</a>
          <a href="#referral">{T.referral}</a>
          <a href="#start" className="nav-cta">{T.startFree}</a>
        </nav>
        <select
          onChange={(e) => setLang(e.target.value as Lang)}
          value={lang}
          style={{background:'transparent', color:'white', border:'1px solid rgba(255,255,255,0.3)', borderRadius:'6px', padding:'4px 8px', cursor:'pointer'}}
        >
          <option value="en">🇬🇧 EN</option>
          <option value="ru">🇷🇺 RU</option>
          <option value="zh">🇨🇳 ZH</option>
          <option value="es">🇪🇸 ES</option>
          <option value="ar">🇸🇦 AR</option>
          <option value="fr">🇫🇷 FR</option>
        </select>
      </header>

      <section className="hero">
        <div className="eyebrow">AI market intelligence • global membership • live alerts</div>
        <h1>{T.hero}</h1>
        <p className="hero-copy">{T.subtitle}</p>
        <div className="hero-actions" id="start">
          <a href="#pricing" className="button button-primary">{T.startFree}</a>
          <a href="#markets" className="button button-secondary">{T.viewMarkets}</a>
        </div>
        <div className="stats-grid">
          <div className="stat-card"><strong>24/7</strong><span>market coverage</span></div>
          <div className="stat-card"><strong>AI</strong><span>news summarization</span></div>
          <div className="stat-card"><strong>30%</strong><span>recurring referral reward</span></div>
          <div className="stat-card"><strong>Global</strong><span>membership-ready structure</span></div>
        </div>
      </section>

      <section className="section" id="markets">
        <h2>One platform across crypto, forex, gold, and macro.</h2>
        <div className="market-grid">
          {marketCards.map((c) => (
            <div key={c.label} className="market-card">
              <div className="market-label">{c.label}</div>
              <div className="market-signal">{c.signal}</div>
              <div className="market-meta">{c.meta}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="pricing">
        <h2>{T.pricing}</h2>
        <div className="pricing-grid">
          {pricing.map((p) => (
            <div key={p.name} className={`pricing-card${p.featured ? ' featured' : ''}`}>
