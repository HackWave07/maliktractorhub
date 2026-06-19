"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/lib/site-config";

export function Testimonials() {
  return (
    <section className="relative section">
      <Container>
        <SectionHeading
          eyebrow="What Customers Say"
          title="Real Feedback from the Field"
          description="Farmers, contractors and fleet owners across Noida, Ghaziabad and Delhi NCR trust us with their machines."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="industrial-card relative"
            >
              <Quote className="absolute right-4 top-4 h-7 w-7 text-brand-yellow/15" />
              <div className="flex items-center gap-1 text-brand-yellow">
                {Array.from({ length: t.rating }).map((_, k) => (
                  <Star key={k} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/75">
                "{t.quote}"
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-yellow/10 text-sm font-bold text-brand-yellow">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-[11px] uppercase tracking-wider text-white/45">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
