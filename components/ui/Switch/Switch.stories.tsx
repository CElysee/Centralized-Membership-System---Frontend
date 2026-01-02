import { Meta, StoryObj } from '@storybook/react';
import { Switch } from './index';

const meta: Meta<typeof Switch> = {
  title: 'UI/Switch',
  component: Switch,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    label: 'Enable notifications',
  },
};

export const Checked: Story = {
  args: {
    label: 'Enable notifications',
    defaultChecked: true,
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Enable notifications',
    description: 'Receive email notifications about your account',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Enable notifications',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Enable notifications',
    disabled: true,
    defaultChecked: true,
  },
};
