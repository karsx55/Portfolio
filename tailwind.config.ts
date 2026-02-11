import {heroui} from '@heroui/theme';
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/navbar.js"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#3b82f6", // Blue accent
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#a855f7", // Purple accent
          foreground: "#ffffff",
        },
        card: {
            DEFAULT: "rgba(255, 255, 255, 0.05)",
            foreground: "#ededed"
        }
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Manrope", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        'inventory-pulse': 'inventory-pulse 2s linear infinite',
      }
    },
  },
  plugins: [heroui()],
} satisfies Config;
