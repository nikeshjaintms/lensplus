"use client";

import Link from "next/link";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { instructors, pillars } from "@/data/studio";
import { Sparkles, Waves, Leaf, Heart, Star, ArrowRight, Quote } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import studioImg from "@/assets/studio.jpg";
import communityImg from "@/assets/community.jpg";
import bbbbImg from "@/assets/ca4631d1-d18d-4b29-b0ea-297bfcce4495.png";

const icons = [Sparkles, Waves, Leaf, Heart];
const accentColors = ["#00C8D7", "#7EE8FA", "#00AFC2", "#00C8D7"];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

const reviews = [
  {
    name: "Aline Marchioro",
    date: "June 2026",
    text: "Really lovely place! Owner was very friendly and helpful. Highly recommend to everyone looking for a great pilates session.",
    initial: "A",
  },
  {
    name: "Paul K",
    date: "June 2026",
    text: "Outstanding ambient.. the training session is so polite and professional. Best studio in town hands down.",
    initial: "P",
  },
  {
    name: "Joe Angel",
    date: "June 2026",
    text: "I'm loving the whole experience. The environment is so calming and the instructors are top notch.",
    initial: "J",
  },
];

export default function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Us"
        title="Stronger from"
        accent="within."
        subtitle="N24 is a boutique Pilates studio in Perth where thoughtful movement meets a warm, welcoming community."
      />

      {/* ── Story ─────────────────────────────────── */}
      <section className="bg-white py-32 relative overflow-hidden border-b border-[#00C8D7]/10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00C8D7]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-[28px] shadow-premium aspect-[4/5] lg:aspect-auto lg:h-[700px]"
            >
              <Image
                src={studioImg}
                alt="N24 Pilates Studio interior"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/80 via-transparent to-transparent opacity-80" />

              {/* Corner accent */}
              <div className="absolute bottom-8 left-8 glass-dark rounded-[1.5rem] px-6 py-4 border border-white/20 shadow-premium-dark backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-2">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#00C8D7]">
                  Est. 2023
                </p>
                <p className="text-white font-light mt-1">Applecross, WA</p>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="lg:pl-8"
            >
              <motion.p variants={fadeUp} className="eyebrow text-[#00C8D7] mb-6 tracking-[0.3em]">
                Our Story
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="font-display text-5xl md:text-7xl text-[#0A0F1E] leading-[1.0] mb-8"
              >
                A space to feel
                <br />
                <em className="text-[#00C8D7] font-light">your strongest</em>
              </motion.h2>
              <motion.div
                variants={fadeUp}
                className="space-y-6 text-[1.1rem] leading-[1.9] text-[#5B6B70] font-light mb-12"
              >
                <p>
                  N24 Pilates was founded on a simple belief — that movement should feel good. We
                  created a calm, light-filled studio where every body is welcome and every session
                  is an invitation to reconnect with yourself.
                </p>
                <p>
                  From reformer to mat, yoga to meditation, our classes are designed to build
                  strength from the inside out. Small class sizes mean personal attention, so you
                  always move with confidence and care.
                </p>
              </motion.div>
              <motion.div variants={fadeUp}>
                <Link
                  href="/schedule"
                  className="group relative overflow-hidden inline-flex items-center gap-3 rounded-full bg-[#00C8D7] px-10 py-5 text-[0.75rem] font-bold uppercase tracking-[0.2em] text-[#0A0F1E] shadow-[0_10px_30px_rgba(0,200,215,0.3)] transition-all duration-500 hover:scale-[1.02]"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Book a Class{" "}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Philosophy / Values ───────────────────── */}
      <section className="py-32 relative overflow-hidden bg-[#0A0F1E]">
        <div className="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none">
          <Image src={bbbbImg} alt="" fill className="object-cover" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#00C8D7]/10 blur-[150px] pointer-events-none mix-blend-screen" />

        <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-24"
          >
            <motion.p variants={fadeUp} className="eyebrow text-[#00C8D7] mb-6 tracking-[0.3em]">
              Our Philosophy
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-5xl md:text-7xl text-white">
              What <em className="text-[#00C8D7] font-light">guides us</em>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {pillars.map((p, i) => {
              const Icon = icons[i];
              const color = accentColors[i];
              return (
                <motion.div
                  key={p.title}
                  variants={fadeUp}
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 p-10 text-center glass-dark shadow-premium-dark transition-all duration-500 hover:-translate-y-2 hover:border-[#00C8D7]/30"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#00C8D7]/10 to-transparent rounded-full blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div
                    className="mx-auto flex size-16 items-center justify-center rounded-2xl mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-inner"
                    style={{
                      background: `linear-gradient(135deg, ${color}20, transparent)`,
                      border: `1px solid ${color}30`,
                    }}
                  >
                    <Icon className="size-6" style={{ color }} />
                  </div>
                  <h3 className="relative z-10 font-display text-2xl text-white mb-4">{p.title}</h3>
                  <p className="relative z-10 text-[0.95rem] leading-relaxed text-white/60 font-light">
                    {p.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Team ─────────────────────────────────── */}
      <section className="bg-[#F1FAFB] py-32 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-24"
          >
            <motion.p variants={fadeUp} className="eyebrow text-[#00C8D7] mb-6 tracking-[0.3em]">
              Meet Our Instructors
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-5xl md:text-7xl text-[#0A0F1E]"
            >
              Guided by <em className="text-[#00C8D7] font-light">the best</em>
            </motion.h2>
          </motion.div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {instructors.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="group relative rounded-[28px] overflow-hidden bg-white border border-[#00C8D7]/10 shadow-premium"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 filter grayscale-[20%] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-[#0A0F1E]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-display text-3xl text-white mb-2">{m.name}</h3>
                    <p className="text-[0.75rem] uppercase tracking-[0.2em] text-[#00C8D7] font-bold">
                      {m.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews ─────────────────────────────── */}
      <section className="py-32 relative overflow-hidden bg-[#0A0F1E]">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-[#00C8D7]/5 blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-20"
          >
            <motion.p variants={fadeUp} className="eyebrow text-[#00C8D7] mb-6 tracking-[0.3em]">
              Community Love
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-5xl md:text-6xl text-white mb-8"
            >
              Customer feedback
              <br />
              <em className="text-[#00C8D7] font-light">that inspires</em>
            </motion.h2>
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-4 bg-white/5 shadow-premium-dark rounded-full px-8 py-3.5 border border-white/10 backdrop-blur-md"
            >
              <div className="flex text-yellow-400 gap-1.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="size-5 fill-current" />
                ))}
              </div>
              <span className="text-white font-display text-xl font-bold">5.0</span>
              <span className="text-[0.65rem] text-white/50 uppercase tracking-[0.2em]">
                Based on 10+ Reviews
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {reviews.map((r, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 p-10 flex flex-col glass-dark shadow-premium-dark transition-transform duration-500 hover:-translate-y-2"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#00C8D7]/10 rounded-full blur-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <Quote className="size-10 text-[#00C8D7]/40 mb-6" />
                <p className="text-[1.05rem] leading-relaxed text-white/80 font-light italic flex-1 mb-8">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="flex text-yellow-400 gap-1.5 mb-6">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="size-4 fill-current" />
                  ))}
                </div>
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <div className="size-12 rounded-full bg-gradient-to-br from-[#00C8D7] to-[#00AFC2] flex items-center justify-center font-display text-xl text-white shadow-[0_4px_15px_rgba(0,200,215,0.4)]">
                    {r.initial}
                  </div>
                  <div>
                    <p className="text-white text-[0.95rem] font-bold">{r.name}</p>
                    <p className="text-white/50 text-[0.75rem] mt-0.5">{r.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA Banner ─────────────────────────── */}
      <section className="relative overflow-hidden bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative overflow-hidden rounded-[3rem] h-[400px] shadow-premium"
          >
            <Image
              src={communityImg}
              alt=""
              fill
              className="object-cover transition-transform duration-[20s] hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1E]/90 via-[#0A0F1E]/60 to-[#0A0F1E]/30" />
            <div className="absolute top-1/2 left-1/4 w-96 h-96 -translate-y-1/2 rounded-full bg-[#00C8D7]/20 blur-[100px] pointer-events-none mix-blend-screen" />

            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <p className="eyebrow text-[#00C8D7] mb-6 tracking-[0.4em] drop-shadow-md">
                Join the Movement
              </p>
              <h2 className="font-display text-5xl md:text-7xl text-white mb-10 drop-shadow-lg">
                Come move with us
              </h2>
              <Link
                href="/schedule"
                className="group relative overflow-hidden inline-flex items-center gap-3 rounded-full bg-[#00C8D7] px-12 py-5 text-[0.8rem] font-bold uppercase tracking-[0.2em] text-[#0A0F1E] shadow-[0_10px_30px_rgba(0,200,215,0.4)] transition-all duration-500 hover:scale-[1.03]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Book Your First Class{" "}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </SiteLayout>
  );
}
