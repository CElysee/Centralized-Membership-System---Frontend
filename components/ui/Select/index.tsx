import React from 'react';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  options: { value: string; label: string }[];
}

export const Select: React.FC<SelectProps> = ({
  label,
  error,
  helperText,
  options,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="mb-2 block text-sm font-semibold text-neutral-700">
          {label}
        </label>
      )}
      <select
        className={`w-full rounded-lg border px-4 py-3 text-neutral-900 transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-brand-orange-500 ${
          error
            ? 'border-red-300 bg-red-50 focus:ring-red-500'
            : 'border-neutral-300 bg-white hover:border-neutral-400 focus:border-brand-orange-500'
        } ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1.5 text-sm font-medium text-red-600">{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-1.5 text-sm text-neutral-500">{helperText}</p>
      )}
    </div>
  );
};
