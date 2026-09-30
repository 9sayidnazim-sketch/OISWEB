import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { servicePages } from "@/lib/service-pages";

const serviceCardPalettes = [
  { background: "#DDE7FF", accent: "#EEF3FF" },
  { background: "#FFE2D5", accent: "#FFF2EC" },
  { background: "#EBF7C9", accent: "#F6FBE8" },
  { background: "#D7F2E8", accent: "#EEFAF5" },
  { background: "#E8DDFC", accent: "#F5F0FF" },
  { background: "#FFF0C9", accent: "#FFF8E6" },
  { background: "#FADCE7", accent: "#FFF0F5" },
  { background: "#D8EEF7", accent: "#ECF8FC" },
  { background: "#E8E9ED", accent: "#F5F5F7" },
] as const;

export function WhatWeBuildSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-background py-20 sm:py-24 lg:py-32"
    >
      <div className="container-page">
        <div className="mb-12 max-w-3xl sm:mb-16">
          <p className="text-eyebrow text-primary">What we build</p>
          <h2
            id="services-heading"
            className="mt-4 max-w-2xl text-balance text-4xl font-bold leading-[0.98] tracking-[-0.045em] sm:text-5xl lg:text-6xl"
          >
            Digital systems for real business work.
          </h2>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
            We build practical software, connected business systems and creative production around
            the way your organisation works.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {servicePages.map((service, index) => {
            const palette = serviceCardPalettes[index % serviceCardPalettes.length];

            return (
              <motion.article
                key={service.title}
                initial={reducedMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.55, delay: Math.min(index * 0.055, 0.28) }}
                className="group h-full min-w-0"
              >
                <Link
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  aria-label={`Explore ${service.title}`}
                  className="block h-full rounded-[1.6rem] outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
                >
                  <motion.div
                    whileHover={reducedMotion ? undefined : { y: -5 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="relative flex h-full min-h-[26rem] flex-col overflow-hidden rounded-[1.6rem] p-5 text-[#17191f] shadow-[0_22px_48px_-36px_rgba(15,23,42,0.38)] sm:p-6"
                    style={{ backgroundColor: palette.background }}
                  >
                    <div
                      aria-hidden="true"
                      className="absolute -right-20 -top-24 size-64 rounded-full opacity-25 blur-3xl"
                      style={{ backgroundColor: palette.accent }}
                    />

                    <div className="relative flex items-start justify-between gap-5">
                      <p className="max-w-[18ch] text-[0.65rem] font-semibold uppercase leading-4 tracking-[0.14em] text-black/60">
                        {service.category}
                      </p>
                      <span className="font-mono text-[0.68rem] font-semibold tabular-nums text-black/55">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="relative mt-10 max-w-[11ch] text-[clamp(2rem,3vw,2.8rem)] font-bold leading-[0.92] tracking-[-0.055em]">
                      {service.title}
                    </h3>

                    <p className="relative mt-4 max-w-[38ch] text-sm font-medium leading-5 text-black/65">
                      {service.summary}
                    </p>

                    <div className="relative mt-auto flex flex-wrap gap-1.5 pb-4 pt-7">
                      {service.keywords.slice(0, 2).map((keyword) => (
                        <span
                          key={keyword}
                          className="rounded-full border border-black/10 bg-white/45 px-2.5 py-1 text-[0.56rem] font-semibold uppercase tracking-[0.08em]"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>

                    <div className="relative flex items-center justify-between gap-4 rounded-[1rem] border border-black/[0.07] bg-white/65 px-4 py-3.5 text-[#17191f] backdrop-blur-sm">
                      <span className="text-sm font-semibold leading-tight">Explore service</span>
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#17191f] text-white transition-transform duration-300 group-hover:rotate-45 group-hover:bg-primary">
                        <ArrowUpRight className="size-4" aria-hidden="true" />
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
