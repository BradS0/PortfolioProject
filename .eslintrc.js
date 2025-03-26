module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/prop-types': 'off',
    'linebreak-style': 'off',
    'no-empty': 'off',
    'max-len': ['off', { code: 120 }],
    quotes: [2, 'single', 'avoid-escape'],
    'spaced-comment': 'warn',
    'switch-colon-spacing': 'warn',
    yoda: 'warn',
  },
};
