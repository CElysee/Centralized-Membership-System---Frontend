import { Meta, StoryObj } from '@storybook/react';
import { ErrorState } from './index';

const meta: Meta<typeof ErrorState> = {
  title: 'UI/ErrorState',
  component: ErrorState,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ErrorState>;

export const Default: Story = {
  args: {
    title: 'Something went wrong',
    message: 'An error occurred while loading data. Please try again.',
  },
};

export const WithRetry: Story = {
  args: {
    title: 'Failed to load',
    message:
      'Unable to load the requested data. Please check your connection and try again.',
    onRetry: () => console.log('Retry clicked'),
  },
};
