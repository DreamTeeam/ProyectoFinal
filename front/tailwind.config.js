/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#6E5CC4",
        secondary: "#4E4090",
        accent: "#EA4029",
        base: {
          100: "#FFFFFF",
          200: "#F0F2F1",
          300: "#444141",
          400: "#0D0D0D",
        },
      },
      fontFamily: {
        lexend: ["'Lexend'", "sans-serif"],
        inter: ["'Inter'", "sans-serif"],
      },
      fontSize: {
        h1: "32px",
        h2: "20px",
        base: "16px",
        small: "14px",
      },
    },
  },
  plugins: [],
};
