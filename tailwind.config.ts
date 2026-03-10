import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Bankai Brand Colors
        bankai: {
          black:  "#0A0F1E",  // Main background
          navy:   "#1B3A6B",  // Section backgrounds / cards
          blue:   "#2E6DB4",  // Primary brand blue
          accent: "#4BA8E8",  // CTAs, highlights
          light:  "#7CC8F5",  // Hover states
          muted:  "#A0AEC0",  // Secondary text
        },
        background: "#0A0F1E",
        foreground: "#FFFFFF",
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body:    ["var(--font-dm-sans)", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(ellipse at top left, #1B3A6B 0%, #0A0F1E 60%)",
        "card-gradient": "linear-gradient(135deg, #1B3A6B 0%, #0A0F1E 100%)",
        "accent-gradient": "linear-gradient(135deg, #2E6DB4 0%, #4BA8E8 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.8s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":       { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(74, 168, 232, 0.3)" },
          "50%":       { boxShadow: "0 0 40px rgba(74, 168, 232, 0.6)" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
      },
      boxShadow: {
        "glow-sm":  "0 0 15px rgba(74, 168, 232, 0.3)",
        "glow-md":  "0 0 30px rgba(74, 168, 232, 0.4)",
        "glow-lg":  "0 0 50px rgba(74, 168, 232, 0.5)",
        "card":     "0 4px 24px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
