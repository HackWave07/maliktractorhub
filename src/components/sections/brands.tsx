"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { brands } from "@/lib/site-config";

export function Brands() {
  return (
    <section className="relative section bg-brand-charcoal-soft">
      <Container>
        <SectionHeading
          eyebrow="Brands We Support"
          title="Multi-Brand Workshop"
          description="We service, repair and supply parts for the most popular tractor brands in India — all under one roof."
          align="center"
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {brands.map((brand, i) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="group flex aspect-[4/3] items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] p-4 text-center transition-all duration-500 hover:border-brand-yellow/40 hover:bg-white/[0.04]"
            >
              <div>
                <p className="h-heading text-2xl text-white/85 transition group-hover:text-brand-yellow">
                  {brand}
                </p>
                <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.3em] text-white/30">
                  Supported
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
