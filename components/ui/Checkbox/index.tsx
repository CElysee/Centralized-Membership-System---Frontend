import React from 'react';

export interface CheckboxProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type'
> {
  label?: string;
  error?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full">
      <label className="flex cursor-pointer items-center">
        <input
          type="checkbox"
          className={`h-5 w-5 rounded border-neutral-300 text-brand-orange-500 transition-all duration-200 focus:ring-2 focus:ring-brand-orange-500 focus:ring-offset-2 ${
            error ? 'border-red-300' : ''
          } ${className}`}
          {...props}
        />
        {label && (
          <span
            className={`ml-3 text-sm font-medium ${error ? 'text-red-600' : 'text-neutral-700'}`}
          >
            {label}
          </span>
        )}
      </label>
      {error && (
        <p className="mt-1.5 text-sm font-medium text-red-600">{error}</p>
      )}
    </div>
  );
};
