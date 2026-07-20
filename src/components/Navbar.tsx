"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", to: "/" },
  { label: "Classes", to: "/classes" },
  { label: "Saunas", to: "/infrared-saunas" },
  { label: "Pricing", to: "/pricing" },
  { label: "About", to: "/about" },
  { label: "FAQ", to: "/faqs" },
  { label: "Challenge", to: "/challenge-pass" },
  { label: "Contact", to: "/contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);

  const isDark = isHome && !scrolled;

  return (
    <>
      <header
        className={twMerge(
          "fixed z-50 transition-all duration-500 w-full lg:w-[94%] lg:max-w-7xl lg:left-1/2 lg:-translate-x-1/2 lg:top-5 lg:rounded-full",
          scrolled
            ? "bg-white/70 py-2 lg:py-3 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-2xl top-0 border border-white/40 lg:border"
            : isHome
              ? "bg-transparent py-3 lg:py-5 top-0 border border-transparent"
              : "bg-white/80 py-2 lg:py-4 shadow-md backdrop-blur-lg top-0 border border-white/40 lg:border",
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-10">
          <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <Logo isDark={isDark} />
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-4 lg:flex xl:gap-7">
            {links.map((l) => {
              const isActive = l.to === "/" ? pathname === "/" : pathname?.startsWith(l.to);
              return (
                <Link
                  key={l.to}
                  href={l.to}
                  className={clsx(
                    "group relative whitespace-nowrap text-[0.7rem] font-semibold uppercase tracking-[0.16em] transition-colors duration-300 py-1",
                    isActive
                      ? "text-[#00C8D7]"
                      : isDark
                        ? "text-white/80 hover:text-white"
                        : "text-[#5B6B70] hover:text-[#00C8D7]",
                  )}
                >
                  {l.label}
                  <span className={clsx(
                    "absolute -bottom-1 left-0 h-[2px] bg-[#00C8D7] rounded-full transition-all duration-300",
                    isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                  )} />
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/schedule"
              className="rounded-full px-7 py-3 text-[0.7rem] font-bold uppercase tracking-[0.18em] transition-all duration-300 hover:-translate-y-0.5 bg-[#00C8D7] text-white shadow-[0_0_15px_rgba(0,200,215,0.4)] hover:shadow-[0_0_25px_rgba(0,200,215,0.6)] hover:bg-[#00b5c4]"
            >
              Book a Class
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className={clsx(
              "lg:hidden p-2 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C8D7]",
              isDark ? "text-white" : "text-[#1E2E32]",
            )}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="block"
                >
                  <X className="size-6" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="block"
                >
                  <Menu className="size-6" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </header>

      {/* Mobile full-screen overlay menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />

            {/* Slide-in panel from top */}
            <motion.div
              key="panel"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-0 top-0 z-50 lg:hidden"
            >
              <div className="mx-3 mt-3 rounded-[1.75rem] border border-white/30 bg-white/98 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] overflow-hidden">
                {/* Header row */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-[#00C8D7]/10">
                  <Link href="/" onClick={() => setOpen(false)}>
                    <Logo isDark={false} />
                  </Link>
                  <button
                    onClick={() => setOpen(false)}
                    className="flex size-9 items-center justify-center rounded-full bg-[#00C8D7]/10 text-[#00C8D7] hover:bg-[#00C8D7] hover:text-white transition-all duration-200"
                    aria-label="Close menu"
                  >
                    <X className="size-5" />
                  </button>
                </div>

                {/* Nav links */}
                <nav className="px-4 py-4">
                  <div className="grid grid-cols-2 gap-2">
                    {links.map((l, i) => {
                      const isActive = l.to === "/" ? pathname === "/" : pathname?.startsWith(l.to);
                      return (
                        <motion.div
                          key={l.to}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.04, duration: 0.3 }}
                        >
                          <Link
                            href={l.to}
                            onClick={() => setOpen(false)}
                            className={clsx(
                              "flex items-center justify-center rounded-2xl px-4 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] transition-all duration-200",
                              isActive
                                ? "bg-[#00C8D7] text-white shadow-[0_4px_12px_rgba(0,200,215,0.35)]"
                                : "bg-[#F0F8F9] text-[#4A606A] hover:bg-[#00C8D7]/10 hover:text-[#00C8D7]",
                            )}
                          >
                            {l.label}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </nav>

                {/* CTA */}
                <div className="px-4 pb-5">
                  <Link
                    href="/schedule"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center w-full rounded-full bg-[#00C8D7] py-4 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-white shadow-[0_6px_20px_rgba(0,200,215,0.4)] hover:bg-[#00b5c4] transition-all"
                  >
                    Book a Class
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
