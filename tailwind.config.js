/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Discord-inspired neutrals
        base: {
          900: "#1e1f22", // sidebar / darkest
          800: "#2b2d31", // main content bg
          700: "#313338", // channel bg
          600: "#3f4147", // hover/border
          400: "#949ba4", // muted text
          100: "#f2f3f5", // primary text (dark mode)
        },
        // Light mode neutrals
        paper: {
          100: "#ffffff",
          200: "#f2f3f5",
          300: "#e3e5e8",
          400: "#6d6f78",
          900: "#1e1f22",
        },
        // Comfort color — replaces Discord's blurple as the single accent
        pink: {
          DEFAULT: "#ff6fb5",
          soft: "#ffd1e8",
          muted: "#7a4c63",
        },
        online: "#23a55a",
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      keyframes: {
        blink: { "0%, 100%": { opacity: 1 }, "50%": { opacity: 0 } },
      },
      animation: {
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
