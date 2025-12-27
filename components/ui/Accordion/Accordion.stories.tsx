import { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './index';

const meta: Meta<typeof Accordion> = {
  title: 'UI/Accordion',
  component: Accordion,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    items: [
      {
        title: 'What is the membership system?',
        content:
          'The membership system is a comprehensive platform for managing members and associations.',
      },
      {
        title: 'How do I register?',
        content:
          'You can register by clicking on the registration button and filling out the form.',
      },
      {
        title: 'What are the membership tiers?',
        content:
          'We offer Basic, Premium, and Enterprise membership tiers with different benefits.',
      },
    ],
  },
};

export const AllowMultiple: Story = {
  args: {
    allowMultiple: true,
    items: [
      {
        title: 'Question 1',
        content: 'Answer to question 1',
      },
      {
        title: 'Question 2',
        content: 'Answer to question 2',
      },
      {
        title: 'Question 3',
        content: 'Answer to question 3',
      },
    ],
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      {
        title: 'Feature 1',
        content: 'Description of feature 1',
        icon: (
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
      },
      {
        title: 'Feature 2',
        content: 'Description of feature 2',
        icon: (
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
      },
    ],
  },
};

export const DefaultOpen: Story = {
  args: {
    items: [
      {
        title: 'Open by default',
        content: 'This item is open by default',
        defaultOpen: true,
      },
      {
        title: 'Closed by default',
        content: 'This item is closed by default',
      },
    ],
  },
};
