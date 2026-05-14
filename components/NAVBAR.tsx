"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Global Export", href: "/global-export" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <style>{`
        .site-nav {
          position: absolute; top: 0; left: 0; right: 0; z-index: 20;
          display: flex; align-items: center; justify-content: space-between;
          padding: 22px 48px;
        }
        .site-nav-logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.15rem; font-weight: 600;
          color: #fff; letter-spacing: 0.02em;
          text-decoration: none;
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

        @media (max-width: 900px) {
          .site-nav { padding: 18px 24px; }
          .site-nav-links { gap: 18px; }
        }

        @media (max-width: 600px) {
          .site-nav-links { display: none; }
        }
      `}</style>

      <nav className="site-nav">
        <Link href="/" className="site-nav-logo">
          Shakeel International
        </Link>
        <ul className="site-nav-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={pathname === item.href ? "active" : ""}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
