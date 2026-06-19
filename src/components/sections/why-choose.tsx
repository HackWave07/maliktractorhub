"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Wrench,
  BadgeCheck,
  Layers,
  Cog,
  Award,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Since 1996",
    desc: "Almost three decades of hands-on experience with every tractor brand on Indian soil.",
  },
  {
    icon: Wrench,
    title: "Expert Mechanics",
    desc: "Certified technicians trained on both legacy and modern electronically controlled tractors.",
  },
  {
    icon: BadgeCheck,
    title: "Genuine Parts",
    desc: "OEM-grade spares only — no local substitutes. We put it in writing on every job card.",
  },
  {
    icon: Layers,
    title: "Multi-Brand Support",
    desc: "Mahindra, Swaraj, Sonalika, John Deere, New Holland, Massey Ferguson, Escorts and more.",
  },
  {
    icon: Cog,
    title: "Engine Specialists",
    desc: "In-house machining, line boring, crank grinding and cylinder head reconditioning.",
  },
  {
    icon: Award,
    title: "Trusted Across NCR",
    desc: "Hundreds of repeat customers and fleet operators across Noida, Ghaziabad and Delhi NCR.",
  },
];

export function WhyChoose() {
  return (
    <section className="relative section bg-brand-charcoal-soft">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />
      <Container className="relative">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Why Choose Us"
              title="The Workshop Farmers & Fleet Owners Trust"
              description="We don't just fix tractors — we extend their working life. Every job is backed by clear estimates, genuine parts and a workmanship guarantee."
            />

            <div className="mt-8 inline-flex items-center gap-3 rounded-md border border-brand-yellow/30 bg-brand-yellow/5 px-4 py-3 text-sm text-white/80">
              <Award className="h-5 w-5 text-brand-yellow" />
              <p>
                <span className="font-semibold text-white">28+ years</span> of
                unbroken service in the same community
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="industrial-card"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-md border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow">
                    <r.icon className="h-5 w-5" />
                  </span>
                  <h3 className="h-heading mt-4 text-xl text-white">
                    {r.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                    {r.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
