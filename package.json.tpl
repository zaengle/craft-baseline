{
  "name": "<% project.handle %>",
  "version": "1.0.0",
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
    "url": "git+<% project.repoUrl %>.git"
  },
  "author": "Zaengle Corp",
  "license": "ISC",
  "bugs": {
    "url": "<% project.repoUrl %>/issues"
  },
  "homepage": "<% project.repoUrl %>#README.md",
  "dependencies": {
    "@tailwindcss/typography": "^0.5.4",
    "tailwindcss": "^3.1.8",
    "tailwindcss-debug-screens": "^2.2.1",
    "lite-vimeo-embed": "github:zaengle/lite-vimeo-embed#master",
    "lite-youtube-embed": "^0.3.0"
  },
  "devDependencies": {
    "@zaengle/eslint-config-base": "^1.0.0",
    "autoprefixer": "^10.4.8",
    "dotenv": "^16.0.1",
    "eslint": "^8.33.0",
    "eslint-plugin-vitest-globals": "^1.3.1",
    "eslint-plugin-vue": "^9.11.0",
    "jsdom": "^24.0.0",
    "postcss": "^8.4.16",
    "postcss-focus-visible": "^9.0.1",
    "postcss-import": "^16.0.0",
    "rollup-plugin-copy": "^3.4.0",
    "vite": "^4.1.1",
    "vite-plugin-restart": "^0.4.0",
    "vite-plugin-svg-icons": "^2.0.1",
    "vitepress": "^1.0.0-beta.3",
    "vitest": "^1.0.0",
    "@tailwindcss/forms": "^0.5.7"
  }
}
