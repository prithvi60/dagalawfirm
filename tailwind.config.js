/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        merriWeather: "var(--font-merriweather)",
        montserrat: "var(--font-montserrat)",
      },
      colors: {
        primary: "#FEFEFE",
        secondary: "#FDF7ED",
        info: "#c20003",
        accent: "#0033c2",
        cpoy: "#292323",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

// require("@tailwindcss/typography")
