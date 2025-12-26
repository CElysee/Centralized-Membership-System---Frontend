module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'prettier --write',
    // ESLint is handled by Next.js lint command separately
    // Using prettier only in pre-commit to avoid ESLint v9 config issues
  ],
  '*.{json,md,mdx,css,html,yml,yaml,scss}': ['prettier --write'],
};
