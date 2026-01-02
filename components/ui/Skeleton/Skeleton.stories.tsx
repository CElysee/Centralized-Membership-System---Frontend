import { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './index';

const meta: Meta<typeof Skeleton> = {
  title: 'UI/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {},
};

export const CustomSize: Story = {
  args: {
    width: '200px',
    height: '20px',
  },
};

export const Multiple: Story = {
  render: () => (
    <div className="space-y-2">
      <Skeleton width="100%" height="20px" />
      <Skeleton width="80%" height="20px" />
      <Skeleton width="60%" height="20px" />
    </div>
  ),
};

export const CardSkeleton: Story = {
  render: () => (
    <div className="space-y-4 rounded-lg border p-4">
      <Skeleton width="100%" height="24px" />
      <Skeleton width="100%" height="16px" />
      <Skeleton width="100%" height="16px" />
      <Skeleton width="60%" height="16px" />
    </div>
  ),
};
