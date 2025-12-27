import { Meta, StoryObj } from '@storybook/react';
import { Divider } from './index';

const meta: Meta<typeof Divider> = {
  title: 'UI/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    label: 'OR',
  },
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => (
    <div className="flex h-20 items-center gap-4">
      <span>Left</span>
      <Divider {...args} />
      <span>Right</span>
    </div>
  ),
};
