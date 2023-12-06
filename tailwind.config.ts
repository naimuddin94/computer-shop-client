import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["'Poppins', sans-serif"],
    },
    colors: {
      cream: "#F5F7F8",
      white: "#ffffff",
      "theme-yellow": "#FFC300",
      "theme-color-100": "#FF5733",
      "theme-color-200": "#C70039",
      "theme-color-300": "#900C3F",
      "theme-color-400": "#581845",
      "theme-secondary": "#DAF7A6",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
export default config;
