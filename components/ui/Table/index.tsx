'use client';

import React, { useState, useMemo } from 'react';
import { EmptyState } from '../EmptyState';
import { Spinner } from '../Spinner';
import { Checkbox } from '../Checkbox';
import { TableSkeleton } from './TableSkeleton';

export interface Column<T> {
  key: string;
  header: string;
  render?: (item: T) => React.ReactNode;
  align?: 'start' | 'center' | 'end';
  width?: string | number;
  allowsSorting?: boolean;
  isRowHeader?: boolean;
}

export interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  keyExtractor: (item: T) => string;
  className?: string;
  // Styling options
  isStriped?: boolean;
  isCompact?: boolean;
  removeWrapper?: boolean;
  hideHeader?: boolean;
  // Empty state
  emptyContent?: React.ReactNode;
  emptyMessage?: string;
  emptyDescription?: string;
  // Loading state
  isLoading?: boolean;
  loadingContent?: React.ReactNode;
  skeletonRows?: number;
  // Selection
  selectionMode?: 'none' | 'single' | 'multiple';
  selectedKeys?: Set<string>;
  defaultSelectedKeys?: Set<string>;
  onSelectionChange?: (keys: Set<string>) => void;
  disabledKeys?: Set<string>;
  // Sorting
  sortDescriptor?: { column: string; direction: 'asc' | 'desc' };
  onSortChange?: (descriptor: {
    column: string;
    direction: 'asc' | 'desc';
  }) => void;
  // Row actions
  onRowAction?: (key: string) => void;
  // Sticky header
  isHeaderSticky?: boolean;
  // Top and bottom content
  topContent?: React.ReactNode;
  bottomContent?: React.ReactNode;
}

