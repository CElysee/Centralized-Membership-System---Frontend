import React from 'react';
import { Button } from '../Button';

export interface EmptyStateProps {
  title?: string;
  message?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  icon?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'No data found',
  message = 'There is no data to display at this time.',
  action,
  icon,
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      {icon && <div className="mb-6 text-6xl text-neutral-400">{icon}</div>}
      <h3 className="mb-3 text-xl font-bold text-neutral-900">{title}</h3>
      <p className="mb-6 max-w-md text-base text-neutral-600">{message}</p>
      {action && (
        <Button variant="primary" onClick={action.onClick}>
          {action.label}
        </Button>
      )}
    </div>
  );
};
