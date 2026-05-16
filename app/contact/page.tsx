"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;1,400&family=Jost:wght@300;400;500;600&display=swap");

        .si-wrap {
          font-family: "Jost", sans-serif;
          color: #3a2520;
          padding: 40px 20px;
          background: #fdf7f4;
        }

        .si-hero {
          background: #3d1f1a;
          border-radius: 20px;
          padding: 2.5rem 2rem 2rem;
          margin-bottom: 1.5rem;
          position: relative;
          overflow: hidden;
        }

        .si-hero::before {
          content: "";
          position: absolute;
          top: -40px;
          right: -40px;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          background: rgba(212, 130, 114, 0.12);
        }

        .si-hero::after {
          content: "";
          position: absolute;
          bottom: -30px;
          left: 20px;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: rgba(212, 130, 114, 0.08);
        }

        .si-hero-tag {
          display: inline-block;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #e8a898;
          border: 1px solid rgba(232, 168, 152, 0.4);
          border-radius: 50px;
          padding: 4px 12px;
          margin-bottom: 12px;
        }

        .si-hero h1 {
          font-family: "Playfair Display", serif;
          font-size: 32px;
          font-weight: 600;
          color: #fdf8f4;
          margin-bottom: 10px;
        }

        .si-hero h1 em {
          color: #e8a898;
        }

        .si-hero p {
          color: rgba(253, 248, 244, 0.7);
          max-width: 500px;
          line-height: 1.7;
        }

        .si-grid {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 20px;
        }

        .si-form-card,
        .si-info-card,
        .si-social-card {
          background: white;
          border-radius: 18px;
          padding: 24px;
          border: 1px solid #eee;
        }

        .si-form-title {
          font-family: "Playfair Display", serif;
          font-size: 24px;
          margin-bottom: 6px;
        }

        .si-form-sub {
          color: #777;
          margin-bottom: 24px;
        }

        .si-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .si-field {
          margin-bottom: 14px;
        }

        .si-label {
          display: block;
          margin-bottom: 6px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          color: #777;
        }

        .si-input,
        .si-select,
        .si-textarea {
          width: 100%;
          padding: 12px;
          border-radius: 10px;
          border: 1px solid #ddd;
          background: #fafafa;
          font-size: 14px;
          outline: none;
        }

        .si-input:focus,
        .si-select:focus,
        .si-textarea:focus {
          border-color: #c4614f;
        }

        .si-textarea {
          min-height: 120px;
          resize: vertical;
        }

        .si-submit {
          width: 100%;
          padding: 14px;
          border: none;
          border-radius: 12px;
          background: #3d1f1a;
          color: white;
          cursor: pointer;
          font-weight: 600;
          transition: 0.3s;
        }

        .si-submit:hover {
          background: #5c2e26;
        }

        .si-sidebar {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .si-info-row {
          margin-bottom: 16px;
        }

        .si-info-label {
          font-size: 12px;
          text-transform: uppercase;
          color: #888;
          margin-bottom: 4px;
        }

        .si-info-val {
          font-size: 14px;
        }

        .si-social-links {
          display: flex;
          gap: 10px;
        }

        .si-social-btn {
          flex: 1;
          text-align: center;
          padding: 10px;
          border-radius: 10px;
          border: 1px solid #ddd;
          text-decoration: none;
          color: #444;
          transition: 0.3s;
        }

        .si-social-btn:hover {
          background: #faece7;
          border-color: #c4614f;
          color: #c4614f;
        }

        .success-box {
          text-align: center;
          padding: 30px 10px;
        }

        .success-box h3 {
          font-size: 24px;
          margin-bottom: 8px;
        }

        @media (max-width: 768px) {
          .si-grid {
            grid-template-columns: 1fr;
          }

          .si-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="si-wrap">
        <div className="si-hero">
          <div className="si-hero-tag">
            ✦ Khewra Salt Mines, Pakistan
          </div>

          <h1>
            Connect with <em>Shakeel International</em>
          </h1>

          <p>
            Your trusted partner for premium Himalayan pink salt
            exports worldwide.
          </p>
        </div>

        <div className="si-grid">
          <div className="si-form-card">
            {!submitted ? (
              <>
                <h2 className="si-form-title">Send an inquiry</h2>

                <p className="si-form-sub">
                  For bulk orders and partnership requests
                </p>

                <div className="si-row">
                  <div className="si-field">
                    <label className="si-label">Full Name</label>

                    <input
                      type="text"
                      className="si-input"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="si-field">
                    <label className="si-label">Company</label>

                    <input
                      type="text"
                      className="si-input"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div className="si-row">
                  <div className="si-field">
                    <label className="si-label">Email</label>

                    <input
                      type="email"
                      className="si-input"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div className="si-field">
                    <label className="si-label">Country</label>

                    <input
                      type="text"
                      className="si-input"
                      placeholder="Your country"
                    />
                  </div>
                </div>

                <div className="si-field">
                  <label className="si-label">Message</label>

                  <textarea
                    className="si-textarea"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  className="si-submit"
                  onClick={handleSubmit}
                >
                  Send Inquiry
                </button>
              </>
            ) : (
              <div className="success-box">
                <h3>Inquiry Received ✅</h3>

                <p>
                  Thank you! Our team will contact you
                  within 24 hours.
                </p>
              </div>
            )}
          </div>

          <div className="si-sidebar">
            <div className="si-info-card">
              <div className="si-info-row">
                <div className="si-info-label">
                  Phone / WhatsApp
                </div>

                <div className="si-info-val">
                  <a href="tel:03212910823">03212910823</a>
                </div>
              </div>

              <div className="si-info-row">
                <div className="si-info-label">Email</div>

                <div className="si-info-val">
                  <a href="mailto:sales@shakeelintl.com">
                    sales@shakeelintl.com
                  </a>
                </div>
              </div>

              <div className="si-info-row">
                <div className="si-info-label">Office</div>

                <div className="si-info-val">
                  Sargodha, Punjab, Pakistan
                </div>
              </div>
            </div>

            <div className="si-social-card">
              <div className="si-info-label">
                Follow Us
              </div>

              <div className="si-social-links">
                <a href="#" className="si-social-btn">
                  Facebook
                </a>

                <a href="#" className="si-social-btn">
                  Instagram
                </a>

                <a href="#" className="si-social-btn">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
