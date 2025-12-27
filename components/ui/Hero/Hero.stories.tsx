import { Meta, StoryObj } from '@storybook/react';
import { Hero } from './index';

const meta: Meta<typeof Hero> = {
  title: 'UI/Hero',
  component: Hero,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {
    tag: 'Centralized Membership Management',
    headline: 'Unify Your Associations Empower Your Members',
    headlineHighlight: [
      { text: 'Associations', color: 'orange' },
      { text: 'Members', color: 'purple' },
    ],
    description:
      'A comprehensive membership system designed for RCOT and affiliated associations.',
    primaryAction: {
      label: 'Launch Dashboard',
      href: '/dashboard',
    },
    secondaryAction: {
      label: 'View Documentation',
      href: '/docs',
    },
  },
};

export const Simple: Story = {
  args: {
    headline: 'Welcome to Our Platform',
    description: 'Get started with our comprehensive solution.',
    primaryAction: {
      label: 'Get Started',
      href: '/get-started',
    },
  },
};
