{
  "name": "<% project.handle %>",
  "description": "",
  "main": "index.js",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "test": "vitest run --coverage",
    "eslint": "eslint --ext .js,.vue ./src/assets/ --fix"
  },
  "repository": {
    "type": "git",
    "url": "git+<% project.repoUrl %>"
  },
  "author": "Zaengle Corp",
  "license": "ISC",
  "bugs": {
    "url": "<% project.repoUrl %>/issues"
  },
  "homepage": "<% project.repoUrl %>#README.md",
  "dependencies": {
    "@tailwindcss/forms": "^0.5.7",
    "@tailwindcss/typography": "^0.5.13",
    "tailwindcss": "^3.4.3",
    "tailwindcss-debug-screens": "^2.2.1",
    "lite-vimeo-embed": "github:zaengle/lite-vimeo-embed#master",
    "lite-youtube-embed": "^0.3.0"
  },
  "devDependencies": {
    "@tailwindcss/forms": "^0.5.7",
    "@zaengle/eslint-config-base": "^1.0.0",
    "autoprefixer": "^10.4.8",
    "dotenv": "^16.4.5",
    "eslint": "^8.0.0",
    "eslint-plugin-vitest-globals": "^1.5.0",
    "eslint-plugin-vue": "^9.26.0",
    "jsdom": "^24.0.0",
    "postcss": "^8.4.38",
    "postcss-focus-visible": "^9.0.1",
    "postcss-import": "^16.1.0",
    "rollup-plugin-copy": "^5.0.12",
    "vite": "^5.2.11",
    "vite-plugin-restart": "^0.4.0",
    "vite-plugin-svg-icons": "^2.0.1",
    "vitepress": "^1.2.0",
    "vitest": "^1.6.0"
  }
}
