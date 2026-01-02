'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { User } from '@/lib/auth-context';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: User['role'];
  requiredPermission?: string;
  fallbackPath?: string;
}

export function ProtectedRoute({
  children,
  requiredRole,
  requiredPermission,
  fallbackPath = '/unauthorized',
}: ProtectedRouteProps) {
  const { isAuthenticated, user, isLoading, hasRole, hasPermission } =
    useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (isLoading) return;

    // Don't redirect if we're already on an auth page
    const isAuthPage =
      pathname?.startsWith('/signin') ||
      pathname?.startsWith('/signup') ||
      pathname?.startsWith('/forgot-password') ||
      pathname?.startsWith('/reset-password');

    if (isAuthPage) {
      return;
    }

    // Check authentication
    if (!isAuthenticated) {
      // Only redirect if not already on signin page to avoid loops
      if (pathname !== '/signin') {
        router.push(`/signin?redirect=${encodeURIComponent(pathname || '/')}`);
      }
      return;
    }

    // Check role
    if (requiredRole && !hasRole(requiredRole)) {
      router.push(fallbackPath);
      return;
    }

    // Check permission
    if (requiredPermission && !hasPermission(requiredPermission)) {
      router.push(fallbackPath);
      return;
    }
  }, [
    isAuthenticated,
    user,
    isLoading,
    requiredRole,
    requiredPermission,
    router,
    pathname,
    fallbackPath,
    hasRole,
    hasPermission,
  ]);

  // Show loading state
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-brand-orange-500 border-r-transparent"></div>
          <p className="mt-4 text-sm text-neutral-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Show nothing while redirecting
  if (
    !isAuthenticated ||
    (requiredRole && !hasRole(requiredRole)) ||
    (requiredPermission && !hasPermission(requiredPermission))
  ) {
    return null;
  }

  return <>{children}</>;
}
