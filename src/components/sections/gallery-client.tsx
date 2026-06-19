"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type GalleryItem = {
  id: number;
  type: "image" | "video";
  tag: string;
  title: string;
  category: string;
};

export function GalleryClient({
  items,
  categories,
}: {
  items: GalleryItem[];
  categories: string[];
}) {
  const [active, setActive] = useState<string>("All");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered =
    active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <section className="section">
      <Container>
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={cn(
                "h-10 rounded-md border px-4 text-xs font-semibold uppercase tracking-wider transition",
                active === c
                  ? "border-brand-yellow bg-brand-yellow text-brand-charcoal"
                  : "border-white/10 bg-white/[0.02] text-white/70 hover:border-brand-yellow/40 hover:text-white",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((item, i) => (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => setLightbox(item)}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
              className="group relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-brand-charcoal-light to-brand-charcoal-soft"
              aria-label={item.title}
            >
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span
                  className={cn(
                    "h-heading text-3xl",
                    item.type === "video"
                      ? "text-brand-yellow"
                      : "text-white/20",
                  )}
                >
                  {item.tag}
                </span>
                {item.type === "video" && (
                  <span className="mt-1 flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-brand-yellow">
                    <Play className="h-3 w-3 fill-current" /> Video
                  </span>
                )}
              </div>

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-charcoal-soft via-brand-charcoal-soft/60 to-transparent p-3 text-left">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-yellow">
                  {item.category}
                </p>
                <p className="mt-0.5 text-xs font-medium text-white/85">
                  {item.title}
                </p>
              </div>
              <span className="pointer-events-none absolute inset-0 bg-brand-yellow/0 transition group-hover:bg-brand-yellow/5" />
            </motion.button>
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative aspect-square w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-brand-charcoal"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="flex h-full flex-col items-center justify-center text-center">
                <p
                  className={cn(
                    "h-heading text-9xl",
                    lightbox.type === "video"
                      ? "text-brand-yellow"
                      : "text-white/10",
                  )}
                >
                  {lightbox.tag}
                </p>
                <p className="mt-4 text-sm uppercase tracking-[0.3em] text-white/60">
                  {lightbox.category}
                </p>
                <p className="mt-1 text-base text-white/85">
                  {lightbox.title}
                </p>
                {lightbox.type === "video" && (
                  <p className="mt-1 text-xs text-white/40">
                    Video embed will be wired to YouTube / hosted file
                  </p>
                )}
              </div>
              <button
                onClick={() => setLightbox(null)}
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
