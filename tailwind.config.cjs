/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif', 
        serif: 'Roboto, sans-serif'
      },
      colors: {
        red: {
          600: 'rgba(167, 0, 0, 0.8)',
          700: 'rgb(220 38 38)',
          800: '#E50914'
        },
      },
      dropShadow: {
        'md': '0 6px 6px rgba(150, 20, 20)',
      }
    },
  },
  plugins: [],
}