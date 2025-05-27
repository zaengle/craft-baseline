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
}
