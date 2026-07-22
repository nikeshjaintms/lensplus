"use client";

import { SiteLayout, PageHero } from "@/components/SiteLayout";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import communityImg from "@/assets/challenge-new.png";
import { Check, Trophy, Timer, Target, ArrowRight } from "lucide-react";

const perks = [
  {
    icon: Trophy,
    title: "Achieve Your Goals",
    text: "Commit to a 30-day program designed to build strength and increase flexibility.",
    color: "#00AFC2",
  },
  {
    icon: Timer,
    title: "Unlimited Access",
    text: "Take as many classes as you want during your challenge period.",
    color: "#00AFC2",
  },
  {
    icon: Target,
    title: "Track Your Progress",
    text: "Get personalised guidance from our expert instructors every step of the way.",
    color: "#00AFC2",
  },
];

const features = [
  "Unlimited Reformer Classes",
  "1 Complimentary Sauna Session",
  "Goal Tracking Worksheet",
  "Priority Waitlist Access",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

export default function ChallengePass() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="30-Day Challenge"
        title="Transform your"
        accent="practice."
        subtitle="Push your limits, build consistent habits, and feel stronger than ever with our exclusive Challenge Pass."
      />

      {/* ── Main split ───────────────────────────── */}
      <section className="bg-[#F1FAFB] py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image column */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="group relative overflow-hidden rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
            >
              <div className="aspect-[4/5] relative">
                <Image
                  src={communityImg}
                  alt="Pilates Challenge"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 via-transparent to-transparent" />
              </div>
              {/* Floating quote */}
              <div
                className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/40 p-6"
                style={{ background: "rgba(255,255,255,0.9)", backdropFilter: "blur(16px)" }}
              >
                <p className="font-display text-xl text-[#111827] leading-snug">
                  &ldquo;The best 30 days I&apos;ve committed to. I feel completely
                  transformed.&rdquo;
                </p>
                <p className="mt-2 text-[0.65rem] text-[#00C8D7] font-bold uppercase tracking-widest">
                  — Sarah M., Member
                </p>
              </div>
            </motion.div>

            {/* Text column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.p variants={fadeUp} className="eyebrow text-[#00C8D7] mb-4">
                What&apos;s Included
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="font-display text-5xl md:text-6xl text-[#111827] leading-tight mb-12"
              >
                The Ultimate
                <br />
                <em className="text-[#00C8D7]">Pass.</em>
              </motion.h2>

              <div className="space-y-8">
                {perks.map((p, i) => (
                  <motion.div key={p.title} variants={fadeUp} className="flex gap-6 group">
                    <div
                      className="flex size-14 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                      style={{ background: `${p.color}18` }}
                    >
                      <p.icon className="size-6" style={{ color: p.color }} />
                    </div>
                    <div>
                      <h3 className="text-[0.75rem] font-bold uppercase tracking-[0.18em] text-[#111827] mb-2">
                        {p.title}
                      </h3>
                      <p className="text-[0.9rem] text-[#5B6B70] leading-relaxed font-light">
                        {p.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Pricing CTA ─────────────────────────── */}
      <section className="py-32 relative overflow-hidden" style={{ background: "#0F172A" }}>
        {/* Glow */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#00C8D7]/10 blur-[120px]" />
        <div className="pointer-events-none absolute top-0 right-0 w-64 h-64 rounded-full bg-[#7EE8FA]/6 blur-[80px]" />

        <div className="relative z-10 mx-auto max-w-xl px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="eyebrow text-[#00C8D7] mb-4"
          >
            Ready to start?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl text-white mb-6"
          >
            30-Day Challenge
            <br />
            <em className="text-[#7EE8FA]">Pass</em>
          </motion.h2>

          {/* Price */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-7xl text-[#00C8D7] mb-2"
          >
            $199
          </motion.div>

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 rounded-[28px] border border-white/10 p-8 text-left"
            style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(16px)" }}
          >
            <ul className="space-y-4 mb-8">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#00C8D7]/20">
                    <Check className="size-3 text-[#00C8D7]" />
                  </span>
                  <span className="text-[0.875rem] text-white/70 font-light leading-relaxed">
                    {f}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="/schedule"
              className="group flex items-center justify-center gap-3 w-full rounded-full bg-[#00C8D7] py-4 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-white shadow-[0_6px_28px_rgba(0,200,215,0.45)] transition-all duration-300 hover:bg-[#00b5c4] hover:scale-[1.03] hover:shadow-[0_10px_40px_rgba(0,200,215,0.6)]"
            >
              Purchase Pass{" "}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </SiteLayout>
  );
}
