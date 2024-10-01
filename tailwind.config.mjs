import debugScreens from 'tailwindcss-debug-screens'
import typography from '@tailwindcss/typography'
import forms from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/assets/**/*.{html,js,svg}",
    './src/templates/**/*.twig',
  ],
  theme: {
    extend: {
      typography: (theme) => ({}),
      colors: (theme) => ({}),
    },
  },
  plugins: [
    debugScreens,
    typography,
    forms,
  ],
}
