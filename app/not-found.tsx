'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    console.error(
      '404 Error: User attempted to access non-existent route:',
      pathname
    );
  }, [pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-neutral-50 p-4">
      {/* Enhanced animated background matching Hero section */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Large gradient orbs with animation - positioned like Hero */}
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] animate-pulse rounded-full bg-gradient-to-br from-brand-orange-200/20 via-brand-orange-300/15 to-transparent blur-3xl" />
        <div
          className="absolute -bottom-40 -left-40 h-[600px] w-[600px] animate-pulse rounded-full bg-gradient-to-br from-brand-purple-200/20 via-brand-purple-300/15 to-transparent blur-3xl"
          style={{ animationDelay: '1.5s' }}
        />
        <div
          className="absolute right-1/2 top-1/2 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/2 animate-pulse rounded-full bg-gradient-to-br from-blue-200/15 via-brand-purple-200/15 to-brand-orange-200/15 blur-3xl"
          style={{ animationDelay: '3s' }}
        />

        {/* Floating particles - matching Hero count and style */}
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-brand-orange-400/25"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}

        {/* Subtle grid pattern - matching Hero */}
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

        {/* Animated geometric shapes - matching Hero */}
        <div className="absolute left-1/4 top-1/4 h-32 w-32 rotate-45 animate-pulse rounded-lg bg-brand-orange-200/10 blur-2xl" />
        <div
          className="absolute bottom-1/4 right-1/4 h-40 w-40 rotate-12 animate-pulse rounded-full bg-brand-purple-200/10 blur-2xl"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="relative z-10 w-full max-w-md text-center">
        {/* Large 404 with gradient text */}
        <h1 className="mb-4 select-none text-9xl font-bold">
          <span className="bg-gradient-to-r from-brand-orange-500 via-brand-purple-500 to-brand-orange-500 bg-clip-text text-transparent">
            404
          </span>
        </h1>

        {/* Icon with animated border */}
        <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full border-2 border-brand-orange-300 bg-gradient-to-br from-brand-orange-100 to-brand-orange-50 shadow-lg">
          <svg
            className="h-10 w-10 text-brand-orange-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Title */}
        <h2 className="mb-3 text-3xl font-bold text-neutral-900">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mb-8 leading-relaxed text-neutral-600">
          Oops! The page you're looking for doesn't exist or has been moved.
          <br />
          <span className="mt-2 block text-sm text-neutral-500">
            Path:{' '}
            <code className="rounded-md border border-neutral-200/50 bg-white/80 px-2 py-1 font-mono text-xs backdrop-blur-sm">
              {pathname}
            </code>
          </span>
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            variant="outline"
            onClick={() => router.back()}
            className="inline-flex items-center gap-2"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Go Back</span>
          </Button>

          <Link href="/">
            <Button
              variant="ghost"
              className="inline-flex w-full items-center gap-2 sm:w-auto"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span>Home</span>
            </Button>
          </Link>

          <Link href="/signin">
            <Button
              variant="primary"
              className="inline-flex w-full items-center gap-2 sm:w-auto"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span>Sign In</span>
            </Button>
          </Link>
        </div>

        {/* Help Text */}
        <p className="mt-8 text-sm text-neutral-500">
          If you believe this is an error, please{' '}
          <Link
            href="/contact"
            className="font-medium text-brand-orange-500 hover:text-brand-orange-600"
          >
            contact support
          </Link>
          .
        </p>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0.25;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.4;
          }
        }
      `}</style>
    </div>
  );
}
