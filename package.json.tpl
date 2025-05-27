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
    "@tailwindcss/typography": "^0.5.16",
    "@tailwindcss/vite": "^4.0.9",
    "dotenv": "^16.4.7",
    "lite-vimeo-embed": "github:zaengle/lite-vimeo-embed#master",
    "lite-youtube-embed": "^0.3.0",
    "tailwindcss": "^4.0.9"
  },
  "devDependencies": {
    "@zaengle/eslint-config-base": "^2.0.0",
    "eslint": "^9.0.0",
    "eslint-plugin-vitest-globals": "^1.5.0",
    "eslint-plugin-vue": "^10.0.1",
    "jsdom": "^26.0.0",
    "postcss": "^8.4.38",
    "postcss-focus-visible": "^10.0.1",
    "rollup-plugin-copy": "^3.5.0",
    "vite": "^6.0",
    "vite-plugin-restart": "^0.4.0",
    "vite-plugin-svg-icons": "^2.0.1",
    "vitepress": "^1.2.0",
    "vitest": "^3.1.4"
  }
}
