import type { Metadata } from "next";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import {
  specialOffers,
  weeklyMemberships,
  pilatesSessionPacks,
  infraredSaunaPacks,
} from "@/data/studio";
import { Check } from "lucide-react";
import { clsx } from "clsx";

export const metadata: Metadata = {
  title: "Pricing & Memberships — N24 Pilates Studio",
  description:
    "Flexible class packs and memberships at N24 Pilates Studio. Explore our special offers, weekly memberships, session packs, and infrared sauna options.",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function PricingCard({ plan, index = 0 }: { plan: any; index?: number }) {
  const accent = "#00AFC2";
  const textMain = "text-[#0C1A2E] group-hover:text-white";
  const textSub = "text-[#4A606A] group-hover:text-white/90";
  const bg = "bg-white hover:bg-[#00AFC2]";

  return (
    <div
      className={clsx(
        "group relative flex flex-col h-full overflow-hidden rounded-[28px] transition-all duration-500 hover:-translate-y-2",
        bg,
        "shadow-soft border border-[#DDEAF2] hover:shadow-premium hover:border-transparent",
      )}
    >
      {/* Top accent bar */}
      <div
        className="h-[3px] w-full flex-shrink-0 group-hover:opacity-0 transition-opacity"
        style={{ background: `linear-gradient(90deg, ${accent}, transparent 70%)` }}
      />

      {/* Soft glow */}
      <div
        className="pointer-events-none absolute -top-16 -right-16 size-44 rounded-full opacity-[0.18] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.4]"
        style={{ background: accent }}
      />

      {/* Corner pattern */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 size-28 opacity-[0.06] group-hover:opacity-0 transition-opacity"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, ${accent} 0, ${accent} 1px, transparent 0, transparent 50%)`,
          backgroundSize: "10px 10px",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-8 -right-8 size-32 rounded-full border-[1.5px] opacity-[0.15] group-hover:border-white/30 transition-colors"
        style={{ borderColor: accent }}
      />

      <div className="relative z-10 flex flex-1 flex-col p-8 pt-7">
        {/* Plan name */}
        <h3
          className={clsx(
            "text-[0.7rem] font-bold uppercase tracking-[0.2em] transition-colors",
            textSub,
          )}
        >
          {plan.name}
        </h3>

        {/* Price */}
        {plan.price ? (
          <div className="mt-3 flex items-end gap-2 flex-wrap">
            <span
              className={clsx(
                "font-display text-5xl font-bold leading-none transition-colors",
                textMain,
              )}
            >
              {plan.price}
            </span>
            {plan.unit && (
              <span className="mb-1 text-[0.6rem] font-bold uppercase tracking-widest text-[#00AFC2] group-hover:text-white transition-colors">
                {plan.unit}
              </span>
            )}
          </div>
        ) : (
          <div
            className={clsx(
              "mt-4 text-[1.5rem] font-display font-bold transition-colors",
              textMain,
            )}
          >
            Give Wellness
          </div>
        )}

        {/* Save badge */}
        {plan.saveBadge && (
          <span
            className="mt-3 self-start rounded-full px-3 py-1 text-[0.58rem] font-bold uppercase tracking-widest border transition-colors group-hover:border-white/30 group-hover:bg-white/20 group-hover:text-white"
            style={{ color: accent, borderColor: `${accent}50`, background: `${accent}15` }}
          >
            {plan.saveBadge}
          </span>
        )}

        {/* Original / discounted */}
        {plan.originalPrice && (
          <div className="mt-2 flex items-center gap-2 text-[0.78rem]">
            <span className={clsx("line-through opacity-40 transition-colors", textSub)}>
              {plan.originalPrice}
            </span>
            {plan.discountedPrice && (
              <span className="font-semibold text-[#00AFC2] group-hover:text-white transition-colors">
                {plan.discountedPrice}
              </span>
            )}
          </div>
        )}

        {/* Divider */}
        <div
          className="my-6 h-px w-full transition-colors group-hover:bg-white/20"
          style={{ background: `linear-gradient(90deg, ${accent}40, transparent)` }}
        />

        {/* Description */}
        {plan.description && (
          <p
            className={clsx(
              "mb-5 text-[0.875rem] leading-relaxed font-light transition-colors",
              textSub,
            )}
          >
            {plan.description}
          </p>
        )}

        {/* Features */}
        <ul className="flex-1 space-y-3">
          {plan.features.map((f: string) => (
            <li key={f} className="flex items-start gap-3">
              <span
                className="mt-0.5 flex-shrink-0 size-[1.15rem] rounded-full flex items-center justify-center transition-colors group-hover:bg-white/20"
                style={{ background: `${accent}22` }}
              >
                <Check className="size-2.5 text-[#00AFC2] group-hover:text-white transition-colors" />
              </span>
              <span
                className={clsx(
                  "text-[0.85rem] leading-relaxed font-light transition-colors",
                  textSub,
                )}
              >
                {f}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={
            plan.url ||
            "https://cart.mindbodyonline.com/sites/129220/cart?link_type=contract&source=buy_now_link"
          }
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex items-center justify-center gap-2 rounded-full py-3.5 px-6 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:scale-[1.03] active:scale-100 brand-gradient shadow-soft group-hover:!bg-none group-hover:!bg-white group-hover:!text-[#00AFC2] group-hover:shadow-premium"
        >
          {plan.buttonText || "Buy Now"}
          <svg
            className="size-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

/* ── Section wrapper — alternating white / very-light-teal ── */
function Section({
  title,
  subtitle,
  children,
  alt = false,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  alt?: boolean;
}) {
  return (
    <div className={alt ? "py-24 bg-[#F1FAFB]" : "py-24 bg-white"}>
      <section className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.25em] mb-3 text-[#00AFC2]">
              Pricing
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight text-[#0C1A2E]">
              {title}
            </h2>
          </div>
          <p className="text-[0.95rem] font-light max-w-xs text-right hidden sm:block text-[#4A606A]">
            {subtitle}
          </p>
        </div>
        {children}
      </section>
    </div>
  );
}

/* ── Page ── */
export default function Pricing() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Pricing & Memberships"
        title="Invest in"
        accent="yourself."
        subtitle="Flexible options to suit your rhythm — whether you're dropping in, committing to a weekly routine, or relaxing in our infrared sauna."
      />

      <Section title="Special Offers" subtitle="Limited-time deals to kickstart your journey.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {specialOffers.map((p, i) => (
            <PricingCard key={p.name} plan={p} index={i} />
          ))}
        </div>
      </Section>

      <Section
        title="Weekly Memberships"
        subtitle="Commit to your wellness with a flexible weekly plan."
        alt
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {weeklyMemberships.map((p, i) => (
            <PricingCard key={p.name} plan={p} index={i} />
          ))}
        </div>
      </Section>

      <Section title="Pilates Session Packs" subtitle="Flexibility without a weekly commitment.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pilatesSessionPacks.map((p, i) => (
            <PricingCard key={p.name} plan={p} index={i} />
          ))}
        </div>
      </Section>

      <Section
        title="Infrared Sauna Packs"
        subtitle="Relax, recover, and rejuvenate with heat therapy."
        alt
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {infraredSaunaPacks.map((p, i) => (
            <PricingCard key={p.name} plan={p} index={i} />
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}
