import { Meta, StoryObj } from '@storybook/react';
import { Progress } from './index';

const meta: Meta<typeof Progress> = {
  title: 'UI/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 50,
    max: 100,
  },
};

export const WithLabel: Story = {
  args: {
    value: 75,
    max: 100,
    showLabel: true,
  },
};

export const Success: Story = {
  args: {
    value: 90,
    max: 100,
    variant: 'success',
    showLabel: true,
  },
};

export const Warning: Story = {
  args: {
    value: 50,
    max: 100,
    variant: 'warning',
    showLabel: true,
  },
};

export const Error: Story = {
  args: {
    value: 25,
    max: 100,
    variant: 'error',
    showLabel: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Progress value={50} size="sm" />
      <Progress value={50} size="md" />
      <Progress value={50} size="lg" />
    </div>
  ),
};
