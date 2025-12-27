import React from 'react';

export interface SwitchProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type'
> {
  label?: string;
  description?: string;
}

export const Switch: React.FC<SwitchProps> = ({
  label,
  description,
  className = '',
  checked,
  disabled,
  ...props
}) => {
  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <div className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full bg-neutral-200 transition-colors duration-200 ease-in-out focus-within:outline-none focus-within:ring-2 focus-within:ring-brand-orange-500 focus-within:ring-offset-2">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          disabled={disabled}
          {...props}
        />
        <span
          className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
            checked ? 'translate-x-5 bg-brand-orange-500' : 'translate-x-0.5'
          } ${disabled ? 'opacity-50' : ''}`}
        />
      </div>
      {(label || description) && (
        <div className="flex-1">
          {label && (
            <label
              className={`text-sm font-medium ${
                disabled
                  ? 'text-neutral-400'
                  : 'cursor-pointer text-neutral-700'
              }`}
            >
              {label}
            </label>
          )}
          {description && (
            <p
              className={`text-xs ${disabled ? 'text-neutral-400' : 'text-neutral-500'}`}
            >
              {description}
            </p>
          )}
        </div>
      )}
    </div>
  );
};
