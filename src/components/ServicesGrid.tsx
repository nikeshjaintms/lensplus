"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { classes } from "@/data/studio";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export function ServicesGrid() {
  return (
    <section className="bg-[#F7FCFC] py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center"
        >
          <p className="text-[0.7rem] uppercase tracking-[0.2em] font-bold text-[#00AFC2]">
            Our Offerings
          </p>
          <h2 className="mt-4 font-display text-4xl text-[#1E2E32] md:text-5xl">
            Find your practice
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {classes.map((c) => (
            <motion.div variants={fadeUp} key={c.slug}>
              <Link
                href="/classes"
                className="group flex h-full flex-col overflow-hidden rounded-[2rem] glass-card shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-[#00C9D8]/20"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.name}
                    width={800}
                    height={700}
                    className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="text-[0.8rem] font-bold uppercase tracking-[0.16em] text-[#1E2E32]">
                    {c.name}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.85rem] leading-relaxed text-[#5B6B70] font-light">
                    {c.short}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[0.75rem] font-bold uppercase tracking-[0.16em] text-[#00AFC2] transition-colors group-hover:text-[#00C9D8]">
                    Learn More{" "}
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
