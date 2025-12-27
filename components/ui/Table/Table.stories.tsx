import { Meta, StoryObj } from '@storybook/react';
import { Table } from './index';
import { Badge } from '../Badge';

const meta: Meta<typeof Table> = {
  title: 'UI/Table',
  component: Table,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Table>;

const sampleData = [
  { id: '1', name: 'John Doe', email: 'john@example.com', status: 'active' },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    status: 'inactive',
  },
  { id: '3', name: 'Bob Johnson', email: 'bob@example.com', status: 'active' },
];

export const Default: Story = {
  args: {
    data: sampleData,
    columns: [
      { key: 'name', header: 'Name' },
      { key: 'email', header: 'Email' },
      { key: 'status', header: 'Status' },
    ],
    keyExtractor: (item: any) => item.id,
  },
};

export const WithCustomRender: Story = {
  args: {
    data: sampleData,
    columns: [
      { key: 'name', header: 'Name' },
      { key: 'email', header: 'Email' },
      {
        key: 'status',
        header: 'Status',
        render: (item: any) => (
          <Badge variant={item.status === 'active' ? 'success' : 'error'}>
            {item.status}
          </Badge>
        ),
      },
    ],
    keyExtractor: (item: any) => item.id,
  },
};
