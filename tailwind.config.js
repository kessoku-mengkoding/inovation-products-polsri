/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#03256C",
        secondary: "#06BEE1",
        "black-custom": "#121212",
      },
    },
  },
  plugins: [],
};