export function Table<T extends Record<string, any>>({
  data,
  columns,
  keyExtractor,
  className = '',
  isStriped = false,
  isCompact = false,
  removeWrapper = false,
  hideHeader = false,
  emptyContent,
  emptyMessage = 'No data available',
  emptyDescription = 'There are no items to display.',
  isLoading = false,
  loadingContent,
  skeletonRows = 5,
  selectionMode = 'none',
  selectedKeys: controlledSelectedKeys,
  defaultSelectedKeys,
  onSelectionChange,
  disabledKeys,
  sortDescriptor,
  onSortChange,
  onRowAction,
  isHeaderSticky = false,
  topContent,
  bottomContent,
}: TableProps<T>) {
  const [internalSelectedKeys, setInternalSelectedKeys] = useState<Set<string>>(
    defaultSelectedKeys || new Set()
  );

  const selectedKeys = controlledSelectedKeys ?? internalSelectedKeys;
  const isControlled = controlledSelectedKeys !== undefined;

  const handleSelectionChange = (keys: Set<string>) => {
    if (!isControlled) {
      setInternalSelectedKeys(keys);
    }
    onSelectionChange?.(keys);
  };

  const toggleSelection = (key: string) => {
    const newKeys = new Set(selectedKeys);
    if (newKeys.has(key)) {
      newKeys.delete(key);
    } else {
      if (selectionMode === 'single') {
        newKeys.clear();
      }
      newKeys.add(key);
    }
    handleSelectionChange(newKeys);
  };

  const handleSelectAll = () => {
    if (selectionMode !== 'multiple') return;
    const allKeys = new Set(data.map((item) => keyExtractor(item)));
    const allSelected =
      allKeys.size > 0 &&
      Array.from(allKeys).every((key) => selectedKeys.has(key));

    if (allSelected) {
      handleSelectionChange(new Set());
    } else {
      handleSelectionChange(allKeys);
    }
  };

  const handleSort = (columnKey: string) => {
    if (
      !onSortChange ||
      !columns.find((col) => col.key === columnKey)?.allowsSorting
    )
      return;

    const currentDirection =
      sortDescriptor?.column === columnKey
        ? sortDescriptor.direction
        : undefined;
    const newDirection = currentDirection === 'asc' ? 'desc' : 'asc';

    onSortChange({ column: columnKey, direction: newDirection });
  };

  const sortedData = useMemo(() => {
    if (!sortDescriptor || !onSortChange) return data;

    const column = columns.find((col) => col.key === sortDescriptor.column);
    if (!column) return data;

    return [...data].sort((a, b) => {
      const aValue = (a[sortDescriptor.column] ?? '') as string | number;
      const bValue = (b[sortDescriptor.column] ?? '') as string | number;

      if (aValue < bValue) return sortDescriptor.direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDescriptor.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }, [data, sortDescriptor, columns, onSortChange]);

  const allSelected =
    data.length > 0 &&
    data.every((item) => selectedKeys.has(keyExtractor(item)));
  const someSelected = data.some((item) =>
    selectedKeys.has(keyExtractor(item))
  );

  const tableContent = (
    <table className={`min-w-full ${isCompact ? 'text-sm' : ''}`}>
      {!hideHeader && (
        <thead className={isHeaderSticky ? 'sticky top-0 z-10 bg-white' : ''}>
          <tr className="border-b border-neutral-200 bg-neutral-50">
            {selectionMode === 'multiple' && (
              <th className={`${isCompact ? 'px-3 py-2' : 'px-6 py-3'} w-12`}>
                <Checkbox
                  checked={allSelected}
                  indeterminate={someSelected && !allSelected}
                  onChange={handleSelectAll}
                  aria-label="Select all"
                />
              </th>
            )}
            {columns.map((column) => {
              const isSorted = sortDescriptor?.column === column.key;
              const sortDirection = isSorted
                ? sortDescriptor.direction
                : undefined;

              return (
                <th
                  key={column.key}
                  className={` ${isCompact ? 'px-3 py-2' : 'px-6 py-3'} text-left text-xs font-semibold uppercase tracking-wider text-neutral-700 ${column.align === 'center' ? 'text-center' : column.align === 'end' ? 'text-right' : ''} ${column.allowsSorting ? 'cursor-pointer transition-colors hover:bg-neutral-100' : ''} ${column.width ? '' : ''} `}
                  style={column.width ? { width: column.width } : undefined}
                  onClick={() => column.allowsSorting && handleSort(column.key)}
                >
                  <div className="flex items-center gap-2">
                    <span>{column.header}</span>
                    {column.allowsSorting && (
                      <span className="text-neutral-400">
                        {sortDirection === 'asc' ? (
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
                              d="M5 15l7-7 7 7"
                            />
                          </svg>
                        ) : sortDirection === 'desc' ? (
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
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="h-4 w-4 opacity-30"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                            />
                          </svg>
                        )}
                      </span>
                    )}
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
      )}
      <tbody className="divide-y divide-neutral-200 bg-white">
        {isLoading ? (
          <>
            {loadingContent ? (
              <tr>
                <td
                  colSpan={
                    columns.length +
                    (selectionMode === 'multiple' ? 1 : 0) +
                    (selectionMode === 'single' ? 1 : 0)
                  }
                  className="py-12 text-center"
                >
                  {loadingContent}
                </td>
              </tr>
            ) : (
              Array.from({ length: skeletonRows }, (_, rowIndex) => (
                <tr
                  key={`skeleton-${rowIndex}`}
                  className={
                    isStriped && rowIndex % 2 === 0
                      ? 'bg-neutral-50'
                      : 'bg-white'
                  }
                >
                  {selectionMode === 'multiple' && (
                    <td className={`${isCompact ? 'px-3 py-2' : 'px-6 py-4'}`}>
                      <div className="h-5 w-5 animate-pulse rounded border border-neutral-200 bg-neutral-200" />
                    </td>
                  )}
                  {selectionMode === 'single' && (
                    <td
                      className={`${isCompact ? 'px-3 py-2' : 'px-6 py-4'} w-12`}
                    >
                      <div className="mx-auto h-4 w-4 animate-pulse rounded-full bg-neutral-200" />
                    </td>
                  )}
                  {columns.map((column, colIndex) => {
                    const widths = ['80%', '60%', '70%', '50%', '90%'];
                    const width = widths[colIndex % widths.length];
                    return (
                      <td
                        key={column.key}
                        className={` ${isCompact ? 'px-3 py-2 text-sm' : 'px-6 py-4 text-sm'} ${column.align === 'center' ? 'text-center' : column.align === 'end' ? 'text-right' : ''} `}
                      >
                        <div
                          className="animate-pulse rounded-lg bg-neutral-200"
                          style={{ width, height: isCompact ? '14px' : '16px' }}
                        />
                      </td>
                    );
                  })}
                </tr>
              ))
            )}
          </>
        ) : sortedData.length === 0 ? (
          <tr>
            <td
              colSpan={columns.length + (selectionMode === 'multiple' ? 1 : 0)}
              className="py-12"
            >
              {emptyContent || (
                <EmptyState title={emptyMessage} message={emptyDescription} />
              )}
            </td>
          </tr>
        ) : (
          sortedData.map((item, index) => {
            const key = keyExtractor(item);
            const isSelected = selectedKeys.has(key);
            const isDisabled = disabledKeys?.has(key) ?? false;
            const isEven = index % 2 === 0;

            return (
              <tr
                key={key}
                className={`transition-colors ${isStriped && isEven ? 'bg-neutral-50' : 'bg-white'} ${isSelected ? 'bg-brand-orange-50' : ''} ${onRowAction && !isDisabled ? 'cursor-pointer hover:bg-neutral-50' : ''} ${isDisabled ? 'cursor-not-allowed opacity-50' : ''} `}
                onClick={() => {
                  if (isDisabled) return;
                  if (selectionMode !== 'none') {
                    toggleSelection(key);
                  }
                  if (onRowAction) {
                    onRowAction(key);
                  }
                }}
              >
                {selectionMode === 'multiple' && (
                  <td className={`${isCompact ? 'px-3 py-2' : 'px-6 py-4'}`}>
                    <Checkbox
                      checked={isSelected}
                      onChange={() => toggleSelection(key)}
                      disabled={isDisabled}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </td>
                )}
                {selectionMode === 'single' && (
                  <td
                    className={`${isCompact ? 'px-3 py-2' : 'px-6 py-4'} w-12`}
                  >
                    <input
                      type="radio"
                      checked={isSelected}
                      onChange={() => toggleSelection(key)}
                      disabled={isDisabled}
                      onClick={(e) => e.stopPropagation()}
                      className="h-4 w-4 text-brand-orange-500 focus:ring-brand-orange-500"
                    />
                  </td>
                )}
                {columns.map((column) => {
                  const cellContent = column.render
                    ? column.render(item)
                    : (item[column.key] ?? '');

                  return (
                    <td
                      key={column.key}
                      className={` ${isCompact ? 'px-3 py-2 text-sm' : 'px-6 py-4 text-sm'} whitespace-nowrap text-neutral-900 ${column.align === 'center' ? 'text-center' : column.align === 'end' ? 'text-right' : ''} `}
                    >
                      {cellContent}
                    </td>
                  );
                })}
              </tr>
            );
          })
        )}
      </tbody>
    </table>
  );

  if (removeWrapper) {
    return (
      <div className={className}>
        {topContent && <div className="mb-4">{topContent}</div>}
        {tableContent}
        {bottomContent && <div className="mt-4">{bottomContent}</div>}
      </div>
    );
  }

  return (
    <div
      className={`overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm ${className}`}
    >
      {topContent && (
        <div className="border-b border-neutral-200 p-4">{topContent}</div>
      )}
      <div className="overflow-x-auto">{tableContent}</div>
      {bottomContent && (
        <div className="border-t border-neutral-200 p-4">{bottomContent}</div>
      )}
    </div>
  );
}

// Export sub-components for more flexible usage (inspired by HeroUI)
export const TableHeader = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => <thead className={className}>{children}</thead>;

export const TableBody = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => <tbody className={className}>{children}</tbody>;

export const TableRow = ({
  children,
  className = '',
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => (
  <tr className={className} onClick={onClick}>
    {children}
  </tr>
);

export const TableCell = ({
  children,
  className = '',
  colSpan,
}: {
  children: React.ReactNode;
  className?: string;
  colSpan?: number;
}) => (
  <td className={className} colSpan={colSpan}>
    {children}
  </td>
);

export const TableColumn = ({
  children,
  className = '',
  align,
}: {
  children: React.ReactNode;
  className?: string;
  align?: 'start' | 'center' | 'end';
}) => (
  <th className={className} style={{ textAlign: align }}>
    {children}
  </th>
);

// Export TableSkeleton
export { TableSkeleton } from './TableSkeleton';
