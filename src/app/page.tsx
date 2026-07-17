"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence, type Variants } from "framer-motion";
import {
  ArrowRight,
  Star,
  MapPin,
  Mail,
  MessageCircle,
  Award,
  Users,
  Clock,
  TrendingUp,
  Play,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { pillars, instructors } from "@/data/studio";
import heroImg from "@/assets/fe2b586c-c331-44f0-8e7a-33a839238d76.png";
import communityImg from "@/assets/community.jpg";
import offerImg from "@/assets/offer.jpg";
import bbbbImg from "@/assets/ca4631d1-d18d-4b29-b0ea-297bfcce4495.png";

/* ─── animation variants ──────────────────────────────────────────── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
};
const stagger: Variants = { visible: { transition: { staggerChildren: 0.15 } } };



/* ─── features ─────────────────────────────────────────────────────── */
const features = [
  {
    title: "Expert Instructors",
    desc: "Certified professionals delivering personalised guidance every session.",
    icon: Award,
    color: "from-[#00C8D7]/20 to-[#00C8D7]/5",
    accent: "#00C8D7",
  },
  {
    title: "Boutique Setting",
    desc: "Intimate class sizes so every body gets the attention it deserves.",
    icon: Users,
    color: "from-[#00AFC2]/20 to-[#00AFC2]/5",
    accent: "#00AFC2",
  },
  {
    title: "Premium Equipment",
    desc: "State-of-the-art Digital Reformers and professional-grade studio gear.",
    icon: TrendingUp,
    color: "from-[#00AFC2]/20 to-[#00AFC2]/5",
    accent: "#00AFC2",
  },
  {
    title: "Holistic Wellness",
    desc: "Pilates, Yoga, Stretch & Infrared Sauna — a complete mind-body ecosystem.",
    icon: Clock,
    color: "from-[#00C8D7]/20 to-[#00C8D7]/5",
    accent: "#00C8D7",
  },
];

/* ─── reviews ──────────────────────────────────────────────────────── */
const reviews = [
  {
    name: "Aline Marchioro",
    date: "June 2026",
    text: "Really lovely place! Owner was very friendly and helpful. Highly recommend to everyone looking for a great Pilates session.",
    initial: "A",
  },
  {
    name: "Paul K",
    date: "June 2026",
    text: "Outstanding ambience. The training session is so polite and professional. Best studio in town — hands down.",
    initial: "P",
  },
  {
    name: "Joe Angel",
    date: "June 2026",
    text: "I'm loving the whole experience. The environment is so calming and the instructors are top notch.",
    initial: "J",
  },
];

/* ─── gallery videos ─────────────────────────────────────────────────── */
const videos = [
  { src: "/videos/1.mp4", title: "Standing Reformer Lunge", sub: "Leg strength & balance" },
  { src: "/videos/2-wa.mp4", title: "Core Plank Series", sub: "Deep core activation" },
  { src: "/videos/3-wa.mp4", title: "Hundred on Reformer", sub: "Build endurance" },
  { src: "/videos/6.mp4", title: "Footwork Series", sub: "Lower body alignment" },
  { src: "/videos/5.mp4", title: "Elephant Stretch", sub: "Hamstring flexibility" },
  { src: "/videos/4.mp4", title: "Bridging Exercise", sub: "Core & glutes" },
  { src: "/videos/7.mp4", title: "Side Splits", sub: "Hip stability" },
  { src: "/videos/8.mp4", title: "Short Box Series", sub: "Posture & balance" },
];

/* ─── animated counter hook ────────────────────────────────────────── */
function useCounter(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

/* ─── single stat card ──────────────────────────────────────────────── */
function StatCard({
  icon: Icon,
  value,
  label,
  suffix,
  accent,
  delay,
}: {
  icon: React.ElementType;
  value: string;
  label: string;
  suffix: string;
  accent: string;
  delay: number;
}) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const numericTarget = parseFloat(value);
  const isDecimal = value.includes(".");
  const count = useCounter(isDecimal ? numericTarget * 10 : numericTarget, 1600, inView);
  const displayCount = isDecimal ? (count / 10).toFixed(1) : count.toString();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col items-center gap-3 sm:gap-5 rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-8 text-center cursor-default transition-all duration-300 hover:-translate-y-2"
      style={{
        background: "rgba(255,255,255,0.06)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.12)",
        boxShadow: "0 8px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
      }}
    >
      {/* Subtle gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${accent}18, transparent 70%)` }}
      />

      {/* Glow on hover */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ boxShadow: `0 0 40px ${accent}25` }}
      />

      {/* Icon container */}
      <div
        className="relative flex size-14 items-center justify-center rounded-full border transition-all duration-500 group-hover:scale-110"
        style={{
          background: `${accent}15`,
          borderColor: `${accent}35`,
          boxShadow: `0 0 20px ${accent}20`,
        }}
      >
        {/* Icon glow ring on hover */}
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
          style={{ background: `${accent}30` }}
        />
        <Icon className="relative z-10 size-6 transition-transform duration-500 group-hover:scale-110" style={{ color: accent }} strokeWidth={1.5} />
      </div>

      {/* Number */}
      <div className="relative">
        <p className="font-display text-[2.2rem] sm:text-[3.5rem] md:text-[4rem] leading-none text-white tracking-tight">
          {inView ? displayCount : "0"}
          <span style={{ color: accent }} className="ml-0.5">{suffix}</span>
        </p>
      </div>

      {/* Label */}
      <p className="text-[0.6rem] uppercase tracking-[0.28em] text-white/45 font-bold leading-relaxed">
        {label}
      </p>

      {/* Bottom accent line — expands on hover */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-14 rounded-full transition-all duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
      />
    </motion.div>
  );
}

