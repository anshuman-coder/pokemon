/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      'colors': {
        'bg-primary': '#112D41',
        'text-primary': '#F2F5E5',
        'button-bg': '#D4D0CD'
      }
    },
  },
  plugins: [],
}

