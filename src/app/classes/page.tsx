"use client";

import Link from "next/link";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { classes } from "@/data/studio";
import { Clock, Signal, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

export default function Classes() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Classes"
        title="Find your"
        accent="practice."
        subtitle="From dynamic reformer sessions to restorative meditation, every class is designed to help you move better and feel stronger."
      />

      {/* ── Class list — Premium editorial alternating layout ──────── */}
      <section className="bg-white py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00C8D7]/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#00AFC2]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-32">
          {classes.map((c, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={c.slug}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={stagger}
                className={`flex flex-col items-center gap-12 lg:gap-24 ${
                  !isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                {/* Image with Parallax */}
                <motion.div
                  variants={fadeUp}
                  className="group relative w-full lg:w-1/2 aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-[28px] shadow-premium"
                >
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    className="object-cover transition-transform duration-[1.5s] group-hover:scale-110 filter grayscale-[15%] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />

                  {/* Premium Number badge */}
                  <div className="absolute top-8 left-8 glass-dark rounded-[1.5rem] px-5 py-3 border border-white/20 shadow-premium-dark backdrop-blur-md">
                    <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#00C8D7]">
                      0{i + 1}
                    </span>
                  </div>
                </motion.div>

                {/* Text Content */}
                <div className="w-full lg:w-1/2 lg:px-8">
                  <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
                    <div className="h-px w-12 bg-gradient-to-r from-[#00C8D7] to-transparent" />
                    <p className="eyebrow text-[#00C8D7] tracking-[0.3em]">Class 0{i + 1}</p>
                  </motion.div>

                  <motion.h2
                    variants={fadeUp}
                    className="font-display text-4xl md:text-6xl text-[#0A0F1E] leading-tight mb-8"
                  >
                    {c.name}
                  </motion.h2>

                  <motion.p
                    variants={fadeUp}
                    className="text-[1.05rem] leading-[1.8] text-[#5B6B70] font-light max-w-lg mb-10"
                  >
                    {c.long}
                  </motion.p>

                  {/* Enhanced Badges */}
                  <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-12">
                    <span className="inline-flex items-center gap-2.5 rounded-full border border-[#00C8D7]/20 bg-[#F1FAFB] px-6 py-3 text-[0.75rem] font-bold uppercase tracking-[0.15em] text-[#0A0F1E] shadow-sm">
                      <Clock className="size-4 text-[#00C8D7]" strokeWidth={2.5} /> {c.duration}
                    </span>
                    <span className="inline-flex items-center gap-2.5 rounded-full border border-[#00C8D7]/20 bg-[#F1FAFB] px-6 py-3 text-[0.75rem] font-bold uppercase tracking-[0.15em] text-[#0A0F1E] shadow-sm">
                      <Signal className="size-4 text-[#00C8D7]" strokeWidth={2.5} /> {c.level}
                    </span>
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <Link
                      href="/schedule"
                      className="group relative overflow-hidden inline-flex items-center gap-3 rounded-full bg-[#0A0F1E] px-10 py-5 text-[0.75rem] font-bold uppercase tracking-[0.2em] text-white shadow-premium-dark transition-all duration-500 hover:scale-[1.02]"
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        Book This Class
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 text-[#00C8D7]" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00C8D7]/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────── */}
      <section className="py-40 relative overflow-hidden bg-[#0A0F1E]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#00C8D7]/15 blur-[150px] pointer-events-none mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay pointer-events-none" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="relative z-10 mx-auto max-w-4xl px-6 text-center"
        >
          <motion.p variants={fadeUp} className="eyebrow text-[#00C8D7] mb-8 tracking-[0.4em]">
            New to Pilates?
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-5xl md:text-7xl text-white mb-8"
          >
            Not sure where
            <br />
            <em className="text-[#00C8D7] font-light">to start?</em>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-[1.1rem] text-white/60 font-light mb-14 leading-relaxed max-w-2xl mx-auto"
          >
            Try three classes for $79 and discover which practice feels right for you. Experience
            our premium studio environment and expert instruction.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link
              href="/pricing"
              className="group relative overflow-hidden inline-flex items-center gap-3 rounded-full bg-[#00C8D7] px-12 py-5 text-[0.8rem] font-bold uppercase tracking-[0.2em] text-[#0A0F1E] shadow-[0_10px_30px_rgba(0,200,215,0.4)] transition-all duration-500 hover:scale-[1.03]"
            >
              <span className="relative z-10 flex items-center gap-3">
                View New Client Offer{" "}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </SiteLayout>
  );
}
