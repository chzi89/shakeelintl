"use client";

import Link from "next/link";
import type { FormEvent, SVGProps } from "react";
import { useState } from "react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const contact = {
  phone: "03212910823",
  phoneHref: "tel:03212910823",
  email: "sales@shakeelintl.com",
  emailHref: "mailto:sales@shakeelintl.com",
  address: "Sargodha, Punjab, Pakistan",
};

const legalLinks = [
  { label: "Terms", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M14 8.5h2V5h-2.4c-3 0-4.6 1.8-4.6 4.7V12H6v3.5h3V22h3.8v-6.5h2.8L16 12h-3.2V10c0-1 .4-1.5 1.2-1.5Z" />
  </svg>
);

const XIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M14.2 10.6 21.5 2h-3.1l-5.6 6.6L8.3 2H2.5l7.7 11.1L2.5 22h3.1l6-7 4.8 7h5.8l-8-11.4Zm-2.1 2.5-1.4-2L5.7 4.3h1.5l4.4 6.2 1.4 2 5.5 7.3H17l-4.9-6.7Z" />
  </svg>
);

const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M6.7 8.8H3.1V21h3.6V8.8ZM4.9 3a2.1 2.1 0 1 0 0 4.2A2.1 2.1 0 0 0 4.9 3Zm16 11.2c0-3.4-1.8-5.6-4.8-5.6-1.8 0-2.9.9-3.4 1.8V8.8H9.2V21h3.6v-6.2c0-1.7.8-2.8 2.2-2.8 1.3 0 2.2.9 2.2 2.9V21h3.7v-6.8Z" />
  </svg>
);

const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/", icon: FacebookIcon },
  { label: "X", href: "https://x.com/", icon: XIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ali-gondal-a2148b372/",
    icon: LinkedinIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/shakeel_international/",
    icon: InstagramIcon,
  },
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
  .site-footer-link,
  .site-footer-contact-link {
    font-size: 0.84rem;
    line-height: 2;
    color: rgba(255,255,255,0.65);
    text-decoration: none;
    transition: color 0.2s;
  }
  .site-footer-link {
    display: block;
  }
  .site-footer-contact-link {
    display: inline;
    overflow-wrap: anywhere;
  }
  .site-footer-link:hover,
  .site-footer-contact-link:hover { color: var(--pink-mid); }
  .site-newsletter-copy {
    margin-bottom: 12px;
  }
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
  .site-newsletter-input:focus {
    border-color: rgba(245,197,184,0.6);
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
  .site-newsletter-btn:hover,
  .site-newsletter-btn:focus-visible { background: var(--rose-dark); }
  .site-social-icons {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 16px;
  }
  .site-social-icon {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.16);
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255,255,255,0.7);
    text-decoration: none;
    transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.2s;
  }
  .site-social-icon svg {
    width: 17px;
    height: 17px;
    fill: currentColor;
    flex: 0 0 auto;
  }
  .site-social-icon:hover {
    background: var(--rose);
    border-color: var(--rose);
    color: #fff;
    transform: translateY(-2px);
  }
  .site-social-icon:focus-visible,
  .site-footer-link:focus-visible,
  .site-footer-contact-link:focus-visible,
  .site-footer-bottom-links a:focus-visible,
  .site-newsletter-btn:focus-visible {
    outline: 2px solid var(--pink-mid);
    outline-offset: 3px;
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
    .site-footer { padding: 44px 20px 24px; }
    .site-footer-grid { grid-template-columns: 1fr; gap: 30px; }
    .site-newsletter-form { max-width: 100%; }
    .site-newsletter-input { width: 100%; }
    .site-footer-bottom {
      flex-direction: column;
      align-items: flex-start;
    }
    .site-footer-bottom-links {
      flex-wrap: wrap;
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
            <p>
              <span>Phone: </span>
              <a className="site-footer-contact-link" href={contact.phoneHref}>
                {contact.phone}
              </a>
            </p>
            <p>
              <span>Email: </span>
              <a className="site-footer-contact-link" href={contact.emailHref}>
                {contact.email}
              </a>
            </p>
            <p>Address: {contact.address}</p>
          </div>

          <div className="site-footer-col">
            <h4>Quick Links</h4>
            {quickLinks.map((link) => (
              <Link className="site-footer-link" href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="site-footer-col">
            <h4>Newsletter</h4>
            <p className="site-newsletter-copy">
              Subscribe for updates and exclusive offers.
            </p>
            <form className="site-newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                name="newsletter-email"
                className="site-newsletter-input"
                placeholder="Email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                aria-label="Newsletter email address"
              />
              <button
                type="submit"
                className="site-newsletter-btn"
                aria-label="Subscribe to newsletter"
              >
                &rarr;
              </button>
            </form>
            <div className="site-social-icons">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  href={href}
                  className="site-social-icon"
                  key={label}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="site-footer-bottom">
          <p>Copyright &copy; Shakeel International</p>
          <div className="site-footer-bottom-links">
            {legalLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
