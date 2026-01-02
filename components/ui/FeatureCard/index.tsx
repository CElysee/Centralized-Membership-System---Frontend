'use client';

import React from 'react';

export interface FeatureCardProps {
  icon?: React.ReactNode;
  iconColor?: 'orange' | 'green' | 'purple' | 'blue' | 'pink';
  title: string;
  description: string;
  features?: string[];
  className?: string;
}

const iconColorClasses = {
  orange: 'bg-brand-orange-500',
  green: 'bg-green-500',
  purple: 'bg-brand-purple-500',
  blue: 'bg-blue-500',
  pink: 'bg-pink-500',
};

// Gradient hover effects matching icon colors
const gradientHoverClasses = {
  orange: 'from-brand-orange-400/30 via-brand-orange-300/20 to-transparent',
  green: 'from-green-400/30 via-green-300/20 to-transparent',
  purple: 'from-brand-purple-400/30 via-brand-purple-300/20 to-transparent',
  blue: 'from-blue-400/30 via-blue-300/20 to-transparent',
  pink: 'from-pink-400/30 via-pink-300/20 to-transparent',
};

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  iconColor = 'orange',
  title,
  description,
  features = [],
  className = '',
}) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-white/20 bg-white/70 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/90 hover:shadow-xl ${className}`}
    >
      {/* Animated gradient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Gradient hover effect on right top - matches icon color */}
        <div
          className={`absolute right-0 top-0 h-40 w-40 -translate-y-20 translate-x-20 rounded-full bg-gradient-to-br ${gradientHoverClasses[iconColor]} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
        />

        {/* Subtle animated orb */}
        <div
          className={`absolute -right-20 -top-20 h-32 w-32 animate-pulse rounded-full bg-gradient-to-br ${gradientHoverClasses[iconColor]} opacity-20 blur-2xl`}
          style={{ animationDelay: '2s' }}
        />
      </div>

      {icon && (
        <div
          className={`relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl ${iconColorClasses[iconColor]} text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}
        >
          {icon}
        </div>
      )}

      <h3 className="relative mb-3 text-xl font-bold text-neutral-900">
        {title}
      </h3>
      <p className="relative mb-6 leading-relaxed text-neutral-600">
        {description}
      </p>

      {features.length > 0 && (
        <ul className="relative space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-orange-100">
                <svg
                  className="h-3 w-3 text-brand-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-sm text-neutral-700">{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
