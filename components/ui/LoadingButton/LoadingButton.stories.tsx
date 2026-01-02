import { Meta, StoryObj } from '@storybook/react';
import { LoadingButton } from './index';

const meta: Meta<typeof LoadingButton> = {
  title: 'UI/LoadingButton',
  component: LoadingButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoadingButton>;

export const Default: Story = {
  args: {
    children: 'Submit',
    loading: false,
  },
};

export const Loading: Story = {
  args: {
    children: 'Submit',
    loading: true,
  },
};

export const LoadingWithText: Story = {
  args: {
    children: 'Submit',
    loading: true,
    loadingText: 'Processing...',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Submit',
    disabled: true,
  },
};
