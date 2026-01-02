import { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './index';

const meta: Meta<typeof Avatar> = {
  title: 'UI/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    status: {
      control: 'select',
      options: ['online', 'offline', 'away', undefined],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=1',
    alt: 'User avatar',
    name: 'John Doe',
  },
};

export const WithInitials: Story = {
  args: {
    name: 'John Doe',
  },
};

export const WithStatus: Story = {
  args: {
    name: 'Jane Smith',
    status: 'online',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar name="Small" size="sm" />
      <Avatar name="Medium" size="md" />
      <Avatar name="Large" size="lg" />
      <Avatar name="XLarge" size="xl" />
    </div>
  ),
};

export const StatusVariants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar name="Online" status="online" />
      <Avatar name="Offline" status="offline" />
      <Avatar name="Away" status="away" />
    </div>
  ),
};
