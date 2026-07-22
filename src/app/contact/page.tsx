"use client";

import { useState } from "react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { motion } from "framer-motion";

const details = [
  { icon: Phone, label: "Call Us", value: "0478 336 630", href: "tel:0478336630" },
  {
    icon: Mail,
    label: "Email",
    value: "hello@n24pilates.com.au",
    href: "mailto:hello@n24pilates.com.au",
  },
  {
    icon: MapPin,
    label: "Visit",
    value: "Unit G3/3 Kintail Rd, Perth WA 6153",
    href: "https://maps.google.com/?q=N24+Pilates+Applecross",
  },
  { icon: Clock, label: "Hours", value: "Mon–Sat · 5am – 10pm", href: undefined },
];

const accentColors = ["#00C8D7", "#00AFC2", "#00AFC2", "#00C8D7"];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

/* ── Icon circle with hover fill ── */
function IconCircle({ icon: Icon, color }: { icon: React.ElementType; color: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex size-12 items-center justify-center rounded-full mb-4 transition-all duration-300"
      style={{
        background: hovered ? color : `${color}22`,
        transform: hovered ? "scale(1.1)" : "scale(1)",
        boxShadow: hovered ? `0 4px 18px ${color}55` : "none",
      }}
    >
      <Icon
        className="size-5 transition-colors duration-300"
        style={{ color: hovered ? "#ffffff" : color }}
      />
    </div>
  );
}

export default function Contact() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title="Let's"
        accent="connect."
        subtitle="Questions about classes, memberships or getting started? We're here to help."
      />

      {/* ── Main content ─────────────────────────── */}
      <section
        className="py-32 relative"
        style={{ background: "linear-gradient(160deg, #FAFCFD 0%, #FFFFFF 55%, #F5FAFB 100%)" }}
      >
        {/* Subtle teal glow accents */}
        <div className="pointer-events-none absolute right-0 top-0 w-[500px] h-[400px] rounded-full bg-[#00C8D7]/10 blur-[140px]" />
        <div className="pointer-events-none absolute left-0 bottom-0 w-[360px] h-[300px] rounded-full bg-[#00AFC2]/8 blur-[120px]" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Left — Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.p variants={fadeUp} className="eyebrow text-[#00AFC2] mb-4">
                Studio Details
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="font-display text-5xl md:text-6xl text-[#0F172A] leading-tight mb-12"
              >
                Come say <em className="text-[#00C8D7]">hello</em>
              </motion.h2>

              <div className="grid gap-4 sm:grid-cols-2">
                {details.map((d, i) => {
                  const Wrapper = d.href ? "a" : "div";
                  return (
                    <motion.div key={d.label} variants={fadeUp}>
                      <Wrapper
                        {...(d.href
                          ? { href: d.href, target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="group block rounded-[1.5rem] border border-[#00C8D7]/20 p-6 transition-all duration-300 hover:border-[#00C8D7]/50 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,200,215,0.15)]"
                        style={{
                          background: "rgba(255,255,255,0.85)",
                          backdropFilter: "blur(12px)",
                        }}
                      >
                        <IconCircle icon={d.icon} color={accentColors[i]} />
                        <p className="text-[0.65rem] uppercase tracking-[0.2em] text-[#5B6B70] mb-1">
                          {d.label}
                        </p>
                        <p className="text-[0.875rem] font-medium text-[#111827] leading-relaxed">
                          {d.value}
                        </p>
                      </Wrapper>
                    </motion.div>
                  );
                })}
              </div>

              {/* Quick actions */}
              <motion.div variants={fadeUp} className="mt-10 flex gap-3">
                <a
                  href="https://wa.me/61478336630"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-[#00C8D7]/40 bg-white px-5 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-[#00AFC2] transition-all hover:border-[#00C8D7] hover:bg-[#00C8D7] hover:text-white"
                >
                  WhatsApp Us
                </a>
                <a
                  href="mailto:hello@n24pilates.com.au"
                  className="flex items-center gap-2 rounded-full border border-[#00C8D7]/40 bg-white px-5 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-[#00AFC2] transition-all hover:border-[#00C8D7] hover:bg-[#00C8D7] hover:text-white"
                >
                  Email Us
                </a>
              </motion.div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85 }}
              className="relative overflow-hidden rounded-[28px] border border-[#00C8D7]/25 p-8 lg:p-10"
              style={{
                background: "rgba(255,255,255,0.92)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 20px 60px rgba(0,200,215,0.1)",
              }}
            >
              {/* Subtle glow orb inside form */}
              <div className="pointer-events-none absolute top-0 right-0 w-40 h-40 rounded-full bg-[#00C8D7]/10 blur-3xl" />
              <div className="pointer-events-none absolute bottom-0 left-0 w-32 h-32 rounded-full bg-[#00AFC2]/8 blur-3xl" />

              <div className="relative z-10">
                <p className="eyebrow text-[#00AFC2] mb-3">Send a Message</p>
                <h3 className="font-display text-3xl text-[#0F172A] mb-8">
                  We&apos;d love to
                  <br />
                  hear from you
                </h3>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Map ─────────────────────────────────── */}
      <div className="relative w-full h-[420px] overflow-hidden">
        <iframe
          src="https://maps.google.com/maps?q=N24%20Pilates%20%26%20Wellness%20Studio%20Unit%20G3%2F3%20Kintail%20Rd%20Perth&t=&z=16&ie=UTF8&iwloc=&output=embed"
          className="absolute inset-0 w-full h-full"
          style={{ border: 0, filter: "sepia(20%) hue-rotate(140deg) saturate(1.1)" }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </SiteLayout>
  );
}
