/* eslint-env node */
module.exports = {
  root: true,
  'extends': [
    // "plugin:vue/vue3-essential",
    // "plugin:vue/vue3-strongly-recommended",
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'plugin:storybook/recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    './.eslintrc-auto-import.json',
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  ignorePatterns: [
    'postcss.config.js',
    'tailwind.config.js',
    '*.d.ts'
  ],
}
