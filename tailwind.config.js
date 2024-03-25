/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Noto Sans', 'Poppins', 'Tauri', 'ui-sans-serif', 'system-ui'],
      }
    },
    colors: {
      customWhite: '#ffffff',


    },



  },
  plugins: [],
}

