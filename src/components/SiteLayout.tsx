import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

/** Interior page hero — light, airy, editorial */
export function PageHero({
  eyebrow,
  title,
  accent,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  subtitle?: string;
}) {
  return (
    <section
      className="relative overflow-hidden pb-12 pt-32 sm:pb-16 sm:pt-40 md:pb-20 md:pt-48 lg:pb-28 lg:pt-56"
      style={{ background: "linear-gradient(150deg, #E6F5F7 0%, #F8FBFC 55%, #D9EFF2 100%)" }}
    >
      {/* Soft teal glows */}
      <div className="pointer-events-none absolute -right-32 top-0 size-[300px] sm:size-[500px] rounded-full bg-[#00C8D7]/15 blur-[130px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 size-[250px] sm:size-[400px] rounded-full bg-[#00AFC2]/10 blur-[110px]" />

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, #00C8D7 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00C8D7]/35 to-transparent" />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-6 text-center">
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="h-px w-8 sm:w-12 bg-[#00C8D7]/50" />
          <p className="eyebrow text-[#00AFC2]">{eyebrow}</p>
          <div className="h-px w-8 sm:w-12 bg-[#00C8D7]/50" />
        </div>

        <h1 className="font-display text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] leading-[1.0] text-[#0C1A2E]">
          {title}
          {accent && (
            <span className="italic text-[#00B5C4]"> {accent}</span>
          )}
        </h1>

        {subtitle && (
          <p className="mx-auto mt-5 sm:mt-8 max-w-xs sm:max-w-sm md:max-w-xl text-[0.9rem] sm:text-[1rem] leading-relaxed text-[#4A606A] font-light px-2 sm:px-0">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
