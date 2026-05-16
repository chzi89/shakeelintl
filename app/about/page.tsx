import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Shakeel International",
  description:
    "Pioneering the premium Himalayan pink salt trade for over 35 years.",
};

export default function AboutPage() {
  return (
    <main className="bg-white text-neutral-900 font-serif">
      {/* Hero */}
      <section className="relative h-[78vh] min-h-[520px] w-full overflow-hidden">
        <Image
          src="/hero-salt.jpg"
          alt="Workers harvesting pink Himalayan salt"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-5 pt-20 sm:px-6 text-white">
          <h1 className="max-w-2xl text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Our Heritage, Your Health.
            <br />
            The Essence of Himalayan Pink Salt.
          </h1>
          <p className="mt-5 max-w-xl font-sans text-sm md:text-base text-white/90">
            Pioneering the premium salt trade for over 35 years.
          </p>
          <div className="mt-8">
            <button className="rounded-sm bg-white px-6 py-3 font-sans text-sm font-medium text-neutral-900 shadow-sm transition hover:bg-neutral-100">
              Discover Our Story
            </button>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <h2 className="text-center text-3xl md:text-4xl">Our Mission &amp; Vision</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Our Mission",
                body:
                  "To provide the world with the purest, most authentic Himalayan pink salt, ensuring sustainable practices and enriching lives through exceptional quality.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-8 w-8">
                    <path d="M12 3c4 4 4 14 0 18-4-4-4-14 0-18z" />
                    <path d="M3 12h18" />
                  </svg>
                ),
              },
              {
                title: "Our Vision",
                body:
                  "To be the global leader in premium natural salt, recognised for integrity, innovation, and commitment to environmental stewardship.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-8 w-8">
                    <path d="M12 4l9 16H3z" />
                  </svg>
                ),
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-md bg-[#f1e6d8] px-6 py-8 sm:px-8 sm:py-10 text-center"
              >
                <div className="mx-auto flex justify-center text-neutral-700">{c.icon}</div>
                <h3 className="mt-5 text-xl">{c.title}</h3>
                <p className="mx-auto mt-3 max-w-xs font-sans text-sm leading-relaxed text-neutral-700">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Origins & Benefits */}
      <section className="bg-[#faf6f0] py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 sm:gap-12 px-5 sm:px-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-md">
            <Image
              src="/salt-spoon.jpg"
              alt="Wooden spoon with pink Himalayan salt crystals"
              width={1216}
              height={896}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl leading-snug">
              The Origins &amp; Benefits
              <br />
              of Himalayan Pink Salt
            </h2>
            <ul className="mt-6 space-y-3 font-sans text-sm text-neutral-800">
              {[
                "Sourced directly from ancient seabed deposits in the Khewra Salt Mine.",
                "Rich in 84 essential minerals and trace elements.",
                "Unrefined, free from additives and pollutants.",
                "Supports electrolyte balance and overall well-being.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-800" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl">Our Global Reach</h2>
          <div className="mt-10">
            <Image
              src="/world-map.jpg"
              alt="World map showing Shakeel International's export reach"
              width={1600}
              height={800}
              loading="lazy"
              className="mx-auto w-full"
            />
          </div>
          <p className="mx-auto mt-8 max-w-xl font-sans text-sm text-neutral-700">
            Exporting premium salt to over 50 countries worldwide,
            <br className="hidden md:block" />
            connecting cultures through purity.
          </p>
        </div>
      </section>
    </main>
  );
}
