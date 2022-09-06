require('dotenv').config();
require('laravel-mix-svg-sprite');

if (process.env.NODE_ENV !== 'production' && !process.env.DDEV_HOSTNAME) {
  throw new Error(`
==================================================
| !You need to run this command from within ddev |
==================================================
`);
}


const mix = require('laravel-mix');
const path = require('path');
const tailwindcss = require('tailwindcss');

const PATHS = {
  INPUT: './src/assets',
  OUTPUT: './src/web/dist',
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
        '~': path.resolve('./src/assets/js'),
      },
    },
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
  .svgSprite(
    inPath('svg/sprite'),
    'dist/svg/sprite.svg',
    {
      extract: true,
      symbolId: (filePath) => `sprite-${path.basename(filePath)}`,
    },
  )
  .setPublicPath('src/web')
  .sourceMaps()
  .browserSync({
    open : false,
    ui : false,
    watch : true,
    cors: true,
    files : [
      './src/modules/**/*.php',
      './src/templates/**/*',
      `./src/web/dist/**/*`,
    ],
    host: process.env.DDEV_HOSTNAME,
    proxy: {
        target: 'localhost',
    },
  })

if (mix.inProduction()) {
  mix.version();
}
