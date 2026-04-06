import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-surface flex flex-col items-center justify-center pt-14 pb-20 relative overflow-hidden px-6">
      {/* Subtle decorative element */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(90,117,139,0.08) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Eyebrow */}
        <div className="fade-in-up flex items-center justify-center gap-2 mb-8">
          <span className="dot-accent" />
          <span className="tag-pill">Meaningful Connections</span>
          <span className="dot-accent" />
        </div>

        {/* Display headline */}
        <h1
          className="fade-in-up delay-100 font-display text-text-primary leading-[1.06] tracking-tight mb-7"
          style={{ fontSize: 'clamp(2.4rem, 6vw, 4.8rem)' }}
        >
          Technology fades.
          <br />
          Memories don&apos;t. Create{' '}
          <span className="italic text-accent relative inline-block">
            lasting Kinships.
            {/* Decorative SVG underline */}
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 300 12"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0 8 Q 75 2 150 8 Q 225 14 300 8"
                stroke="#D05A3C"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
          </span>
        </h1>

        {/* Subtext */}
        <p
          className="fade-in-up delay-200 font-body text-text-muted font-light leading-relaxed mb-12 max-w-lg mx-auto"
          style={{ fontSize: 'clamp(1rem, 1.7vw, 1.15rem)' }}
        >
          Curated experiences that bring generations together through shared discovery and hands-on creation.
        </p>

        {/* Primary CTA */}
        <div className="fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#activities"
            className="cta-btn inline-flex items-center gap-3 bg-accent text-white font-semibold px-8 py-4 rounded-btn text-base hover:bg-accent-deep transition-colors duration-300 shadow-accent"
          >
            Explore Activities
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 text-text-secondary text-sm font-medium border-b border-surface-border hover:border-text-secondary transition-colors duration-200 pb-0.5"
          >
            See how it works
          </a>
        </div>

        {/* Trust micro-line */}
        <p className="fade-in-up delay-400 mt-10 text-xs text-text-muted tracking-wide">
          Created by family wellness experts · Screen-free experiences · Delivered in 3–5 days
        </p>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #F8F6F1)' }}
        aria-hidden="true"
      />
    </section>
  );
};

export default HeroSection;