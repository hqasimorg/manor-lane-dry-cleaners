import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1B4D3E",
          dark: "#143D31",
          light: "#2A6B56",
        },
        secondary: {
          DEFAULT: "#C9A227",
          dark: "#A88420",
        },
        accent: {
          DEFAULT: "#F5F0E8",
          dark: "#E8E0D4",
        },
        neutral: {
          black: "#1A1A1A",
          "dark-grey": "#4A4A4A",
          "medium-grey": "#8A8A8A",
          "light-grey": "#E5E5E5",
          "off-white": "#FAFAF8",
          white: "#FFFFFF",
        },
        whatsapp: {
          DEFAULT: "#25D366",
          dark: "#128C7E",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        full: "9999px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(0,0,0,0.05)",
        md: "0 4px 6px rgba(0,0,0,0.05)",
        lg: "0 10px 15px rgba(0,0,0,0.08)",
        xl: "0 20px 25px rgba(0,0,0,0.1)",
        card: "0 1px 3px rgba(0,0,0,0.05)",
        "card-hover": "0 4px 12px rgba(0,0,0,0.08)",
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
