'use strict'

module.exports = {
  parser: 'babel-eslint',  
  extends: 'standard',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  globals: {
    self: true
  },
  plugins: [
    'react'
  ],
  rules: {
    strict: [2, 'safe'],
    curly: 'error',
    'block-scoped-var': 2,
    complexity: 1,
    'default-case': 2,
    'dot-notation': 1,
    'guard-for-in': 1,
    'linebreak-style': [1, 'unix'],
    'no-alert': 2,
    'no-case-declarations': 2,
    'no-console': 1,
    'no-constant-condition': 2,
    'no-continue': 1,
    'no-div-regex': 2,
    'no-empty': 1,
    'no-empty-pattern': 2,
    'no-extra-semi': 2,
    'no-implicit-coercion': 2,
    'no-labels': 2,
    'no-loop-func': 2,
    'no-nested-ternary': 1,
    'no-unused-vars': 1,
    'no-script-url': 2,
    'no-warning-comments': 1,
    'quote-props': [2, 'as-needed'],
    'require-yield': 2,
    'max-nested-callbacks': [2, 4],
    'max-depth': [2, 4],
    'valid-jsdoc': [2, {
      requireParamDescription: false,
      requireReturnDescription: false
    }]
  }
}