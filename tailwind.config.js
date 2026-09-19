/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          900: "#123D2A",
          700: "#197447",
          500: "#2F8F57",
        },
        gold: {
          DEFAULT: "#D5A62E",
          light: "#E6C25A",
          dark: "#B88A1A",
        },
        cream: {
          DEFAULT: "#F8F4E8",
          light: "#F2F5EF",
        },
        ink: {
          DEFAULT: "#193126",
          muted: "#647269",
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "20px",
      },
      boxShadow: {
        soft: "0 4px 24px rgba(19, 49, 38, 0.08)",
        card: "0 8px 32px rgba(19, 49, 38, 0.12)",
        lift: "0 16px 48px rgba(19, 49, 38, 0.18)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "70%": { transform: "scale(1.3)", opacity: "0" },
          "100%": { transform: "scale(1.3)", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "pulse-ring": "pulse-ring 2.5s ease-out infinite",
      },
    },
  },
  plugins: [],
};
