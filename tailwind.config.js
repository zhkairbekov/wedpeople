/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        alabaster: "#FAF8F5",
        sand: "#F2ECE4",
        obsidian: "#141312",
        ink: "#161514",
        muted: "#6E6A64",
        terracotta: "#D9531E",
        champagne: "#C8B08C",
      },
      fontFamily: {
        headline: ["var(--font-playfair)", "var(--font-cormorant)", "serif"],
        serifAlt: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
