import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { Container } from "@/components/ui/container";

export function Breadcrumbs({ items }: { items: { href?: string; label: string }[] }) {
  return (
    <div className="border-b border-white/5 bg-brand-charcoal-soft/50">
      <Container className="flex h-12 items-center gap-1.5 text-xs text-white/50">
        <Link
          href="/"
          className="inline-flex items-center gap-1 transition hover:text-brand-yellow"
        >
          <Home className="h-3.5 w-3.5" />
          Home
        </Link>
        {items.map((it) => (
          <span key={it.href ?? it.label} className="inline-flex items-center gap-1.5">
            <ChevronRight className="h-3 w-3 text-white/30" />
            {it.href ? (
              <Link
                href={it.href}
                className="transition hover:text-brand-yellow"
              >
                {it.label}
              </Link>
            ) : (
              <span className="text-white/80">{it.label}</span>
            )}
          </span>
        ))}
      </Container>
    </div>
  );
}
