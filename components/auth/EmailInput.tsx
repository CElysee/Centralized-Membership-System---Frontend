'use client';

import React from 'react';

export interface EmailInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const EmailInput: React.FC<EmailInputProps> = ({
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
      <div className="relative">
        <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2">
          <svg
            className="h-5 w-5 text-neutral-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <input
          type="email"
          className={`w-full rounded-lg border border-neutral-200 bg-white py-3 pl-12 pr-4 text-neutral-900 transition-all duration-200 placeholder:text-neutral-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-brand-orange-500 ${
            error
              ? 'border-red-300 bg-red-50 focus:ring-red-500'
              : 'hover:border-neutral-300 focus:border-brand-orange-500'
          } ${className}`}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-1.5 text-sm font-medium text-red-600">{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-1.5 text-sm text-neutral-500">{helperText}</p>
      )}
    </div>
  );
};
