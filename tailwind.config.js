/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"]
      }
    },
    colors: {
      primary: "#994D1C",
      secondary: "#E48F45",
      darkBrand: "#6B240C",
      lightBrand: "#F5CCA0",
      CustomColor: "#EEF5FF"

    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
      },
    },
  },
  plugins: [],
}

