import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Montserrat } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { localBusinessSchema, websiteSchema } from "@/lib/structured-data";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/layout/floating-whatsapp";
import { TopBar } from "@/components/layout/top-bar";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B0F19",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Malik Tractor Hub | Tractor Repair & Spare Parts Since 1996",
    template: "%s | Malik Tractor Hub",
  },
  description:
    "Professional tractor engine rebuilding, repair, maintenance and spare parts services in Noida, Ghaziabad and Delhi NCR since 1996.",
  applicationName: siteConfig.name,
  keywords: [
    "tractor repair",
    "tractor service",
    "tractor spare parts",
    "tractor engine overhaul",
    "tractor workshop",
    "tractor mechanic",
    "tractor repair noida",
    "tractor service ghaziabad",
    "Malik Tractor Hub",
  ],
  authors: [{ name: siteConfig.owner }],
  creator: siteConfig.owner,
  publisher: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: "Malik Tractor Hub | Tractor Repair & Spare Parts Since 1996",
    description:
      "Professional tractor engine rebuilding, repair, maintenance and spare parts services in Noida, Ghaziabad and Delhi NCR since 1996.",
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Malik Tractor Hub – Tractor Repair & Spare Parts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Malik Tractor Hub | Tractor Repair & Spare Parts Since 1996",
    description:
      "Professional tractor engine rebuilding, repair, maintenance and spare parts services in Noida, Ghaziabad and Delhi NCR since 1996.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  category: "Industrial Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bebas.variable} ${montserrat.variable}`}>
      <body className="min-h-screen bg-brand-charcoal-soft text-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema()),
          }}
        />
        <TopBar />
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
