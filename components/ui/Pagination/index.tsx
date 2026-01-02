'use client';

import React from 'react';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
  // Items per page
  itemsPerPage?: number;
  itemsPerPageOptions?: number[];
  onItemsPerPageChange?: (itemsPerPage: number) => void;
  totalItems?: number;
  // Show info text
  showInfo?: boolean;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className = '',
  itemsPerPage,
  itemsPerPageOptions = [10, 20, 50, 100],
  onItemsPerPageChange,
  totalItems,
  showInfo = true,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Calculate visible page range (show max 7 pages)
  const getVisiblePages = () => {
    if (totalPages <= 7) {
      return pages;
    }

    if (currentPage <= 4) {
      return pages.slice(0, 7);
    }

    if (currentPage >= totalPages - 3) {
      return pages.slice(totalPages - 7);
    }

    return pages.slice(currentPage - 4, currentPage + 3);
  };

  const visiblePages = getVisiblePages();
  const startItem = totalItems
    ? (currentPage - 1) * (itemsPerPage || 10) + 1
    : undefined;
  const endItem = totalItems
    ? Math.min(currentPage * (itemsPerPage || 10), totalItems)
    : undefined;

  const showItemsPerPage =
    itemsPerPage !== undefined && onItemsPerPageChange !== undefined;

  return (
    <div
      className={`flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between ${className}`}
    >
      {/* Items per page selector and info */}
      <div className="flex flex-wrap items-center gap-4">
        {showItemsPerPage && (
          <div className="flex items-center gap-2">
            <span className="whitespace-nowrap text-sm text-neutral-600">
              Show
            </span>
            <select
              value={itemsPerPage!.toString()}
              onChange={(e) => onItemsPerPageChange!(Number(e.target.value))}
              className="min-w-[80px] rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-700 transition-colors hover:border-neutral-300 focus:border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-1"
            >
              {itemsPerPageOptions.map((option) => (
                <option key={option} value={option.toString()}>
                  {option}
                </option>
              ))}
            </select>
            <span className="whitespace-nowrap text-sm text-neutral-600">
              per page
            </span>
          </div>
        )}
        {showInfo && totalItems && startItem && endItem && (
          <span className="whitespace-nowrap text-sm text-neutral-600">
            Showing {startItem} to {endItem} of {totalItems} results
          </span>
        )}
      </div>

      {/* Pagination controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center justify-center rounded-md p-2 text-neutral-600 transition-colors hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent"
          aria-label="Previous page"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="flex items-center gap-1">
          {/* Show first page if not in visible range */}
          {visiblePages[0] > 1 && (
            <>
              <button
                onClick={() => onPageChange(1)}
                className="rounded-md px-4 py-1.5 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100"
              >
                1
              </button>
              {visiblePages[0] > 2 && (
                <span className="px-2 text-sm text-neutral-400">...</span>
              )}
            </>
          )}

          {/* Visible page numbers */}
          {visiblePages.map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`rounded-md px-4 py-1.5 text-sm font-medium transition-colors ${
                page === currentPage
                  ? 'bg-blue-800 text-white hover:bg-blue-900'
                  : 'text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              {page}
            </button>
          ))}

          {/* Show last page if not in visible range */}
          {visiblePages[visiblePages.length - 1] < totalPages && (
            <>
              {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
                <span className="px-2 text-sm text-neutral-400">...</span>
              )}
              <button
                onClick={() => onPageChange(totalPages)}
                className="rounded-md px-4 py-1.5 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100"
              >
                {totalPages}
              </button>
            </>
          )}
        </div>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center justify-center rounded-md p-2 text-neutral-600 transition-colors hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent"
          aria-label="Next page"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
