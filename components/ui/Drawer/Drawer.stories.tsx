import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Drawer } from './index';
import { Button } from '../Button';

const meta: Meta<typeof Drawer> = {
  title: 'UI/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['left', 'right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

const DrawerWrapper = (args: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
      <Drawer {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="space-y-4">
          <p className="text-neutral-600">This is the drawer content.</p>
          <p className="text-neutral-600">You can put anything here.</p>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </div>
      </Drawer>
    </>
  );
};

export const Default: Story = {
  render: (args) => <DrawerWrapper {...args} />,
  args: {
    title: 'Drawer Title',
    position: 'right',
  },
};

export const Left: Story = {
  render: (args) => <DrawerWrapper {...args} />,
  args: {
    title: 'Left Drawer',
    position: 'left',
  },
};

export const WithoutTitle: Story = {
  render: (args) => <DrawerWrapper {...args} />,
  args: {
    position: 'right',
  },
};
