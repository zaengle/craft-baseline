module.exports = {
  extends: []
    '@zaengle/eslint-config-base',
    'plugin:vitest-globals/recommended'
  ],
   "overrides": [
    {
      "files": ["**/__tests__/*.{j,t}s?(x)", "**/*.spec.{j,t}s?(x)"],
      "env": {
        "vitest-globals/env": true,
      },
    },
  ],
}
