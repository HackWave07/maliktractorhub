"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { useCountUp } from "@/hooks/use-count-up";
import { stats } from "@/lib/site-config";
import { Container } from "@/components/ui/container";

export function Stats() {
  return (
    <section className="relative border-y border-white/5 bg-brand-charcoal py-16">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <StatItem key={s.label} stat={s} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function StatItem({
  stat,
  index,
}: {
  stat: { value: number; suffix: string; label: string };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { inView } = useInView<HTMLDivElement>(0.3);
  const value = useCountUp(stat.value, 1600, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-6"
    >
      <span className="absolute right-4 top-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-yellow/70">
        0{index + 1}
      </span>
      <p className="h-heading text-5xl text-white sm:text-6xl">
        {value}
        <span className="text-brand-yellow">{stat.suffix}</span>
      </p>
      <p className="mt-2 text-sm font-medium uppercase tracking-wider text-white/60">
        {stat.label}
      </p>
      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-brand-yellow transition-all duration-700 group-hover:w-full" />
    </motion.div>
  );
}
