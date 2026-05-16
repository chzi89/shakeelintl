"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Global Export", href: "/globalexport" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <style>{`
        .site-nav {
          position: absolute; top: 0; left: 0; right: 0; z-index: 20;
          display: flex; align-items: center; justify-content: space-between;
          gap: 18px;
          padding: 18px 48px;
          background: linear-gradient(to bottom, rgba(26,18,16,0.88), rgba(26,18,16,0.34));
          backdrop-filter: blur(10px);
        }
        .site-nav-logo {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1rem, 2vw, 1.15rem); font-weight: 600;
          color: #fff; letter-spacing: 0.02em;
          text-decoration: none;
          white-space: nowrap;
        }
        .site-nav-links { display: flex; gap: 32px; list-style: none; }
        .site-nav-links a {
          color: rgba(255,255,255,0.85); text-decoration: none;
          font-size: 0.9rem; font-weight: 400; letter-spacing: 0.04em;
          transition: color 0.2s;
        }
        .site-nav-links a:hover, .site-nav-links a.active { color: #fff; }
        .site-nav-links a.active {
          border-bottom: 1.5px solid rgba(255,255,255,0.7);
          padding-bottom: 2px;
        }
        .site-nav-toggle {
          display: none;
          width: 42px;
          height: 42px;
          border: 1px solid rgba(255,255,255,0.28);
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          color: #fff;
          cursor: pointer;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
        }
        .site-nav-toggle span,
        .site-nav-toggle span::before,
        .site-nav-toggle span::after {
          display: block;
          width: 18px;
          height: 2px;
          border-radius: 999px;
          background: currentColor;
          content: "";
          transition: transform 0.2s, opacity 0.2s;
        }
        .site-nav-toggle span::before { transform: translateY(-6px); }
        .site-nav-toggle span::after { transform: translateY(4px); }
        .site-nav-toggle.open span { transform: rotate(45deg); }
        .site-nav-toggle.open span::before { transform: translateY(0) rotate(90deg); }
        .site-nav-toggle.open span::after { opacity: 0; }

        @media (max-width: 900px) {
          .site-nav { padding: 18px 24px; }
          .site-nav-links { gap: 18px; }
        }

        @media (max-width: 720px) {
          .site-nav {
            align-items: flex-start;
            padding: 14px 18px;
          }
          .site-nav-toggle { display: flex; }
          .site-nav-links {
            position: absolute;
            left: 18px;
            right: 18px;
            top: 64px;
            display: none;
            flex-direction: column;
            gap: 0;
            padding: 10px;
            border: 1px solid rgba(255,255,255,0.12);
            border-radius: 10px;
            background: rgba(26,18,16,0.96);
            box-shadow: 0 18px 44px rgba(0,0,0,0.24);
          }
          .site-nav-links.open { display: flex; }
          .site-nav-links a {
            display: block;
            padding: 11px 12px;
            border-radius: 7px;
          }
          .site-nav-links a.active {
            border-bottom: 0;
            padding-bottom: 11px;
            background: rgba(255,255,255,0.08);
          }
        }
      `}</style>

      <nav className="site-nav">
        <Link href="/" className="site-nav-logo">
          Shakeel International
        </Link>
        <button
          type="button"
          className={`site-nav-toggle ${isOpen ? "open" : ""}`}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
        </button>
        <ul className={`site-nav-links ${isOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={pathname === item.href ? "active" : ""}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
