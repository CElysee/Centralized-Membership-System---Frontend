import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Table } from './index';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Pagination } from '../Pagination';

const meta: Meta<typeof Table> = {
  title: 'UI/Table',
  component: Table,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Table>;

const sampleData = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    status: 'active',
    role: 'Admin',
    lastLogin: '2024-01-15',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    status: 'inactive',
    role: 'Member',
    lastLogin: '2024-01-10',
  },
  {
    id: '3',
    name: 'Bob Johnson',
    email: 'bob@example.com',
    status: 'active',
    role: 'Member',
    lastLogin: '2024-01-14',
  },
  {
    id: '4',
    name: 'Alice Williams',
    email: 'alice@example.com',
    status: 'pending',
    role: 'Guest',
    lastLogin: '2024-01-12',
  },
  {
    id: '5',
    name: 'Charlie Brown',
    email: 'charlie@example.com',
    status: 'active',
    role: 'Admin',
    lastLogin: '2024-01-16',
  },
];

export const Default: Story = {
  args: {
    data: sampleData,
    columns: [
      { key: 'name', header: 'Name' },
      { key: 'email', header: 'Email' },
      { key: 'role', header: 'Role' },
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
          <Badge
            variant={
              item.status === 'active'
                ? 'success'
                : item.status === 'pending'
                  ? 'warning'
                  : 'error'
            }
          >
            {item.status}
          </Badge>
        ),
      },
      { key: 'role', header: 'Role' },
    ],
    keyExtractor: (item: any) => item.id,
  },
};

export const Striped: Story = {
  args: {
    data: sampleData,
    columns: [
      { key: 'name', header: 'Name' },
      { key: 'email', header: 'Email' },
      { key: 'role', header: 'Role' },
      { key: 'status', header: 'Status' },
    ],
    keyExtractor: (item: any) => item.id,
    isStriped: true,
  },
};

export const Compact: Story = {
  args: {
    data: sampleData,
    columns: [
      { key: 'name', header: 'Name' },
      { key: 'email', header: 'Email' },
      { key: 'role', header: 'Role' },
      { key: 'status', header: 'Status' },
    ],
    keyExtractor: (item: any) => item.id,
    isCompact: true,
  },
};

export const Sortable: Story = {
  render: () => {
    const [sortDescriptor, setSortDescriptor] = useState<
      { column: string; direction: 'asc' | 'desc' } | undefined
    >();

    return (
      <Table
        data={sampleData}
        columns={[
          { key: 'name', header: 'Name', allowsSorting: true },
          { key: 'email', header: 'Email', allowsSorting: true },
          { key: 'role', header: 'Role', allowsSorting: true },
          { key: 'lastLogin', header: 'Last Login', allowsSorting: true },
        ]}
        keyExtractor={(item: any) => item.id}
        sortDescriptor={sortDescriptor}
        onSortChange={setSortDescriptor}
      />
    );
  },
};

export const SingleSelection: Story = {
  render: () => {
    const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set());

    return (
      <div className="space-y-4">
        <Table
          data={sampleData}
          columns={[
            { key: 'name', header: 'Name' },
            { key: 'email', header: 'Email' },
            { key: 'role', header: 'Role' },
            { key: 'status', header: 'Status' },
          ]}
          keyExtractor={(item: any) => item.id}
          selectionMode="single"
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
        />
        <div className="text-sm text-neutral-600">
          Selected: {Array.from(selectedKeys).join(', ') || 'None'}
        </div>
      </div>
    );
  },
};

export const MultipleSelection: Story = {
  render: () => {
    const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set());

    return (
      <div className="space-y-4">
        <Table
          data={sampleData}
          columns={[
            { key: 'name', header: 'Name' },
            { key: 'email', header: 'Email' },
            { key: 'role', header: 'Role' },
            {
              key: 'status',
              header: 'Status',
              render: (item: any) => (
                <Badge variant={item.status === 'active' ? 'success' : 'error'}>
                  {item.status}
                </Badge>
              ),
            },
          ]}
          keyExtractor={(item: any) => item.id}
          selectionMode="multiple"
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
        />
        <div className="text-sm text-neutral-600">
          Selected ({selectedKeys.size}):{' '}
          {Array.from(selectedKeys).join(', ') || 'None'}
        </div>
      </div>
    );
  },
};

