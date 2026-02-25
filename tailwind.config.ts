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
        sand: "#F5F3EF",
        cream: "#FEFCF7",
        ink: "#1A1A1A",
        charcoal: "#525252",
        ocean: "#0F766E",
        "warm-white": "#FAFAF9",
      },
      fontFamily: {
        heading: ['"Playfair Display"', "serif"],
        body: ['"DM Sans"', "sans-serif"],
      },
      maxWidth: {
        container: "72rem",
      },
    },
  },
  plugins: [],
};
export default config;
