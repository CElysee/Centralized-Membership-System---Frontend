'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function RecoveryCodesPage() {
  const router = useRouter();
  const [showCodes, setShowCodes] = useState(false);
  const [copiedAll, setCopiedAll] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  // Mock recovery codes - replace with actual API call
  const recoveryCodes = [
    'AXBF-7K2M-9NPQ',
    'R4ST-UVW6-XY8Z',
    'AB12-CD34-EF56',
    'GH78-IJ90-KL12',
    'MN34-OP56-QR78',
    'ST90-UV12-WX34',
    'YZ56-AB78-CD90',
    'EF12-GH34-IJ56',
  ];

  const handleCopyCode = (code: string, index: number) => {
    if (!showCodes) return;
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleCopyAll = () => {
    if (!showCodes) return;
    navigator.clipboard.writeText(recoveryCodes.join('\n'));
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  const handleDownload = () => {
    if (!showCodes) return;

    const content = `# Recovery Codes
# Generated: ${new Date().toLocaleDateString()}
# IMPORTANT: Store these codes in a safe place
# Each code can only be used once

${recoveryCodes.map((code, i) => `${i + 1}. ${code}`).join('\n')}

# If you lose access to your authenticator app,
# use one of these codes to sign in.
`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'recovery-codes.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    if (!showCodes) return;

    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Recovery Codes</title>
            <style>
              body { font-family: monospace; padding: 40px; }
              h1 { font-size: 24px; margin-bottom: 20px; }
              .code { padding: 10px; margin: 5px 0; background: #f5f5f5; border-radius: 4px; }
              .warning { color: #d97706; margin-top: 20px; }
            </style>
          </head>
          <body>
            <h1>🔐 Recovery Codes</h1>
            <p>Generated: ${new Date().toLocaleDateString()}</p>
            ${recoveryCodes.map((code, i) => `<div class="code">${i + 1}. ${code}</div>`).join('')}
            <p class="warning">⚠️ Store these codes in a safe place. Each code can only be used once.</p>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  const handleContinue = () => {
    if (!confirmed) {
      return;
    }
    router.push('/dashboard');
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 p-4">
      {/* Creative animated background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Large gradient orbs */}
        <div className="absolute -left-40 -top-40 h-[700px] w-[700px] animate-pulse rounded-full bg-gradient-to-br from-emerald-500/25 to-teal-500/25 blur-3xl" />
        <div
          className="absolute -bottom-40 -right-40 h-[700px] w-[700px] animate-pulse rounded-full bg-gradient-to-br from-cyan-500/25 to-blue-500/25 blur-3xl"
          style={{ animationDelay: '2s' }}
        />

        {/* Hexagonal pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Floating geometric shapes */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-2xl">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-2xl">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400/20 to-teal-500/20 backdrop-blur-sm">
              <svg
                className="h-10 w-10 text-emerald-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 7.029c-.049-.377-.068-.74-.08-1.12a7.471 7.471 0 01-1.588-3.755 4.502 4.502 0 015.736-3.547M15.75 5.25a3 3 0 00-3 3m3 3v6a3 3 0 01-3 3m-3-3a3 3 0 013-3m0 0v-6m0 0a3 3 0 013-3m3 3h6m-9 0H9m12 0h-3m-3 0h-3"
                />
              </svg>
            </div>
            <h1 className="mb-2 text-3xl font-bold text-white">
              Your Recovery Codes
            </h1>
            <p className="text-white/70">
              Save these codes in a secure location. They can be used to access
              your account if you lose your authenticator.
            </p>
          </div>

          {/* Warning banner */}
          <div className="mb-6 rounded-xl border border-amber-400/30 bg-amber-500/10 p-4 backdrop-blur-sm">
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
                  Keep these codes safe
                </h3>
                <p className="mt-1 text-sm text-white/70">
                  Each code can only be used once. Without them, you may lose
                  access to your account.
                </p>
              </div>
            </div>
          </div>

          {/* Toggle visibility */}
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-semibold text-white">
              Recovery Codes
            </span>
            <button
              onClick={() => setShowCodes(!showCodes)}
              className="inline-flex items-center gap-2 text-sm font-medium text-emerald-300 transition-colors hover:text-emerald-200"
            >
              {showCodes ? (
                <>
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
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  </svg>
                  <span>Hide codes</span>
                </>
              ) : (
                <>
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
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  <span>Show codes</span>
                </>
              )}
            </button>
          </div>

          {/* Codes grid */}
          <div className="mb-6 grid grid-cols-2 gap-3">
            {recoveryCodes.map((code, index) => (
              <button
                key={index}
                onClick={() => showCodes && handleCopyCode(code, index)}
                disabled={!showCodes}
                className={`group relative rounded-xl border p-4 text-center font-mono text-sm transition-all ${
                  showCodes
                    ? 'cursor-pointer border-white/20 bg-white/5 backdrop-blur-sm hover:border-emerald-400/50 hover:bg-emerald-500/10'
                    : 'cursor-default border-white/10 bg-white/5 backdrop-blur-sm'
                }`}
              >
                {showCodes ? (
                  <>
                    <span className="text-white">{code}</span>
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100">
                      {copiedIndex === index ? (
                        <svg
                          className="h-4 w-4 text-emerald-300"
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
                          className="h-4 w-4 text-white/40"
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
                    </span>
                  </>
                ) : (
                  <span className="tracking-wider text-white/30">
                    ••••-••••-••••
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Action buttons */}
          <div className="mb-6 flex gap-2">
            <Button
              variant="outline"
              onClick={handleCopyAll}
              disabled={!showCodes}
              className="flex-1 border-white/20 bg-white/10 text-white hover:bg-white/20 disabled:opacity-50"
              size="sm"
            >
              {copiedAll ? (
                <span className="inline-flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-emerald-300"
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
                  <span>Copied</span>
                </span>
              ) : (
                <span className="inline-flex items-center gap-2">
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
                  <span>Copy all</span>
                </span>
              )}
            </Button>
            <Button
              variant="outline"
              onClick={handleDownload}
              disabled={!showCodes}
              className="flex-1 border-white/20 bg-white/10 text-white hover:bg-white/20 disabled:opacity-50"
              size="sm"
            >
              <span className="inline-flex items-center gap-2">
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
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                <span>Download</span>
              </span>
            </Button>
            <Button
              variant="outline"
              onClick={handlePrint}
              disabled={!showCodes}
              className="border-white/20 bg-white/10 text-white hover:bg-white/20 disabled:opacity-50"
              size="sm"
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
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                />
              </svg>
            </Button>
          </div>

          {/* Confirmation checkbox */}
          <label className="mb-6 flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
            <input
              type="checkbox"
              checked={confirmed}
              onChange={(e) => setConfirmed(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-white/20 bg-white/10 text-emerald-500 focus:ring-2 focus:ring-emerald-400/50 focus:ring-offset-2 focus:ring-offset-transparent"
            />
            <div className="text-sm">
              <span className="font-semibold text-white">
                I have saved my recovery codes
              </span>
              <p className="mt-1 text-white/60">
                I understand that without these codes or my authenticator app, I
                may lose access to my account.
              </p>
            </div>
          </label>

          {/* Continue button */}
          <Button
            onClick={handleContinue}
            disabled={!confirmed}
            className="h-14 w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-base font-semibold text-white shadow-lg shadow-emerald-500/50 hover:from-emerald-600 hover:to-teal-600 disabled:opacity-50"
          >
            <span className="inline-flex items-center gap-2">
              <span>Continue to Dashboard</span>
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

        {/* Security tip */}
        <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm">
          <div className="inline-flex items-center gap-2 text-sm">
            <svg
              className="h-4 w-4 text-emerald-300"
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
            <span className="text-white/70">
              Tip: Store codes in a password manager or secure location
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-30px) translateX(20px) rotate(180deg);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
}
