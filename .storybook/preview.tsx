import { Preview } from '@storybook/react';
import '../app/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
  },
  decorators: [
    (Story) => (
      <div style={{ fontFamily: 'Inter, sans-serif' }}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
