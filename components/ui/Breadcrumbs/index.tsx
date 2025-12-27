import React from 'react';
import Link from 'next/link';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  separator,
  className = '',
}) => {
  const defaultSeparator = (
    <svg
      className="h-4 w-4 text-neutral-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  );

  return (
    <nav
      className={`flex items-center space-x-2 text-sm ${className}`}
      aria-label="Breadcrumb"
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const isLink = item.href && !isLast;

        return (
          <React.Fragment key={index}>
            {isLink && item.href ? (
              <Link
                href={item.href}
                className="text-neutral-600 transition-colors hover:text-brand-orange-500"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={
                  isLast ? 'font-semibold text-neutral-900' : 'text-neutral-600'
                }
              >
                {item.label}
              </span>
            )}
            {!isLast && (
              <span className="text-neutral-400">
                {separator || defaultSeparator}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
