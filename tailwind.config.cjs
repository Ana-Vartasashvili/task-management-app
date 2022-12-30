/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },

    colors: {
      darkBlue: "#0D0023",
      lightPurple: "#B0A6CA",
    },

    fontSize: {
      base: "16px",
      sm: "12px",
      md: "14px",
      lg: "18px",
      "2xl": "20px",
      "3xl": "24px",
    },
  },
  plugins: [],
};
