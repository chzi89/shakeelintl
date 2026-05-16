"use client";

import Image from "next/image";

const ArrowRightIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width={16}
    height={16}
    aria-hidden="true"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const products = [
  {
    img: "/salt-lamp3.jpg",
    title: "Himalayan Salt Lamps",
    tag: "Wellness",
    desc: "Hand-crafted natural salt lamps that emit a warm, calming glow — ionizing the air with timeless elegance.",
  },
  {
    img: "/edible-salt3.jpg",
    title: "Edible Pink Salt",
    tag: "Culinary",
    desc: "Pure, mineral-rich edible salt sourced from ancient seabeds — fine, coarse, and gourmet grades available.",
  },
  {
    img: "/bath-salt3.jpg",
    title: "Bath & Spa Salt",
    tag: "Spa",
    desc: "Therapeutic bath salts crafted for luxury spa rituals, relaxation, and skin wellness.",
  },
  {
    img: "/decor-salt3.jpg",
    title: "Decorative Salt Products",
    tag: "Decor",
    desc: "Sculpted salt tiles, candle holders, and decor pieces — artisanal accents for refined interiors.",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="py-20 sm:py-24 lg:py-32 `bg-gradient-to-b from-[#fdf6f0] to-[#f8ece0]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-rose-500 mb-1">
            Collection
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-stone-800 leading-tight">
            Our Premium Products
          </h2>
          <p className="mt-4 text-stone-500 leading-relaxed text-base sm:text-lg">
            Authentic, hand-selected Himalayan pink salt — refined for
            discerning partners who value purity, craftsmanship, and provenance.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {products.map((p) => (
            <article
              key={p.title}
              className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-stone-200/70 flex flex-col"
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden bg-stone-100 relative `flex-shrink-0">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Tag badge */}
                <span className="absolute top-3 left-3 z-10 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-rose-500 shadow-sm">
                  {p.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <h3 className="text-base sm:text-lg font-semibold text-stone-800 leading-snug">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-stone-500 leading-relaxed flex-1">
                  {p.desc}
                </p>

                {/* Divider */}
                <div className="mt-4 pt-4 border-t border-stone-100">
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-rose-500 hover:text-rose-600 transition-colors group/btn"
                  >
                    Explore
                    <span className="transition-transform duration-200 group-hover/btn:translate-x-1">
                      <ArrowRightIcon />
                    </span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <a
            href="/products"
            className="inline-flex items-center gap-2 rounded-full border-2 border-rose-400 text-rose-500 px-7 py-3 text-sm font-semibold hover:bg-rose-500 hover:text-white hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            View All Products
            <ArrowRightIcon />
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-rose-500 text-white px-7 py-3 text-sm font-semibold shadow-md hover:bg-rose-600 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            Request a Quote
            <ArrowRightIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
