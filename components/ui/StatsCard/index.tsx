'use client';

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
  valueClassName?: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({
  value,
  label,
  icon,
  trend,
  className = '',
  valueClassName = '',
}) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl border border-white/20 bg-white/70 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/90 hover:shadow-xl ${className}`}
    >
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Subtle gradient orb */}
        <div className="absolute -right-10 -top-10 h-24 w-24 animate-pulse rounded-full bg-gradient-to-br from-brand-purple-200/20 via-brand-orange-200/20 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div className="relative flex items-start justify-between">
        <div className="flex-1">
          {icon && (
            <div className="relative mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-brand-purple-50 to-brand-orange-50 text-brand-purple-500 shadow-sm transition-transform duration-300 group-hover:scale-110">
              {icon}
            </div>
          )}
          <p
            className={`text-3xl font-bold text-neutral-900 transition-colors duration-300 group-hover:text-brand-purple-600 ${valueClassName}`}
          >
            {value}
          </p>
          <p className="mt-2 text-sm font-medium text-neutral-600">{label}</p>
          {trend && (
            <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-white/60 px-2.5 py-1 text-xs font-semibold backdrop-blur-sm">
              <span
                className={`${
                  trend.isPositive ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {trend.isPositive ? '↑' : '↓'}
              </span>
              <span
                className={trend.isPositive ? 'text-green-600' : 'text-red-600'}
              >
                {trend.value}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
