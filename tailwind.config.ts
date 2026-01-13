import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ptah: {
          base: "#FFFFFF", // Pure White (Base Background)
          baseAlt: "#FAFAFA", // Very Light Gray (Alternative Background)
          secondary: "#F4F4F5", // Zinc-100 (Secondary Surfaces for cards/sections)
          accent: "#6a669d", // Muted Indigo / Dusty Purple (Primary Accent)
          textPrimary: "#09090B", // Rich Black (Text Primary)
          textSecondary: "#71717A", // Neutral Gray (Text Secondary)
          destructive: "#EF4444", // Red (Destructive/Error)
          border: "#E4E4E7", // Soft border color (Zinc-200)
        },
        // Map to Tailwind semantic colors for easier use
        background: {
          DEFAULT: "#FFFFFF",
          secondary: "#FAFAFA",
        },
        foreground: {
          DEFAULT: "#09090B",
        },
        primary: {
          DEFAULT: "#6a669d",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#6a669d",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F4F4F5",
          foreground: "#71717A",
        },
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#FFFFFF",
        },
        border: {
          DEFAULT: "#E4E4E7", // Soft border (Zinc-200)
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        display: ["var(--font-geist-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
