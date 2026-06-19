"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as = "h2",
}: SectionHeadingProps) {
  const Tag = as;
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-yellow/30 bg-brand-yellow/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-yellow"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
          {eyebrow}
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, delay: 0.05 }}
      >
        <Tag className="h-heading text-4xl leading-[0.95] text-white sm:text-5xl md:text-6xl text-balance">
          {title}
        </Tag>
      </motion.div>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mt-5 max-w-2xl text-base text-white/65 sm:text-lg"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
