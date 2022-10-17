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
          700: '#E50914',
        },
      },
    },
  },
  plugins: [],
}