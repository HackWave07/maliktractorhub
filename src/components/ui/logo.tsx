import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "default" | "compact" | "mono-light" | "mono-dark";
  showText?: boolean;
}

export function Logo({
  className,
  variant = "default",
  showText = true,
}: LogoProps) {
  const isMonoLight = variant === "mono-light";
  const isMonoDark = variant === "mono-dark";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 shrink-0">
        <Image
          src="/assets/logo/logo.png"
          alt="Malik Tractor Hub logo"
          fill
          priority
          quality={90}
          sizes="(min-width: 1024px) 64px, (min-width: 768px) 56px, 40px"
          className="object-contain"
        />
      </div>
      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className={cn(
              "h-heading text-2xl tracking-[0.04em]",
              isMonoLight ? "text-brand-charcoal" : "text-white",
            )}
          >
            MALIK
          </span>
          <span
            className={cn(
              "text-[10px] font-semibold uppercase tracking-[0.32em]",
              isMonoLight ? "text-brand-charcoal/70" : "text-white/55",
            )}
          >
            Tractor Hub
          </span>
        </div>
      )}
    </div>
  );
}

export function BrandMark({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "compact" | "mono-light" | "mono-dark";
}) {
  const primary = variant === "mono-light" ? "#111827" : "#F59E0B";
  const ring = variant === "mono-light" ? "#111827" : "#F59E0B";
  const text = variant === "mono-light" ? "#111827" : "#0B0F19";
  const accent = variant === "mono-light" ? "#111827" : "#F59E0B";

  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 shrink-0", className)}
      aria-hidden="true"
    >
      {/* Hexagonal industrial emblem */}
      <defs>
        <linearGradient id="brandGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={ring} stopOpacity="1" />
          <stop offset="100%" stopColor={ring} stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <path
        d="M32 2 L58 16 L58 48 L32 62 L6 48 L6 16 Z"
        fill="none"
        stroke={ring}
        strokeWidth="2.5"
      />
      <path
        d="M32 8 L52 19 L52 45 L32 56 L12 45 L12 19 Z"
        fill="none"
        stroke={ring}
        strokeOpacity="0.35"
        strokeWidth="1"
      />
      {/* Tractor silhouette */}
      <g transform="translate(14 18)">
        <rect
          x="2"
          y="10"
          width="20"
          height="12"
          rx="1.5"
          fill={primary}
        />
        <rect x="14" y="4" width="10" height="8" rx="1" fill={primary} />
        <circle cx="9" cy="24" r="5" fill={text} />
        <circle cx="9" cy="24" r="2.5" fill={primary} />
        <circle cx="26" cy="24" r="6.5" fill={text} />
        <circle cx="26" cy="24" r="3" fill={primary} />
      </g>
      {/* ESTD line */}
      <text
        x="32"
        y="50"
        textAnchor="middle"
        fontFamily="Montserrat, system-ui, sans-serif"
        fontSize="5"
        fontWeight="700"
        letterSpacing="0.18em"
        fill={accent}
      >
        EST. 1996
      </text>
    </svg>
  );
}
