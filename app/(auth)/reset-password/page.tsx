'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { AuthLayout } from '@/components/auth/AuthLayout';
import { PasswordInput } from '@/components/auth/PasswordInput';
import { Input } from '@/components/ui/Input';
import { GradientButton } from '@/components/auth/GradientButton';

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [pin, setPin] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [errors, setErrors] = useState<{
    pin?: string;
    newPassword?: string;
    confirmPassword?: string;
    general?: string;
  }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showPasswordFields, setShowPasswordFields] = useState(false);

  // Get PIN from URL query params
  useEffect(() => {
    const urlPin = searchParams.get('pin');
    if (urlPin) {
      const cleanPin = urlPin.replace(/\D/g, '').slice(0, 6);
      setPin(cleanPin);
      if (cleanPin.length === 6) {
        setShowPasswordFields(true);
      }
    }
  }, [searchParams]);

  // Show password fields when PIN is complete (6 digits)
  useEffect(() => {
    if (pin.length === 6) {
      setShowPasswordFields(true);
      // Clear any PIN errors when PIN is complete
      if (errors.pin) {
        setErrors({ ...errors, pin: undefined });
      }
    } else {
      setShowPasswordFields(false);
      // Reset password fields when PIN changes
      setNewPassword('');
      setConfirmPassword('');
    }
  }, [pin]);

  const validateForm = (): boolean => {
    const newErrors: typeof errors = {};

    // Validate PIN
    if (!pin || pin.length !== 6) {
      newErrors.pin = 'Please enter a valid 6-digit PIN';
    }

    // Only validate password if PIN is valid and fields are shown
    if (showPasswordFields) {
      // Validate new password
      if (!newPassword) {
        newErrors.newPassword = 'New password is required';
      } else if (newPassword.length < 8) {
        newErrors.newPassword = 'Password must be at least 8 characters';
      } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(newPassword)) {
        newErrors.newPassword =
          'Password must contain uppercase, lowercase, and a number';
      }

      // Validate confirm password
      if (!confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (newPassword !== confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      // TODO: Replace with actual API call
      // Example:
      // const response = await fetch('/api/auth/reset-password', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     pin,
      //     newPassword,
      //   }),
      // });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // For demo purposes, assume success
      setIsSuccess(true);

      // Redirect to sign in after 2 seconds
      setTimeout(() => {
        router.push('/signin?reset=success');
      }, 2000);
    } catch (error) {
      setErrors({
        general:
          'Failed to reset password. Please try again or request a new reset link.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Success state
  if (isSuccess) {
    return (
      <AuthLayout
        leftContent={{
          icon: (
            <svg
              className="h-16 w-16 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ),
          headline: 'Password reset successful!',
          subtitle:
            "Your password has been successfully reset. You'll be redirected to sign in shortly.",
        }}
        gradientFrom="from-green-100"
        gradientTo="to-emerald-100"
        leftOrbColor="from-green-400/30 to-green-300/30"
        rightOrbColor="from-emerald-400/30 to-emerald-300/30"
      >
        <div className="space-y-6">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <svg
                className="h-8 w-8 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-neutral-900">All set!</h1>
            <p className="mt-2 text-sm text-neutral-600">
              Your password has been reset successfully. Redirecting to sign
              in...
            </p>
          </div>
          <Link href="/signin">
            <GradientButton
              type="button"
              gradientFrom="from-green-500"
              gradientTo="to-emerald-600"
              className="w-full"
            >
              Go to Sign In
            </GradientButton>
          </Link>
        </div>
      </AuthLayout>
    );
  }

  // Password requirements list for left sidebar
  const passwordRequirements = [
    'At least 8 characters long',
    'Contains uppercase letter (A-Z)',
    'Contains lowercase letter (a-z)',
    'Contains a number (0-9)',
  ];

  return (
    <AuthLayout
      leftContent={{
        icon: (
          <svg
            className="h-16 w-16 text-brand-orange-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        ),
        headline: showPasswordFields
          ? 'Create a new password'
          : 'Enter your reset PIN',
        subtitle: showPasswordFields
          ? 'Choose a strong password that meets all the requirements shown below.'
          : 'Enter the 6-digit PIN you received in your email to continue.',
        progressCard: showPasswordFields
          ? {
              title: 'Password Reset',
              currentStep: 'Setting new password',
              stepNumber: 2,
              totalSteps: 2,
              progress: 100,
              hint: 'Make sure your password is strong and unique',
            }
          : {
              title: 'Password Reset',
              currentStep: 'Entering PIN',
              stepNumber: 1,
              totalSteps: 2,
              progress: 50,
              hint: 'Check your email for the 6-digit PIN',
            },
        securityCard: showPasswordFields
          ? {
              icon: (
                <svg
                  className="h-5 w-5 text-brand-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              ),
              title: 'Password Requirements',
              description: (
                <ul className="mt-3 space-y-2 text-left">
                  {passwordRequirements.map((requirement, index) => {
                    const isValid =
                      index === 0
                        ? newPassword.length >= 8
                        : index === 1
                          ? /[A-Z]/.test(newPassword)
                          : index === 2
                            ? /[a-z]/.test(newPassword)
                            : /\d/.test(newPassword);

                    return (
                      <li
                        key={index}
                        className={`flex items-center gap-2 text-xs ${
                          isValid && newPassword
                            ? 'text-green-600'
                            : 'text-neutral-600'
                        }`}
                      >
                        {isValid && newPassword ? (
                          <svg
                            className="h-4 w-4 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="h-4 w-4 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        )}
                        <span>{requirement}</span>
                      </li>
                    );
                  })}
                </ul>
              ),
            }
          : undefined,
      }}
      gradientFrom="from-brand-orange-100"
      gradientTo="to-brand-purple-100"
      leftOrbColor="from-brand-orange-400/30 to-brand-orange-300/30"
      rightOrbColor="from-brand-purple-400/30 to-brand-purple-300/30"
    >
      <div className="space-y-6">
        {/* Back Link */}
        <Link
          href="/signin"
          className="inline-flex items-center text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
        >
          <svg
            className="mr-2 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to sign in
        </Link>

        {/* Title */}
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">
            {showPasswordFields
              ? 'Create a new password'
              : 'Reset your password'}
          </h1>
          <p className="mt-2 text-sm text-neutral-600">
            {showPasswordFields
              ? 'Enter your new password below.'
              : 'Enter the 6-digit PIN from your email.'}
          </p>
        </div>

        {/* General Error */}
        {errors.general && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-4">
            <div className="flex items-start gap-3">
              <svg
                className="h-5 w-5 flex-shrink-0 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-sm font-medium text-red-800">
                {errors.general}
              </p>
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* PIN Input - Always shown */}
          <div>
            <Input
              label="Reset PIN"
              placeholder="Enter 6-digit PIN"
              value={pin}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, '').slice(0, 6);
                setPin(value);
                if (errors.pin) {
                  setErrors({ ...errors, pin: undefined });
                }
              }}
              error={errors.pin}
              helperText="Enter the 6-digit PIN from your email"
              maxLength={6}
              autoComplete="one-time-code"
              inputMode="numeric"
            />
          </div>

          {/* Password Fields - Only shown when PIN is complete */}
          {showPasswordFields && (
            <>
              {/* New Password */}
              <div>
                <PasswordInput
                  label="New Password"
                  placeholder="Enter your new password"
                  value={newPassword}
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                    if (errors.newPassword) {
                      setErrors({ ...errors, newPassword: undefined });
                    }
                  }}
                  error={errors.newPassword}
                  required
                />
              </div>

              {/* Confirm Password */}
              <div>
                <PasswordInput
                  label="Confirm New Password"
                  placeholder="Confirm your new password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    if (errors.confirmPassword) {
                      setErrors({ ...errors, confirmPassword: undefined });
                    }
                  }}
                  error={errors.confirmPassword}
                  required
                />
              </div>
            </>
          )}

          {/* Submit Button - Only enabled when PIN is complete and passwords are filled */}
          {showPasswordFields && (
            <GradientButton
              type="submit"
              gradientFrom="from-brand-orange-500"
              gradientTo="to-brand-orange-600"
              disabled={isLoading || !newPassword || !confirmPassword}
              className="w-full"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="h-5 w-5 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Resetting Password...
                </span>
              ) : (
                'Reset Password'
              )}
            </GradientButton>
          )}
        </form>

        {/* Footer */}
        <div className="space-y-2 text-center">
          <p className="text-sm text-neutral-500">
            Didn't receive the email?{' '}
            <Link
              href="/forgot-password"
              className="font-medium text-brand-orange-500 hover:text-brand-orange-600"
            >
              Request a new one
            </Link>
          </p>
          <p className="text-sm text-neutral-500">
            Remember your password?{' '}
            <Link
              href="/signin"
              className="font-medium text-brand-orange-500 hover:text-brand-orange-600"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}
