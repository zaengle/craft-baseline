/** @type {import('tailwindcss').Config} */
export default {
  // Note: since we're using webpack (via Mix)
  // the string in the content array gets resolved
  // **to directories not globs**
  // This means it's important not to put any path here that might resolve to
  // including web/dist/ (our output dir) or TW will go into a rebuild loop
  // when using `mix watch`
  //
  // See https://github.com/tailwindlabs/tailwindcss/issues/4701 for more
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
    import('tailwindcss-debug-screens'),
    import('@tailwindcss/typography'),
    import('@tailwindcss/forms'),
  ],
}
