import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["var(--font-sans)", "sans-serif"], display: ["var(--font-display)", "sans-serif"] },
      colors: {
        bg: "var(--background)", fg: "var(--foreground)", muted: "var(--muted)",
        accent: "var(--accent)", accent2: "var(--accent-secondary)"
      },
      boxShadow: { glow: "0 0 45px color-mix(in srgb, var(--accent) 28%, transparent)" }
    }
  },
  plugins: []
};
export default config;
