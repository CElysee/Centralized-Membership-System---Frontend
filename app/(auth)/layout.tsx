import { ReactNode } from 'react';

export default function AuthenticatedLayout({
  children,
}: {
  children: ReactNode;
}) {
  // Add authentication check here
  // For now, just render children
  return <>{children}</>;
}
