'use client';

import React from 'react';
import Link from 'next/link';

export interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
  gradientFrom?: string;
  gradientTo?: string;
  showArrow?: boolean;
}

export const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  href,
  gradientFrom = 'from-brand-orange-500',
  gradientTo = 'to-yellow-400',
  showArrow = true,
  className = '',
  ...props
}) => {
  const buttonClasses = `w-full rounded-lg bg-gradient-to-r ${gradientFrom} ${gradientTo} px-6 py-4 text-base font-semibold text-white shadow-md transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange-500 disabled:opacity-50 disabled:cursor-not-allowed ${className}`;

  const content = (
    <>
      {children}
      {showArrow && <span className="ml-2 inline-block">→</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {content}
    </button>
  );
};
