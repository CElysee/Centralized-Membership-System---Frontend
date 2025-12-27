import React from 'react';

export interface SkeletonProps {
  width?: string;
  height?: string;
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width = '100%',
  height = '1rem',
  className = '',
}) => {
  return (
    <div
      className={`animate-pulse rounded-lg bg-neutral-200 ${className}`}
      style={{ width, height }}
    />
  );
};
