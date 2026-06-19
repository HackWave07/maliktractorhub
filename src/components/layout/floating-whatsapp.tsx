"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Phone } from "lucide-react";
import { whatsappLink, phoneLink } from "@/lib/contact-links";
import { siteConfig } from "@/lib/site-config";

export function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="w-72 overflow-hidden rounded-2xl border border-white/10 bg-brand-charcoal-soft/95 shadow-2xl backdrop-blur-xl"
          >
            <div className="relative bg-gradient-to-br from-[#075E54] to-[#128C7E] p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#128C7E] bg-[#25D366]" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{siteConfig.name}</p>
                  <p className="text-[11px] opacity-80">
                    Typically replies within minutes
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-2 p-4 text-sm text-white/80">
              <p className="rounded-md bg-white/5 p-3">
                👋 Hi! Need tractor repair, parts or engine rebuilding? Send a
                message and our team will assist you.
              </p>
              <a
                href={whatsappLink(
                  "Hi Malik Tractor Hub, I need help with my tractor.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 py-3 font-semibold text-white transition hover:bg-[#1DA851]"
              >
                <MessageCircle className="h-4 w-4" />
                Start WhatsApp Chat
              </a>
              <a
                href={phoneLink()}
                className="flex w-full items-center justify-center gap-2 rounded-md border border-white/10 px-4 py-3 text-white/80 transition hover:border-brand-yellow/40 hover:text-brand-yellow"
              >
                <Phone className="h-4 w-4" />
                Call {siteConfig.phones.primary}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open WhatsApp chat"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.55)] transition hover:scale-105 sm:h-16 sm:w-16"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-pulse-yellow" />
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <X className="relative h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span
              key="wa"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <MessageCircle className="relative h-7 w-7" />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
