import { Meta, StoryObj } from '@storybook/react';
import { EmptyState } from './index';

const meta: Meta<typeof EmptyState> = {
  title: 'UI/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  args: {
    title: 'No data found',
    message: 'There is no data to display at this time.',
  },
};

export const WithAction: Story = {
  args: {
    title: 'No members found',
    message: 'Get started by adding your first member.',
    action: {
      label: 'Add Member',
      onClick: () => console.log('Add member clicked'),
    },
  },
};

export const WithIcon: Story = {
  args: {
    title: 'No results',
    message: 'Try adjusting your search criteria.',
    icon: '📭',
  },
};
