require('dotenv').config();

const mix = require('laravel-mix');
const path = require('path');

const PATHS = {
  INPUT: './assets',
  OUTPUT: './web/dist',
};

const inPath = (path) => `${PATHS.INPUT}/${path}`;
const outPath = (path) => `${PATHS.OUTPUT}/${path}`;

mix
  .webpackConfig({
    resolve: {
      alias: {
        '@': path.resolve('./node_modules'),
      },
    }
  })
  .postCss(
    inPath('css/app.css'),
    'dist',
    [
      require('postcss-import'),
      require('tailwindcss/nesting'),
      require('tailwindcss'),
      require('postcss-focus-visible'),
      require('autoprefixer'),
    ])
  // .extract(['alpine', 'vue']);
  .js(inPath('js/app.js'), 'dist')
  // .copy(inPath('fonts/'), outPath('fonts/')
  .copy(inPath('img/'), outPath('img/'))
  .copy(inPath('svg/'), outPath('svg/'))
  .setPublicPath('web')
  .sourceMaps()
  .browserSync({
    https: false,
    proxy: process.env.DEFAULT_SITE_URL || 'http://<% SITE_HANDLE %>.test/',
    files: [
      './web/**/*.html',
      './templates/**/*.twig',
      outPath('**/*.css'),
      outPath('**/*.js'),
    ],
  });

console.log(mix.inProduction());

if (mix.inProduction()) {
  mix.version();
}
