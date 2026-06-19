"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLMotionProps<"section"> {
  children: React.ReactNode;
  container?: boolean;
}

export function Section({
  children,
  className,
  container = true,
  ...props
}: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn("relative", className)}
      {...props}
    >
      {container ? <div className="container-x">{children}</div> : children}
    </motion.section>
  );
}
