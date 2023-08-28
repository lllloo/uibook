/* eslint-env node */
module.exports = {
  root: true,
  'extends': [
    // "plugin:vue/vue3-essential",
    // "plugin:vue/vue3-strongly-recommended",
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'plugin:storybook/recommended',
    './.eslintrc-auto-import.json',
  ],
  overrides: [
    {
      files: [
        'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'
      ],
      'extends': [
        'plugin:cypress/recommended'
      ]
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  ignorePatterns: ['cypress.config.js'],
  'rules': {
    'quotes': [2, 'single']
  }
}
