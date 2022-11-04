/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueish: {
          100: "#277BC0",
        },
        greenish: {
          100: "#DEF5E5",
          200: "#BCEAD5",
          300: "#9ED5C5",
          400: "#8EC3B0",
        },
      },
    },
  },
  plugins: [],
};
