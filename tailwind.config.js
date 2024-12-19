/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./scripts/**/*.js"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        "JohnsonDisplay": ['JohnsonDisplay', 'sans-serif'],
        "JohnsonText": ['JohnsonText', 'sans-serif'],
      },
      colors: {
        'blue-j&j': '#0F68B2',
        'red-500': '#EB1700',
        'wine-500': '#9E0000',
        'purple-800': '#8C3BBB',
        'neutral-200': '#E4E1DE'
      },
    },
  },
  plugins: [],
}

