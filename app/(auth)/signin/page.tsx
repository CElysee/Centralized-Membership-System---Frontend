'use client';

import Link from 'next/link';
import { AuthLayout } from '@/components/auth/AuthLayout';
import { EmailInput } from '@/components/auth/EmailInput';
import { PasswordInput } from '@/components/auth/PasswordInput';
import { GradientButton } from '@/components/auth/GradientButton';

export default function SignInPage() {
  return (
    <AuthLayout
      leftContent={{
        icon: (
          <svg
            className="h-10 w-10 text-brand-orange-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        ),
        headline: 'Welcome back!',
        subtitle:
          "We're excited to see you again. Your dashboard awaits with new insights.",
      }}
      gradientFrom="from-brand-orange-100"
      gradientTo="to-brand-purple-100"
      leftOrbColor="from-brand-orange-400/30 to-brand-orange-300/30"
      rightOrbColor="from-brand-purple-400/30 to-brand-purple-300/30"
    >
      <div className="space-y-6">
        {/* Title */}
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">
            Sign in to your account
          </h1>
          <p className="mt-2 text-sm text-neutral-600">
            Enter your credentials to access your dashboard
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          <EmailInput
            label="Email address"
            placeholder="name@example.com"
            required
          />

          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="block text-sm font-semibold text-neutral-700">
                Password
              </label>
              <Link
                href="/forgot-password"
                className="text-sm font-medium text-brand-orange-500 hover:text-brand-orange-600"
              >
                Forgot password?
              </Link>
            </div>
            <PasswordInput placeholder="Enter your password" required />
          </div>

          <GradientButton type="submit">Sign In</GradientButton>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-neutral-500">
          More options coming soon
        </p>
      </div>
    </AuthLayout>
  );
}
