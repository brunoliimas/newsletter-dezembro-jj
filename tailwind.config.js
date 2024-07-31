/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./scripts/**/*.js"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'blue-j&j': '#0F68B2',
      },
    },
  },
  plugins: [],
}

