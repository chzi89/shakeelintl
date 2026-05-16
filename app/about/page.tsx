import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Shakeel International",
  description:
    "Pioneering the premium Himalayan pink salt trade for over 35 years.",
};

export default function AboutPage() {
  const stats = [
    { value: "35+", label: "Years of Excellence" },
    { value: "50+", label: "Countries Served" },
    { value: "84", label: "Essential Minerals" },
    { value: "100%", label: "Natural & Unrefined" },
  ];

  const benefits = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="about-benefit-icon">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      title: "Ancient Origin",
      body: "Sourced from 500-million-year-old seabed deposits deep within the Khewra Salt Mine, Pakistan.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="about-benefit-icon">
          <path d="M12 3c4 4 4 14 0 18-4-4-4-14 0-18z" />
          <path d="M3 12h18" />
        </svg>
      ),
      title: "84 Minerals",
      body: "Rich in 84 essential minerals and trace elements that support electrolyte balance and overall well-being.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="about-benefit-icon">
          <path d="M9 12l2 2 4-4" />
          <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.51 0 2.93.37 4.18 1.03" />
        </svg>
      ),
      title: "Pure & Unrefined",
      body: "Completely free from additives, preservatives, or industrial pollutants — nature as it was intended.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="about-benefit-icon">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Sustainably Harvested",
      body: "Mindful extraction methods that preserve the mine's integrity for future generations.",
    },
  ];

  return (
    <main className="about-page">
      <style>{`
        .about-page {
          background: #fdf8f3;
          color: #1a1208;
          font-family: 'Georgia', 'Times New Roman', serif;
          overflow-x: hidden;
        }

        /* ── Hero ── */
        .about-hero {
          position: relative;
          height: 100svh;
          min-height: 560px;
          max-height: 900px;
          width: 100%;
          overflow: hidden;
        }
        .about-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            105deg,
            rgba(10,6,2,0.72) 0%,
            rgba(10,6,2,0.4) 55%,
            rgba(10,6,2,0.1) 100%
          );
          z-index: 1;
        }
        .about-hero-content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: clamp(2rem, 5vw, 5rem);
          padding-bottom: clamp(3rem, 7vw, 6rem);
          max-width: 1200px;
          margin: 0 auto;
        }
        .about-hero-eyebrow {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: clamp(10px, 1.5vw, 12px);
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #d4956a;
          margin-bottom: 1.2rem;
        }
        .about-hero-title {
          font-size: clamp(2.2rem, 5.5vw, 5rem);
          line-height: 1.08;
          font-weight: 400;
          color: #fff;
          max-width: 15ch;
          margin: 0 0 1.5rem;
        }
        .about-hero-sub {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: clamp(0.85rem, 1.8vw, 1rem);
          color: rgba(255,255,255,0.78);
          max-width: 42ch;
          line-height: 1.7;
          margin-bottom: 2.5rem;
        }
        .about-hero-cta {
          display: inline-block;
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #1a1208;
          background: #d4956a;
          padding: 0.9rem 2.2rem;
          border: none;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }
        .about-hero-cta:hover { background: #c4834e; }

        /* ── Stats bar ── */
        .about-stats {
          background: #1a1208;
          padding: 2.5rem clamp(1.5rem, 5vw, 4rem);
        }
        .about-stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem 1rem;
          max-width: 900px;
          margin: 0 auto;
        }
        @media (min-width: 640px) {
          .about-stats-grid { grid-template-columns: repeat(4, 1fr); gap: 0; }
        }
        .about-stat {
          text-align: center;
          position: relative;
        }
        @media (min-width: 640px) {
          .about-stat + .about-stat::before {
            content: '';
            position: absolute;
            left: 0; top: 15%; height: 70%;
            width: 1px;
            background: rgba(255,255,255,0.12);
          }
        }
        .about-stat-value {
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 400;
          color: #d4956a;
          line-height: 1;
        }
        .about-stat-label {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          margin-top: 0.5rem;
        }

        /* ── Mission & Vision ── */
        .about-mv {
          padding: clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem);
          max-width: 1100px;
          margin: 0 auto;
        }
        .about-section-label {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #b87440;
          margin-bottom: 1rem;
        }
        .about-section-title {
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          font-weight: 400;
          color: #1a1208;
          line-height: 1.15;
          margin: 0 0 3rem;
        }
        .about-mv-grid {
          display: grid;
          gap: 1.5px;
          grid-template-columns: 1fr;
        }
        @media (min-width: 700px) {
          .about-mv-grid { grid-template-columns: 1fr 1fr; }
        }
        .about-mv-card {
          background: #fff;
          padding: clamp(2rem, 4vw, 3rem);
          border: 1px solid rgba(180,116,64,0.15);
          transition: border-color 0.2s;
        }
        .about-mv-card:hover { border-color: rgba(180,116,64,0.4); }
        .about-mv-icon {
          width: 40px; height: 40px;
          color: #b87440;
          margin-bottom: 1.5rem;
        }
        .about-mv-card h3 {
          font-size: clamp(1.1rem, 2vw, 1.35rem);
          font-weight: 400;
          color: #1a1208;
          margin: 0 0 1rem;
        }
        .about-mv-card p {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 0.9rem;
          line-height: 1.8;
          color: #5a4a38;
          margin: 0;
        }

        /* ── Origins split ── */
        .about-origins {
          display: grid;
          grid-template-columns: 1fr;
          min-height: 500px;
        }
        @media (min-width: 900px) {
          .about-origins { grid-template-columns: 1fr 1fr; }
        }
        .about-origins-image {
          position: relative;
          min-height: 360px;
        }
        .about-origins-content {
          background: #2b1d0e;
          display: flex;
          align-items: center;
          padding: clamp(3rem, 6vw, 5rem) clamp(2rem, 5vw, 4.5rem);
        }
        .about-origins-inner { max-width: 480px; }
        .about-origins-label {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #d4956a;
          margin-bottom: 1rem;
        }
        .about-origins-title {
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          font-weight: 400;
          color: #fff;
          line-height: 1.2;
          margin: 0 0 2rem;
        }
        .about-origins-list {
          list-style: none;
          padding: 0; margin: 0;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }
        .about-origins-list li {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }
        .about-origins-bullet {
          flex-shrink: 0;
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #d4956a;
          margin-top: 0.55em;
        }
        .about-origins-list span {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 0.88rem;
          line-height: 1.75;
          color: rgba(255,255,255,0.7);
        }

        /* ── Benefits ── */
        .about-benefits {
          padding: clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem);
          background: #fff;
        }
        .about-benefits-inner { max-width: 1100px; margin: 0 auto; }
        .about-benefits-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2px;
          margin-top: 3rem;
        }
        @media (min-width: 540px) {
          .about-benefits-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 900px) {
          .about-benefits-grid { grid-template-columns: repeat(4, 1fr); }
        }
        .about-benefit-card {
          background: #fdf8f3;
          padding: clamp(1.8rem, 3vw, 2.5rem);
          transition: background 0.2s;
        }
        .about-benefit-card:hover { background: #f5ede0; }
        .about-benefit-icon {
          width: 36px; height: 36px;
          color: #b87440;
          margin-bottom: 1.3rem;
        }
        .about-benefit-card h3 {
          font-size: 1.05rem;
          font-weight: 400;
          color: #1a1208;
          margin: 0 0 0.75rem;
        }
        .about-benefit-card p {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 0.83rem;
          line-height: 1.8;
          color: #6b5542;
          margin: 0;
        }

        /* ── Global reach ── */
        .about-reach {
          padding: clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem);
          background: #fdf8f3;
        }
        .about-reach-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }
        @media (min-width: 900px) {
          .about-reach-inner { grid-template-columns: 1fr 1fr; }
        }
        .about-reach-image {
          border: 1px solid rgba(180,116,64,0.2);
          overflow: hidden;
        }
        .about-reach-text { }
        .about-reach-text p {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 0.92rem;
          line-height: 1.85;
          color: #5a4a38;
          margin: 1.2rem 0 0;
        }
        .about-reach-countries {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 2rem;
        }
        .about-reach-country {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #b87440;
          border: 1px solid rgba(180,116,64,0.3);
          padding: 0.35rem 0.8rem;
          transition: background 0.15s;
        }
        .about-reach-country:hover {
          background: rgba(180,116,64,0.08);
        }

        /* ── CTA banner ── */
        .about-cta {
          background: #2b1d0e;
          padding: clamp(4rem, 8vw, 6rem) clamp(1.5rem, 5vw, 4rem);
          text-align: center;
        }
        .about-cta h2 {
          font-size: clamp(1.8rem, 4vw, 3rem);
          font-weight: 400;
          color: #fff;
          margin: 0 0 1.2rem;
        }
        .about-cta p {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 0.9rem;
          color: rgba(255,255,255,0.6);
          max-width: 42ch;
          margin: 0 auto 2.5rem;
          line-height: 1.75;
        }
        .about-cta-btn {
          display: inline-block;
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #1a1208;
          background: #d4956a;
          padding: 1rem 2.8rem;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s;
        }
        .about-cta-btn:hover { background: #c4834e; }
      `}</style>

      {/* ── Hero ── */}
      <section className="about-hero">
        <Image
          src="/hero-salt.jpg"
          alt="Workers harvesting pink Himalayan salt"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <p className="about-hero-eyebrow">Est. 1989 · Khewra, Pakistan</p>
          <h1 className="about-hero-title">Our Heritage,<br />Your Health.</h1>
          <p className="about-hero-sub">
            Pioneering the premium Himalayan pink salt trade for over 35 years, connecting the ancient mines of Pakistan to tables across the globe.
          </p>
          <button className="about-hero-cta">Discover Our Story</button>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div className="about-stats">
        <div className="about-stats-grid">
          {stats.map(({ value, label }) => (
            <div className="about-stat" key={label}>
              <div className="about-stat-value">{value}</div>
              <div className="about-stat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Mission & Vision ── */}
      <section className="about-mv">
        <p className="about-section-label">What drives us</p>
        <h2 className="about-section-title">Mission &amp; Vision</h2>
        <div className="about-mv-grid">
          {[
            {
              title: "Our Mission",
              body: "To provide the world with the purest, most authentic Himalayan pink salt — ensuring sustainable practices and enriching lives through exceptional quality, one crystal at a time.",
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="about-mv-icon">
                  <path d="M12 3c4 4 4 14 0 18-4-4-4-14 0-18z" />
                  <path d="M3 12h18" />
                </svg>
              ),
            },
            {
              title: "Our Vision",
              body: "To be the global leader in premium natural salt, recognised for integrity, innovation, and our enduring commitment to both environmental stewardship and human flourishing.",
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="about-mv-icon">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 8v4l3 3" />
                </svg>
              ),
            },
          ].map((c) => (
            <div className="about-mv-card" key={c.title}>
              {c.icon}
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Origins split section ── */}
      <section className="about-origins">
        <div className="about-origins-image">
          <Image
            src="/salt-spoon.jpg"
            alt="Wooden spoon with pink Himalayan salt crystals"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="about-origins-content">
          <div className="about-origins-inner">
            <p className="about-origins-label">The source</p>
            <h2 className="about-origins-title">
              Origins &amp; Benefits of<br />Himalayan Pink Salt
            </h2>
            <ul className="about-origins-list">
              {[
                "Sourced directly from ancient seabed deposits in the Khewra Salt Mine.",
                "Rich in 84 essential minerals and trace elements.",
                "Unrefined and completely free from additives and pollutants.",
                "Supports electrolyte balance and overall well-being.",
                "Hand-selected and inspected to meet the highest export standards.",
              ].map((item) => (
                <li key={item}>
                  <span className="about-origins-bullet" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Benefits grid ── */}
      <section className="about-benefits">
        <div className="about-benefits-inner">
          <p className="about-section-label">Why it matters</p>
          <h2 className="about-section-title">The Shakeel Difference</h2>
          <div className="about-benefits-grid">
            {benefits.map((b) => (
              <div className="about-benefit-card" key={b.title}>
                {b.icon}
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Global reach ── */}
      <section className="about-reach">
        <div className="about-reach-inner">
          <div>
            <p className="about-section-label">Our footprint</p>
            <h2 className="about-section-title">A Global Reach,<br />A Local Heart</h2>
            <div className="about-reach-text">
              <p>
                From the ancient mines of Khewra to kitchens and spas across six continents, Shakeel International has spent three decades building a supply chain rooted in trust and traceability.
              </p>
              <p>
                We export premium salt to over 50 countries, working directly with chefs, wellness brands, and distributors who share our commitment to quality.
              </p>
            </div>
            <div className="about-reach-countries">
              {["United States", "Germany", "Japan", "Australia", "Canada", "UAE", "France", "UK", "South Korea", "Netherlands"].map((c) => (
                <span className="about-reach-country" key={c}>{c}</span>
              ))}
            </div>
          </div>
          <div className="about-reach-image">
            <Image
              src="/world-map.jpg"
              alt="World map showing Shakeel International's export reach"
              width={1600}
              height={800}
              loading="lazy"
              className="w-full h-auto block"
            />
          </div>
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section className="about-cta">
        <h2>Ready to Source the Finest Salt?</h2>
        <p>
          Whether you
          a distributor, chef, or wellness brand — we love to partner with you.
        </p>
        <a href="/contact" className="about-cta-btn">Get in Touch</a>
      </section>
    </main>
  );
}