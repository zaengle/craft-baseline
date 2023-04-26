import path from 'path'
import { defineConfig } from 'vite'
import copy from 'rollup-plugin-copy'
import tailwindcss from 'tailwindcss'
import ViteRestart from 'vite-plugin-restart'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '' : '/dist/',
  build: {
    manifest: true,
    emptyOutDir: true,
    assetsInlineLimit: 0,
    copyPublicDir: false,
    outDir: 'src/web/dist',
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      input: {
        app: 'src/assets/js/app.js',
        css: 'src/assets/css/app.css',
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
        { src: './src/assets/img/**/*', dest: './src/web/dist/assets/img' },
        { src: './src/assets/svg/**/*', dest: './src/web/dist/assets/svg' },
      ],
    }),
    ViteRestart({
      restart: ['./tailwind.config.js'],
      reload: ['src/templates/**/*', 'src/modules/**/*.php'],
    }),
    createSvgIconsPlugin({
      // Specify the icon folder to be cached
      iconDirs: [path.resolve(process.cwd(), 'src/assets/svg/sprite')],
      // Specify symbolId format
      symbolId: 'sprite-[name]',
      inject: 'body-first'
    }),
  ],
  resolve: {
    alias: {
      '~': path.resolve('./src/assets/js'),
      '@': path.resolve('./node_modules'),
    },
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    strictPort: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    exclude: [
      '**/vendor/**',
      '**/node_modules/**',
      '**/dist/**',
      '**/cypress/**',
      '**/.{idea,git,cache,output,temp,vscode}/**',
      '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,tailwind}.config.*',
    ],
  },
}))