export const WithEmptyState: Story = {
  args: {
    data: [],
    columns: [
      { key: 'name', header: 'Name' },
      { key: 'email', header: 'Email' },
      { key: 'role', header: 'Role' },
      { key: 'status', header: 'Status' },
    ],
    keyExtractor: (item: any) => item.id,
    emptyMessage: 'No members found',
    emptyDescription:
      "Try adjusting your search or filters to find what you're looking for.",
  },
};

export const WithLoading: Story = {
  args: {
    data: [],
    columns: [
      { key: 'name', header: 'Name' },
      { key: 'email', header: 'Email' },
      { key: 'role', header: 'Role' },
      { key: 'status', header: 'Status' },
    ],
    keyExtractor: (item: any) => item.id,
    isLoading: true,
    skeletonRows: 5,
  },
};

export const WithLoadingAndSelection: Story = {
  args: {
    data: [],
    columns: [
      { key: 'name', header: 'Name' },
      { key: 'email', header: 'Email' },
      { key: 'role', header: 'Role' },
      { key: 'status', header: 'Status' },
    ],
    keyExtractor: (item: any) => item.id,
    isLoading: true,
    selectionMode: 'multiple',
    skeletonRows: 5,
  },
};

export const WithTopContent: Story = {
  args: {
    data: sampleData,
    columns: [
      { key: 'name', header: 'Name' },
      { key: 'email', header: 'Email' },
      { key: 'role', header: 'Role' },
      { key: 'status', header: 'Status' },
    ],
    keyExtractor: (item: any) => item.id,
    topContent: (
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-neutral-900">Members</h3>
        <Button variant="primary" size="sm">
          Add Member
        </Button>
      </div>
    ),
  },
};

export const WithPagination: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 2;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = sampleData.slice(
      startIndex,
      startIndex + itemsPerPage
    );
    const totalPages = Math.ceil(sampleData.length / itemsPerPage);

    return (
      <div className="space-y-4">
        <Table
          data={paginatedData}
          columns={[
            { key: 'name', header: 'Name' },
            { key: 'email', header: 'Email' },
            { key: 'role', header: 'Role' },
            { key: 'status', header: 'Status' },
          ]}
          keyExtractor={(item: any) => item.id}
          bottomContent={
            <div className="flex items-center justify-center">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          }
        />
      </div>
    );
  },
};

export const StickyHeader: Story = {
  args: {
    data: [...sampleData, ...sampleData, ...sampleData],
    columns: [
      { key: 'name', header: 'Name' },
      { key: 'email', header: 'Email' },
      { key: 'role', header: 'Role' },
      { key: 'status', header: 'Status' },
    ],
    keyExtractor: (item: any) => item.id,
    isHeaderSticky: true,
    className: 'max-h-96 overflow-y-auto',
  },
};

export const WithoutWrapper: Story = {
  args: {
    data: sampleData,
    columns: [
      { key: 'name', header: 'Name' },
      { key: 'email', header: 'Email' },
      { key: 'role', header: 'Role' },
      { key: 'status', header: 'Status' },
    ],
    keyExtractor: (item: any) => item.id,
    removeWrapper: true,
  },
};

export const WithRowActions: Story = {
  args: {
    data: sampleData,
    columns: [
      { key: 'name', header: 'Name' },
      { key: 'email', header: 'Email' },
      { key: 'role', header: 'Role' },
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
    onRowAction: (key) => {
      alert(`Row clicked: ${key}`);
    },
  },
};

export const AlignedColumns: Story = {
  args: {
    data: sampleData,
    columns: [
      { key: 'name', header: 'Name', align: 'start' },
      { key: 'email', header: 'Email', align: 'center' },
      { key: 'role', header: 'Role', align: 'center' },
      { key: 'status', header: 'Status', align: 'end' },
    ],
    keyExtractor: (item: any) => item.id,
  },
};
