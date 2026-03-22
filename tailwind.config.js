/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*.{html,jsx}", "./src/**/*.{html,jsx}", "./index.html",],
  theme: {
    extend: {
      colors: {
        "black": "#3a4c35",
        "white": "#ffffff",
        "gold": "#C8B568",
      }
    },
  },
  plugins: [],
}

