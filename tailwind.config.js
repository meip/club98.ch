/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#111820',
      },
      fontFamily: {
        sans: ['var(--font-barlow)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
