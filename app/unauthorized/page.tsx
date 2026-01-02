'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/lib/auth-context';

export default function UnauthorizedPage() {
  const router = useRouter();
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-neutral-50 via-white to-red-50/30 p-4">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-red-500/5 blur-3xl" />
        <div
          className="absolute bottom-1/4 right-1/4 h-80 w-80 animate-pulse rounded-full bg-brand-orange-500/5 blur-3xl"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className="relative w-full max-w-md text-center">
        {/* Icon */}
        <div className="mb-8 inline-flex h-24 w-24 items-center justify-center rounded-full border-2 border-red-200 bg-red-100">
          <svg
            className="h-12 w-12 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        {/* Error Code */}
        <h1 className="mb-2 select-none text-9xl font-bold text-neutral-900/10">
          403
        </h1>

        {/* Title */}
        <h2 className="mb-3 text-3xl font-bold text-neutral-900">
          Access Denied
        </h2>

        {/* Description */}
        <p className="mb-8 leading-relaxed text-neutral-600">
          {isAuthenticated ? (
            <>
              Sorry{' '}
              <span className="font-semibold text-neutral-900">
                {user?.name || 'User'}
              </span>
              , you don't have permission to access this page.
              <br />
              <span className="mt-2 block text-sm text-neutral-500">
                Your current role:{' '}
                <span className="font-medium capitalize text-brand-orange-500">
                  {user?.role || 'Guest'}
                </span>
              </span>
            </>
          ) : (
            <>
              You need to be logged in with the appropriate permissions to
              access this page.
              <br />
              <span className="mt-2 block text-sm text-neutral-500">
                Please sign in with an account that has the required access.
              </span>
            </>
          )}
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

          {!isAuthenticated && (
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
          )}
        </div>

        {/* Help Text */}
        <p className="mt-8 text-sm text-neutral-500">
          If you believe this is an error, please contact your administrator.
        </p>
      </div>
    </div>
  );
}
