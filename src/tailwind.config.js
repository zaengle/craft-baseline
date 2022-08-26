/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('./.tailwind/config.colors.js'),
    require('./.tailwind/config.typography.js'),
  ],
  // Note: since we're using webpack (via Mix)
  // the string in the content array gets resolved
  // **to directories not globs**
  // This means it's important not to put any path here that might resolve to
  // including web/dist/ (our output dir) or TW will go into a rebuild loop
  // when using `mix watch`
  //
  // See https://github.com/tailwindlabs/tailwindcss/issues/4701 for more
  content: [
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
