"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQClientProps {
  items: FAQItem[];
}

export default function FAQClient({ items }: FAQClientProps) {
  const [active, setActive] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="industrial-card overflow-hidden p-0"
        >
          <button
            onClick={() => setActive(active === idx ? null : idx)}
            className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left transition hover:bg-white/5"
          >
            <span className="font-semibold text-white">{item.q}</span>
            <motion.div
              animate={{ rotate: active === idx ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0"
            >
              <ChevronDown className="h-5 w-5 text-brand-yellow" />
            </motion.div>
          </button>

          <AnimatePresence>
            {active === idx && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="border-t border-white/10"
              >
                <p className="px-6 py-4 text-white/70">{item.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
