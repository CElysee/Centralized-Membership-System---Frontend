'use client';

import React, { useState } from 'react';

export interface AccordionItem {
  title: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
  defaultOpen?: boolean;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  className = '',
}) => {
  const [openItems, setOpenItems] = useState<Set<string>>(
    new Set(
      items
        .filter((item) => item.defaultOpen)
        .map((_, index) => index.toString())
    )
  );

  const toggleItem = (index: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        if (!allowMultiple) {
          newSet.clear();
        }
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openItems.has(index.toString());
        return (
          <div
            key={index}
            className="overflow-hidden rounded-lg border border-neutral-200 bg-white"
          >
            <button
              onClick={() => toggleItem(index.toString())}
              className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-neutral-50"
            >
              <div className="flex items-center gap-3">
                {item.icon && (
                  <span className="text-brand-orange-500">{item.icon}</span>
                )}
                <span className="font-semibold text-neutral-900">
                  {item.title}
                </span>
              </div>
              <svg
                className={`h-5 w-5 text-neutral-500 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
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
            </button>
            {isOpen && (
              <div className="border-t border-neutral-200 p-4 text-neutral-600">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
