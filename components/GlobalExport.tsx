"use client";

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

const Globe2 = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M2.5 12h19" />
    <path d="M12 2.5a15.5 15.5 0 0 1 0 19" />
    <path d="M12 2.5a15.5 15.5 0 0 0 0 19" />
  </svg>
);

const ShieldCheck = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 3l8 4v5c0 5-3 8-8 10-5-2-8-5-8-10V7l8-4z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const Package = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 16V8a2 2 0 0 0-1-1.73L13 3a2 2 0 0 0-2 0L4 6.27A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73L11 21a2 2 0 0 0 2 0l7-3.27A2 2 0 0 0 21 16z" />
    <path d="M7.5 4.21 12 6.5l4.5-2.29" />
    <path d="M12 6.5v11.5" />
  </svg>
);

const Leaf = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 20c5-5 6-15 15-15" />
    <path d="M12 5c1.5 1.5 2 3.5 2 6 0 2.5-.5 4.5-2 6" />
    <path d="M7 12h10" />
  </svg>
);

const Handshake = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 12l4 4 4-4-4-4-4 4z" />
    <path d="M14 12l4 4 4-4-4-4-4 4z" />
    <path d="M6 12h12" />
    <path d="M10 8l4 8" />
  </svg>
);

const Plane = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 12l18-6-4 6 4 6-18-6z" />
    <path d="M13 6l-2 6 2 6" />
  </svg>
);

const highlights = [
  {
    icon: Plane,
    title: "Worldwide Shipping",
    desc: "Reliable logistics to 40+ countries via sea and air.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Quality Assurance",
    desc: "Lab-tested purity with international certifications.",
  },
  {
    icon: Package,
    title: "Bulk Orders Available",
    desc: "Custom volumes, private labeling, and OEM supply.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Packaging",
    desc: "Sustainable, recyclable materials for every shipment.",
  },
  {
    icon: Handshake,
    title: "Trusted International Supplier",
    desc: "Long-term partnerships with global distributors.",
  },
  {
    icon: Globe2,
    title: "Compliance & Documentation",
    desc: "Full export paperwork handled end to end.",
  },
];

const stats = [
  { value: "40+", label: "Countries Served" },
  { value: "15+", label: "Years of Experience" },
  { value: "500+", label: "Global Clients" },
  { value: "10K+", label: "Tons Exported" },
];

export default function GlobalExport() {
  return (
    <section id="export" className="py-20 sm:py-24 lg:py-32 bg-[#fffaf5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">
            Worldwide
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-stone-800">
            Global Export Services
          </h2>
          <p className="mt-4 text-stone-600 leading-relaxed">
            From the salt mines of Pakistan to ports across six continents — we
            move premium Himalayan salt with precision, transparency, and care.
          </p>
        </div>

        <div className="relative mx-auto mb-14 sm:mb-20 max-w-5xl min-h-[280px] sm:aspect-[2/1] rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#fdf6f0] to-[#f8ece0] border border-stone-200/70 shadow-sm overflow-hidden flex items-center justify-center">
          <Globe2
            className="absolute inset-0 m-auto max-h-[80%] max-w-[80%] text-rose-300/20"
            size={420}
            strokeWidth={0.6}
          />
          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-10 p-6 sm:p-8 w-full">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold bg-gradient-to-r from-rose-400 to-amber-500 bg-clip-text text-transparent">
                  {s.value}
                </div>
                <div className="mt-2 text-xs uppercase tracking-wider text-stone-600">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group p-6 sm:p-7 rounded-2xl bg-white border border-stone-200/70 shadow-sm hover:shadow-lg hover:border-rose-300 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-xl bg-rose-100 text-rose-500 flex items-center justify-center group-hover:bg-rose-500 group-hover:text-white transition-colors">
                <Icon size={22} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-stone-800">
                {title}
              </h3>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-rose-500 px-8 py-4 text-base font-medium text-white shadow-md hover:bg-rose-600 hover:-translate-y-0.5 transition-all"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
