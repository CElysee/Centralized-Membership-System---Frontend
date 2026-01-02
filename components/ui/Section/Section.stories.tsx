import { Meta, StoryObj } from '@storybook/react';
import { Section } from './index';

const meta: Meta<typeof Section> = {
  title: 'UI/Section',
  component: Section,
  tags: ['autodocs'],
  argTypes: {
    background: {
      control: 'select',
      options: ['white', 'neutral', 'gradient'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Section>;

export const Default: Story = {
  args: {
    title: 'Section Title',
    subtitle: 'Section subtitle goes here',
    children: <p className="text-neutral-600">Section content</p>,
  },
};

export const WithNeutralBackground: Story = {
  args: {
    title: 'Section Title',
    background: 'neutral',
    children: (
      <p className="text-neutral-600">
        Section content with neutral background
      </p>
    ),
  },
};

export const WithGradient: Story = {
  args: {
    title: 'Section Title',
    background: 'gradient',
    children: (
      <p className="text-neutral-600">
        Section content with gradient background
      </p>
    ),
  },
};

export const WithoutTitle: Story = {
  args: {
    children: <p className="text-neutral-600">Section content without title</p>,
  },
};
