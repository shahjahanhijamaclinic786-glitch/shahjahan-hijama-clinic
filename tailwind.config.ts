import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#075B35",
        forest: "#06452A",
        sage: {
          ref: "#E2EFE5",
          soft: "#EDF5F0",
        },
        cream: "#F8F9F4",
        charcoal: "#171A18",
        muted: "#68756D",
        inputline: "#D5E1D9",
      },
      fontFamily: {
        heading: ["var(--font-manrope)", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      boxShadow: {
        card: "0 4px 20px rgba(6, 69, 42, 0.06)",
      },
      borderRadius: {
        card: "16px",
        feature: "22px",
      },
    },
  },
  plugins: [],
};

export default config;
