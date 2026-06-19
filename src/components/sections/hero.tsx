"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, ShieldCheck, Layers, BadgeCheck, Siren, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useTiltMouse } from "@/hooks/use-tilt-mouse";
import { phoneLink, whatsappLink } from "@/lib/contact-links";
import { trustBadges } from "@/lib/site-config";

const badgeIcons = {
  Shield: ShieldCheck,
  Layers,
  BadgeCheck,
  Siren,
} as const;

export function Hero() {
  useTiltMouse();
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-brand-charcoal-soft">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(245,158,11,0.16), transparent 70%), radial-gradient(50% 60% at 100% 100%, rgba(245,158,11,0.10), transparent 60%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-32 h-72 w-72 rounded-full bg-brand-yellow/10 blur-[120px]" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-brand-yellow/5 blur-[140px]" />
      </div>

      <Container className="relative grid items-center gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/30 bg-brand-yellow/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-yellow"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            Trusted Since 1996 • Noida • Ghaziabad
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="h-heading mt-6 text-[44px] leading-[0.95] text-white sm:text-6xl md:text-7xl lg:text-[88px]"
          >
            Complete{" "}
            <span className="relative inline-block text-brand-yellow text-shadow-yellow">
              Tractor
              <svg
                viewBox="0 0 200 8"
                className="absolute -bottom-2 left-0 h-2 w-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 0 100 4 T 200 5"
                  stroke="#F59E0B"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </span>{" "}
            Engine Rebuild
            <br className="hidden sm:block" /> &amp; Spare Parts Specialists
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-2xl text-base text-white/70 sm:text-lg"
          >
            From precision engine rebuilding and hydraulic overhauls to
            genuine multi-brand spare parts — Malik Tractor Hub keeps your
            machines running, season after season. Trusted by farmers,
            contractors and fleet owners across Delhi NCR.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild variant="whatsapp" size="lg" className="rounded-md">
              <a
                href={whatsappLink(
                  "Hi Malik Tractor Hub, I'd like a quote for my tractor.",
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Now
              </a>
            </Button>
            <Button asChild variant="call" size="lg" className="rounded-md">
              <a href={phoneLink()}>
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {trustBadges.map((b) => {
              const Icon = badgeIcons[b.icon as keyof typeof badgeIcons];
              return (
                <div
                  key={b.label}
                  className="group flex items-center gap-3 rounded-md border border-white/5 bg-white/[0.02] px-3 py-2.5 transition hover:border-brand-yellow/30"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-yellow/10 text-brand-yellow">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-white/75">
                    {b.label}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>

        <div className="lg:col-span-5">
          <HeroVisual />
        </div>
      </Container>

      <div className="relative h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="relative mx-auto w-full max-w-md lg:max-w-none"
    >
      <div
        data-tilt
        className="industrial-card relative aspect-square overflow-hidden p-8"
      >
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="noise" />

        {/* Big emblem */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h3 className="h-heading text-4xl leading-none text-white sm:text-[42px] md:text-[44px]">
            MALIK
          </h3>
          <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.44em] text-white/60 sm:text-xs">
            Tractor Hub
          </p>
          <div className="mt-7 h-px w-24 bg-brand-yellow" />
          <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.34em] text-brand-yellow sm:text-[11px]">
            Parts • Service • Solutions
          </p>
          <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.36em] text-white/55 sm:text-[11px]">
            Est. 1996
          </p>
        </div>

        {/* Corner ticks */}
        <span className="absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2 border-brand-yellow" />
        <span className="absolute right-3 top-3 h-5 w-5 border-r-2 border-t-2 border-brand-yellow" />
        <span className="absolute bottom-3 left-3 h-5 w-5 border-b-2 border-l-2 border-brand-yellow" />
        <span className="absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2 border-brand-yellow" />
      </div>

      {/* Floating chips */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute -left-4 top-8 hidden rounded-md border border-white/10 bg-brand-charcoal/90 px-3 py-2 text-xs shadow-xl backdrop-blur sm:flex sm:items-center sm:gap-2"
      >
        <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
        Workshop open
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute -right-4 bottom-10 hidden rounded-md border border-white/10 bg-brand-charcoal/90 px-3 py-2 text-xs shadow-xl backdrop-blur sm:flex sm:items-center sm:gap-2"
      >
        <span className="text-brand-yellow">★</span> 4.9 / 5 by 300+ owners
      </motion.div>
    </motion.div>
  );
}
