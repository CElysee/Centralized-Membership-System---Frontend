import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../components/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    if (!config.module) {
      config.module = { rules: [] };
    }
    if (!config.module.rules) {
      config.module.rules = [];
    }

    const rules = config.module.rules as any[];

    // Add ts-loader rule that processes TypeScript files
    // This will handle both .ts/.tsx files and the output from Storybook's loaders
    rules.unshift({
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: require.resolve('ts-loader'),
          options: {
            transpileOnly: true,
            compilerOptions: {
              jsx: 'react-jsx',
              module: 'esnext',
              target: 'es2017',
            },
          },
        },
      ],
    });

    // Also modify existing TypeScript rules to ensure ts-loader is in the chain
    const processedRules = rules.map((rule: any) => {
      if (!rule || !rule.test) return rule;
      const testStr = rule.test.toString();

      // For existing TypeScript rules, ensure ts-loader processes the output
      if (testStr.includes('tsx?') || testStr.includes('\\.ts')) {
        const existingUse = Array.isArray(rule.use) ? rule.use : [rule.use];

        // Check if ts-loader is already in the chain
        const hasTsLoader = existingUse.some((loader: any) => {
          const loaderStr =
            typeof loader === 'string' ? loader : loader.loader || '';
          return loaderStr.includes('ts-loader');
        });

        // Add ts-loader at the START (runs LAST, processing Storybook's output)
        if (!hasTsLoader) {
          return {
            ...rule,
            use: [
              {
                loader: require.resolve('ts-loader'),
                options: {
                  transpileOnly: true,
                  compilerOptions: {
                    jsx: 'react-jsx',
                    module: 'esnext',
                    target: 'es2017',
                  },
                },
              },
              ...existingUse,
            ],
          };
        }
      }

      // For CSS files, ensure PostCSS/Tailwind is configured
      if (testStr.includes('css') && !testStr.includes('node_modules')) {
        const existingUse = Array.isArray(rule.use) ? rule.use : [rule.use];
        const hasPostCSS = existingUse.some((loader: any) => {
          const loaderStr =
            typeof loader === 'string' ? loader : loader.loader || '';
          return loaderStr.includes('postcss');
        });

        if (!hasPostCSS) {
          const newUse = [...existingUse];
          const cssLoaderIndex = newUse.findIndex((loader: any) => {
            const loaderStr =
              typeof loader === 'string' ? loader : loader.loader || '';
            return loaderStr.includes('css-loader');
          });

          if (cssLoaderIndex !== -1) {
            newUse.splice(cssLoaderIndex + 1, 0, {
              loader: require.resolve('postcss-loader'),
              options: {
                postcssOptions: {
                  config: path.resolve(__dirname, '../postcss.config.mjs'),
                },
              },
            });
            return {
              ...rule,
              use: newUse,
            };
          }
        }
      }

      return rule;
    });

    config.module.rules = processedRules;

    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'next/link': path.resolve(__dirname, './mockNextRouter.tsx'),
        'next/config': path.resolve(__dirname, './mockNextConfig.ts'),
        '@': path.resolve(__dirname, '..'),
      };
    }

    return config;
  },
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
};

export default config;
