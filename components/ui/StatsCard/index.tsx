import React from 'react';

export interface StatsCardProps {
  value: string | number;
  label: string;
  icon?: React.ReactNode;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  className?: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({
  value,
  label,
  icon,
  trend,
  className = '',
}) => {
  return (
    <div
      className={`rounded-xl border border-neutral-200 bg-white p-6 shadow-soft ${className}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          {icon && (
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-purple-50 text-brand-purple-500">
              {icon}
            </div>
          )}
          <p className="text-3xl font-bold text-neutral-900">{value}</p>
          <p className="mt-2 text-sm font-medium text-neutral-600">{label}</p>
          {trend && (
            <p
              className={`mt-2 text-sm font-medium ${
                trend.isPositive ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {trend.isPositive ? '↑' : '↓'} {trend.value}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
