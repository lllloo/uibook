/* eslint-env node */
module.exports = {
  root: true,
  'extends': [
    // "plugin:vue/vue3-essential",
    // "plugin:vue/vue3-strongly-recommended",
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'plugin:storybook/recommended',
    '@vue/eslint-config-prettier/skip-formatting',
    './.eslintrc-auto-import.json',
  ],
  overrides: [
    {
      files: [
        'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}',
        'src/components/__tests__/*.cy.{js,ts,jsx,tsx}'
      ],
      'extends': [
        'plugin:cypress/recommended'
      ]
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  ignorePatterns: [
    'cypress.config.js',
    'cypress-image-diff.config.js',
    'cypress/support/*',
    'postcss.config.js',
    'tailwind.config.js',
    '*.d.ts'
  ],
}
