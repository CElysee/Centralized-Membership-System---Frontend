import { Meta, StoryObj } from '@storybook/react';
import { FeatureCard } from './index';

const meta: Meta<typeof FeatureCard> = {
  title: 'UI/FeatureCard',
  component: FeatureCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FeatureCard>;

export const Default: Story = {
  args: {
    title: 'Member Management',
    description:
      'Comprehensive member profiles with customizable fields and automated renewal reminders.',
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
};

export const WithoutIcon: Story = {
  args: {
    title: 'Feature Title',
    description: 'Feature description goes here.',
  },
};
