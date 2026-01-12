'use client';

import React from 'react';

export interface AssociationCardProps {
  initials?: string;
  icon?: React.ReactNode;
  name: string;
  memberCount: string;
  location: string;
  color: 'orange' | 'blue' | 'purple' | 'green' | 'red' | 'pink';
  className?: string;
}

const colorClasses = {
  orange: 'bg-brand-orange-500',
  blue: 'bg-blue-500',
  purple: 'bg-brand-purple-500',
  green: 'bg-green-500',
  red: 'bg-red-500',
  pink: 'bg-pink-500',
};

export const AssociationCard: React.FC<AssociationCardProps> = ({
  initials,
  icon,
  name,
  memberCount,
  location,
  color,
  className = '',
}) => {
  return (
    <div
      className={`group flex items-center gap-4 rounded-xl border border-white/20 bg-white/70 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/90 hover:shadow-md ${className}`}
    >
      <div
        className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg ${colorClasses[color]} text-lg font-bold text-white shadow-sm transition-transform duration-300 group-hover:scale-110`}
      >
        {icon ? icon : initials}
      </div>

      <div className="min-w-0 flex-1">
        <div className="mb-1 flex items-center justify-between">
          <h3 className="truncate text-base font-bold text-neutral-900 transition-colors group-hover:text-brand-purple-700">
            {name}
          </h3>
          <svg
            className="h-4 w-4 text-neutral-400 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>

        <div className="flex items-center gap-4 text-xs text-neutral-600">
          <div className="flex items-center gap-1">
            <svg
              className="h-3.5 w-3.5 text-neutral-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <span>{memberCount}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg
              className="h-3.5 w-3.5 text-neutral-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
