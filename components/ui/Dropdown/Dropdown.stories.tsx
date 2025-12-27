import { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './index';
import { Button } from '../Button';

const meta: Meta<typeof Dropdown> = {
  title: 'UI/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    align: {
      control: 'select',
      options: ['left', 'right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    trigger: <Button variant="secondary">Actions</Button>,
    items: [
      {
        label: 'Edit',
        onClick: () => console.log('Edit clicked'),
        icon: (
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        ),
      },
      {
        label: 'Duplicate',
        onClick: () => console.log('Duplicate clicked'),
        icon: (
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        ),
      },
      { divider: true },
      {
        label: 'Delete',
        onClick: () => console.log('Delete clicked'),
        variant: 'danger',
        icon: (
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        ),
      },
    ],
    align: 'right',
  },
};

export const LeftAligned: Story = {
  args: {
    trigger: <Button variant="secondary">Menu</Button>,
    items: [
      { label: 'Option 1', onClick: () => {} },
      { label: 'Option 2', onClick: () => {} },
      { label: 'Option 3', onClick: () => {} },
    ],
    align: 'left',
  },
};

export const WithDisabled: Story = {
  args: {
    trigger: <Button variant="secondary">Actions</Button>,
    items: [
      { label: 'Enabled', onClick: () => {} },
      { label: 'Disabled', onClick: () => {}, disabled: true },
      { label: 'Another Enabled', onClick: () => {} },
    ],
  },
};
