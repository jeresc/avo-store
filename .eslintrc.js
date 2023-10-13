module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@next/next/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname
  },
  ignorePatterns: ['.eslintrc.js'],
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off'
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      extends: 'standard-with-typescript',
      rules: {
        '@typescript-eslint/space-before-function-paren': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off'
      }
    }
  ]
}
