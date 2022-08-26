require('dotenv').config();

const mix = require('laravel-mix');
const path = require('path');
const tailwindcss = require('tailwindcss');


const urlObject = new URL(process.env.PRIMARY_SITE_URL);
const hostName = urlObject.hostname;


const PATHS = {
  INPUT: './assets',
  OUTPUT: './web/dist',
};

const inPath = (path) => `${PATHS.INPUT}/${path}`;
const outPath = (path) => `${PATHS.OUTPUT}/${path}`;

mix
  .options({
    https: true,
  })
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
      tailwindcss('./tailwind.config.js'),
      require('postcss-focus-visible'),
      require('autoprefixer'),
    ]
  )
  // .extract(['alpine', 'vue'])
  .js(inPath('js/app.js'), 'dist')
  // .copy(inPath('fonts/'), outPath('fonts/'))
  .copy(inPath('img/'), outPath('img/'))
  .copy(inPath('svg/'), outPath('svg/'))
  .setPublicPath('web')
  .sourceMaps()
  .browserSync({
    proxy: hostName,
    host: hostName,
    port: 3000,
    open:  false,
    ui: false,
    cors: true,
    files: [
      './web/**/*.html',
      './templates/**/*.twig',
    ],
  });


if (mix.inProduction()) {
  mix.version();
}
