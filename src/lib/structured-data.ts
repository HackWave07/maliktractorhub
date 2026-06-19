import { siteConfig } from "./site-config";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}/og-image.png`,
    logo: `${siteConfig.url}/logo.png`,
    telephone: `+91-${siteConfig.phones.primary}`,
    email: siteConfig.email,
    priceRange: "₹₹",
    foundingDate: `${siteConfig.established}-01-01`,
    founder: {
      "@type": "Person",
      name: siteConfig.owner,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.pincode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.6208,
      longitude: 77.3192,
    },
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "21:00",
      },
    ],
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.youtube,
    ].filter((s) => s && s !== "#"),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#business` },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${siteConfig.url}${it.url}`,
    })),
  };
}

export function serviceSchema(service: {
  title: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: service.title,
    description: service.description,
    provider: { "@id": `${siteConfig.url}/#business` },
    areaServed: siteConfig.serviceAreas,
  };
}

export function articleSchema(article: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  author: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.image
      ? [`${siteConfig.url}${article.image}`]
      : [`${siteConfig.url}/og-image.png`],
    datePublished: article.publishedAt,
    author: { "@type": "Person", name: article.author },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/logo.png` },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${article.slug}`,
    },
  };
}

export function faqSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function reviewSchema(review: {
  author: string;
  rating: number;
  text: string;
  date: string;
  title: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    datePublished: review.date,
    author: {
      "@type": "Person",
      name: review.author,
    },
    name: review.title,
    reviewBody: review.text,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };
}

export function aggregateRatingSchema(data: {
  ratingValue: number;
  reviewCount: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    ratingValue: data.ratingValue.toString(),
    bestRating: "5",
    worstRating: "1",
    reviewCount: data.reviewCount.toString(),
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    foundingDate: `${siteConfig.established}`,
    founder: {
      "@type": "Person",
      name: siteConfig.owner,
    },
    telephone: `+91-${siteConfig.phones.primary}`,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.pincode,
      addressCountry: siteConfig.address.country,
    },
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.youtube,
    ].filter((s) => s && s !== "#"),
  };
}
