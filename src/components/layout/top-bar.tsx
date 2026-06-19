import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { phoneLink, mailLink } from "@/lib/contact-links";

export function TopBar() {
  return (
    <div className="hidden border-b border-white/5 bg-brand-charcoal text-white/70 md:block">
      <div className="container-x flex h-9 items-center justify-between text-[11px] uppercase tracking-[0.18em]">
        <div className="flex items-center gap-6">
          <a
            href={phoneLink()}
            className="flex items-center gap-2 transition hover:text-brand-yellow"
          >
            <Phone className="h-3 w-3" />
            +91 {siteConfig.phones.primary}
          </a>
          <a
            href={mailLink()}
            className="flex items-center gap-2 transition hover:text-brand-yellow"
          >
            <Mail className="h-3 w-3" />
            {siteConfig.email}
          </a>
        </div>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <Clock className="h-3 w-3 text-brand-yellow" />
            {siteConfig.hours.range} • {siteConfig.hours.days}
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="h-3 w-3 text-brand-yellow" />
            Noida • Ghaziabad • Delhi NCR
          </span>
        </div>
      </div>
    </div>
  );
}
