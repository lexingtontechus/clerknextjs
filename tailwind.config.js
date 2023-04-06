/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
   colors: {
       primary: colors.stone,
      secondary: colors.teal,
      neutral: colors.blue,
      red: colors.red,
      blue: colors.blue,
      sky: colors.sky,
      emerald: colors.emerald
    }
  },
  plugins: [],
}

