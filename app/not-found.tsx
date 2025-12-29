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
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-neutral-50 via-white to-brand-orange-50/30 p-4">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-brand-orange-500/5 blur-3xl" />
        <div
          className="absolute bottom-1/4 right-1/4 h-80 w-80 animate-pulse rounded-full bg-brand-purple-500/5 blur-3xl"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className="relative w-full max-w-md text-center">
        {/* Large 404 */}
        <h1 className="mb-4 select-none text-9xl font-bold text-neutral-900/10">
          404
        </h1>

        {/* Icon */}
        <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full border-2 border-brand-orange-200 bg-brand-orange-100">
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
            <code className="rounded bg-neutral-100 px-2 py-1 font-mono text-xs">
              {pathname}
            </code>
          </span>
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            variant="outline"
            onClick={() => router.back()}
            className="gap-2"
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
            Go Back
          </Button>

          <Link href="/">
            <Button variant="ghost" className="w-full gap-2 sm:w-auto">
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
              Home
            </Button>
          </Link>

          <Link href="/signin">
            <Button variant="primary" className="w-full gap-2 sm:w-auto">
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
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              Sign In
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
    </div>
  );
}
