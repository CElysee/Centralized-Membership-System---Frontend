'use client';

import React, { useState } from 'react';

export interface TabItem {
  label: string;
  value: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  items: TabItem[];
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  variant?: 'default' | 'pills';
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  items,
  defaultValue,
  value: controlledValue,
  onChange,
  variant = 'default',
  className = '',
}) => {
  const [internalValue, setInternalValue] = useState(
    defaultValue || items[0]?.value || ''
  );
  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : internalValue;

  const handleChange = (newValue: string) => {
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  if (variant === 'pills') {
    return (
      <div className={`flex gap-2 ${className}`}>
        {items.map((item) => {
          const isActive = currentValue === item.value;
          const buttonClass = item.disabled
            ? 'cursor-not-allowed opacity-50'
            : isActive
              ? 'bg-brand-orange-500 text-white shadow-sm'
              : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200';

          return (
            <button
              key={item.value}
              onClick={() => !item.disabled && handleChange(item.value)}
              disabled={item.disabled}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${buttonClass}`}
            >
              {item.icon && <span>{item.icon}</span>}
              {item.label}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`border-b border-neutral-200 ${className}`}>
      <div className="flex gap-8">
        {items.map((item) => {
          const isActive = currentValue === item.value;
          const buttonClass = item.disabled
            ? 'cursor-not-allowed opacity-50 text-neutral-400 border-transparent'
            : isActive
              ? 'border-brand-orange-500 text-brand-orange-500'
              : 'border-transparent text-neutral-600 hover:border-neutral-300 hover:text-neutral-900';

          return (
            <button
              key={item.value}
              onClick={() => !item.disabled && handleChange(item.value)}
              disabled={item.disabled}
              className={`inline-flex items-center gap-2 border-b-2 px-1 py-4 text-sm font-medium transition-colors ${buttonClass}`}
            >
              {item.icon && <span>{item.icon}</span>}
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
