module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['simple-import-sort', '@typescript-eslint', 'unused-imports'],
  extends: ['prettier/@typescript-eslint', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    'simple-import-sort/sort': [
      'error',
      {
        groups: [
          // Node.js builtins. You could also generate this regex if you use a `.js` config.
          // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
          [
            '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
          ],
          ['^@nest', '^@?\\w', '^common(\/.+)?$'],
          ['^lib(\/.+)?$'],
          ['^app\/.+(?<=\.module$)', '^app\/.+(?<!\.module$)'],
        ],
      },
    ],

    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/no-duplicate-imports': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
      },
    ],
    'unused-imports/no-unused-imports-ts': 'error',
  },
}
