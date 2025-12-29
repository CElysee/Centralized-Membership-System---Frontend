'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AuthLayout } from '@/components/auth/AuthLayout';
import { EmailInput } from '@/components/auth/EmailInput';
import { GradientButton } from '@/components/auth/GradientButton';

export default function ForgotPasswordPage() {
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // TODO: Call your API to send reset email and generate token/PIN
    // Example:
    // await fetch('/api/auth/forgot-password', { ... });

    // For now, navigate directly to the reset password page.
    // Later you can add token or PIN to this URL from the API response.
    router.push('/reset-password');
  };

  return (
    <AuthLayout
      leftContent={{
        icon: (
          <svg
            className="h-16 w-16 text-brand-purple-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 7.029c-.049-.377-.068-.74-.08-1.12a7.471 7.471 0 01-1.588-3.755 4.502 4.502 0 015.736-3.547M15.75 5.25a3 3 0 00-3 3m3 3v6a3 3 0 01-3 3m-3-3a3 3 0 013-3m0 0v-6m0 0a3 3 0 013-3m-3 3h6m-9 0H9m12 0h-3m-3 0h-3"
            />
          </svg>
        ),
        headline: 'No worries, it happens!',
        subtitle:
          "We'll help you get back into your account in no time. Just enter your email and we'll send you a reset link.",
        securityCard: {
          icon: (
            <svg
              className="h-5 w-5 text-brand-purple-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          ),
          title: 'Security first',
          description:
            "For your protection, password reset links expire after 1 hour. Make sure to check your spam folder if you don't see our email.",
        },
      }}
      gradientFrom="from-brand-purple-100"
      gradientTo="to-pink-100"
      leftOrbColor="from-brand-purple-400/30 to-brand-purple-300/30"
      rightOrbColor="from-brand-orange-400/30 to-brand-orange-300/30"
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
            Reset your password
          </h1>
          <p className="mt-2 text-sm text-neutral-600">
            Enter your email address and we'll send you a link to reset your
            password.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          <EmailInput
            label="Email address"
            placeholder="name@example.com"
            required
          />

          <GradientButton
            type="submit"
            gradientFrom="from-brand-purple-500"
            gradientTo="to-brand-purple-600"
          >
            Send Reset Link
          </GradientButton>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-neutral-500">
          Remember your password?{' '}
          <Link
            href="/signin"
            className="font-medium text-brand-orange-500 hover:text-brand-orange-600"
          >
            Sign in
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
