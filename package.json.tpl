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
    "@tailwindcss/typography": "^0.5.20",
    "@tailwindcss/vite": "^4.3.4",
    "dotenv": "^18.0.9",
    "lite-vimeo-embed": "github:zaengle/lite-vimeo-embed#master",
    "lite-youtube-embed": "^0.3.4",
    "tailwindcss": "^4.3.4"
  },
  "devDependencies": {
    "@vitest/coverage-v8": "^5.1.0",
    "@zaengle/eslint-config-base": "^3.1.0",
    "eslint": "^10.14.0",
    "eslint-plugin-vitest-globals": "^1.6.1",
    "eslint-plugin-vue": "^10.12.0",
    "jsdom": "^30.1.3",
    "postcss-focus-visible": "^11.0.0",
    "rollup-plugin-copy": "^3.5.0",
    "vite": "^8.3.5",
    "vite-plugin-restart": "^2.0.0",
    "vite-plugin-svg-icons": "^2.0.1",
    "vitepress": "^1.6.4",
    "vitest": "^5.1.0"
  },
  "overrides": {
    "vite-plugin-restart": {
      "vite": "$vite"
    }
  }
}
