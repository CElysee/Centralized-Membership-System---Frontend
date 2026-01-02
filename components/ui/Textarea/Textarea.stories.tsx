import { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './index';

const meta: Meta<typeof Textarea> = {
  title: 'UI/Textarea',
  component: Textarea,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message',
    rows: 4,
  },
};

export const WithError: Story = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message',
    rows: 4,
    error: 'Message is required',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter a description',
    rows: 4,
    helperText: 'Maximum 500 characters',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message',
    rows: 4,
    disabled: true,
    defaultValue: 'This is a disabled textarea',
  },
};
