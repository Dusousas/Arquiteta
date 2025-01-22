import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        fontFamily:{
          Barlow:["Barlow", "serif"],
          Oswald:["Oswald", "serif"]

        },
        colors:{
          BlueP:"#456297"
        }
    },
  },
  plugins: [],
} satisfies Config;
