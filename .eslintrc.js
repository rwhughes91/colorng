module.exports = {
  parser: '@typescript-eslint/parser',
  extends: 'universe/native',
  rules: {
    'react-hooks/exhaustive-deps': 'warn',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars-experimental': 'error',
  },
};
