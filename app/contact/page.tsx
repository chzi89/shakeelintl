"use client";

import React, { useState } from "react";
// Local lightweight SVG icon components to replace `lucide-react` dependency
const IconBase = ({ children, className, style }: React.SVGProps<SVGSVGElement> & { children: React.ReactNode }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={style}
  >
    {children}
  </svg>
);

const Phone = (props: React.SVGProps<SVGSVGElement>) => (
  <IconBase {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 3.08 4.18 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72c.12.86.36 1.7.7 2.5a2 2 0 0 1-.45 2.11L9.91 9.91a16 16 0 0 0 6 6l1.58-1.58a2 2 0 0 1 2.11-.45c.8.34 1.64.58 2.5.7A2 2 0 0 1 22 16.92z" />
  </IconBase>
);

const Mail = (props: React.SVGProps<SVGSVGElement>) => (
  <IconBase {...props}>
    <path d="M3 8.5v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M21 8.5l-9 6-9-6" />
  </IconBase>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <IconBase {...props}>
    <rect x="2" y="3" width="20" height="18" rx="2" ry="2" />
    <path d="M7 10v7" />
    <path d="M7 7v.01" />
    <path d="M12 17v-4a2 2 0 0 1 4 0v4" />
  </IconBase>
);

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <IconBase {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <path d="M17.5 6.5h.01" />
  </IconBase>
);

const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
  <IconBase {...props}>
    <path d="M22 12a10 10 0 1 0-11.5 9.87v-6.99H8.9V12h1.6V9.8c0-1.58.94-2.46 2.38-2.46.69 0 1.41.12 1.41.12v1.55h-.79c-.78 0-1.02.49-1.02.99V12h1.74l-.28 2.88h-1.46v6.99A10 10 0 0 0 22 12z" />
  </IconBase>
);

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form:", form);
  };

  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Hero */}
      <section
        className="relative overflow-hidden px-6 py-20 text-center"
        style={{ backgroundColor: "#fce8e3" }}
      >
        <div
          className="absolute -left-24 -top-24 h-64 w-64 rounded-full opacity-60"
          style={{ backgroundColor: "#f8d4cc" }}
        />
        <div
          className="absolute -right-32 top-10 h-72 w-72 rounded-full opacity-50"
          style={{ backgroundColor: "#f8d4cc" }}
        />
        <div className="relative mx-auto max-w-3xl">
          <h1
            className="font-serif text-5xl font-bold md:text-6xl"
            style={{ color: "#1a1a1a" }}
          >
            Contact Us
          </h1>
          <p className="mt-4 text-lg md:text-xl" style={{ color: "#3a3a3a" }}>
            Reach out for inquiries about our premium pink salt exports
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Form */}
          <form onSubmit={handleSubmit} className="md:col-span-2 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-800">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full rounded-md border border-[#f5c4ba] bg-white px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-[#e88a7a]"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-800">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Your Email"
                  className="w-full rounded-md border border-[#f5c4ba] bg-white px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-[#e88a7a]"
                />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-800">
                Message
              </label>
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Message"
                className="w-full rounded-md border border-[#f5c4ba] bg-white px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-[#e88a7a]"
              />
            </div>
            <button
              type="submit"
              className="rounded-md px-8 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#e88a7a" }}
            >
              Send Message
            </button>
          </form>

          {/* Info Card */}
          <aside className="rounded-lg border border-[#f5c4ba] bg-white overflow-hidden h-fit">
            <div
              className="px-6 py-3 text-center text-base font-medium"
              style={{ backgroundColor: "#f8c8bd", color: "#1a1a1a" }}
            >
              Get in Touch
            </div>
            <div className="flex items-center gap-3 px-6 py-4">
              <Phone className="h-6 w-6" style={{ color: "#e88a7a" }} />
              <div className="text-sm">
                <div className="font-semibold text-gray-900">Phone:</div>
                <div className="text-gray-700">+92 300 1234567</div>
              </div>
            </div>

            <div
              className="px-6 py-3 text-center text-base font-medium"
              style={{ backgroundColor: "#f8c8bd", color: "#1a1a1a" }}
            >
              Email
            </div>
            <div className="flex items-center gap-3 px-6 py-4">
              <Mail className="h-6 w-6" style={{ color: "#e88a7a" }} />
              <div className="text-sm">
                <div className="font-semibold text-gray-900">Email:</div>
                <div className="text-gray-700">info@shakeelinternational.com</div>
              </div>
            </div>

            <div
              className="px-6 py-3 text-center text-base font-medium"
              style={{ backgroundColor: "#f8c8bd", color: "#1a1a1a" }}
            >
              Social Media
            </div>
            <div className="flex items-center justify-center gap-6 px-6 py-5">
              <a href="#" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" style={{ color: "#e88a7a" }} />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6" style={{ color: "#e88a7a" }} />
              </a>
              <a href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6" style={{ color: "#e88a7a" }} />
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* Map */}
      <section className="relative px-6 pb-20">
        <div
          className="absolute -left-16 bottom-0 h-48 w-48 rounded-full opacity-50"
          style={{ backgroundColor: "#f8d4cc" }}
        />
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-lg border border-[#f5c4ba]">
          <iframe
            title="Shakeel International Location"
            src="https://www.google.com/maps?q=Lahore,Pakistan&output=embed"
            width="100%"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full"
          />
        </div>
      </section>
    </main>
  );
}