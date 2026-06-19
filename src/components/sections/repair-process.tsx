"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { repairProcess } from "@/lib/site-config";

export function RepairProcess() {
  return (
    <section className="relative section">
      <Container>
        <SectionHeading
          eyebrow="Our Process"
          title="From Inspection to Delivery"
          description="A transparent, documented process — so you know exactly what's happening with your tractor at every step."
        />

        <div className="relative mt-14">
          {/* Horizontal line on desktop */}
          <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block" />

          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
            {repairProcess.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative"
              >
                <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-md border border-brand-yellow/40 bg-brand-charcoal-soft">
                      <span className="h-heading text-2xl text-brand-yellow">
                        {step.step}
                      </span>
                    </div>
                    <CheckCircle2 className="absolute -right-1 -top-1 h-4 w-4 text-brand-yellow opacity-0 transition group-hover:opacity-100" />
                  </div>
                  <div className="lg:mt-4">
                    <h3 className="h-heading text-2xl text-white">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
