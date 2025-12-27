'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '../Button';

export interface HeroProps {
  tag?: string;
  tagIcon?: React.ReactNode;
  headline: string;
  headlineHighlight?: {
    text: string;
    color: 'orange' | 'purple';
  }[];
  description?: string;
  primaryAction?: {
    label: string;
    href: string;
    icon?: React.ReactNode;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
}

export const Hero: React.FC<HeroProps> = ({
  tag = 'Centralized Membership Management',
  tagIcon,
  headline,
  headlineHighlight = [],
  description,
  primaryAction,
  secondaryAction,
}) => {
  // Split headline and apply highlights
  const renderHeadline = () => {
    if (headlineHighlight.length === 0) {
      return <span>{headline}</span>;
    }

    let parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let currentText = headline;

    headlineHighlight.forEach((highlight, index) => {
      const highlightIndex = currentText.indexOf(highlight.text, lastIndex);
      if (highlightIndex !== -1) {
        // Add text before highlight
        if (highlightIndex > lastIndex) {
          parts.push(
            <span key={`text-${index}`} className="text-neutral-900">
              {currentText.substring(lastIndex, highlightIndex)}
            </span>
          );
        }
        // Add highlighted text
        parts.push(
          <span
            key={`highlight-${index}`}
            className={
              highlight.color === 'orange'
                ? 'text-brand-orange-500'
                : 'text-brand-purple-500'
            }
          >
            {highlight.text}
          </span>
        );
        lastIndex = highlightIndex + highlight.text.length;
      }
    });

    // Add remaining text
    if (lastIndex < currentText.length) {
      parts.push(
        <span key="text-end" className="text-neutral-900">
          {currentText.substring(lastIndex)}
        </span>
      );
    }

    return parts;
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-brand-orange-50/30 to-brand-purple-50/30 py-24 sm:py-32">
      {/* Animated gradient background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-gradient-to-br from-brand-orange-200/40 to-transparent blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-brand-purple-200/40 to-transparent blur-3xl" />
        <div className="absolute right-1/2 top-1/2 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-gradient-to-br from-blue-200/20 via-brand-purple-200/20 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Tag */}
          {tag && (
            <div className="mb-8 flex items-center justify-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm backdrop-blur-sm">
                {tagIcon && (
                  <span className="text-brand-orange-500">{tagIcon}</span>
                )}
                <span>{tag}</span>
              </div>
            </div>
          )}

          {/* Headline */}
          <h1 className="text-5xl font-bold tracking-tight text-neutral-900 sm:text-6xl md:text-7xl">
            {renderHeadline()}
          </h1>

          {/* Description */}
          {description && (
            <p className="mt-6 text-lg leading-8 text-neutral-600 sm:text-xl">
              {description}
            </p>
          )}

          {/* Actions */}
          {(primaryAction || secondaryAction) && (
            <div className="mt-10 flex items-center justify-center gap-4">
              {primaryAction && (
                <Link href={primaryAction.href}>
                  <Button variant="primary" size="lg" className="group">
                    {primaryAction.label}
                    {primaryAction.icon && (
                      <span className="ml-2 transition-transform group-hover:translate-x-1">
                        {primaryAction.icon}
                      </span>
                    )}
                  </Button>
                </Link>
              )}
              {secondaryAction && (
                <Link href={secondaryAction.href}>
                  <Button variant="secondary" size="lg">
                    {secondaryAction.label}
                  </Button>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
