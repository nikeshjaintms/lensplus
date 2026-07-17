import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import { cn } from "@/lib/utils";

const brandButton = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-body font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap",
  {
    variants: {
      variant: {
        primary:
          "brand-gradient text-white shadow-soft hover:!bg-none hover:!bg-white hover:!text-[#00AFC2] hover:shadow-premium hover:-translate-y-1 transition-all duration-300",
        outline: "border border-primary/40 text-foreground hover:border-primary hover:bg-primary/5",
        ghost: "text-foreground hover:bg-primary/5",
        light: "bg-background text-foreground shadow-soft hover:-translate-y-0.5",
      },
      size: {
        sm: "h-10 px-5 text-xs tracking-[0.12em] uppercase",
        md: "h-12 px-7 text-xs tracking-[0.14em] uppercase",
        lg: "h-14 px-9 text-sm tracking-[0.14em] uppercase",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface BrandButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof brandButton> {
  asChild?: boolean;
}

export const BrandButton = React.forwardRef<HTMLButtonElement, BrandButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp ref={ref} className={cn(brandButton({ variant, size }), className)} {...props} />;
  },
);
BrandButton.displayName = "BrandButton";
