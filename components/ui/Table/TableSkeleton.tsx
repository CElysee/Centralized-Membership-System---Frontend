'use client';

import React from 'react';
import { Skeleton } from '../Skeleton';
import { Column } from './index';

export interface TableSkeletonProps {
  columns: Column<any>[];
  rows?: number;
  selectionMode?: 'none' | 'single' | 'multiple';
  isCompact?: boolean;
  isStriped?: boolean;
  className?: string;
}

export const TableSkeleton: React.FC<TableSkeletonProps> = ({
  columns,
  rows = 5,
  selectionMode = 'none',
  isCompact = false,
  isStriped = false,
  className = '',
}) => {
  const skeletonRows = Array.from({ length: rows }, (_, i) => i);

  return (
    <div
      className={`overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm ${className}`}
    >
      <div className="overflow-x-auto">
        <table className={`min-w-full ${isCompact ? 'text-sm' : ''}`}>
          <thead>
            <tr className="border-b border-neutral-200 bg-neutral-50">
              {selectionMode === 'multiple' && (
                <th className={`${isCompact ? 'px-3 py-2' : 'px-6 py-3'} w-12`}>
                  <Skeleton width="20px" height="20px" className="mx-auto" />
                </th>
              )}
              {selectionMode === 'single' && (
                <th className={`${isCompact ? 'px-3 py-2' : 'px-6 py-3'} w-12`}>
                  <Skeleton width="16px" height="16px" className="mx-auto" />
                </th>
              )}
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`${isCompact ? 'px-3 py-2' : 'px-6 py-3'} text-left text-xs font-semibold uppercase tracking-wider text-neutral-700`}
                  style={column.width ? { width: column.width } : undefined}
                >
                  <Skeleton width="60%" height="14px" />
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200 bg-white">
            {skeletonRows.map((rowIndex) => (
              <tr
                key={rowIndex}
                className={` ${isStriped && rowIndex % 2 === 0 ? 'bg-neutral-50' : 'bg-white'} `}
              >
                {selectionMode === 'multiple' && (
                  <td className={`${isCompact ? 'px-3 py-2' : 'px-6 py-4'}`}>
                    <Skeleton width="20px" height="20px" className="mx-auto" />
                  </td>
                )}
                {selectionMode === 'single' && (
                  <td
                    className={`${isCompact ? 'px-3 py-2' : 'px-6 py-4'} w-12`}
                  >
                    <Skeleton
                      width="16px"
                      height="16px"
                      className="mx-auto rounded-full"
                    />
                  </td>
                )}
                {columns.map((column, colIndex) => {
                  // Vary skeleton widths for more realistic appearance
                  const widths = ['80%', '60%', '70%', '50%', '90%'];
                  const width = widths[colIndex % widths.length];

                  return (
                    <td
                      key={column.key}
                      className={` ${isCompact ? 'px-3 py-2 text-sm' : 'px-6 py-4 text-sm'} text-neutral-900 ${column.align === 'center' ? 'text-center' : column.align === 'end' ? 'text-right' : ''} `}
                    >
                      <Skeleton
                        width={width}
                        height={isCompact ? '14px' : '16px'}
                      />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
