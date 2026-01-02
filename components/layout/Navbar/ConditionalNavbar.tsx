'use client';

import { usePathname } from 'next/navigation';
import { Navbar } from './index';

/**
 * Wrapper component that conditionally renders Navbar based on pathname.
 * This prevents hook order issues by separating the conditional logic.
 */
export function ConditionalNavbar() {
  const pathname = usePathname();

  // Hide navbar on auth pages
  const isAuthPage =
    pathname?.startsWith('/signin') ||
    pathname?.startsWith('/signup') ||
    pathname?.startsWith('/forgot-password') ||
    pathname?.startsWith('/reset-password');

  if (isAuthPage) {
    return null;
  }

  return <Navbar />;
}
