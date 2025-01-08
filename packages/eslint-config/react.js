const { resolve } = require('node:path')

const project = resolve(process.cwd(), 'tsconfig.json')

/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'prettier',
    'turbo'
  ],
  ignorePatterns: ['dist/', 'node_modules/'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project
  },
  plugins: ['@typescript-eslint', 'import', 'react-hooks', 'prettier'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
        singleQuote: true
      }
    ],
    'prefer-const': 'error',
    'no-console': 'error'
  }
}
