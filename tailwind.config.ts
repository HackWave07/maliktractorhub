import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        brand: {
          yellow: "#F59E0B",
          "yellow-dark": "#D97706",
          "yellow-light": "#FBBF24",
          charcoal: "#111827",
          "charcoal-light": "#1F2937",
          "charcoal-soft": "#0B0F19",
          steel: "#6B7280",
          "steel-light": "#9CA3AF",
          "light-gray": "#E5E7EB",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        heading: ["var(--font-bebas)", "Impact", "sans-serif"],
        body: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "industrial-grid":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "hero-gradient":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(245,158,11,0.18), transparent 70%)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-yellow": {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(245,158,11,0.6)" },
          "50%": { boxShadow: "0 0 0 14px rgba(245,158,11,0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out forwards",
        "fade-in-up": "fade-in-up 0.7s ease-out forwards",
        marquee: "marquee 30s linear infinite",
        "pulse-yellow": "pulse-yellow 2.2s ease-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
