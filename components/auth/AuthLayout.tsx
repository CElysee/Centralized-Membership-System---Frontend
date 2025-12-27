'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface AuthLayoutProps {
  children: React.ReactNode;
  leftContent: {
    icon: React.ReactNode;
    headline: string;
    subtitle: string;
    progressCard?: {
      title: string;
      currentStep: string;
      stepNumber: number;
      totalSteps: number;
      progress: number; // 0-100
      hint?: string;
    };
    securityCard?: {
      icon: React.ReactNode;
      title: string;
      description: string;
    };
  };
  gradientFrom?: string;
  gradientTo?: string;
  leftOrbColor?: string; // Color for the left animated orb
  rightOrbColor?: string; // Color for the right animated orb
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  leftContent,
  gradientFrom = 'from-brand-orange-100',
  gradientTo = 'to-brand-purple-100',
  leftOrbColor = 'from-brand-orange-400/30 to-brand-orange-300/30',
  rightOrbColor = 'from-brand-purple-400/30 to-brand-purple-300/30',
}) => {
  const pathname = usePathname();
  const isSignIn = pathname?.includes('/signin') || pathname === '/signin';
  const isSignUp = pathname?.includes('/signup') || pathname === '/signup';

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Gradient Background */}
      <div
        className={`relative hidden w-1/2 flex-col items-center justify-center overflow-hidden bg-gradient-to-br ${gradientFrom} ${gradientTo} p-12 lg:flex`}
      >
        {/* Animated blur orbs for enhanced color visibility */}
        <div
          className={`absolute -left-20 top-1/3 h-80 w-80 bg-gradient-to-r ${leftOrbColor} animate-pulse rounded-full blur-3xl`}
        />
        <div
          className={`absolute -right-20 bottom-1/3 h-80 w-80 bg-gradient-to-r ${rightOrbColor} animate-pulse rounded-full blur-3xl`}
          style={{ animationDelay: '1s' }}
        />

        <div className="relative z-10 max-w-md text-center">
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-lg">
              {leftContent.icon}
            </div>
          </div>

          {/* Headline */}
          <h1 className="mb-4 text-4xl font-bold text-neutral-900">
            {leftContent.headline}
          </h1>

          {/* Subtitle */}
          <p className="mb-8 text-lg text-neutral-600">
            {leftContent.subtitle}
          </p>

          {/* Progress Card */}
          {leftContent.progressCard && (
            <div className="rounded-2xl bg-white/80 p-6 shadow-sm backdrop-blur-sm">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-neutral-700">
                  {leftContent.progressCard.title}
                </h3>
                <span className="text-xs text-neutral-500">
                  Step {leftContent.progressCard.stepNumber}/
                  {leftContent.progressCard.totalSteps}
                </span>
              </div>
              <div className="mb-2">
                <p className="text-sm font-medium text-neutral-900">
                  {leftContent.progressCard.currentStep}
                </p>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-neutral-200">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-brand-orange-500 to-brand-orange-400 transition-all duration-500"
                    style={{ width: `${leftContent.progressCard.progress}%` }}
                  />
                </div>
              </div>
              {leftContent.progressCard.hint && (
                <p className="mt-4 text-xs text-neutral-600">
                  {leftContent.progressCard.hint}
                  <span className="ml-1 inline-block">→</span>
                </p>
              )}
            </div>
          )}

          {/* Security Card */}
          {leftContent.securityCard && (
            <div className="rounded-2xl bg-white/80 p-6 shadow-sm backdrop-blur-sm">
              <div className="mb-3 flex items-center gap-3">
                {leftContent.securityCard.icon}
                <h3 className="text-sm font-semibold text-neutral-700">
                  {leftContent.securityCard.title}
                </h3>
              </div>
              <p className="text-xs text-neutral-600">
                {leftContent.securityCard.description}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex w-full flex-col bg-white lg:w-1/2">
        <div className="flex min-h-screen flex-col">
          {/* Form Content */}
          <div className="flex flex-1 items-center justify-center px-6 py-12">
            <div className="w-full max-w-md">
              {/* Navigation - Right above form */}
              <div className="mb-6 flex justify-end gap-4">
                <Link
                  href="/signin"
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    isSignIn
                      ? 'bg-white text-neutral-700 shadow-sm'
                      : 'text-neutral-600 hover:bg-neutral-50'
                  }`}
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    isSignUp
                      ? 'border border-neutral-200 bg-white text-neutral-700 shadow-sm'
                      : 'text-neutral-600 hover:bg-neutral-50'
                  }`}
                >
                  Create Account
                </Link>
              </div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
