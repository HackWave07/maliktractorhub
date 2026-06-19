"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { phoneLink, whatsappLink } from "@/lib/contact-links";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
}: {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumb?: { href?: string; label: string }[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-brand-charcoal-soft">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-25" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 60% at 20% 0%, rgba(245,158,11,0.16), transparent 70%)",
        }}
      />

      <Container className="relative py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/30 bg-brand-yellow/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-yellow"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
          {eyebrow}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="h-heading mt-5 text-4xl leading-[0.95] text-white sm:text-5xl md:text-6xl lg:text-7xl text-balance"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mt-5 max-w-3xl text-base text-white/70 sm:text-lg"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <Button asChild variant="whatsapp" size="lg" className="rounded-md">
            <a
              href={whatsappLink("Hi Malik Tractor Hub, I need more information.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
          </Button>
          <Button asChild variant="call" size="lg" className="rounded-md">
            <a href={phoneLink()}>
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
