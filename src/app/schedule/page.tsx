"use client";

import { SiteLayout, PageHero } from "@/components/SiteLayout";
import Link from "next/link";
import { schedule } from "@/data/studio";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

const dayColors = ["#00C8D7", "#7EE8FA", "#00AFC2", "#00C8D7", "#7EE8FA", "#00C8D7"];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

export default function Schedule() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Weekly Schedule"
        title="Book your"
        accent="spot."
        subtitle="Spaces are limited to keep classes intimate. Reserve your place and arrive ten minutes early to settle in."
      />

      <section className="py-32" style={{ background: "#0F172A" }}>
        {/* Glow */}
        <div className="pointer-events-none absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-[#00C8D7]/6 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-14"
          >
            <motion.p variants={fadeUp} className="eyebrow text-[#00C8D7] mb-4">
              Timetable
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-5xl md:text-6xl text-white">
              This Week&apos;s <em className="text-[#7EE8FA]">Classes</em>
            </motion.h2>
          </motion.div>

          {/* Schedule grid */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {schedule.map((day, di) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: di * 0.08 }}
                whileHover={{ y: -4 }}
                className="relative overflow-hidden rounded-[28px] border border-white/8 p-7 transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(0,200,215,0.12)]"
                style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(12px)" }}
              >
                {/* Day header */}
                <div className="flex items-center justify-between mb-6">
                  <h3
                    className="font-display text-2xl"
                    style={{ color: dayColors[di % dayColors.length] }}
                  >
                    {day.day}
                  </h3>
                  <Calendar className="size-4 text-white/20" />
                </div>

                {/* Accent line */}
                <div
                  className="mb-6 h-px w-full"
                  style={{
                    background: `linear-gradient(90deg, ${dayColors[di % dayColors.length]}50, transparent)`,
                  }}
                />

                {/* Sessions */}
                <ul className="space-y-4">
                  {day.sessions.map(([time, name, coach]) => (
                    <li key={time + name} className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-[0.875rem] font-semibold text-white">{name}</p>
                        <p className="mt-0.5 text-[0.65rem] uppercase tracking-[0.18em] text-white/40">
                          {coach}
                        </p>
                      </div>
                      <span
                        className="font-display text-2xl leading-none shrink-0"
                        style={{ color: dayColors[di % dayColors.length] }}
                      >
                        {time}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 rounded-[28px] border border-white/10 p-10 text-center relative overflow-hidden"
            style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(16px)" }}
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#00C8D7]/5 via-transparent to-[#7EE8FA]/5" />
            <h2 className="font-display text-4xl md:text-5xl text-white mb-4 relative z-10">
              Ready when you are
            </h2>
            <p className="text-white/50 font-light mb-8 max-w-md mx-auto relative z-10">
              New to the studio? Start with three classes for $79 and find your flow.
            </p>
            <div className="relative z-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-full bg-[#00C8D7] px-8 py-3.5 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-white shadow-[0_6px_24px_rgba(0,200,215,0.4)] transition-all duration-300 hover:bg-[#00b5c4] hover:scale-[1.03]"
              >
                View Pricing <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-3.5 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-white/35 hover:bg-white/5"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </SiteLayout>
  );
}
