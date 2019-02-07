module.exports = {
  extends: [ './airbnb/index.js', 'plugin:import/errors' ],
  parser: 'babel-eslint',
  plugins: [ 'react-hooks' ],
  rules: {
    'spaced-comment': 2, // http://eslint.org/docs/rules/spaced-comment
    'object-curly-spacing': [ 2, 'always' ], // http://eslint.org/docs/rules/object-curly-spacing
    'array-bracket-spacing': [ 2, 'always' ], // http://eslint.org/docs/rules/array-bracket-spacing
    'max-len': [ 1, 80, 2 ], // http://eslint.org/docs/rules/max-len
    'max-params': [ 1, 3 ], // http://eslint.org/docs/rules/max-params
    'handle-callback-err': [ 2, 'error' ], // http://eslint.org/docs/rules/handle-callback-err
    'func-names': 0, // http://eslint.org/docs/rules/func-names
    'space-before-function-paren': [
      2,
      {
        // http://eslint.org/docs/rules/space-before-function-paren
        anonymous: 'always',
        named: 'never',
      },
    ],
    'no-undef': 2, // http://eslint.org/docs/rules/no-undef
    'react/no-multi-comp': 0,
    'react/prefer-es6-class': 0,
    'react/prefer-stateless-function': 0,
    'no-whitespace-before-property': 2,
    'newline-per-chained-call': [ 2, { ignoreChainWithDepth: 4 } ],
    'react-hooks/rules-of-hooks': 'error',
  },
};
