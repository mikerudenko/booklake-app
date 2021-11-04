module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'react-app',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['**/*.js', '**/*.ts', '**/*.tsx'],
      excludedFiles: [
        'config/**/*.js',
        'node_modules/**/*.ts',
        'coverage/lcov-report/*.js',
      ],
    },
  ],
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    'interface-name': 2,
    'no-angle-bracket-type-assertion': 2,
    'no-empty': 0,
    'no-unused-vars': false,
    'object-literal-sort-keys': false,
    'react-hooks-nesting': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'jsx-boolean-value': [true, 'never'],
    'trailing-comma': [
      true,
      {
        multiline: 'always',
        singleline: 'never',
        esSpecCompliant: true,
      },
    ],
  },
};
