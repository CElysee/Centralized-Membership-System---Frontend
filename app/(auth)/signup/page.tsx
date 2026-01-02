'use client';

import { AuthLayout } from '@/components/auth/AuthLayout';
import { EmailInput } from '@/components/auth/EmailInput';
import { PasswordInput } from '@/components/auth/PasswordInput';
import { GradientButton } from '@/components/auth/GradientButton';

export default function SignUpPage() {
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
        headline: 'Join our community',
        subtitle:
          'Start your journey with us. It only takes a few seconds to get started.',
        progressCard: {
          title: 'Your journey',
          currentStep: 'Create Account',
          stepNumber: 1,
          totalSteps: 3,
          progress: 33,
          hint: 'Complete your profile to unlock all features',
        },
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
            Create your account
          </h1>
          <p className="mt-2 text-sm text-neutral-600">
            Just a few details to get you started
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          <EmailInput
            label="Email address"
            placeholder="name@example.com"
            required
          />

          <PasswordInput
            label="Password"
            placeholder="Enter your password"
            required
          />

          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm your password"
            required
          />

          <GradientButton type="submit">Create Account</GradientButton>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-neutral-500">
          More options coming soon
        </p>
      </div>
    </AuthLayout>
  );
}
