"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react"; 

const products = [
  {
    img: "/salt-lamp3.jpg",
    title: "Himalayan Salt Lamps",
    desc: "Hand-crafted natural salt lamps that emit a warm, calming glow — ionizing the air with timeless elegance.",
  },
  {
    img: "/edible-salt3.jpg",
    title: "Edible Pink Salt",
    desc: "Pure, mineral-rich edible salt sourced from ancient seabeds — fine, coarse, and gourmet grades.",
  },
  {
    img: "/bath-salt3.jpg",
    title: "Bath & Spa Salt",
    desc: "Therapeutic bath salts crafted for luxury spa rituals, relaxation, and skin wellness.",
  },
  {
    img: "/decor-salt3.jpg",
    title: "Decorative Salt Products",
    desc: "Sculpted salt tiles, candle holders, and decor pieces — artisanal accents for refined interiors.",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-[#fdf6f0] to-[#f8ece0]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">
            Collection
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-stone-800">
            Our Premium Products
          </h2>
          <p className="mt-4 text-stone-600 leading-relaxed">
            Authentic, hand-selected Himalayan pink salt — refined for discerning
            partners who value purity, craftsmanship, and provenance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {products.map((p) => (
            <article
              key={p.title}
              className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-stone-200/70"
            >
              <div className="aspect-square overflow-hidden bg-stone-100 relative">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-stone-800">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                  {p.desc}
                </p>
                <button className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-rose-500 group/btn">
                  Explore
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover/btn:translate-x-1"
                  />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
