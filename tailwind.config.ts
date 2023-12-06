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
      "theme-primary": "#495E57",
      "theme-dark": "#45474B",
      "theme-secondary": "#F4CE14",
      "dark-text": "#2f3640",
      "light-text": "#576574",
      white: "#FFFFFF",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
export default config;
