import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const variantClasses = {
  primary:
    'bg-brand-orange-500 text-white hover:bg-brand-orange-600 active:bg-brand-orange-700 shadow-sm hover:shadow-md transition-all duration-200',
  secondary:
    'bg-white text-neutral-700 border border-neutral-300 hover:bg-neutral-50 hover:border-neutral-400 active:bg-neutral-100 shadow-sm hover:shadow transition-all duration-200',
  outline:
    'border-2 border-brand-orange-500 text-brand-orange-500 hover:bg-brand-orange-50 active:bg-brand-orange-100 transition-all duration-200',
  ghost:
    'text-neutral-700 hover:bg-neutral-100 active:bg-neutral-200 transition-all duration-200',
};

const sizeClasses = {
  sm: 'px-4 py-2 text-sm font-medium',
  md: 'px-6 py-3 text-base font-semibold',
  lg: 'px-8 py-4 text-lg font-semibold',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  disabled,
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-sm';

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
};
