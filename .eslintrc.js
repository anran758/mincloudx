module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': 'error', // 启用 prettier 的规则
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    // 关闭对禁止使用非空断言的检查
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
  globals: {
    BaaS: true,
  },
  overrides: [
    {
      files: ['**/__tests__/**', '**/__mocks__/**', '**/__helpers__/**'],
      env: {
        jest: true,
      },
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'import/order': 'off',
        'max-classes-per-file': 'off',
        'node/no-extraneous-require': 'off',
        'node/no-unpublished-require': 'off',
        'no-console': 'off',
      },
    },
  ],
};
