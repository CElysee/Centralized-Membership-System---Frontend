import React from 'react';
import { Button, ButtonProps } from '../Button';
import { Spinner } from '../Spinner';

export interface LoadingButtonProps extends ButtonProps {
  loading?: boolean;
  loadingText?: string;
}

export const LoadingButton: React.FC<LoadingButtonProps> = ({
  loading = false,
  loadingText,
  children,
  disabled,
  ...props
}) => {
  return (
    <Button disabled={disabled || loading} {...props}>
      {loading && (
        <span className="mr-2">
          <Spinner size="sm" />
        </span>
      )}
      {loading && loadingText ? loadingText : children}
    </Button>
  );
};
