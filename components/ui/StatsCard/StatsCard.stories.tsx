import { Meta, StoryObj } from '@storybook/react';
import { StatsCard } from './index';

const meta: Meta<typeof StatsCard> = {
  title: 'UI/StatsCard',
  component: StatsCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StatsCard>;

export const Default: Story = {
  args: {
    value: '10K+',
    label: 'Active Members',
  },
};

export const WithIcon: Story = {
  args: {
    value: '10K+',
    label: 'Active Members',
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

export const WithTrend: Story = {
  args: {
    value: '10K+',
    label: 'Active Members',
    trend: { value: '12% increase', isPositive: true },
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

export const NegativeTrend: Story = {
  args: {
    value: '5K',
    label: 'Inactive Members',
    trend: { value: '5% decrease', isPositive: false },
  },
};
