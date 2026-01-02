import React from 'react';

export interface DividerProps {
  label?: string;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({
  label,
  orientation = 'horizontal',
  className = '',
}) => {
  if (orientation === 'vertical') {
    return (
      <div
        className={`inline-block h-full w-px bg-neutral-200 ${className}`}
        role="separator"
      />
    );
  }

  if (label) {
    return (
      <div className={`relative flex items-center py-4 ${className}`}>
        <div className="flex-grow border-t border-neutral-200" />
        <span className="mx-4 text-sm font-medium text-neutral-500">
          {label}
        </span>
        <div className="flex-grow border-t border-neutral-200" />
      </div>
    );
  }

  return (
    <div
      className={`border-t border-neutral-200 ${className}`}
      role="separator"
    />
  );
};
