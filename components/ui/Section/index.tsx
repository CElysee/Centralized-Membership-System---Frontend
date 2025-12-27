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
    neutral: 'bg-neutral-50',
    gradient: 'bg-gradient-to-b from-white to-neutral-50',
  };

  const renderTitle = () => {
    if (!title) return null;

    if (titleHighlight) {
      const parts = title.split(titleHighlight.text);
      return (
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
          {parts[0]}
          <span
            className={
              titleHighlight.color === 'orange'
                ? 'text-brand-orange-500'
                : 'text-brand-purple-500'
            }
          >
            {titleHighlight.text}
          </span>
          {parts[1]}
        </h2>
      );
    }

    return (
      <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
        {title}
      </h2>
    );
  };

  return (
    <section
      className={`py-16 sm:py-24 ${backgroundClasses[background]} ${className}`}
    >
      <div className={`mx-auto max-w-7xl px-6 lg:px-8 ${containerClassName}`}>
        {(title || subtitle) && (
          <div className="mx-auto mb-16 max-w-3xl text-center">
            {renderTitle()}
            {subtitle && (
              <p className="mt-4 text-lg leading-8 text-neutral-600">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
