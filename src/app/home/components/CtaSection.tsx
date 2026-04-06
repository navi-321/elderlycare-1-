import React from 'react';

const CtaSection: React.FC = () => {
  return (
    <section className="bg-surface-raised py-20 px-6 relative overflow-hidden">
      {/* Decorative soft circle */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(208,90,60,0.06) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto text-center relative z-10 fade-in-up">
        {/* Decorative element */}
        <div className="flex justify-center mb-7">
          <svg width="36" height="36" viewBox="0 0 40 40" fill="none" aria-hidden="true">
            <circle cx="20" cy="20" r="18" stroke="#DDD6C8" strokeWidth="1" />
            <path d="M20 12 C 20 12, 24 16, 24 20 C 24 24, 20 28, 20 28 C 20 28, 16 24, 16 20 C 16 16, 20 12, 20 12Z" fill="#D05A3C" opacity="0.5" />
          </svg>
        </div>

        <h2
          className="font-display text-text-primary leading-tight mb-5"
          style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3.2rem)' }}
        >
          The moment is ready.{' '}
          <span className="italic text-text-muted">It always has been.</span>
        </h2>

        <p className="text-base text-text-secondary font-light leading-relaxed mb-10 max-w-lg mx-auto">
          Choose the first experience. It arrives at their door. You handle the details once; they cherish the connection forever.
        </p>

        <a
          href="#activities"
          className="cta-btn inline-flex items-center gap-3 bg-accent text-white font-semibold px-10 py-4.5 rounded-btn text-lg hover:bg-accent-deep transition-colors duration-300 shadow-accent"
        >
          Begin Your Journey
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>

        <p className="mt-6 text-xs text-text-muted">
          No subscription required · Free shipping over $45 · 30-day satisfaction guarantee
        </p>
      </div>
    </section>
  );
};

export default CtaSection;