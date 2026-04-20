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
  { label: 'BTC', signal: 'Bullish breakout watch', meta: 'Funding cooling • OI rising' },
  { label: 'XAU/USD', signal: 'Reaction near key support', meta: 'London + NY session focus' },
  { label: 'EUR/USD', signal: 'Range breakout setup', meta: 'Macro catalysts in play' },
  { label: 'AI News', signal: 'Fast summaries, no noise', meta: 'Global tech + markets coverage' },
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <div className="orb orb-a" />
      <div className="orb orb-b" />

     <header className="topbar">
  <div className="brand">AlphaScope AI</div>
  <nav className="nav">
    <a href="#markets">Markets</a>
    <a href="#pricing">Pricing</a>
    <a href="#referral">Referral</a>
    <a href="#start" className="nav-cta">Start Free</a>
  </nav>
  <select
    onChange={(e) => {
      window.location.href = /${e.target.value === 'en' ? '' : e.target.value};
    }}
    defaultValue="en"
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
        <h1>Trade Smarter. React Faster. Win Longer.</h1>
        <p className="hero-copy">
          A premium intelligence platform for crypto, forex, gold, and macro traders — with AI news,
          live market signals, referral rewards, and a dashboard built for fast decisions.
        </p>
        <div className="hero-actions" id="start">
          <a href="#pricing" className="button button-primary">Start Free</a>
          <a href="#markets" className="button button-secondary">View Markets</a>
        </div>
        <div className="stats-grid">
          <div className="stat-card"><strong>24/7</strong><span>market coverage</span></div>
          <div className="stat-card"><strong>AI</strong><span>news summarization</span></div>
          <div className="stat-card"><strong>30%</strong><span>recurring referral reward</span></div>
          <div className="stat-card"><strong>Global</strong><span>membership-ready structure</span></div>
        </div>
      </section>

      <section className="section" id="markets">
        <div className="section-heading">
          <span>Markets Covered</span>
          <h2>One platform across crypto, forex, gold, and macro.</h2>
          <p>No clutter. No endless noise. Just high-value market context and premium alerts.</p>
        </div>
        <div className="market-grid">
          {marketCards.map((card) => (
            <article key={card.label} className="market-card">
              <div className="market-label">{card.label}</div>
              <h3>{card.signal}</h3>
              <p>{card.meta}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section">
        <div className="split-card">
          <span className="mini-label">Why AlphaScope AI</span>
          <h2>Built like a startup product, not a generic signal page.</h2>
          <ul>
            <li>Premium dark fintech design</li>
            <li>Fast global landing page for Vercel deployment</li>
            <li>Clear subscription tiers ready for Stripe</li>
            <li>Referral section ready for viral growth</li>
            <li>Expandable into login, dashboard, and alerts</li>
          </ul>
        </div>
        <div className="split-card glass-card">
          <span className="mini-label">Future Dashboard</span>
          <div className="dashboard-preview">
            <div className="dashboard-row"><span>BTC bias</span><strong>Risk-on watch</strong></div>
            <div className="dashboard-row"><span>Gold</span><strong>Support reaction zone</strong></div>
            <div className="dashboard-row"><span>FX</span><strong>USD volatility monitor</strong></div>
            <div className="dashboard-row"><span>AI News</span><strong>7 new summaries</strong></div>
          </div>
        </div>
      </section>

      <section className="section" id="pricing">
        <div className="section-heading">
          <span>Pricing</span>
          <h2>Simple membership tiers for global users.</h2>
          <p>Start free, validate the product, then expand into Pro and Elite growth.</p>
        </div>
        <div className="pricing-grid">
          {pricing.map((plan) => (
            <article key={plan.name} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
              <div className="plan-top">
                <span className="plan-name">{plan.name}</span>
                <h3>{plan.price}<small>/month</small></h3>
                <p>{plan.description}</p>
              </div>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a href="#" className={`button ${plan.featured ? 'button-primary' : 'button-secondary'}`}>
                Choose {plan.name}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section referral-section" id="referral">
        <div>
          <span className="mini-label">Referral Engine</span>
          <h2>Invite traders. Earn recurring rewards.</h2>
          <p>
            Turn members into ambassadors with a simple invite system. Each user gets a referral link,
            sees clicks and signups, and can earn recurring rewards from paid conversions.
          </p>
        </div>
        <div className="referral-card">
          <div className="referral-link">alphascope.ai/invite/ROM123</div>
          <div className="referral-metrics">
            <div><strong>148</strong><span>Clicks</span></div>
            <div><strong>21</strong><span>Signups</span></div>
            <div><strong>£327</strong><span>Monthly rewards</span></div>
          </div>
        </div>
      </section>

      <section className="section final-cta">
        <h2>Launch the first version now. Scale into the empire after.</h2>
        <p>
          This starter is designed to get online fast on Vercel, then evolve into subscriptions,
          login, dashboard, and real-time market intelligence.
        </p>
        <div className="hero-actions">
          <a href="#pricing" className="button button-primary">Launch AlphaScope AI</a>
          <a href="#" className="button button-secondary">Add Stripe Next</a>
        </div>
      </section>

      <footer className="footer">
        <div>© 2026 AlphaScope AI</div>
        <div className="footer-links">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Risk Disclaimer</a>
        </div>
      </footer>
    </main>
  );
}
