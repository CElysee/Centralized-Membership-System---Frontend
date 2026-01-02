'use client';

import React, { useEffect, useState } from 'react';
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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
        // Add highlighted text with gradient
        parts.push(
          <span
            key={`highlight-${index}`}
            className={
              highlight.color === 'orange'
                ? 'bg-gradient-to-r from-brand-orange-500 to-brand-orange-600 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-brand-purple-500 to-brand-purple-600 bg-clip-text text-transparent'
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
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-brand-orange-50/40 to-brand-purple-50/40 py-12 sm:py-16 lg:py-20">
      {/* Enhanced animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large gradient orbs with animation */}
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] animate-pulse rounded-full bg-gradient-to-br from-brand-orange-200/50 via-brand-orange-300/30 to-transparent blur-3xl" />
        <div
          className="absolute -bottom-40 -left-40 h-[600px] w-[600px] animate-pulse rounded-full bg-gradient-to-br from-brand-purple-200/50 via-brand-purple-300/30 to-transparent blur-3xl"
          style={{ animationDelay: '1.5s' }}
        />
        <div
          className="absolute right-1/2 top-1/2 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/2 animate-pulse rounded-full bg-gradient-to-br from-blue-200/30 via-brand-purple-200/30 to-brand-orange-200/30 blur-3xl"
          style={{ animationDelay: '3s' }}
        />

        {/* Floating particles */}
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-brand-orange-400/40"
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
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Animated geometric shapes */}
        <div className="absolute left-1/4 top-1/4 h-32 w-32 rotate-45 animate-pulse rounded-lg bg-brand-orange-200/20 blur-2xl" />
        <div
          className="absolute bottom-1/4 right-1/4 h-40 w-40 rotate-12 animate-pulse rounded-full bg-brand-purple-200/20 blur-2xl"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`mx-auto max-w-5xl text-center transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {/* Enhanced Tag with glassmorphism */}
          {tag && (
            <div className="mb-4 flex items-center justify-center sm:mb-6">
              <div className="group inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/70 px-5 py-2.5 text-sm font-semibold text-neutral-800 shadow-lg backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/90 hover:shadow-xl">
                {tagIcon && (
                  <span className="text-brand-orange-500 transition-transform group-hover:scale-110">
                    {tagIcon}
                  </span>
                )}
                <span>{tag}</span>
              </div>
            </div>
          )}

          {/* Reduced Headline size */}
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-neutral-900 sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block">{renderHeadline()}</span>
          </h1>

          {/* Enhanced Description with reduced spacing */}
          {description && (
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-neutral-600 sm:mt-8 sm:text-xl lg:text-2xl">
              {description}
            </p>
          )}

          {/* Enhanced Actions matching navbar style */}
          {(primaryAction || secondaryAction) && (
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row">
              {primaryAction && (
                <Link href={primaryAction.href}>
                  <Button
                    variant="primary"
                    size="sm"
                    className="inline-flex items-center gap-2"
                  >
                    <span>{primaryAction.label}</span>
                    {primaryAction.icon && (
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        {primaryAction.icon}
                      </span>
                    )}
                  </Button>
                </Link>
              )}
              {secondaryAction && (
                <Link href={secondaryAction.href}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900"
                  >
                    <span>{secondaryAction.label}</span>
                    <svg
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Button>
                </Link>
              )}
            </div>
          )}

          {/* Enhanced Trust indicators with reduced spacing */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:mt-12 lg:gap-8">
            <div className="group flex items-center gap-3 rounded-xl border border-white/20 bg-white/40 px-4 py-2.5 backdrop-blur-sm transition-all duration-300 hover:bg-white/60 hover:shadow-md">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-100">
                <svg
                  className="h-5 w-5 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-neutral-900">
                  Enterprise Security
                </div>
                <div className="text-xs text-neutral-600">
                  Bank-level encryption
                </div>
              </div>
            </div>

            <div className="group flex items-center gap-3 rounded-xl border border-white/20 bg-white/40 px-4 py-2.5 backdrop-blur-sm transition-all duration-300 hover:bg-white/60 hover:shadow-md">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100">
                <svg
                  className="h-5 w-5 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-neutral-900">
                  Lightning Fast
                </div>
                <div className="text-xs text-neutral-600">
                  Sub-second response
                </div>
              </div>
            </div>

            <div className="group flex items-center gap-3 rounded-xl border border-white/20 bg-white/40 px-4 py-2.5 backdrop-blur-sm transition-all duration-300 hover:bg-white/60 hover:shadow-md">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-100">
                <svg
                  className="h-5 w-5 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-neutral-900">
                  Mobile Ready
                </div>
                <div className="text-xs text-neutral-600">Works everywhere</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.8;
          }
        }
      `}</style>
    </section>
  );
};
