import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
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
      <input
        className={`w-full rounded-lg border px-4 py-3 text-neutral-900 transition-all duration-200 placeholder:text-neutral-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-brand-orange-500 ${
          error
            ? 'border-red-300 bg-red-50 focus:ring-red-500'
            : 'border-neutral-200 bg-white hover:border-neutral-300 focus:border-brand-orange-500'
        } ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1.5 text-sm font-medium text-red-600">{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-1.5 text-sm text-neutral-500">{helperText}</p>
      )}
    </div>
  );
};
