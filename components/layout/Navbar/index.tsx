'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';

export interface NavbarProps {
  className?: string;
}

const associationsItems = [
  { label: 'All Associations', href: '/associations' },
  { label: 'My Associations', href: '/associations/my' },
  { label: 'Join Association', href: '/associations/join' },
] as const;

const navLinks = [
  { href: '/features', label: 'Features' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/associations', label: 'Associations' },
  { href: '/about', label: 'About' },
] as const;

export const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  // All hooks must be called unconditionally - same order every render
  const pathname = usePathname();
  const [isAssociationsOpen, setIsAssociationsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const associationsRef = useRef<HTMLDivElement>(null);

  // Memoize auth page check for performance
  const isAuthPage = useMemo(
    () =>
      Boolean(
        pathname?.startsWith('/signin') ||
        pathname?.startsWith('/signup') ||
        pathname?.startsWith('/forgot-password') ||
        pathname?.startsWith('/reset-password')
      ),
    [pathname]
  );

  // Close dropdown when clicking outside - always set up, even if not visible
  useEffect(() => {
    if (!isAssociationsOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        associationsRef.current &&
        !associationsRef.current.contains(event.target as Node)
      ) {
        setIsAssociationsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isAssociationsOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        !target.closest('nav') &&
        !target.closest('button[aria-label="Toggle menu"]')
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Early return after all hooks are called - this is safe
  if (isAuthPage) {
    return null;
  }

  const isActive = (href: string) => {
    if (href === '/associations') {
      return pathname?.startsWith('/associations');
    }
    return pathname === href;
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b border-neutral-200/50 bg-white/80 backdrop-blur-xl ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo - Left */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-brand-orange-500 to-brand-orange-600 shadow-md transition-transform duration-300 group-hover:scale-105">
              {/* Users icon */}
              <svg
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-neutral-900">RCOT</span>
              <span className="hidden text-xs text-neutral-500 sm:block">
                Membership System
              </span>
            </div>
          </Link>

          {/* Navigation - Center */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              if (link.href === '/associations') {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    ref={associationsRef}
                  >
                    <button
                      onClick={() => setIsAssociationsOpen(!isAssociationsOpen)}
                      className={`group relative px-4 py-2 text-sm font-medium transition-colors ${
                        isActive(link.href)
                          ? 'text-neutral-900'
                          : 'text-neutral-600 hover:text-neutral-900'
                      }`}
                      aria-expanded={isAssociationsOpen}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <span
                        className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-brand-orange-500 transition-all duration-300 ${
                          isActive(link.href)
                            ? 'w-3/4'
                            : 'w-0 group-hover:w-3/4'
                        }`}
                      />
                    </button>
                    {isAssociationsOpen && (
                      <div
                        className="absolute left-0 top-full mt-2 w-48 rounded-lg border border-neutral-200 bg-white py-2 shadow-lg"
                        role="menu"
                      >
                        {associationsItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-neutral-900"
                            onClick={() => setIsAssociationsOpen(false)}
                            role="menuitem"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative px-4 py-2 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? 'text-neutral-900'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-brand-orange-500 transition-all duration-300 ${
                      isActive(link.href) ? 'w-3/4' : 'w-0 group-hover:w-3/4'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Auth Buttons - Right */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/signin">
              <Button
                variant="ghost"
                size="sm"
                className="text-neutral-600 hover:text-neutral-900"
              >
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <Button variant="primary" size="sm">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg p-2 transition-colors hover:bg-neutral-100 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg
                className="h-6 w-6 text-neutral-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-neutral-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="animate-fade-in border-t border-neutral-200/50 py-4 lg:hidden">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => {
                if (link.href === '/associations') {
                  return (
                    <div key={link.href}>
                      <button
                        onClick={() =>
                          setIsAssociationsOpen(!isAssociationsOpen)
                        }
                        className={`w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                          isActive(link.href)
                            ? 'bg-neutral-50 text-neutral-900'
                            : 'text-neutral-600 hover:bg-neutral-50/50 hover:text-neutral-900'
                        }`}
                      >
                        {link.label}
                      </button>
                      {isAssociationsOpen && (
                        <div className="mt-1 space-y-1 pl-4">
                          {associationsItems.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => {
                                setIsAssociationsOpen(false);
                                setIsMobileMenuOpen(false);
                              }}
                              className="block rounded-lg px-4 py-2 text-sm text-neutral-600 transition-colors hover:bg-neutral-50/50 hover:text-neutral-900"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? 'bg-neutral-50 text-neutral-900'
                        : 'text-neutral-600 hover:bg-neutral-50/50 hover:text-neutral-900'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="mt-2 flex gap-3 border-t border-neutral-200/50 px-4 pt-4">
                <Link
                  href="/signin"
                  className="flex-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button variant="outline" size="sm" className="w-full">
                    Sign In
                  </Button>
                </Link>
                <Link
                  href="/signup"
                  className="flex-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button variant="primary" size="sm" className="w-full">
                    Get Started
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
