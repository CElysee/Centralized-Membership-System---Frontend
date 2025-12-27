'use client';

import { ReactNode } from 'react';
import { ToastProvider } from '@/lib/toast-context';

export function Providers({ children }: { children: ReactNode }) {
  return <ToastProvider>{children}</ToastProvider>;
}
