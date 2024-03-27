/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Noto Sans', 'Poppins', 'Tauri', 'ui-sans-serif', 'system-ui'],
        'rakkas': ['Rakkas', 'serif']
      }
    },
    colors: {
      customWhite: '#ffffff',


    },



  },
  plugins: [],
}

