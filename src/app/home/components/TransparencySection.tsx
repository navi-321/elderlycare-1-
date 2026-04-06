import React from 'react';

const TransparencySection: React.FC = () => {
  return (
    <section id="pricing" className="bg-surface py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 fade-in-up">
          <span className="tag-pill mb-4 inline-flex">Complete Transparency</span>
          <h2
            className="font-display text-text-primary mt-4 leading-tight"
            style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)' }}
          >
            All the details{' '}
            <span className="italic text-text-muted">before you decide.</span>
          </h2>
          <div className="section-divider mt-6" />
        </div>

        {/* Cards grid — asymmetric bento */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">

          {/* Pricing card — spans 5 cols */}
          <div className="transparency-card fade-in-up delay-100 md:col-span-5 bg-surface-raised/70 border border-surface-border rounded-card p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between mb-5">
                <div>
                  <span className="tag-pill mb-3 inline-flex">Investment</span>
                  <h3 className="font-display text-xl text-text-primary mt-3 leading-snug">
                    One experience, infinite value.
                  </h3>
                </div>
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center text-accent flex-shrink-0"
                  style={{ backgroundColor: 'rgba(208,90,60,0.1)' }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
              </div>

              {/* Price tiers */}
              <div className="space-y-3 mb-5">
                <div className="flex items-center justify-between py-3 border-b border-surface-border">
                  <div>
                    <p className="text-sm font-semibold text-text-primary">Single Experience Kit</p>
                    <p className="text-xs text-text-muted font-light mt-0.5">One complete guided experience</p>
                  </div>
                  <span className="font-display text-2xl text-text-primary">$32</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-surface-border">
                  <div>
                    <p className="text-sm font-semibold text-text-primary">Quarterly Collection — 3 kits</p>
                    <p className="text-xs text-text-muted font-light mt-0.5">Curated seasonal experiences</p>
                  </div>
                  <div className="text-right">
                    <span className="font-display text-2xl text-text-primary">$85</span>
                    <p className="text-xs text-accent font-medium">Save $11</p>
                  </div>
                </div>
                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="text-sm font-semibold text-text-primary">Annual Membership — 12 kits</p>
                    <p className="text-xs text-text-muted font-light mt-0.5">A year of meaningful moments</p>
                  </div>
                  <div className="text-right">
                    <span className="font-display text-2xl text-text-primary">$299</span>
                    <p className="text-xs text-accent font-medium">Best value</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs text-text-muted font-light">
              Free shipping on orders over $45 · Cancel anytime · No hidden costs
            </p>
          </div>

          {/* Shipping card — spans 4 cols */}
          <div className="transparency-card fade-in-up delay-200 md:col-span-4 bg-surface-raised/70 border border-surface-border rounded-card p-7 flex flex-col justify-between">
            <div>
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center text-accent mb-4"
                style={{ backgroundColor: 'rgba(208,90,60,0.1)' }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="1" y="3" width="15" height="13" rx="1" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
              </div>
              <span className="tag-pill mb-3 inline-flex">Delivery</span>
              <h3 className="font-display text-xl text-text-primary mt-3 mb-3 leading-snug">
                Ready when you are.
              </h3>
              <p className="text-sm text-text-secondary font-light leading-relaxed mb-5">
                Orders ship within 24 hours. Arrives in 3–5 days nationwide. We deliver across the US and Canada.
              </p>

              {/* Timeline visual */}
              <div className="space-y-3">
                {[
                  { day: 'Day 1', label: 'Order packed with care' },
                  { day: 'Day 2', label: 'Ships from our studio' },
                  { day: 'Day 4–6', label: 'Arrives at your door' },
                  { day: 'Day 7+', label: 'Memories begin' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex flex-col items-center">
                      <div
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: i === 3 ? '#D05A3C' : '#DDD6C8', border: i === 3 ? 'none' : '1px solid #968B7E' }}
                      />
                      {i < 3 && <div className="w-px h-4 bg-surface-border mt-1" />}
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs font-semibold text-text-primary w-14">{item.day}</span>
                      <span className="text-xs text-text-muted font-light">{item.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sample PDF card — spans 3 cols */}
          <div className="transparency-card fade-in-up delay-300 md:col-span-3 bg-text-primary border border-text-primary/80 rounded-card p-7 flex flex-col justify-between relative overflow-hidden group">
            {/* Decorative background element */}
            <div
              className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-10 pointer-events-none"
              style={{ backgroundColor: '#D05A3C' }}
              aria-hidden="true"
            />

            <div className="relative z-10">
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center text-accent mb-4"
                style={{ backgroundColor: 'rgba(208,90,60,0.15)' }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D05A3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>
              <span
                className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-flex"
                style={{ backgroundColor: 'rgba(208,90,60,0.15)', color: '#D05A3C' }}
              >
                Sample Guide
              </span>
              <h3 className="font-display text-lg text-white mt-3 mb-3 leading-snug">
                Preview the experience.
              </h3>
              <p className="text-sm font-light leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.7)' }}>
                Download the complete &ldquo;Heritage Scrapbook&rdquo; guide — every prompt, every step, exactly as it arrives.
              </p>
            </div>

            <a
              href="#"
              className="cta-btn relative z-10 inline-flex items-center gap-2 bg-accent text-white text-sm font-semibold px-5 py-3 rounded-btn hover:bg-accent-deep transition-colors duration-300 w-full justify-center"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Sample
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransparencySection;