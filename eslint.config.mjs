// ESLint v9 flat config
// Next.js uses its own ESLint setup, but this config works for direct ESLint usage

export default [
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'dist/**',
      'coverage/**',
      'storybook-static/**',
      '*.config.js',
      '*.config.mjs',
      '*.config.ts',
      'pnpm-lock.yaml',
    ],
  },
];

