"use client";

import { motion } from "framer-motion";
import {
  Cog,
  Droplets,
  Filter,
  Disc3,
  CircleDot,
  Zap,
  Box,
  ArrowRight,
  MessageCircle,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { partsCategories } from "@/lib/site-config";
import { whatsappLink } from "@/lib/contact-links";

const iconMap: Record<string, LucideIcon> = {
  Cog,
  Droplets,
  Filter,
  Disc3,
  CircleDot,
  Zap,
  Cogs: Cog,
  Box,
};

export function PartsCategories() {
  return (
    <section className="relative section">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Spare Parts"
            title="Ready Stock Across Every Category"
            description="Genuine and OEM-equivalent parts for all major tractor brands — engine, transmission, hydraulic, electrical and consumables."
          />
          <Button asChild variant="outline" size="md" className="rounded-md">
            <Link href="/spare-parts">
              Browse all categories
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {partsCategories.map((c, i) => {
            const Icon = iconMap[c.icon] ?? Cog;
            return (
              <motion.div
                key={c.slug}
                id={c.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-5 transition-all duration-500 hover:border-brand-yellow/40"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] text-brand-yellow transition group-hover:scale-110 group-hover:border-brand-yellow/40">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/30">
                    CAT
                  </span>
                </div>
                <h3 className="h-heading mt-5 text-xl text-white">
                  {c.title}
                </h3>
                <p className="mt-1.5 text-sm text-white/55">{c.description}</p>

                <a
                  href={whatsappLink(
                    `Hi, I need parts from the ${c.title} category.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-yellow"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  Inquire on WhatsApp
                </a>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
