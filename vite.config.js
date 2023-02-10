import path from 'path'
import { defineConfig } from 'vite'
import copy from 'rollup-plugin-copy'
import tailwindcss from 'tailwindcss'
import ViteRestart from 'vite-plugin-restart'
import createSvgSpritePlugin from 'vite-plugin-svg-sprite'

export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '' : '/dist/',
  build: {
    manifest: true,
    emptyOutDir: true,
    outDir: 'src/web/dist',
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      input: {
        app: 'src/assets/js/app.js',
      },
      output: {
        sourcemap: true,
      },
    },
  },
  css: {
    postcss: {
      to: 'dist',
      from: 'src/assets/css/app.css',
      plugins: [
        require('postcss-import'),
        require('tailwindcss/nesting'),
        tailwindcss('./tailwind.config.js'),
        require('postcss-focus-visible'),
        require('autoprefixer'),
      ],
    },
  },
  plugins: [
    copy({
      hook: 'writeBundle',
      targets: [
        { src: './src/assets/img/**/*', dest: './src/web/dist/img' },
        { src: './src/assets/svg/**/*', dest: './src/web/dist/svg' },
      ],
    }),
    createSvgSpritePlugin({
      symbolId: 'sprite-[name]',
      include: './src/assets/svg/sprite/**/*',
    }),
    ViteRestart({
      restart: ['./tailwind.config.js'],
      reload: ['src/templates/**/*', 'src/modules/**/*.php'],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve('./src/assets/js'),
    },
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    strictPort: true,
  },
}))
