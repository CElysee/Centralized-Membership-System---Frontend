module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
    'prefer-const': 'error',
  },
  overrides: [
    {
      files: ['*.stories.{ts,tsx,js,jsx,mjs,cjs}'],
      extends: ['plugin:storybook/recommended'],
    },
  ],
  ignorePatterns: [
    'node_modules',
    '.next',
    'out',
    'build',
    'dist',
    'coverage',
    'storybook-static',
    '*.config.js',
    '*.config.mjs',
    '*.config.ts',
    'pnpm-lock.yaml',
  ],
};

