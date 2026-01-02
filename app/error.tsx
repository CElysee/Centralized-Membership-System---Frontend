'use client';

import { useEffect } from 'react';
import errorHandler from '@/lib/error-handler';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to error handler
    errorHandler.captureError(error, {
      digest: error.digest,
      component: 'ErrorBoundary',
    });
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h2 className="mb-4 text-2xl font-bold text-neutral-900">
          Something went wrong!
        </h2>
        <p className="mb-6 text-neutral-600">{error.message}</p>
        <button
          onClick={reset}
          className="rounded-lg bg-brand-orange-500 px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-brand-orange-600 hover:shadow-md"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
