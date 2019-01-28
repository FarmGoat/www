module.exports = {
  extends: ['eslint:recommended', 'airbnb', 'plugin:prettier/recommended'],
  env: {
    browser: true,
    es6: true,
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-filename-extension': 'off',
    'react/forbid-prop-types': ['error', { forbid: ['any', 'array'] }],
  },
}