/* ─── full stats section ────────────────────────────────────────────── */
function StatsSection() {
  const statItems = [
    { icon: Star,       value: "5.0", label: "Google Rating",    suffix: "",  accent: "#00C8D7", delay: 0    },
    { icon: Users,      value: "500", label: "Happy Members",    suffix: "+", accent: "#7EE8FA", delay: 0.1  },
    { icon: Award,      value: "4",   label: "Expert Trainers",  suffix: "",  accent: "#00AFC2", delay: 0.2  },
    { icon: TrendingUp, value: "3",   label: "Years Experience", suffix: "+", accent: "#00C8D7", delay: 0.3  },
  ];

  return (
    <section className="relative overflow-hidden py-20">
      {/* ── Layered background ── */}
      {/* Deep navy base — seamless continuation from hero */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #0A0F1E 0%, #07111F 40%, #091525 100%)" }} />

      {/* Large radial teal glows */}
      <div className="pointer-events-none absolute -left-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00C8D7]/12 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#00AFC2]/10 blur-[100px]" />
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-[#00C8D7]/8 blur-[80px]" />

      {/* Abstract curved line */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.07]"
        preserveAspectRatio="none"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,160 C360,280 720,40 1080,200 C1260,280 1360,200 1440,160"
          stroke="#00C8D7"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M0,200 C300,100 600,260 900,160 C1100,100 1300,220 1440,180"
          stroke="#7EE8FA"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      {/* Minimal dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #00C8D7 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Top & bottom accent lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00C8D7]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00C8D7]/20 to-transparent" />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
      {/* ── Stats section label ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-14"
        >
          <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-[#00C8D7]/60" />
          <p className="eyebrow text-[#00C8D7]/70 tracking-[0.3em]">Studio Achievements</p>
          <div className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-[#00C8D7]/60" />
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
          {statItems.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════ */
export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeReview, setActiveReview] = useState(0);

  // Auto-rotate testimonials every 4 seconds
  useEffect(() => {
    const reviewInterval = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(reviewInterval);
  }, []);

  // Auto-scroll logic for the gallery (continuous slow scroll)
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrameId: number;
    let isHovered = false;

    const scroll = () => {
      if (!isHovered && slider) {
        slider.scrollLeft += 1.5; // Adjust speed here

        // If we've scrolled past half the content (since we duplicate the array), reset to 0 for infinite loop
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    const handleMouseEnter = () => (isHovered = true);
    const handleMouseLeave = () => (isHovered = false);

    slider.addEventListener("mouseenter", handleMouseEnter);
    slider.addEventListener("mouseleave", handleMouseLeave);
    slider.addEventListener("touchstart", handleMouseEnter);
    slider.addEventListener("touchend", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      slider.removeEventListener("mouseenter", handleMouseEnter);
      slider.removeEventListener("mouseleave", handleMouseLeave);
      slider.removeEventListener("touchstart", handleMouseEnter);
      slider.removeEventListener("touchend", handleMouseLeave);
    };
  }, []);

  return (
    <SiteLayout>
      {/* ═══════════════════════════════════════════
          1. HERO — Cinematic full-screen with refined animations
      ═══════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative h-[100svh] min-h-[700px] flex flex-col overflow-hidden bg-[#0A0F1E]"
      >
        <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0 z-0">
          <Image
            src={heroImg}
            alt="N24 Pilates Studio"
            fill
            className="object-cover object-center opacity-85"
            priority
          />
        </motion.div>

        {/* Enhanced gradient layers for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1E] via-[#0A0F1E]/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-transparent to-[#0A0F1E]/30 z-10" />
        {/* Solid gradient at the bottom to completely hide the background wall text under the cards */}
        <div className="absolute bottom-0 left-0 w-full h-[400px] bg-gradient-to-t from-[#0A0F1E] via-[#0A0F1E]/95 to-transparent z-10 pointer-events-none" />

        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#00C8D7]/15 blur-[120px] z-10 pointer-events-none mix-blend-screen" />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-20 flex flex-col justify-center flex-1 mx-auto max-w-7xl w-full px-6 lg:px-10"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-2xl mt-12"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-[#00C8D7] to-transparent" />
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-white">
                Applecross · Perth
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display text-[2.8rem] sm:text-[3.8rem] md:text-[5rem] lg:text-[6.5rem] leading-[1.0] text-white tracking-tight"
            >
              Move <span className="italic text-[#00C8D7]">Better.</span> Live{" "}
              <span className="italic text-white/90">Lighter.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 sm:mt-8 text-[0.95rem] sm:text-[1.05rem] leading-relaxed text-white/70 font-light max-w-[min(90%,24rem)]"
            >
              Perth&apos;s premier boutique Pilates studio. Reformer classes, infrared saunas, and
              expert coaching — designed to transform you.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 sm:mt-12 flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-5">
              <Link
                href="/schedule"
                className="group relative overflow-hidden rounded-full bg-white px-8 sm:px-10 py-4 text-[0.72rem] sm:text-[0.75rem] font-bold uppercase tracking-[0.2em] text-[#0A0F1E] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Book a Class
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white via-[#E2F8FA] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
              <Link
                href="/pricing"
                className="group flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 sm:px-10 py-4 text-[0.72rem] sm:text-[0.75rem] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md transition-all duration-500 hover:border-white/60 hover:bg-white/10"
              >
                View Pricing
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
        >
          <span className="text-[0.6rem] uppercase tracking-[0.3em] text-white/40">
            Scroll to explore
          </span>
          <motion.div
            animate={{ height: ["0%", "100%", "0%"], top: ["0%", "0%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-16 bg-white/20 relative overflow-hidden"
          >
            <motion.div className="absolute left-0 w-full h-full bg-[#00C8D7]" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          2. STUDIO HIGHLIGHTS — Premium floating glassmorphism cards
      ═══════════════════════════════════════════ */}
      <StatsSection />

      {/* ═══════════════════════════════════════════
          3. WHY CHOOSE US — Premium glowing cards
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00C8D7]/20 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.p variants={fadeUp} className="eyebrow text-[#00C8D7] mb-4">
              Why N24
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-[2rem] sm:text-[2.8rem] md:text-5xl lg:text-6xl text-[#0A0F1E]"
            >
              A studio built for <em className="text-[#00C8D7]">real transformation</em>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  variants={fadeUp}
                  className="group relative rounded-[28px] bg-white border border-[#DDEAF2] p-8 shadow-soft transition-all duration-500 hover:shadow-premium hover:-translate-y-2 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div
                    className={`relative z-10 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br ${f.color} mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-inner`}
                  >
                    <Icon className="size-6" style={{ color: f.accent }} />
                  </div>
                  <h3 className="relative z-10 font-display text-2xl text-[#0A0F1E] mb-4">
                    {f.title}
                  </h3>
                  <p className="relative z-10 text-[0.9rem] leading-relaxed text-[#5B6B70] font-light">
                    {f.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4. COMMUNITY — Luxury dark split layout
      ═══════════════════════════════════════════ */}
      <section className="bg-[#0A0F1E] py-0 overflow-hidden border-y border-white/5 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="flex flex-col lg:flex-row"
        >
          {/* Left: Cinematic image with parallax */}
          <div className="lg:w-1/2 relative min-h-[500px] lg:min-h-[700px] overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <Image src={communityImg} alt="N24 Community" fill className="object-cover" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0A0F1E]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-transparent to-transparent lg:hidden" />
          </div>

          {/* Right: Premium dark editorial content */}
          <div className="lg:w-1/2 relative flex flex-col justify-center p-8 sm:p-12 lg:p-24">
            <div className="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none">
              <Image src={bbbbImg} alt="" fill className="object-cover" />
            </div>
            <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-[#00C8D7]/10 blur-[100px] pointer-events-none" />

            <div className="relative z-10">
              <p className="eyebrow text-[#00C8D7] mb-6 tracking-[0.3em]">Join Our Community</p>
              <h2 className="font-display text-[2rem] sm:text-[2.8rem] md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6 sm:mb-8">
                The N24 <em className="text-[#00C8D7] font-light">Pilates Family</em>
              </h2>
              <p className="text-[1.05rem] leading-relaxed text-white/60 font-light max-w-md mb-12">
                We believe in movement, connection, and becoming the strongest version of you. Join
                a community that lifts each other — on and off the reformer.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                {pillars.map((p) => (
                  <span
                    key={p.title}
                    className="rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-6 py-2.5 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white/10 hover:border-[#00C8D7]/50"
                  >
                    {p.title}
                  </span>
                ))}
              </div>

              <Link
                href="/about"
                className="group inline-flex items-center gap-3 rounded-full bg-[#00C8D7]/10 border border-[#00C8D7]/30 px-10 py-4 text-[0.75rem] font-bold uppercase tracking-[0.2em] text-[#00C8D7] transition-all duration-300 hover:bg-[#00C8D7] hover:text-white"
              >
                Our Story
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          5. GALLERY — Premium Horizontal Carousel
      ═══════════════════════════════════════════ */}
      <section className="bg-[#F1FAFB] py-14 sm:py-20 overflow-hidden">
        <div className="mx-auto max-w-[105rem] px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="flex flex-col md:flex-row md:items-end md:justify-between px-2 mb-12 gap-6"
          >
            <div>
              <motion.p variants={fadeUp} className="eyebrow text-[#00C8D7] mb-4 tracking-[0.3em]">
                Studio in Motion
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="font-display text-[2rem] sm:text-[2.8rem] md:text-5xl lg:text-6xl text-[#0A0F1E]"
              >
                Experience <em>N24 Live</em>
              </motion.h2>
            </div>
          </motion.div>

          {/* Horizontal video slider */}
          <div
            ref={sliderRef}
            className="flex gap-6 lg:gap-8 overflow-x-auto pb-10 pt-4 px-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {[...videos, ...videos].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: (i % 4) * 0.1 }}
                className="group relative w-[85vw] sm:w-[45vw] md:w-[35vw] lg:w-[28vw] max-w-[400px] flex-shrink-0 aspect-[9/16] sm:aspect-[4/5] overflow-hidden rounded-[28px] shadow-soft hover:shadow-premium transition-all duration-500"
              >
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 size-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/90 via-[#0A0F1E]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="size-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100 shadow-[0_0_30px_rgba(0,200,215,0.3)]">
                    <Play className="size-6 text-white ml-1" fill="currentColor" />
                  </div>
                </div>

                <div className="absolute bottom-8 left-8 right-8 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-display text-3xl text-white leading-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[0.85rem] text-[#00C8D7] font-light mb-4">{item.sub}</p>
                  <div className="h-px w-12 bg-[#00C8D7] transition-all duration-500 group-hover:w-full opacity-50 group-hover:opacity-100" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          6. INSTRUCTORS — Premium profile cards
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-10 sm:mb-12"
          >
            <motion.p variants={fadeUp} className="eyebrow text-[#00C8D7] mb-4 tracking-[0.3em]">
              Meet the Team
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-[2rem] sm:text-[2.8rem] md:text-5xl lg:text-6xl text-[#0A0F1E]"
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
                className="group relative rounded-[28px] overflow-hidden bg-white border border-[#DDEAF2] shadow-soft hover:shadow-premium transition-all duration-500"
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

      {/* ═══════════════════════════════════════════
          7. MEMBERSHIP OFFER — Premium glass card
      ═══════════════════════════════════════════ */}
      <section className="relative py-24 overflow-hidden bg-[#0A0F1E]">
        <div className="absolute inset-0">
          <Image
            src={offerImg}
            alt="Special Offer"
            fill
            className="object-cover opacity-20 filter grayscale-[50%]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-transparent to-[#0A0F1E] opacity-90" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#00C8D7]/10 blur-[150px] pointer-events-none mix-blend-screen" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="relative z-10 mx-auto max-w-4xl px-6 text-center"
        >
          <motion.p variants={fadeUp} className="eyebrow text-[#00C8D7] mb-6 tracking-[0.4em]">
            New Client Offer
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-[5rem] md:text-[7rem] leading-[0.9] text-white mb-4"
          >
            3 Classes <span className="text-[#00C8D7] italic">for $79</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-[1.1rem] text-white/70 font-light max-w-xl mx-auto mb-14 leading-relaxed"
          >
            Discover the studio with three classes in your first two weeks — Reformer, Mat or Yoga,
            the choice is yours. Begin your transformation today.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href="/pricing"
              className="group relative overflow-hidden rounded-full bg-[#00C8D7] px-12 py-5 text-[0.8rem] font-bold uppercase tracking-[0.2em] text-[#0A0F1E] shadow-[0_0_40px_rgba(0,200,215,0.4)] transition-all duration-500 hover:scale-[1.02]"
            >
              <span className="relative z-10 flex items-center gap-3">
                Claim Offer
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#00C8D7] via-white to-[#00C8D7] opacity-0 group-hover:opacity-50 transition-opacity duration-500 mix-blend-overlay" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          8. TESTIMONIALS — Sleek Google Review Slider
      ═══════════════════════════════════════════ */}
      <section className="bg-[#F1FAFB] py-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#00C8D7]/5 blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.p variants={fadeUp} className="eyebrow text-[#00C8D7] mb-4 tracking-[0.3em]">
              Community Love
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-5xl md:text-6xl text-[#0A0F1E] mb-6"
            >
              Real stories, <em className="text-[#00C8D7] font-light">real results</em>
            </motion.h2>
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-3 bg-white shadow-premium rounded-full px-8 py-3 border border-[#00C8D7]/10"
            >
              <div className="flex text-yellow-400 gap-1.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="size-5 fill-current" />
                ))}
              </div>
              <span className="text-[0.75rem] font-bold uppercase tracking-[0.2em] text-[#0A0F1E]">
                5.0 <span className="text-[#5B6B70] font-normal">· Google Reviews</span>
              </span>
            </motion.div>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeReview}
                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white rounded-[28px] p-12 md:p-16 text-center shadow-soft border border-[#DDEAF2] relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#00C8D7] to-[#7EE8FA]" />
                <Quote className="size-12 text-[#00C8D7]/20 mx-auto mb-8" />
                <p className="font-display text-3xl md:text-4xl text-[#0A0F1E] leading-relaxed mb-12">
                  &ldquo;{reviews[activeReview].text}&rdquo;
                </p>
                <div className="flex items-center justify-center gap-5">
                  <div className="size-14 rounded-full bg-gradient-to-br from-[#00C8D7] to-[#00AFC2] flex items-center justify-center font-display text-2xl text-white shadow-[0_4px_20px_rgba(0,200,215,0.4)]">
                    {reviews[activeReview].initial}
                  </div>
                  <div className="text-left">
                    <p className="text-[#0A0F1E] font-bold text-[1rem]">
                      {reviews[activeReview].name}
                    </p>
                    <p className="text-[#5B6B70] font-light text-[0.8rem] mt-0.5">
                      {reviews[activeReview].date}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-center gap-6 mt-12">
              <button
                onClick={() => setActiveReview((p) => (p - 1 + reviews.length) % reviews.length)}
                className="size-14 rounded-full bg-white border border-[#00C8D7]/20 shadow-premium flex items-center justify-center text-[#0A0F1E] hover:border-[#00C8D7] hover:bg-[#00C8D7] hover:text-white transition-all duration-300"
                aria-label="Previous review"
              >
                <ChevronLeft className="size-5" />
              </button>
              <div className="flex gap-3">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveReview(i)}
                    className={`rounded-full transition-all duration-500 ${
                      i === activeReview
                        ? "w-10 h-2.5 bg-[#00C8D7]"
                        : "size-2.5 bg-[#00C8D7]/20 hover:bg-[#00C8D7]/50"
                    }`}
                    aria-label={`Review ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setActiveReview((p) => (p + 1) % reviews.length)}
                className="size-14 rounded-full bg-white border border-[#00C8D7]/20 shadow-premium flex items-center justify-center text-[#0A0F1E] hover:border-[#00C8D7] hover:bg-[#00C8D7] hover:text-white transition-all duration-300"
                aria-label="Next review"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          9. CONTACT — Editorial layout
      ═══════════════════════════════════════════ */}
      <section className="bg-white pt-20 pb-0 overflow-hidden relative border-t border-[#00C8D7]/10">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center mb-12">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="eyebrow text-[#00C8D7] mb-6 tracking-[0.3em]"
          >
            Find Us
          </motion.p>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="font-display text-5xl md:text-6xl text-[#0A0F1E] mb-8"
          >
            Come find your <em className="text-[#00C8D7] font-light">balance</em>
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-[1.1rem] text-[#5B6B70] font-light mb-14 flex items-center justify-center gap-3"
          >
            <MapPin className="size-5 text-[#00C8D7]" />
            Unit G3/3 Kintail Rd, Applecross WA 6153
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20"
          >
            <motion.a
              variants={fadeUp}
              href="https://wa.me/61000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-full bg-[#00C8D7] px-10 py-5 text-[0.75rem] font-bold uppercase tracking-[0.2em] text-white shadow-[0_10px_30px_rgba(0,200,215,0.4)] transition-all duration-300 hover:scale-[1.03] hover:bg-[#00b5c4]"
            >
              <MessageCircle className="size-5" />
              WhatsApp Us
            </motion.a>
            <motion.a
              variants={fadeUp}
              href="mailto:hello@n24pilates.com"
              className="group flex items-center gap-3 rounded-full border border-[#00C8D7]/30 bg-white px-10 py-5 text-[0.75rem] font-bold uppercase tracking-[0.2em] text-[#0A0F1E] transition-all duration-300 hover:border-[#00C8D7] hover:bg-[#F1FAFB] shadow-premium"
            >
              <Mail className="size-5 text-[#00C8D7]" />
              Email Us
            </motion.a>
          </motion.div>
        </div>

        {/* Map - Premium look with grayscale and slight opacity */}
        <div className="w-full h-[500px] relative bg-[#0A0F1E]">
          <iframe
            src="https://maps.google.com/maps?q=N24%20Pilates%20%26%20Wellness%20Studio%20Unit%20G3%2F3%20Kintail%20Rd%20Perth&t=&z=16&ie=UTF8&iwloc=&output=embed"
            className="absolute inset-0 w-full h-full opacity-90 mix-blend-luminosity"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute inset-0 bg-[#00C8D7]/5 pointer-events-none mix-blend-color" />
        </div>
      </section>
    </SiteLayout>
  );
}
