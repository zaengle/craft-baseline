{
  "name": "<% project.handle %>",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "test": "vitest run --coverage"
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
  "devDependencies": {
    "@tailwindcss/typography": "^0.5.4",
    "@vitest/coverage-c8": "^0.28.5",
    "@zaengle/eslint-config-base": "^1.0.0",
    "autoprefixer": "^10.4.8",
    "dotenv": "^16.0.1",
    "eslint": "^8.33.0",
    "eslint-plugin-vitest-globals": "^1.3.1",
    "jsdom": "^21.1.0",
    "postcss": "^8.4.16",
    "postcss-focus-visible": "^7.1.0",
    "postcss-import": "^14.1.0",
    "rollup-plugin-copy": "^3.4.0",
    "tailwindcss": "^3.1.8",
    "tailwindcss-debug-screens": "^2.2.1",
    "vite": "^4.1.1",
    "vite-plugin-restart": "^0.3.1",
    "vite-svg-sprite-wrapper": "^1.0.3",
    "vitest": "^0.28.5"
  }
}
