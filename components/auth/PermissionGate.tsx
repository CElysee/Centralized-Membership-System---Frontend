'use client';

import { useAuth } from '@/lib/auth-context';
import { User } from '@/lib/auth-context';

interface PermissionGateProps {
  children: React.ReactNode;
  requiredRole?: User['role'];
  requiredPermission?: string;
  fallback?: React.ReactNode;
}

export function PermissionGate({
  children,
  requiredRole,
  requiredPermission,
  fallback = null,
}: PermissionGateProps) {
  const { isAuthenticated, user, hasRole, hasPermission } = useAuth();

  if (!isAuthenticated || !user) {
    return <>{fallback}</>;
  }

  // Check role
  if (requiredRole && !hasRole(requiredRole)) {
    return <>{fallback}</>;
  }

  // Check permission
  if (requiredPermission && !hasPermission(requiredPermission)) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
