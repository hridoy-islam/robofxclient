import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#000000",
        "primary-blue": "#64bae4",
        secondary: "#ffffff",
      },
      backgroundImage: {
        "gradient-blue": "linear-gradient(135deg, #64bae4 0%, #000000 100%)",
        "gradient-text-blue":
          "linear-gradient(to right, #64bae4 0%, #ffffff 50%, #64bae4 100%)",
      },
      boxShadow: {
        "blue-glow": "0 0 20px rgba(100, 186, 228, 0.3)",
        "blue-glow-lg": "0 0 40px rgba(100, 186, 228, 0.5)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 0 10px rgba(100, 186, 228, 0.4)",
            transform: "scale(1)",
          },
          "50%": {
            boxShadow: "0 0 25px rgba(100, 186, 228, 0.7)",
            transform: "scale(1.02)",
          },
        },
        "text-shimmer": {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "text-shimmer": "text-shimmer 4s linear infinite",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
