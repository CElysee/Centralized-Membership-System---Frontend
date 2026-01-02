import { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from './index';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'UI/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Members', href: '/members' },
      { label: 'John Doe' },
    ],
  },
};

export const LongPath: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Dashboard', href: '/dashboard' },
      { label: 'Members', href: '/members' },
      { label: 'Profile', href: '/members/profile' },
      { label: 'Settings' },
    ],
  },
};

export const ShortPath: Story = {
  args: {
    items: [{ label: 'Home', href: '/' }, { label: 'About' }],
  },
};
