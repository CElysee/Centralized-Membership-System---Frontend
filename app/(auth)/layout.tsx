import { ReactNode } from 'react';

/**
 * Layout for authentication pages (signin, signup, forgot-password, reset-password).
 * These pages should NOT be protected - they are public access pages.
 */
export default function AuthLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
