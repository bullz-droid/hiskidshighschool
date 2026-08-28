import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: {
            deep: "#143d2b",
            dark: "#0e291c",
            mid: "#1c5236",
            emerald: "#246643",
            light: "#2f7b53",
            soft: "#e8f2ec",
          },
          maroon: {
            deep: "#54121d",
            DEFAULT: "#781d2c",
            mid: "#8f2234",
            light: "#a62d42",
            soft: "#fbf0f2",
            border: "#e2bfc6",
          },
          beige: {
            light: "#fbf8f2",
            DEFAULT: "#f4ede2",
            deep: "#ebdcc8",
            border: "#ded0b9",
            dark: "#cfbda4",
          },
          brown: {
            light: "#c4ab94",
            DEFAULT: "#8c6d53",
            dark: "#5c4533",
            soft: "#f7f3ee",
          },
          gold: {
            DEFAULT: "#d4a338",
            light: "#f0cb72",
            soft: "#fdf6e2",
            dark: "#a87e22",
          },
          ink: {
            DEFAULT: "#181b17",
            muted: "#485044",
            light: "#727a6e",
          }
        }
      },
      fontFamily: {
        serif: ["'Fraunces'", "Georgia", "serif"],
        sans: ["'Work Sans'", "system-ui", "sans-serif"],
        mono: ["'Space Mono'", "monospace"],
      },
      boxShadow: {
        subtle: "0 4px 20px -2px rgba(20, 61, 43, 0.06)",
        card: "0 10px 30px -4px rgba(120, 29, 44, 0.08)",
        elevated: "0 20px 40px -6px rgba(20, 61, 43, 0.14)",
      }
    },
  },
  plugins: [],
};
export default config;
