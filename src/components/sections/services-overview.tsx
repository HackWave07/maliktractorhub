"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Cog,
  Wrench,
  ClipboardCheck,
  Settings2,
  Zap,
  Package,
  Flame,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/lib/site-config";
import { useTiltMouse } from "@/hooks/use-tilt-mouse";

const iconMap: Record<string, LucideIcon> = {
  Cog,
  Wrench,
  ClipboardCheck,
  Settings2,
  Zap,
  Package,
  Flame,
  Cogs: Cog,
};

const serviceImages: Record<string, string> = {
  "engine-rebuilding": "/assets/industrial-grade-section/engine-rebuilding.png",
  "tractor-repair": "/assets/industrial-grade-section/tractor-repair.png",
  maintenance: "/assets/industrial-grade-section/maintenance-service.png",
  "hydraulic-repair": "/assets/industrial-grade-section/hydraulic-repair.png",
  "electrical-repair": "/assets/industrial-grade-section/electrical-repair.png",
  "spare-parts": "/assets/industrial-grade-section/spare-part-supply.png",
  "welding-fabrication": "/assets/industrial-grade-section/welding&fabrication.png",
  "clutch-transmission": "/assets/industrial-grade-section/clutch&transmission.png",
};

export function ServicesOverview() {
  useTiltMouse();
  return (
    <section className="relative section">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What We Do"
            title="Industrial-Grade Tractor Services"
            description="Eight core services covering the full life of your tractor — from a single bearing replacement to a complete engine rebuild."
          />
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-yellow"
          >
            View all services
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon] ?? Cog;
            return (
              <motion.div
                key={s.slug}
                data-tilt
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Link
                  href={`/services#${s.slug}`}
                  className="industrial-card service-card-premium group flex h-full flex-col"
                >
                  <Image
                    src={serviceImages[s.slug]}
                    alt={`${s.title} service background`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="z-0 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 z-[1] bg-black/65" />
                  <div className="service-card-image-glow absolute inset-0 z-[2] pointer-events-none" />

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-center justify-between">
                      <div className="relative">
                        <div className="absolute inset-0 -z-0 rounded-md bg-white/10 blur-xl opacity-0 transition group-hover:opacity-100" />
                        <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-md border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow transition group-hover:scale-110">
                          <Icon className="h-5 w-5" />
                        </span>
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/30">
                        0{i + 1}
                      </span>
                    </div>

                    <h3 className="h-heading mt-5 text-2xl text-white">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      {s.short}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-yellow">
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
