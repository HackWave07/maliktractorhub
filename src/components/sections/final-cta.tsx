"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { phoneLink, whatsappLink } from "@/lib/contact-links";
import { siteConfig } from "@/lib/site-config";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image substitute */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal via-brand-charcoal-soft to-black" />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-25" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 80% at 30% 50%, rgba(245,158,11,0.18), transparent 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-brand-yellow/10 blur-[160px]"
        aria-hidden
      />

      <Container className="relative py-24">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/30 bg-brand-yellow/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-yellow"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
              Workshop open today • 9 AM – 9 PM
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="h-heading mt-5 text-4xl leading-[0.95] text-white sm:text-5xl md:text-6xl text-balance"
            >
              Need Tractor Repair <span className="text-brand-yellow">or</span>{" "}
              Genuine Parts?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-4 max-w-2xl text-base text-white/70 sm:text-lg"
            >
              Send a WhatsApp message or call us directly. Get a quick
              diagnosis, transparent estimate and a turnaround time within
              minutes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-7 flex flex-col gap-3 sm:flex-row"
            >
              <Button asChild variant="whatsapp" size="xl" className="rounded-md">
                <a
                  href={whatsappLink(
                    "Hi Malik Tractor Hub, I need tractor repair / parts. Please assist.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
              <Button asChild variant="call" size="xl" className="rounded-md">
                <a href={phoneLink()}>
                  <Phone className="h-5 w-5" />
                  Call {siteConfig.phones.primary}
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="industrial-card relative">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-yellow">
                Workshop Address
              </p>
              <p className="mt-3 text-base font-semibold text-white">
                {siteConfig.name}
              </p>
              <p className="mt-2 text-sm text-white/65">
                {siteConfig.address.line1}, {siteConfig.address.line2}
                <br />
                {siteConfig.address.city}, {siteConfig.address.state} –{" "}
                {siteConfig.address.pincode}
              </p>
              <p className="mt-2 text-xs text-white/40">
                Landmark: {siteConfig.address.landmark}
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3 text-xs text-white/70">
                <div className="flex items-start gap-2">
                  <Clock className="mt-0.5 h-3.5 w-3.5 text-brand-yellow" />
                  <div>
                    <p className="font-semibold text-white">Hours</p>
                    <p>{siteConfig.hours.range}</p>
                    <p className="text-white/40">{siteConfig.hours.days}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 text-brand-yellow" />
                  <div>
                    <p className="font-semibold text-white">Service</p>
                    <p>{siteConfig.serviceAreas.join(" • ")}</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-yellow"
                >
                  Get directions <ArrowRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href={phoneLink()}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white/70 hover:text-brand-yellow"
                >
                  <Phone className="h-3.5 w-3.5" /> {siteConfig.phones.primary}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
