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
      keyframes: {
        customBounce: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(35px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        customBounce: "customBounce 4.78s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
