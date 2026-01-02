import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ConfirmDialog } from './index';
import { Button } from '../Button';

const meta: Meta<typeof ConfirmDialog> = {
  title: 'UI/ConfirmDialog',
  component: ConfirmDialog,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'danger'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ConfirmDialog>;

const DialogWrapper = (args: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
      <ConfirmDialog
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={() => {
          console.log('Confirmed');
          setIsOpen(false);
        }}
      />
    </>
  );
};

export const Default: Story = {
  render: (args) => <DialogWrapper {...args} />,
  args: {
    title: 'Confirm Action',
    message: 'Are you sure you want to proceed with this action?',
  },
};

export const Danger: Story = {
  render: (args) => <DialogWrapper {...args} />,
  args: {
    title: 'Delete Member',
    message:
      'Are you sure you want to delete this member? This action cannot be undone.',
    variant: 'danger',
    confirmText: 'Delete',
  },
};

export const Loading: Story = {
  render: (args) => <DialogWrapper {...args} />,
  args: {
    title: 'Processing',
    message: 'Please wait while we process your request.',
    loading: true,
  },
};
