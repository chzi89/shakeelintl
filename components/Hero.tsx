"use client";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg-pattern" aria-hidden="true" />
      <div className="hero__crystals" aria-hidden="true">
        {[...Array(9)].map((_, i) => (
          <span key={i} className={`crystal crystal--${i + 1}`} />
        ))}
      </div>

      <div className="container hero__inner">
        <div className="hero__content animate-fadeInUp animate-delay-1">
          <span className="section-tag">Est. 2005 · Khewra, Pakistan</span>
          <h1 className="hero__heading">
            Pure Himalayan<br />
            <em>Pink Salt</em><br />
            For the World
          </h1>
          <p className="hero__sub">
            Harvested from the ancient Khewra Salt Mines 500 million years in the making —
            exported to over 60 nations with uncompromising quality and care.
          </p>
          <div className="hero__actions">
            <a
              href="#products"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-primary"
            >
              Explore Products ↓
            </a>
            <a
              href="#global-export"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("global-export")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-outline"
            >
              Export Services
            </a>
          </div>
        </div>

        <div className="hero__visual animate-fadeInUp animate-delay-3">
          <div className="hero__badge">
            <span className="hero__badge-num">500M</span>
            <span className="hero__badge-label">Years of<br />Natural Purity</span>
          </div>
          <div className="hero__orb hero__orb--1" />
          <div className="hero__orb hero__orb--2" />
          <div className="hero__salt-icon">
            <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M60 10 L105 37.5 L105 102.5 L60 130 L15 102.5 L15 37.5 Z" fill="rgba(212,130,114,0.15)" stroke="rgba(196,95,79,0.4)" strokeWidth="1.5"/>
              <path d="M60 28 L90 44.5 L90 95.5 L60 112 L30 95.5 L30 44.5 Z" fill="rgba(212,130,114,0.2)" stroke="rgba(196,95,79,0.5)" strokeWidth="1"/>
              <path d="M60 46 L78 56 L78 84 L60 94 L42 84 L42 56 Z" fill="rgba(196,95,79,0.35)" stroke="rgba(180,80,64,0.6)" strokeWidth="1"/>
              <circle cx="60" cy="70" r="8" fill="rgba(196,95,79,0.6)"/>
              <line x1="60" y1="10" x2="60" y2="130" stroke="rgba(196,95,79,0.15)" strokeWidth="0.5"/>
              <line x1="15" y1="70" x2="105" y2="70" stroke="rgba(196,95,79,0.15)" strokeWidth="0.5"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint">
        <span>Scroll to explore</span>
        <div className="hero__scroll-line" />
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          background: linear-gradient(135deg, var(--brown-900) 0%, var(--brown-800) 45%, #5C2E26 100%);
          padding: 6rem 0 4rem;
        }
        .hero__bg-pattern {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle at 20% 80%, rgba(212,130,114,0.12) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(196,95,79,0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(184,147,74,0.05) 0%, transparent 60%);
          pointer-events: none;
        }
        .hero__crystals {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }
        .crystal {
          position: absolute;
          width: 6px;
          height: 6px;
          background: rgba(212,176,138,0.35);
          transform: rotate(45deg);
          animation: floatCrystal linear infinite;
        }
        .crystal--1  { top: 15%; left: 8%;  width: 8px; height: 8px;  animation-duration: 18s; animation-delay: 0s; }
        .crystal--2  { top: 70%; left: 5%;  width: 5px; height: 5px;  animation-duration: 22s; animation-delay: -4s; }
        .crystal--3  { top: 40%; left: 14%; width: 10px;height: 10px; animation-duration: 16s; animation-delay: -8s; }
        .crystal--4  { top: 25%; right: 10%;width: 7px; height: 7px;  animation-duration: 20s; animation-delay: -2s; }
        .crystal--5  { top: 60%; right: 8%; width: 9px; height: 9px;  animation-duration: 19s; animation-delay: -6s; }
        .crystal--6  { top: 80%; right: 18%;width: 5px; height: 5px;  animation-duration: 24s; animation-delay: -10s; }
        .crystal--7  { top: 10%; left: 42%; width: 6px; height: 6px;  animation-duration: 17s; animation-delay: -3s; }
        .crystal--8  { top: 85%; left: 35%; width: 8px; height: 8px;  animation-duration: 21s; animation-delay: -7s; }
        .crystal--9  { top: 50%; right: 30%;width: 4px; height: 4px;  animation-duration: 25s; animation-delay: -12s; }
        @keyframes floatCrystal {
          0%   { transform: rotate(45deg) translateY(0) scale(1);   opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 0.6; }
          100% { transform: rotate(45deg) translateY(-80vh) scale(0.5); opacity: 0; }
        }

        .hero__inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 4rem;
          min-height: 80vh;
        }
        .hero__content { color: var(--cream); }
        .hero__content .section-tag {
          color: var(--brown-200);
          border-color: rgba(212,176,138,0.4);
          background: rgba(212,176,138,0.08);
        }
        .hero__heading {
          font-family: var(--font-display);
          font-size: clamp(2.8rem, 5vw, 4.5rem);
          font-weight: 500;
          line-height: 1.15;
          color: var(--cream);
          margin: 0.75rem 0 1.5rem;
        }
        .hero__heading em {
          font-style: italic;
          color: var(--pink-300);
        }
        .hero__sub {
          font-size: 1.05rem;
          font-weight: 300;
          color: rgba(253,248,244,0.7);
          max-width: 480px;
          line-height: 1.85;
          margin-bottom: 2.5rem;
        }
        .hero__actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .hero__actions .btn-primary {
          background: var(--pink-400);
          border-color: var(--pink-400);
        }
        .hero__actions .btn-primary:hover {
          background: transparent;
          color: var(--pink-300);
          border-color: var(--pink-300);
        }

        .hero__visual {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 440px;
        }
        .hero__orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        .hero__orb--1 {
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(212,130,114,0.18) 0%, transparent 70%);
          animation: pulse 4s ease-in-out infinite;
        }
        .hero__orb--2 {
          width: 200px; height: 200px;
          background: radial-gradient(circle, rgba(184,147,74,0.15) 0%, transparent 70%);
          animation: pulse 4s ease-in-out infinite reverse;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }
        .hero__salt-icon {
          width: 220px;
          height: 260px;
          animation: slowRotate 20s linear infinite;
          filter: drop-shadow(0 0 30px rgba(212,130,114,0.3));
        }
        @keyframes slowRotate {
          0%   { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
        .hero__badge {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          backdrop-filter: blur(8px);
          border-radius: 12px;
          padding: 1rem 1.25rem;
          text-align: center;
          color: var(--cream);
        }
        .hero__badge-num {
          display: block;
          font-family: var(--font-display);
          font-size: 1.8rem;
          font-weight: 600;
          color: var(--pink-300);
          line-height: 1;
        }
        .hero__badge-label {
          display: block;
          font-size: 0.7rem;
          font-weight: 400;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(253,248,244,0.6);
          margin-top: 0.35rem;
        }

        .hero__scroll-hint {
          position: absolute;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: rgba(253,248,244,0.4);
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }
        .hero__scroll-line {
          width: 1px;
          height: 50px;
          background: linear-gradient(to bottom, rgba(253,248,244,0.4), transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50% { opacity: 0.9; transform: scaleY(1.1); }
        }

        @media (max-width: 900px) {
          .hero__inner {
            grid-template-columns: 1fr;
            text-align: center;
            min-height: auto;
            padding: 4rem 0 2rem;
          }
          .hero__sub { margin: 0 auto 2rem; }
          .hero__actions { justify-content: center; }
          .hero__visual { height: 280px; order: -1; }
          .hero__salt-icon { width: 160px; height: 190px; }
          .hero__orb--1 { width: 220px; height: 220px; }
          .hero__orb--2 { width: 150px; height: 150px; }
        }
      `}</style>
    </section>
  );
}