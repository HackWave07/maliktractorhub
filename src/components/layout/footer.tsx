import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  ArrowUpRight,
} from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { Container } from "@/components/ui/container";
import { siteConfig, services, partsCategories } from "@/lib/site-config";
import { phoneLink, mailLink } from "@/lib/contact-links";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-brand-charcoal-soft">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-yellow/60 to-transparent" />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />

      <Container className="relative py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              {siteConfig.name} is a trusted tractor engine rebuilding, repair
              and spare parts specialist serving Noida, Ghaziabad and Delhi
              NCR since 1996.
            </p>

            <div className="mt-8 space-y-3 text-sm text-white/70">
              <a
                href={phoneLink()}
                className="flex items-center gap-3 transition hover:text-brand-yellow"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] text-brand-yellow">
                  <Phone className="h-4 w-4" />
                </span>
                +91 {siteConfig.phones.primary}
              </a>
              <a
                href={mailLink()}
                className="flex items-center gap-3 transition hover:text-brand-yellow"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] text-brand-yellow">
                  <Mail className="h-4 w-4" />
                </span>
                {siteConfig.email}
              </a>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] text-brand-yellow">
                  <MapPin className="h-4 w-4" />
                </span>
                <span>
                  {siteConfig.address.line1}, {siteConfig.address.line2},
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state} –{" "}
                  {siteConfig.address.pincode}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] text-brand-yellow">
                  <Clock className="h-4 w-4" />
                </span>
                {siteConfig.hours.range} • {siteConfig.hours.days}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="h-heading text-xl text-white">Services</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="group inline-flex items-center gap-1 transition hover:text-brand-yellow"
                  >
                    {s.title}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="h-heading text-xl text-white">Spare Parts</h4>
            <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-3 text-sm text-white/60">
              {partsCategories.slice(0, 8).map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/spare-parts#${c.slug}`}
                    className="transition hover:text-brand-yellow"
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="h-heading text-xl text-white">Company</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              <li>
                <Link href="/about" className="transition hover:text-brand-yellow">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/brands" className="transition hover:text-brand-yellow">
                  Brands We Support
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="transition hover:text-brand-yellow">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition hover:text-brand-yellow">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-brand-yellow">
                  Contact
                </Link>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-2">
              {[
                { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
                { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
                { icon: Youtube, href: siteConfig.social.youtube, label: "YouTube" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-white/70 transition hover:border-brand-yellow/50 hover:text-brand-yellow"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            Built with industrial precision in Noida • {siteConfig.tagline}
          </p>
        </div>
      </Container>
    </footer>
  );
}
