"use client";

import { useState } from "react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { ChevronDown, MessageCircle, ArrowRight } from "lucide-react";
import { TypewriterText } from "@/components/TypewriterText";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

const faqs = [
  {
    category: "General",
    items: [
      {
        q: "What is Reformer Pilates?",
        a: "Reformer Pilates is a low-impact, full-body workout performed on a specialized piece of equipment called a reformer. It uses spring resistance to build strength, flexibility, and balance without putting unnecessary strain on your joints.",
      },
      {
        q: "Do I need any previous experience?",
        a: "Not at all! We welcome all fitness levels. If you're new to Pilates, we recommend starting with our Foundation or Beginner classes so our instructors can introduce you to the equipment and basic movements safely.",
      },
      {
        q: "What should I wear and bring?",
        a: "Wear comfortable, form-fitting activewear so your instructor can check your alignment. Grip socks are mandatory for safety and hygiene (available for purchase at the studio). Bring a water bottle and a small towel.",
      },
    ],
  },
  {
    category: "Bookings & Policies",
    items: [
      {
        q: "How do I book a class?",
        a: "All bookings can be made directly through our website or via the booking app. We recommend booking in advance as classes are small and fill up quickly.",
      },
      {
        q: "What is your cancellation policy?",
        a: "We have a strict 12-hour cancellation policy to ensure everyone has a fair chance to book a class. Cancellations made less than 12 hours before class will result in a forfeited pass or a late cancellation fee.",
      },
      {
        q: "When should I arrive for class?",
        a: "Please arrive 10 minutes early, especially if it's your first time. This gives you time to store your belongings, meet your instructor, and get settled. Late arrivals may not be permitted to enter once the class has started.",
      },
    ],
  },
  {
    category: "Infrared Saunas",
    items: [
      {
        q: "What are the benefits of an infrared sauna?",
        a: "Unlike traditional saunas that heat the air, infrared saunas use light to heat your body directly. This deep penetrating heat promotes detoxification, muscle recovery, reduced inflammation, improved circulation, and profound relaxation.",
      },
      {
        q: "What should I wear in the sauna?",
        a: "We recommend wearing swimwear or your underwear. We provide clean towels for you to sit on and use during your session.",
      },
      {
        q: "Can I bring a friend?",
        a: "Yes! Our saunas are 2-capacity, meaning you can bring a friend or partner to share your session. It's a great way to recover and unwind together.",
      },
    ],
  },
];

const answerVariants: Variants = {
  collapsed: { height: 0, opacity: 0 },
  open: { height: "auto", opacity: 1, transition: { duration: 0.38, ease: "easeOut" } },
};

function AccordionItem({
  q,
  a,
  index,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className={`rounded-[1.25rem] border overflow-hidden transition-all duration-300 ${
        isOpen
          ? "border-[#00C8D7]/40 shadow-[0_4px_24px_rgba(0,200,215,0.12)]"
          : "border-[#E2EDF2] hover:border-[#00C8D7]/30 hover:shadow-[0_4px_16px_rgba(0,200,215,0.08)]"
      }`}
      style={{
        background: isOpen ? "rgba(0,200,215,0.04)" : "#FFFFFF",
      }}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between px-7 py-6 text-left focus:outline-none"
      >
        <span
          className="font-display text-lg md:text-xl pr-4 transition-colors duration-200"
          style={{ color: isOpen ? "#00AFC2" : "#0C1A2E" }}
        >
          {q}
        </span>
        <div
          className="flex size-9 shrink-0 items-center justify-center rounded-full transition-all duration-300"
          style={{
            background: isOpen ? "#00C8D7" : "rgba(0,200,215,0.1)",
            border: `1px solid ${isOpen ? "#00C8D7" : "rgba(0,200,215,0.25)"}`,
          }}
        >
          <ChevronDown
            className="size-4 transition-transform duration-300"
            style={{
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              color: isOpen ? "white" : "#00AFC2",
            }}
          />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={answerVariants}
            className="overflow-hidden"
          >
            <p className="px-7 pb-7 text-[0.9rem] leading-[1.9] text-[#4A606A] font-light">
              <TypewriterText text={a} speed={25} />
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Faqs() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="FAQs"
        title="Everything you"
        accent="need to know."
        subtitle="Got questions? We've got answers. If you can't find what you're looking for, feel free to reach out to our team."
      />

      {/* Main FAQ content — clean white background */}
      <section className="bg-white py-24 relative">
        {/* Subtle top glow from the dark hero above */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00C8D7]/30 to-transparent" />

        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="flex flex-col gap-20">
            {faqs.map((cat, ci) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: ci * 0.1 }}
              >
                {/* Category label */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px flex-1 bg-gradient-to-r from-[#00C8D7]/30 to-transparent" />
                  <span
                    className="rounded-full px-5 py-2 text-[0.65rem] font-bold uppercase tracking-[0.22em] border"
                    style={{
                      color: "#00AFC2",
                      borderColor: "rgba(0,200,215,0.3)",
                      background: "rgba(0,200,215,0.08)",
                    }}
                  >
                    {cat.category}
                  </span>
                  <div className="h-px w-10 bg-[#00C8D7]/30" />
                </div>

                {/* Accordion items */}
                <div className="flex flex-col gap-3">
                  {cat.items.map((item, ii) => {
                    const id = `${ci}-${ii}`;
                    return (
                      <AccordionItem
                        key={id}
                        q={item.q}
                        a={item.a}
                        index={ii}
                        isOpen={openId === id}
                        onToggle={() => setOpenId(openId === id ? null : id)}
                      />
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-20 rounded-[28px] border border-[#00C8D7]/25 p-12 text-center"
            style={{
              background: "linear-gradient(135deg, #f0fbfd 0%, #ffffff 100%)",
              boxShadow: "0 12px 48px rgba(0,200,215,0.08)",
            }}
          >
            <MessageCircle className="size-12 text-[#00C8D7]/50 mx-auto mb-5" />
            <h3 className="font-display text-3xl text-[#0C1A2E] mb-3">Still have questions?</h3>
            <p className="text-[#4A606A] text-sm font-light mb-8">
              Our friendly team is here to help.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#00C8D7] px-8 py-3.5 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-white shadow-[0_4px_20px_rgba(0,200,215,0.4)] transition-all duration-300 hover:bg-[#00b5c4] hover:scale-[1.03]"
            >
              Get in Touch <ArrowRight className="size-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </SiteLayout>
  );
}
