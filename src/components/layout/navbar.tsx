"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { navLinks, siteConfig } from "@/lib/site-config";
import { cn, formatPhone } from "@/lib/utils";
import { phoneLink, whatsappLink } from "@/lib/contact-links";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b transition-all duration-300",
        scrolled
          ? "border-white/10 bg-brand-charcoal-soft/85 backdrop-blur-xl"
          : "border-transparent bg-brand-charcoal-soft/40 backdrop-blur",
      )}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link href="/" aria-label="Malik Tractor Hub — Home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-colors",
                  active ? "text-brand-yellow" : "text-white/70 hover:text-white",
                )}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-0.5 left-1/2 h-0.5 w-6 -translate-x-1/2 bg-brand-yellow"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={phoneLink()}
            className="flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-brand-yellow"
          >
            <Phone className="h-4 w-4 text-brand-yellow" />
            {formatPhone(siteConfig.phones.primary)}
          </a>
          <Button
            asChild
            variant="whatsapp"
            size="md"
            className="rounded-md"
          >
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="flex h-11 w-11 items-center justify-center rounded-md border border-white/10 text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-white/5 bg-brand-charcoal-soft lg:hidden"
          >
            <div className="container-x flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-md px-3 py-3 text-sm font-semibold uppercase tracking-wider",
                    pathname === link.href
                      ? "bg-white/5 text-brand-yellow"
                      : "text-white/80 hover:bg-white/5 hover:text-white",
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 flex flex-col gap-2 border-t border-white/5 pt-3">
                <Button asChild variant="whatsapp" className="w-full">
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp Us
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a href={phoneLink()}>
                    <Phone className="h-4 w-4" />
                    Call {siteConfig.phones.primary}
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
