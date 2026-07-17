import { cn } from "@/lib/utils";
import logoImg from "@/assets/N24_New_color_logo-removebg-preview.png";
import Image from "next/image";

export function Logo({ className, isDark = false }: { className?: string; isDark?: boolean }) {
  return (
    <span className={cn("inline-flex items-center select-none", className)}>
      <Image
        src={logoImg}
        alt="N24 Pilates Studio"
        height={56}
        width={160}
        className={cn(
          "h-14 w-auto object-contain transition-all duration-500 origin-left",
          isDark
            ? "brightness-0 invert drop-shadow-[0_0_12px_rgba(0,200,215,0.5)]"
            : "drop-shadow-sm",
        )}
        priority
      />
    </span>
  );
}
