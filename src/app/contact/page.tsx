import type { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  User,
  Navigation,
} from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/forms/contact-form";
import { FinalCTA } from "@/components/sections/final-cta";
import { siteConfig } from "@/lib/site-config";
import { phoneLink, mailLink, whatsappLink } from "@/lib/contact-links";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Contact Malik Tractor Hub | Noida, Ghaziabad, Delhi NCR",
  description:
    "Get in touch with Malik Tractor Hub — call, WhatsApp or visit our workshop in Khora Colony, Sector 62A Noida. Open 7 days, 9 AM – 9 PM.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Malik Tractor Hub",
    description: "Call, WhatsApp or visit our workshop. Noida • Ghaziabad • Delhi NCR.",
    url: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  const bc = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }}
      />
      <PageHero
        eyebrow="Contact"
        title="Get in Touch — We Respond Fast"
        description="Call, WhatsApp or visit our workshop. We're open 7 days a week, 9 AM – 9 PM."
      />
      <Breadcrumbs items={[{ label: "Contact" }]} />

      <section className="section">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Left: form */}
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Send an Inquiry"
                title="Tell Us About Your Tractor"
                description="Share your tractor brand, model and the issue — we'll get back with a clear next step within hours."
              />
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            {/* Right: contact details */}
            <div className="lg:col-span-5">
              <div className="space-y-4">
                <ContactCard
                  icon={User}
                  title="Owner"
                  primary={siteConfig.owner}
                  secondary="Founder & Head Mechanic"
                />
                <ContactCard
                  icon={Phone}
                  title="Phone"
                  primary={
                    <a
                      href={phoneLink()}
                      className="text-white transition hover:text-brand-yellow"
                    >
                      +91 {siteConfig.phones.primary}
                    </a>
                  }
                  secondary={
                    <a
                      href={phoneLink(siteConfig.phones.secondary)}
                      className="text-white/70 transition hover:text-brand-yellow"
                    >
                      +91 {siteConfig.phones.secondary} (secondary)
                    </a>
                  }
                />
                <ContactCard
                  icon={MessageCircle}
                  title="WhatsApp"
                  primary={
                    <a
                      href={whatsappLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white transition hover:text-brand-yellow"
                    >
                      Chat instantly
                    </a>
                  }
                  secondary="Replies in minutes during workshop hours"
                />
                <ContactCard
                  icon={Mail}
                  title="Email"
                  primary={
                    <a
                      href={mailLink()}
                      className="text-white transition hover:text-brand-yellow"
                    >
                      {siteConfig.email}
                    </a>
                  }
                  secondary="For quotations & formal inquiries"
                />
                <ContactCard
                  icon={MapPin}
                  title="Workshop Address"
                  primary={
                    <span className="text-white">
                      {siteConfig.address.line1}
                      <br />
                      {siteConfig.address.line2}
                      <br />
                      {siteConfig.address.city}, {siteConfig.address.state} –{" "}
                      {siteConfig.address.pincode}
                    </span>
                  }
                  secondary={`Landmark: ${siteConfig.address.landmark}`}
                />
                <ContactCard
                  icon={Clock}
                  title="Working Hours"
                  primary={
                    <span className="text-white">{siteConfig.hours.range}</span>
                  }
                  secondary={siteConfig.hours.days}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Map */}
      <section className="section bg-brand-charcoal-soft">
        <Container>
          <SectionHeading
            eyebrow="Find Us"
            title="Workshop Location"
            description="Easy to reach from Noida Sector 62, Ghaziabad and Indirapuram. Use the map below for directions."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-brand-charcoal-light to-brand-charcoal-soft">
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-brand-yellow/40 bg-brand-yellow/10 text-brand-yellow">
                    <MapPin className="h-7 w-7" />
                  </div>
                  <p className="h-heading mt-5 text-3xl text-white">
                    Google Map Embed
                  </p>
                  <p className="mt-2 max-w-md text-sm text-white/60">
                    Subhash Park, Indra Vihar, Khora Colony, Sector 62A,
                    Noida – 110096
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Subhash+Park+Indra+Vihar+Khora+Colony+Sector+62A+Noida"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-md bg-brand-yellow px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-brand-charcoal transition hover:bg-brand-yellow-light"
                  >
                    <Navigation className="h-4 w-4" />
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="industrial-card h-full">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-yellow">
                  Service Areas
                </p>
                <ul className="mt-4 space-y-2">
                  {siteConfig.serviceAreas.map((a) => (
                    <li
                      key={a}
                      className="flex items-center gap-2 text-sm text-white/80"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
                      {a}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 h-px bg-white/10" />
                <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-yellow">
                  Direct Contact
                </p>
                <div className="mt-3 flex flex-col gap-2">
                  <Button asChild variant="whatsapp" size="md" className="rounded-md">
                    <a
                      href={whatsappLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4" /> WhatsApp
                    </a>
                  </Button>
                  <Button asChild variant="call" size="md" className="rounded-md">
                    <a href={phoneLink()}>
                      <Phone className="h-4 w-4" /> Call {siteConfig.phones.primary}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}

function ContactCard({
  icon: Icon,
  title,
  primary,
  secondary,
}: {
  icon: React.ElementType;
  title: string;
  primary: React.ReactNode;
  secondary?: React.ReactNode;
}) {
  return (
    <div className="industrial-card flex items-start gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-yellow">
          {title}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-white">{primary}</p>
        {secondary && (
          <p className="mt-0.5 text-xs text-white/55">{secondary}</p>
        )}
      </div>
    </div>
  );
}
