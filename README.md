# Malik Tractor Hub — Website

Premium industrial website for **Malik Tractor Hub** — Tractor Engine Rebuilding, Spare Parts & Service in Noida, Ghaziabad & Delhi NCR.

## Stack

- **Next.js 15** (App Router, RSC)
- **TypeScript**
- **Tailwind CSS** with custom brand tokens
- **Framer Motion** for animations
- **Lucide Icons**
- **Bebas Neue + Montserrat** via `next/font/google`
- **ShadCN-style** primitives (custom-built, no runtime dependency)

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm run start
```

## Folder Structure

```
src/
├── app/                      # App Router pages
│   ├── layout.tsx            # Root layout, fonts, schema, navbar, footer, WA
│   ├── page.tsx              # Home (10 sections)
│   ├── about/                # About
│   ├── services/             # Services (8 deep-dive sections)
│   ├── spare-parts/          # Spare Parts (e-commerce ready)
│   ├── brands/               # Brands We Support
│   ├── gallery/              # Gallery (images + videos, lightbox, filters)
│   ├── blog/                 # Blog index + [slug] articles
│   ├── contact/              # Contact page + form
│   ├── sitemap.ts
│   ├── robots.ts
│   └── manifest.ts
│
├── components/
│   ├── layout/               # Navbar, Footer, TopBar, FloatingWhatsApp
│   ├── sections/             # Home page sections
│   ├── ui/                   # Logo, Button, Section, Container, etc.
│   └── forms/                # ContactForm
│
├── hooks/                    # use-in-view, use-count-up, use-tilt-mouse
├── lib/                      # site-config, utils, contact-links, structured-data
└── app/globals.css           # Tailwind base + brand utilities
```

## Brand System

| Token        | Value     | Use                          |
| ------------ | --------- | ---------------------------- |
| brand-yellow | `#F59E0B` | Primary accent / CTAs        |
| brand-charcoal | `#111827` | Deep backgrounds            |
| brand-charcoal-soft | `#0B0F19` | Page base                 |
| brand-steel  | `#6B7280` | Muted text                   |
| brand-light-gray | `#E5E7EB` | Borders, dividers       |

- Headings: **Bebas Neue** (uppercase)
- Body: **Montserrat**

## Conversion Architecture

- **Floating WhatsApp button** on every page
- WhatsApp & Call CTAs in the hero, final CTA, contact, services, spare parts, blog
- Contact form that mirrors details to WhatsApp
- Click-to-call `tel:` links

## SEO

- Local Business (AutoRepair) schema in root layout
- Per-page metadata + OpenGraph
- BreadcrumbList schema on contact + blog
- Article schema on blog posts
- `sitemap.xml`, `robots.txt`, `manifest.json`

## Replacing Placeholders

- **Brand assets** → drop logo into `public/` (`logo.png`, `og-image.png`, favicons)
- **Gallery images / videos** → swap the placeholder rendering in `gallery/page.tsx` and `components/sections/gallery.tsx`
- **Testimonials** → edit `src/lib/site-config.ts`
- **Site config** → `src/lib/site-config.ts` is the single source of truth

## Phase 2 (E-Commerce)

`/spare-parts` is already structured for:
- Category-based browsing
- SKU-level products
- Search & filter
- WhatsApp inquiry fallback (current)
- Future: cart, checkout, payments
