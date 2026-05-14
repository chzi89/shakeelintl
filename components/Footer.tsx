"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "Facebook", text: "f" },
  { label: "X", text: "X" },
  { label: "LinkedIn", text: "in" },
  { label: "YouTube", text: ">" },
];

const footerStyles = `
  .site-footer {
    --pink-mid: #f5c5b8;
    --rose: #c0786a;
    --rose-dark: #9d5c50;
    --footer-bg: #1e1713;
    background: var(--footer-bg);
    color: rgba(255,255,255,0.75);
    padding: 56px 48px 28px;
  }
  .site-footer-grid {
    display: grid;
    grid-template-columns: 1.4fr 1fr 1.4fr;
    gap: 40px;
    margin-bottom: 40px;
  }
  .site-footer-col h4 {
    font-family: 'Playfair Display', serif;
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 18px;
  }
  .site-footer-col p,
  .site-footer-col a {
    font-size: 0.84rem;
    line-height: 2;
    color: rgba(255,255,255,0.65);
    text-decoration: none;
    display: block;
    transition: color 0.2s;
  }
  .site-footer-col a:hover { color: var(--pink-mid); }
  .site-newsletter-form {
    display: flex;
    gap: 0;
    margin-top: 4px;
  }
  .site-newsletter-input {
    flex: 1;
    min-width: 0;
    padding: 10px 14px;
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.15);
    border-right: none;
    border-radius: 6px 0 0 6px;
    color: #fff;
    font-size: 0.84rem;
    font-family: 'Jost', sans-serif;
    outline: none;
  }
  .site-newsletter-input::placeholder { color: rgba(255,255,255,0.35); }
  .site-newsletter-btn {
    padding: 10px 16px;
    background: var(--rose);
    border: none;
    border-radius: 0 6px 6px 0;
    color: #fff;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.2s;
  }
  .site-newsletter-btn:hover { background: var(--rose-dark); }
  .site-social-icons {
    display: flex;
    gap: 10px;
    margin-top: 16px;
  }
  .site-social-icon {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: rgba(255,255,255,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    color: rgba(255,255,255,0.7);
    text-decoration: none;
    transition: background 0.2s, color 0.2s;
  }
  .site-social-icon:hover {
    background: var(--rose);
    color: #fff;
  }
  .site-footer-bottom {
    border-top: 1px solid rgba(255,255,255,0.08);
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
  }
  .site-footer-bottom p {
    font-size: 0.78rem;
    color: rgba(255,255,255,0.35);
  }
  .site-footer-bottom-links {
    display: flex;
    gap: 16px;
  }
  .site-footer-bottom-links a {
    font-size: 0.78rem;
    color: rgba(255,255,255,0.35);
    text-decoration: none;
    transition: color 0.2s;
  }
  .site-footer-bottom-links a:hover { color: var(--pink-mid); }

  @media (max-width: 900px) {
    .site-footer { padding: 52px 24px 28px; }
    .site-footer-grid { grid-template-columns: 1fr 1fr; }
  }

  @media (max-width: 600px) {
    .site-footer-grid { grid-template-columns: 1fr; }
    .site-footer-bottom {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

export default function FooterSection() {
  const [email, setEmail] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setEmail("");
  }

  return (
    <>
      <style>{footerStyles}</style>
      <footer className="site-footer">
        <div className="site-footer-grid">
          <div className="site-footer-col">
            <h4>Contact Us</h4>
            <p>Phone: +92 300 1234567</p>
            <p>Email: info@shakeelsinternational.com</p>
            <p>Address: 123 Salt Road, Karachi, Pakistan</p>
          </div>

          <div className="site-footer-col">
            <h4>Quick Links</h4>
            {quickLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="site-footer-col">
            <h4>Newsletter</h4>
            <p style={{ marginBottom: "12px" }}>
              Subscribe for updates and exclusive offers.
            </p>
            <form className="site-newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="site-newsletter-input"
                placeholder="Email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <button type="submit" className="site-newsletter-btn">
                →
              </button>
            </form>
            <div className="site-social-icons">
              {socialLinks.map((social) => (
                <a
                  href="#"
                  className="site-social-icon"
                  key={social.label}
                  aria-label={social.label}
                >
                  {social.text}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="site-footer-bottom">
          <p>Copyright © Shakeel International</p>
          <div className="site-footer-bottom-links">
            <a href="#">Terms</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </>
  );
}
