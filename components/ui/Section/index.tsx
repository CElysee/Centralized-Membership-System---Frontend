'use client';

import React from 'react';

export interface SectionProps {
  title?: string;
  titleHighlight?: { text: string; color: 'orange' | 'purple' };
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  background?: 'white' | 'neutral' | 'gradient';
}

export const Section: React.FC<SectionProps> = ({
  title,
  titleHighlight,
  subtitle,
  children,
  className = '',
  containerClassName = '',
  background = 'white',
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    neutral:
      'bg-gradient-to-br from-neutral-50 via-white to-brand-orange-50/20',
    gradient:
      'bg-gradient-to-br from-white via-brand-orange-50/30 to-brand-purple-50/30',
  };

  const renderTitle = () => {
    if (!title) return null;

    if (titleHighlight) {
      const parts = title.split(titleHighlight.text);
      return (
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
          {parts[0]}
          <span
            className={
              titleHighlight.color === 'orange'
                ? 'bg-gradient-to-r from-brand-orange-500 to-brand-orange-600 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-brand-purple-500 to-brand-purple-600 bg-clip-text text-transparent'
            }
          >
            {titleHighlight.text}
          </span>
          {parts[1]}
        </h2>
      );
    }

    return (
      <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
    );
  };

  return (
    <section
      className={`relative overflow-hidden py-16 sm:py-24 ${backgroundClasses[background]} ${className}`}
    >
      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute -right-40 -top-40 h-80 w-80 animate-pulse rounded-full bg-gradient-to-br from-brand-orange-200/30 via-brand-orange-300/20 to-transparent blur-3xl" />
        <div
          className="absolute -bottom-40 -left-40 h-80 w-80 animate-pulse rounded-full bg-gradient-to-br from-brand-purple-200/30 via-brand-purple-300/20 to-transparent blur-3xl"
          style={{ animationDelay: '1.5s' }}
        />

        {/* Floating particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-brand-orange-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div
        className={`relative mx-auto max-w-7xl px-6 lg:px-8 ${containerClassName}`}
      >
        {(title || subtitle) && (
          <div className="mx-auto mb-16 max-w-3xl text-center">
            {renderTitle()}
            {subtitle && (
              <p className="mt-4 text-lg leading-8 text-neutral-600 sm:text-xl">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
        }
      `}</style>
    </section>
  );
};
