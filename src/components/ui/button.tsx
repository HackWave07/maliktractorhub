import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-heading uppercase tracking-wider transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow/60 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-charcoal-soft [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-brand-yellow text-brand-charcoal hover:bg-brand-yellow-light hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.6)] hover:-translate-y-0.5",
        outline:
          "border border-white/15 bg-white/[0.02] text-white hover:border-brand-yellow/60 hover:bg-white/[0.06] hover:-translate-y-0.5",
        ghost:
          "text-white/80 hover:text-brand-yellow hover:bg-white/[0.04]",
        whatsapp:
          "bg-[#25D366] text-white hover:bg-[#1DA851] hover:shadow-[0_0_30px_-5px_rgba(37,211,102,0.6)] hover:-translate-y-0.5",
        call:
          "bg-brand-charcoal text-white border border-white/10 hover:border-brand-yellow/60 hover:text-brand-yellow hover:-translate-y-0.5",
        link:
          "text-brand-yellow underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-10 px-4 text-sm",
        md: "h-12 px-6 text-base",
        lg: "h-14 px-8 text-lg",
        xl: "h-16 px-10 text-xl",
        icon: "h-12 w-12",
      },
      shape: {
        default: "rounded-md",
        pill: "rounded-full",
        clip:
          "rounded-none [clip-path:polygon(0_0,100%_0,100%_65%,90%_100%,0_100%)]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      shape: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, shape, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, shape, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
