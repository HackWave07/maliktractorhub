import { siteConfig } from "./site-config";

export function whatsappLink(message?: string) {
  const text = message
    ? encodeURIComponent(message)
    : encodeURIComponent(
        "Hi Malik Tractor Hub, I need information about your services.",
      );
  return `https://wa.me/${siteConfig.whatsapp}?text=${text}`;
}

export function phoneLink(phone = siteConfig.phones.primary) {
  return `tel:+91${phone}`;
}

export function mailLink() {
  return `mailto:${siteConfig.email}`;
}
