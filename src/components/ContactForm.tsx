"use client";

import { useState } from "react";
import { BrandButton } from "@/components/BrandButton";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="mt-8 rounded-2xl bg-primary/10 p-6 text-center text-primary">
        Thank you — we'll be in touch shortly.
      </div>
    );
  }

  return (
    <form
      className="mt-6 space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          required
          placeholder="First name"
          className="h-12 w-full rounded-full border border-[#00C8D7]/25 bg-white px-5 text-sm text-[#111827] placeholder:text-[#9CA3AF] outline-none focus:border-[#00C8D7] focus:ring-2 focus:ring-[#00C8D7]/15 transition-all"
        />
        <input
          required
          placeholder="Last name"
          className="h-12 w-full rounded-full border border-[#00C8D7]/25 bg-white px-5 text-sm text-[#111827] placeholder:text-[#9CA3AF] outline-none focus:border-[#00C8D7] focus:ring-2 focus:ring-[#00C8D7]/15 transition-all"
        />
      </div>
      <input
        required
        type="email"
        placeholder="Email address"
        className="h-12 w-full rounded-full border border-[#00C8D7]/25 bg-white px-5 text-sm text-[#111827] placeholder:text-[#9CA3AF] outline-none focus:border-[#00C8D7] focus:ring-2 focus:ring-[#00C8D7]/15 transition-all"
      />
      <input
        placeholder="Phone (optional)"
        className="h-12 w-full rounded-full border border-[#00C8D7]/25 bg-white px-5 text-sm text-[#111827] placeholder:text-[#9CA3AF] outline-none focus:border-[#00C8D7] focus:ring-2 focus:ring-[#00C8D7]/15 transition-all"
      />
      <textarea
        required
        rows={5}
        placeholder="How can we help?"
        className="w-full rounded-3xl border border-[#00C8D7]/25 bg-white px-5 py-4 text-sm text-[#111827] placeholder:text-[#9CA3AF] outline-none focus:border-[#00C8D7] focus:ring-2 focus:ring-[#00C8D7]/15 transition-all"
      />
      <BrandButton type="submit" size="md" className="w-full">
        Send Message
      </BrandButton>
    </form>
  );
}
