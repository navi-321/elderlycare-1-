'use client';
import React, { useEffect, useState } from 'react';

const PersistentBottomBar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past roughly 2 card rows (~700px)
      setVisible(window.scrollY > 700);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`bottom-bar fixed bottom-0 left-0 right-0 z-40 ${visible ? 'visible' : ''}`}
      role="complementary"
      aria-label="Persistent call to action"
    >
      <div
        className="bg-white/95 backdrop-blur-md border-t border-surface-border px-6 py-3.5"
        style={{ boxShadow: '0 -4px 20px rgba(45, 62, 76, 0.06)' }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          {/* Left: messaging */}
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-text-primary leading-none mb-1">
              Ready to create meaningful moments?
            </p>
            <p className="text-xs text-text-muted font-light">
              Ships within 24 hours · Everything included · No preparation needed
            </p>
          </div>

          {/* Right: CTA */}
          <a
            href="#activities"
            className="cta-btn flex-shrink-0 inline-flex items-center gap-2 bg-accent text-white font-semibold px-6 py-3 rounded-btn text-sm hover:bg-accent-deep transition-colors duration-300 shadow-accent w-full sm:w-auto justify-center"
          >
            Explore Experiences
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PersistentBottomBar;