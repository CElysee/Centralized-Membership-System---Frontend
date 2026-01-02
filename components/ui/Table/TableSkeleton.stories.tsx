import { Meta, StoryObj } from '@storybook/react';
import { TableSkeleton } from './TableSkeleton';

const meta: Meta<typeof TableSkeleton> = {
  title: 'UI/Table/TableSkeleton',
  component: TableSkeleton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TableSkeleton>;

const sampleColumns = [
  { key: 'name', header: 'Name' },
  { key: 'email', header: 'Email' },
  { key: 'role', header: 'Role' },
  { key: 'status', header: 'Status' },
  { key: 'lastLogin', header: 'Last Login' },
];

export const Default: Story = {
  args: {
    columns: sampleColumns,
    rows: 5,
  },
};

export const Compact: Story = {
  args: {
    columns: sampleColumns,
    rows: 5,
    isCompact: true,
  },
};

export const Striped: Story = {
  args: {
    columns: sampleColumns,
    rows: 5,
    isStriped: true,
  },
};

export const WithMultipleSelection: Story = {
  args: {
    columns: sampleColumns,
    rows: 5,
    selectionMode: 'multiple',
  },
};

export const WithSingleSelection: Story = {
  args: {
    columns: sampleColumns,
    rows: 5,
    selectionMode: 'single',
  },
};

export const ManyRows: Story = {
  args: {
    columns: sampleColumns,
    rows: 10,
  },
};

export const FewRows: Story = {
  args: {
    columns: sampleColumns,
    rows: 3,
  },
};

export const WithAlignedColumns: Story = {
  args: {
    columns: [
      { key: 'name', header: 'Name', align: 'start' },
      { key: 'email', header: 'Email', align: 'center' },
      { key: 'role', header: 'Role', align: 'center' },
      { key: 'status', header: 'Status', align: 'end' },
    ],
    rows: 5,
  },
};
