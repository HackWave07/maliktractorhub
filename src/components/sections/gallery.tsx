"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

const images = [
  { id: 1, alt: "Engine rebuild on workshop bench", tag: "Workshop" },
  { id: 2, alt: "Tractor hydraulic repair", tag: "Hydraulic" },
  { id: 3, alt: "Engine block being machined", tag: "Machining" },
  { id: 4, alt: "Genuine spare parts stocked", tag: "Parts" },
  { id: 5, alt: "Electrical diagnostics", tag: "Electrical" },
  { id: 6, alt: "Tractor clutch replacement", tag: "Clutch" },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative section bg-brand-charcoal-soft">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Gallery"
            title="Inside the Workshop"
            description="A glimpse of our facility, ongoing jobs and finished work. Tap any image to view larger."
          />
          <Button asChild variant="outline" size="md" className="rounded-md">
            <Link href="/gallery">
              View full gallery
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3">
          {images.map((img, i) => (
            <motion.button
              key={img.id}
              type="button"
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-brand-charcoal-light to-brand-charcoal-soft"
              aria-label={img.alt}
            >
              {/* Placeholder visual since assets aren't available */}
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="h-heading text-3xl text-white/20">
                    0{img.id}
                  </p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
                    {img.tag}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal-soft via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-3">
                <span className="rounded-md border border-white/10 bg-brand-charcoal-soft/80 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/80 backdrop-blur">
                  {img.tag}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-white/40">
                  Tap to view
                </span>
              </div>
              <span className="pointer-events-none absolute inset-0 bg-brand-yellow/0 transition group-hover:bg-brand-yellow/5" />
            </motion.button>
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative aspect-square w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-brand-charcoal"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <p className="h-heading text-9xl text-white/10">
                    0{images[active].id}
                  </p>
                  <p className="mt-4 text-sm uppercase tracking-[0.3em] text-white/60">
                    {images[active].tag}
                  </p>
                  <p className="mt-2 text-xs text-white/40">
                    Image will be replaced with workshop photography
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-brand-charcoal-soft/80 text-white backdrop-blur"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
