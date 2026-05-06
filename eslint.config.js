const zaengleBase = require('@zaengle/eslint-config-base')
const vitestGlobals = require('eslint-plugin-vitest-globals')

module.exports = [
  ...zaengleBase,
  {
    plugins: {
      'vitest-globals': vitestGlobals,
    },
    rules: {
      ...vitestGlobals.configs.recommended.rules,
    },
  },
  {
    files: ['**/__tests__/*.{j,t}s?(x)', '**/*.spec.{j,t}s?(x)'],
    languageOptions: {
      globals: vitestGlobals.environments.env.globals,
    },
  },
]
