/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('./.tailwind/config.colors.js'),
    require('./.tailwind/config.typography.js'),
  ],
  content: [
    "./web/*.html",
    "./assets/**/*.{html,js,svg}",
    './templates/**/*.twig',
  ],
  safelist: [],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    require('@tailwindcss/typography'),
  ],
}
