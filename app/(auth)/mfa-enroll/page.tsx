'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export default function MFAEnrollmentPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [showManualEntry, setShowManualEntry] = useState(false);
  const [copied, setCopied] = useState(false);

  // Mock secret key for demo - replace with actual API call
  const secretKey = 'JBSWY3DPEHPK3PXP';
  const accountName = 'demo@example.com';

  const handleCopySecret = () => {
    navigator.clipboard.writeText(secretKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleVerify = async () => {
    if (verificationCode.length !== 6) {
      return;
    }

    setIsVerifying(true);
    try {
      // TODO: Replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStep(3);
    } catch (error) {
      console.error('Verification failed:', error);
    } finally {
      setIsVerifying(false);
    }
  };

  const handleComplete = () => {
    router.push('/mfa/recovery-codes');
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-4">
      {/* Creative animated background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Large animated orbs */}
        <div className="absolute left-0 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-3xl" />
        <div
          className="absolute bottom-0 right-0 h-[600px] w-[600px] translate-x-1/2 translate-y-1/2 animate-pulse rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-3xl"
          style={{ animationDelay: '1.5s' }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-gradient-to-br from-indigo-500/15 to-violet-500/15 blur-3xl"
          style={{ animationDelay: '3s' }}
        />

        {/* Geometric shapes */}
        <div className="absolute left-1/4 top-1/4 h-32 w-32 rotate-45 animate-pulse rounded-lg bg-cyan-400/10 blur-xl" />
        <div
          className="absolute bottom-1/4 right-1/4 h-40 w-40 rotate-12 animate-pulse rounded-full bg-purple-400/10 blur-xl"
          style={{ animationDelay: '2s' }}
        />

        {/* Animated lines */}
        <svg className="absolute inset-0 h-full w-full opacity-20">
          <defs>
            <linearGradient
              id="lineGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.5)" />
              <stop offset="50%" stopColor="rgba(139, 92, 246, 0.5)" />
              <stop offset="100%" stopColor="rgba(236, 72, 153, 0.5)" />
            </linearGradient>
          </defs>
          <path
            d="M0,100 Q250,50 500,100 T1000,100"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-draw"
          />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        {/* Progress indicator */}
        <div className="mb-8 flex items-center justify-center gap-3">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold transition-all duration-500 ${
                  step >= s
                    ? 'scale-110 bg-gradient-to-br from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-500/50'
                    : 'border-2 border-white/20 bg-white/10 text-white/50'
                }`}
              >
                {step > s ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  s
                )}
              </div>
              {s < 3 && (
                <div
                  className={`mx-3 h-1 w-16 rounded-full transition-all duration-500 ${
                    step > s
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500'
                      : 'bg-white/20'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Main card */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-2xl">
          {/* Step 1: Introduction */}
          {step === 1 && (
            <div className="space-y-8 text-center">
              <div className="space-y-4">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 backdrop-blur-sm">
                  <svg
                    className="h-12 w-12 text-cyan-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </div>
                <h1 className="text-4xl font-bold text-white">
                  Set Up Two-Factor Authentication
                </h1>
                <p className="text-lg text-white/70">
                  Add an extra layer of security to your account
                </p>
              </div>

              <div className="grid gap-4 pt-4">
                {[
                  {
                    icon: (
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                    ),
                    title: 'Download an authenticator app',
                    desc: 'Google Authenticator, Authy, or any TOTP-compatible app',
                  },
                  {
                    icon: (
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                        />
                      </svg>
                    ),
                    title: 'Scan the QR code',
                    desc: 'Use your authenticator app to scan the code',
                  },
                  {
                    icon: (
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                        />
                      </svg>
                    ),
                    title: 'Enter verification code',
                    desc: 'Confirm setup with a 6-digit code from your app',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all hover:bg-white/10"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20">
                      <div className="text-cyan-300">{item.icon}</div>
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm text-white/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                onClick={() => setStep(2)}
                className="h-14 w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-base font-semibold text-white shadow-lg shadow-cyan-500/50 hover:from-cyan-600 hover:to-blue-600"
              >
                <span className="inline-flex items-center gap-2">
                  <span>Get Started</span>
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </Button>
            </div>
          )}

          {/* Step 2: QR Code */}
          {step === 2 && (
            <div className="space-y-6">
              <button
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
              >
                <svg
                  className="h-4 w-4"
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
                <span>Back</span>
              </button>

              <div className="space-y-3 text-center">
                <h1 className="text-3xl font-bold text-white">Scan QR Code</h1>
                <p className="text-white/70">
                  Open your authenticator app and scan this code
                </p>
              </div>

              {/* QR Code */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 animate-pulse rounded-3xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 blur-xl" />
                  <div className="relative flex h-64 w-64 items-center justify-center rounded-3xl border-4 border-white/20 bg-white shadow-2xl">
                    <div className="grid grid-cols-8 gap-1 p-4">
                      {Array.from({ length: 64 }).map((_, i) => (
                        <div
                          key={i}
                          className={`h-6 w-6 rounded-sm ${
                            Math.random() > 0.5
                              ? 'bg-slate-900'
                              : 'bg-transparent'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Manual entry */}
              <div className="text-center">
                <button
                  onClick={() => setShowManualEntry(!showManualEntry)}
                  className="text-sm font-medium text-cyan-300 hover:text-cyan-200"
                >
                  {showManualEntry
                    ? 'Hide manual entry'
                    : "Can't scan? Enter key manually"}
                </button>
              </div>

              {showManualEntry && (
                <div className="space-y-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <label className="text-sm font-semibold text-white">
                    Secret Key
                  </label>
                  <div className="flex items-center gap-2">
                    <code className="flex-1 rounded-lg border border-white/10 bg-white/5 p-3 font-mono text-sm tracking-wider text-white">
                      {secretKey}
                    </code>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleCopySecret}
                      className="border-white/20 bg-white/10 text-white hover:bg-white/20"
                    >
                      {copied ? (
                        <svg
                          className="h-4 w-4 text-green-400"
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
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                      )}
                    </Button>
                  </div>
                  <p className="text-xs text-white/50">
                    Account: {accountName}
                  </p>
                </div>
              )}

              {/* Verification code */}
              <div className="space-y-3">
                <label
                  htmlFor="code"
                  className="text-sm font-semibold text-white"
                >
                  Enter 6-digit code
                </label>
                <Input
                  id="code"
                  type="text"
                  inputMode="numeric"
                  maxLength={6}
                  placeholder="000000"
                  value={verificationCode}
                  onChange={(e) =>
                    setVerificationCode(e.target.value.replace(/\D/g, ''))
                  }
                  className="h-16 border-white/20 bg-white/10 text-center font-mono text-3xl tracking-[0.5em] text-white placeholder:text-white/30 focus:border-cyan-400/50 focus:ring-cyan-400/20"
                />
              </div>

              <Button
                onClick={handleVerify}
                disabled={verificationCode.length !== 6 || isVerifying}
                className="h-14 w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-base font-semibold text-white shadow-lg shadow-cyan-500/50 hover:from-cyan-600 hover:to-blue-600 disabled:opacity-50"
              >
                {isVerifying ? (
                  <span className="inline-flex items-center gap-2">
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
                    <span>Verifying...</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2">
                    <span>Verify & Enable</span>
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                )}
              </Button>
            </div>
          )}

          {/* Step 3: Success */}
          {step === 3 && (
            <div className="space-y-6 text-center">
              <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-green-400/20 to-emerald-500/20 backdrop-blur-sm">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg shadow-green-500/50">
                  <svg
                    className="h-12 w-12 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-white">
                  MFA Successfully Enabled!
                </h1>
                <p className="text-white/70">
                  Your account is now protected with two-factor authentication
                </p>
              </div>

              <div className="rounded-xl border border-amber-400/30 bg-amber-500/10 p-4 text-left backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      Important: Save your recovery codes
                    </h3>
                    <p className="mt-1 text-sm text-white/70">
                      Recovery codes allow you to access your account if you
                      lose your device. Make sure to save them securely.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleComplete}
                className="h-14 w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-base font-semibold text-white shadow-lg shadow-cyan-500/50 hover:from-cyan-600 hover:to-blue-600"
              >
                <span className="inline-flex items-center gap-2">
                  <span>View Recovery Codes</span>
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </Button>
            </div>
          )}
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-white/60">
          Need help?{' '}
          <Link
            href="/support"
            className="font-medium text-cyan-300 hover:text-cyan-200"
          >
            Contact support
          </Link>
        </p>
      </div>

      <style jsx>{`
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
        .animate-draw {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
