/**
 * @copyright 2011 Virtual Frameworks LLC. All Rights Reserved.
 * @author Virtual Frameworks LLC
 * @link https://virtualhealth.com/
 * ------------------------------------------------------------
 *
 * @fileOverview - ESLint config
 * */
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  'root': true,
  'parser': '@typescript-eslint/parser',
  'plugins': [
    '@typescript-eslint'
  ],
  'extends': [
    'eslint:recommended',
    'plugin:node/recommended-module',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'parserOptions': {
    // Only ESLint 6.2.0 and later support ES2020.
    'ecmaVersion': 2020
  },
  'rules': {
    'node/exports-style': ['error', 'module.exports'],
    'node/file-extension-in-import': 'off',
    'node/no-missing-import': 'off',
    'node/prefer-global/buffer': ['error', 'always'],
    'node/prefer-global/console': ['error', 'always'],
    'node/prefer-global/process': ['error', 'always'],
    'node/prefer-global/url-search-params': ['error', 'always'],
    'node/prefer-global/url': ['error', 'always'],
    'node/prefer-promises/dns': 'error',
    'node/prefer-promises/fs': 'error',
    'node/no-unsupported-features': 'off',

    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'always'],
    indent: ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      // MemberExpression: null,
      FunctionDeclaration: {
        parameters: 1,
        body: 1
      },
      FunctionExpression: {
        parameters: 1,
        body: 1
      },
      CallExpression: {
        arguments: 1
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      ignoreComments: false
    }],
    'template-curly-spacing': ['error', 'never'],
    'brace-style': ['error', '1tbs'],
    'keyword-spacing': ['error', { 'before': true, 'after': true }],
    'prefer-template': 'error',
    'curly': ['error', 'multi-line'],
    'arrow-body-style': ['error', 'as-needed', {
      requireReturnForObjectLiteral: false,
    }],
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'no-confusing-arrow': 'error',
    'operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],
    'no-mixed-operators': ['error', {
      groups: [
        ['%', '**'],
        ['%', '+'],
        ['%', '-'],
        ['%', '*'],
        ['%', '/'],
        ['/', '*'],
        ['&', '|', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!=='],
        ['&&', '||'],
      ],
      allowSamePrecedence: false
    }],
    'space-before-blocks': 'error',
    'space-infix-ops': 'error',
    'comma-spacing': ['error', { before: false, after: true }],
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always'
    }],
    'space-in-parens': ['error', 'never'],
    'dot-location': ['warn', 'property'],
    'no-array-constructor': 'error',
    'no-new-object': 'error',
    'accessor-pairs': ['error', { 'getWithoutSet': true }],
    'no-unused-expressions': 'error',
    'no-useless-concat': 'error',
    'func-style': ['error', 'expression'],
    'func-names': 'warn',
    'no-new-func': 'error',
    'no-implied-eval': 'error',
    'eqeqeq': 'error',
    'no-nested-ternary': 'error',
    'no-extend-native': 'error',
    'no-underscore-dangle': ['error', {
      allow: [],
      allowAfterThis: false,
      allowAfterSuper: false,
      enforceInMethodNames: true,
    }],
    'prefer-rest-params': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'prefer-destructuring': ['warn', {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: true,
        object: false,
      },
    }, {
      enforceForRenamedProperties: false,
    }],
    'symbol-description': 'error',
    'no-useless-rename': ['error', {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    }],
    'no-useless-constructor': 'error',
    'no-this-before-super': 'error',
    'no-var': 'error',
    'prefer-const': ['error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    }],
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'acc', // for reduce accumulators
        'accumulator', // for reduce accumulators
        'e', // for e.returnvalue
        'ctx', // for Koa routing
        'req', // for Express requests
        'request', // for Express requests
        'res', // for Express responses
        'response', // for Express responses
        '$scope', // for Angular 1 scopes
        'staticContext', // for ReactRouter context
      ]
    }],
    'constructor-super': 'error',
    'no-duplicate-imports': 'error',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['block-like'], next: ['block-like'] },
      { blankLine: 'always', prev: ['expression'], next: ['expression'] },
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let'], next: ['const', 'let'] },
    ],
    'multiline-ternary': ['warn', 'always'],
    'guard-for-in': 'error',
    'max-params': ['warn', 4],
    'object-curly-spacing': ['error', 'always']
  }
};
