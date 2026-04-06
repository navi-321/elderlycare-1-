'use client';
import React from 'react';
import AppLogo from '@/components/ui/AppLogo';
import { useRouter } from 'next/navigation';

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/95 backdrop-blur-md border-b border-surface-raised">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => router.push('/home')}
        >
          <AppLogo
            size={26}
            text="Kinship"
            iconName="UsersIcon"
            onClick={() => router.push('/home')}
          />
        </div>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-secondary">
          <a
            href="#activities"
            className="hover:text-text-primary transition-colors duration-200"
          >
            Activities
          </a>
          <a
            href="#how-it-works"
            className="hover:text-text-primary transition-colors duration-200"
          >
            How It Works
          </a>
          <a
            href="#stories"
            className="hover:text-text-primary transition-colors duration-200"
          >
            Stories
          </a>
          <a
            href="#pricing"
            className="hover:text-text-primary transition-colors duration-200"
          >
            Pricing
          </a>
        </div>

        {/* CTA */}
        <a
          href="#activities"
          className="cta-btn hidden md:inline-flex items-center gap-2 bg-accent text-white text-sm font-semibold px-5 py-2.5 rounded-btn hover:bg-accent-deep transition-colors duration-300"
        >
          Get Started
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </nav>
  );
};

export default Header;