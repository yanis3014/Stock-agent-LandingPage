import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // In Tailwind v4, the theme is defined in CSS (@theme).
  // We keep this object empty to avoid conflicts.
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
