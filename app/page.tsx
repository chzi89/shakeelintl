"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "Shakeel International provides the best quality salt lamps. Our customers love them!",
      author: "James D.",
      location: "London",
      avatar: "https://i.pravatar.cc/80?img=11",
    },
    {
      quote:
        "Absolutely premium product quality with seamless worldwide shipping. Highly recommended!",
      author: "Sophie M.",
      location: "Berlin",
      avatar: "https://i.pravatar.cc/80?img=5",
    },
    {
      quote:
        "Eco-friendly packaging and exceptional purity. Our go-to Himalayan salt supplier.",
      author: "Carlos R.",
      location: "Toronto",
      avatar: "https://i.pravatar.cc/80?img=14",
    },
  ];

  const categories = [
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
          <ellipse cx="32" cy="52" rx="18" ry="6" fill="#e8a090" opacity="0.3" />
          <path
            d="M20 48 C18 36 22 20 32 14 C42 20 46 36 44 48 Z"
            stroke="#c0786a"
            strokeWidth="2"
            fill="#f5c5b8"
          />
          <path
            d="M26 42 C25 34 28 24 32 20 C36 24 39 34 38 42 Z"
            fill="#e8a090"
            opacity="0.6"
          />
          <line x1="32" y1="14" x2="32" y2="8" stroke="#c0786a" strokeWidth="1.5" />
        </svg>
      ),
      title: "Himalayan Salt Lamps",
      desc: "Himalayan handcrafted salt lamps for ambience and wellness.",
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
          <circle cx="32" cy="32" r="20" stroke="#c0786a" strokeWidth="2" fill="#f5c5b8" />
          <line x1="32" y1="20" x2="32" y2="44" stroke="#c0786a" strokeWidth="2" />
          <line x1="20" y1="32" x2="44" y2="32" stroke="#c0786a" strokeWidth="2" />
          <circle cx="26" cy="26" r="3" fill="#e8a090" />
          <circle cx="38" cy="26" r="3" fill="#e8a090" />
        </svg>
      ),
      title: "Edible Pink Salt",
      desc: "Authentic, handcrafted pink salt products for wellness and decor.",
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
          <rect x="16" y="30" width="32" height="22" rx="16" stroke="#c0786a" strokeWidth="2" fill="#f5c5b8" />
          <path d="M22 30 C22 22 42 22 42 30" stroke="#c0786a" strokeWidth="2" fill="none" />
          <circle cx="32" cy="41" r="5" fill="#e8a090" />
          <path d="M50 28 Q56 22 52 18" stroke="#c0786a" strokeWidth="1.5" fill="none" />
        </svg>
      ),
      title: "Bath & Spa",
      desc: "Bath & Spa products for relaxation and skin rejuvenation.",
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
          <polygon
            points="32,12 44,24 40,40 24,40 20,24"
            stroke="#c0786a"
            strokeWidth="2"
            fill="#f5c5b8"
          />
          <polygon
            points="32,18 40,26 37,36 27,36 24,26"
            stroke="#c0786a"
            strokeWidth="1.5"
            fill="#e8a090"
            opacity="0.5"
          />
          <line x1="32" y1="12" x2="32" y2="8" stroke="#c0786a" strokeWidth="1.5" />
          <line x1="44" y1="24" x2="48" y2="22" stroke="#c0786a" strokeWidth="1.5" />
          <line x1="20" y1="24" x2="16" y2="22" stroke="#c0786a" strokeWidth="1.5" />
        </svg>
      ),
      title: "Decorative Items",
      desc: "Decorative Items are artful, vibrant and extraordinary.",
    },
  ];

  const whyUs = [
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
          <circle cx="32" cy="32" r="22" stroke="#c0786a" strokeWidth="2" fill="#f5c5b8" />
          <path d="M22 32 L29 39 L42 26" stroke="#c0786a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Quality",
      sub: "Unmatched Purity",
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
          <circle cx="32" cy="32" r="22" stroke="#c0786a" strokeWidth="2" fill="#f5c5b8" />
          <ellipse cx="32" cy="32" rx="10" ry="22" stroke="#c0786a" strokeWidth="1.5" />
          <line x1="10" y1="32" x2="54" y2="32" stroke="#c0786a" strokeWidth="1.5" />
          <line x1="14" y1="22" x2="50" y2="22" stroke="#c0786a" strokeWidth="1" />
          <line x1="14" y1="42" x2="50" y2="42" stroke="#c0786a" strokeWidth="1" />
        </svg>
      ),
      title: "Worldwide Export",
      sub: "Reliable Shipping",
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
          <circle cx="32" cy="32" r="22" stroke="#c0786a" strokeWidth="2" fill="#f5c5b8" />
          <path d="M22 38 Q28 26 32 22 Q36 26 42 38" stroke="#c0786a" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M26 42 Q32 30 38 42" stroke="#c0786a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
      ),
      title: "Eco-friendly Packaging",
      sub: "Sustainable Practices",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Jost:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --pink-light: #f9ede8;
          --pink-mid: #f5c5b8;
          --pink-deep: #e8a090;
          --rose: #c0786a;
          --rose-dark: #9d5c50;
          --cream: #fdf7f4;
          --dark: #1a1210;
          --footer-bg: #1e1713;
          --text-main: #3a2520;
          --text-muted: #8a6a62;
        }

        body { font-family: 'Jost', sans-serif; background: var(--cream); color: var(--text-main); }

        /* HERO */
        .hero {
          position: relative; min-height: 480px; overflow: hidden;
          background: linear-gradient(135deg, #3a1c10 0%, #6b3325 40%, #8b4a38 70%, #a0614e 100%);
        }
        .hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to right, rgba(20,8,4,0.75) 0%, rgba(20,8,4,0.35) 60%, transparent 100%);
          z-index: 2;
        }
        /* Simulated salt lamp glow */
        .hero-glow {
          position: absolute; right: 15%; top: 50%; transform: translateY(-50%);
          width: 280px; height: 320px; z-index: 1;
          background: radial-gradient(ellipse at center, rgba(255,160,80,0.35) 0%, rgba(200,90,40,0.15) 50%, transparent 75%);
          border-radius: 50%;
          filter: blur(20px);
        }
        .hero-content {
          position: relative; z-index: 3;
          padding: 110px 48px 0;
          max-width: 560px;
        }
        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: 3rem; line-height: 1.1; font-weight: 700;
          color: #fff; margin-bottom: 16px;
        }
        .hero-title span { color: var(--pink-mid); }
        .hero-sub {
          color: rgba(255,255,255,0.78); font-size: 0.97rem;
          line-height: 1.6; font-weight: 300; margin-bottom: 32px;
          max-width: 380px;
        }
        .hero-btns { display: flex; gap: 14px; }
        .btn-primary {
          background: var(--rose); color: #fff;
          padding: 12px 24px; border: none; border-radius: 6px;
          font-family: 'Jost', sans-serif; font-size: 0.9rem; font-weight: 500;
          cursor: pointer; transition: background 0.2s, transform 0.15s;
          text-decoration: none; display: inline-block;
        }
        .btn-primary:hover { background: var(--rose-dark); transform: translateY(-1px); }
        .btn-outline {
          background: transparent; color: #fff;
          padding: 12px 24px; border: 1.5px solid rgba(255,255,255,0.55); border-radius: 6px;
          font-family: 'Jost', sans-serif; font-size: 0.9rem; font-weight: 500;
          cursor: pointer; transition: border-color 0.2s, transform 0.15s;
          text-decoration: none; display: inline-block;
        }
        .btn-outline:hover { border-color: #fff; transform: translateY(-1px); }

        /* SECTION COMMON */
        section { padding: 72px 48px; }

        /* PRODUCT CATEGORIES */
        .categories { background: var(--cream); text-align: center; }
        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: 2rem; font-weight: 700; color: var(--text-main);
          margin-bottom: 48px;
        }
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px; max-width: 1100px; margin: 0 auto;
        }
        .card {
          background: #fff; border-radius: 14px;
          padding: 32px 20px 24px;
          box-shadow: 0 2px 16px rgba(160,80,60,0.07);
          transition: transform 0.2s, box-shadow 0.2s;
          display: flex; flex-direction: column; align-items: center; gap: 14px;
        }
        .card:hover { transform: translateY(-5px); box-shadow: 0 8px 32px rgba(160,80,60,0.13); }
        .card-icon-wrap {
          width: 72px; height: 72px; border-radius: 50%;
          background: var(--pink-light);
          display: flex; align-items: center; justify-content: center;
        }
        .card h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1rem; font-weight: 600; color: var(--text-main);
        }
        .card p { font-size: 0.83rem; color: var(--text-muted); line-height: 1.55; text-align: center; }
        .card-btn {
          margin-top: auto;
          padding: 8px 22px; border: 1.5px solid var(--rose); border-radius: 6px;
          color: var(--rose); font-size: 0.83rem; font-weight: 500;
          background: transparent; cursor: pointer; transition: background 0.2s, color 0.2s;
        }
        .card-btn:hover { background: var(--rose); color: #fff; }

        /* WHY CHOOSE US */
        .why { background: var(--pink-light); text-align: center; }
        .why-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 32px; max-width: 700px; margin: 0 auto;
        }
        .why-item { display: flex; flex-direction: column; align-items: center; gap: 14px; }
        .why-icon {
          width: 80px; height: 80px; border-radius: 50%;
          background: var(--pink-mid);
          display: flex; align-items: center; justify-content: center;
        }
        .why-item h3 { font-family: 'Playfair Display', serif; font-size: 1.05rem; font-weight: 600; }
        .why-item p { font-size: 0.82rem; color: var(--text-muted); }

        /* TESTIMONIALS */
        .testimonials { background: var(--cream); text-align: center; }
        .testimonial-wrap {
          max-width: 660px; margin: 0 auto;
          position: relative;
        }
        .quote-mark {
          font-size: 4rem; line-height: 1; color: var(--rose); opacity: 0.25;
          font-family: Georgia, serif; margin-bottom: -10px;
        }
        .testimonial-text {
          font-family: 'Playfair Display', serif;
          font-size: 1.15rem; font-style: italic;
          color: var(--text-main); line-height: 1.7;
          margin-bottom: 24px;
        }
        .testimonial-author {
          display: flex; align-items: center; justify-content: center; gap: 12px;
        }
        .testimonial-author img {
          width: 52px; height: 52px; border-radius: 50%;
          object-fit: cover; border: 2px solid var(--pink-mid);
        }
        .author-info { text-align: left; }
        .author-name { font-weight: 600; font-size: 0.92rem; color: var(--text-main); }
        .author-loc { font-size: 0.8rem; color: var(--text-muted); }
        .testimonial-nav {
          display: flex; justify-content: center; gap: 12px; margin-top: 32px;
        }
        .t-btn {
          width: 36px; height: 36px; border-radius: 50%;
          border: 1.5px solid var(--rose); background: transparent;
          color: var(--rose); font-size: 1.1rem; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.2s, color 0.2s;
        }
        .t-btn:hover { background: var(--rose); color: #fff; }

        @media (max-width: 900px) {
          .hero-content { padding: 100px 24px 0; }
          .hero-title { font-size: 2.2rem; }
          section { padding: 52px 24px; }
          .cards-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 600px) {
          .hero { min-height: 560px; }
          .hero-content { padding: 112px 20px 0; }
          .hero-title { font-size: 2rem; }
          .hero-sub { max-width: 100%; }
          .hero-btns { flex-direction: column; align-items: stretch; }
          .hero-btns a { text-align: center; }
          .hero > svg { opacity: 0.1; right: -24% !important; }
          .section-title { font-size: 1.75rem; margin-bottom: 34px; }
          .card { padding: 28px 18px 22px; }
          .cards-grid { grid-template-columns: 1fr; }
          .why-grid { grid-template-columns: 1fr; }
          .testimonial-text { font-size: 1rem; }
        }
      `}</style>

      {/* HERO */}
      <section className="hero" style={{ padding: 0 }}>
        <div className="hero-glow" />
        <div className="hero-overlay" />
        {/* Decorative salt lamp shapes */}
        <svg
          style={{ position: "absolute", right: "8%", top: "50%", transform: "translateY(-50%)", zIndex: 1, opacity: 0.18 }}
          width="260" height="340" viewBox="0 0 260 340" fill="none"
        >
          <ellipse cx="130" cy="310" rx="90" ry="22" fill="#ff9966" />
          <path d="M60 300 C55 220 75 100 130 60 C185 100 205 220 200 300 Z" fill="#ff9966" />
          <path d="M90 290 C88 230 100 140 130 100 C160 140 172 230 170 290 Z" fill="#ffbb88" opacity="0.6" />
        </svg>
        <div className="hero-content">
          <h1 className="hero-title">
            Premium Himalayan <span>Pink Salt</span> Exporter
          </h1>
          <p className="hero-sub">
            Authentic, handcrafted pink salt products for wellness and decor, delivered globally.
          </p>
          <div className="hero-btns">
            <a href="/contact" className="btn-primary">Get a Quote</a>
            <a href="/products" className="btn-outline">View Products</a>
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="categories">
        <h2 className="section-title">Product Categories</h2>
        <div className="cards-grid">
          {categories.map((cat) => (
            <div className="card" key={cat.title}>
              <div className="card-icon-wrap">{cat.icon}</div>
              <h3>{cat.title}</h3>
              <p>{cat.desc}</p>
              <button className="card-btn">Explore</button>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="why-grid">
          {whyUs.map((w) => (
            <div className="why-item" key={w.title}>
              <div className="why-icon">{w.icon}</div>
              <h3>{w.title}</h3>
              <p>{w.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="testimonial-wrap">
          <div className="quote-mark"></div>
          <p className="testimonial-text">
            {testimonials[testimonialIndex].quote} –{" "}
            {testimonials[testimonialIndex].author},{" "}
            {testimonials[testimonialIndex].location}
          </p>
          <div className="testimonial-author">
            <Image
              src={testimonials[testimonialIndex].avatar}
              alt={testimonials[testimonialIndex].author}
              width={52}
              height={52}
            />
            <div className="author-info">
              <div className="author-name">{testimonials[testimonialIndex].author}</div>
              <div className="author-loc">{testimonials[testimonialIndex].location}</div>
            </div>
          </div>
          <div className="testimonial-nav">
            <button
              className="t-btn"
              onClick={() =>
                setTestimonialIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
              }
            >
              ‹
            </button>
            <button
              className="t-btn"
              onClick={() =>
                setTestimonialIndex((i) => (i + 1) % testimonials.length)
              }
            >
              ›
            </button>
          </div>
        </div>
      </section>

    </>
  );
}
