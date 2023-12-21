import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
     'dark-blue': '#14213d',
     'yellow': '#fca311',
     'silver': '#e5e5e5',
     'black': '#000000',
     'white': '#FFFFFF',
     'nav-bar': '#000814',
     'anchor-tags': '#29abe8',
    }
  },
  plugins: [],
};
export default config;
