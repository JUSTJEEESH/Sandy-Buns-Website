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
        ocean: "#0EA5AC",
        "ocean-dark": "#0C8B91",
        "ocean-light": "#E0F5F5",
        sunset: "#E8985E",
        "sunset-light": "#FDF0E4",
        driftwood: "#5C4B3C",
        charcoal: "#3A3A3A",
        "text-body": "#5A5349",
        seafoam: "#B8E0D2",
        palm: "#5DB075",
        sand: "#F5F0E8",
        cream: "#FFF9F0",
        "warm-white": "#FDFBF7",
        ink: "#1A1A1A",
        maroon: "#500000",
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
