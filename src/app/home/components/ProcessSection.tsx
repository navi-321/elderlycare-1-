import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Select by age and passion',
    description: 'Browse experiences matched to the child\'s age and the elder\'s interests — whether that\'s the kitchen, garden, workshop, or study. Every pairing is thoughtfully curated.',
    detail: 'Filter: Ages 5–7 · 8–11 · 12–16 · By interest · By skill level',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35M11 8v6M8 11h6" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Delivered to their doorstep',
    description: 'A beautifully packaged kit arrives within 3–5 days — everything needed, nothing extra to purchase. Elders open it and immediately know how to begin.',
    detail: 'Free delivery over $45 · Eco-friendly packaging · Ready to use',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Guided moments — zero prep',
    description: 'Illustrated instruction cards guide elders through each step in welcoming language. No prior experience needed, no technology required. Just two people and the moment.',
    detail: 'Large-print available · Audio guidance included · No apps needed',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Adaptable to every stage',
    description: 'Each experience offers three progression levels printed clearly on the cards. Elders naturally choose what fits — no complicated settings, no confusion.',
    detail: 'Introductory · Developing · Masterful — all included',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
];

const ProcessSection: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-surface py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14 fade-in-up">
          <span className="tag-pill mb-4 inline-flex">The Journey</span>
          <h2
            className="font-display text-text-primary mt-4 leading-tight"
            style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)' }}
          >
            Effortless to begin{' '}
            <span className="italic text-text-muted">for everyone.</span>
          </h2>
          <div className="section-divider mt-6" />
        </div>

        {/* Process cards — 2×2 bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`process-card fade-in-up delay-${(i + 1) * 100} bg-surface-raised/60 border border-surface-border rounded-card p-7 relative overflow-hidden group`}
            >
              {/* Large number watermark */}
              <span
                className="absolute top-4 right-6 font-display text-6xl font-light leading-none pointer-events-none select-none"
                style={{ color: 'rgba(122, 145, 166, 0.15)' }}
                aria-hidden="true"
              >
                {step.number}
              </span>

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center mb-4 text-accent transition-colors duration-300 group-hover:bg-accent/10"
                style={{ backgroundColor: 'rgba(208,90,60,0.08)' }}
              >
                {step.icon}
              </div>

              <h3 className="font-display text-lg text-text-primary mb-2 leading-snug">
                {step.title}
              </h3>
              <p className="text-sm text-text-secondary font-light leading-relaxed mb-4">
                {step.description}
              </p>

              {/* Detail tag */}
              <div className="flex items-center gap-2 text-xs text-text-muted font-medium pt-4 border-t border-surface-border/80">
                <span className="dot-accent" style={{ width: '5px', height: '5px' }} />
                {step.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Specialist badge */}
        <div className="mt-10 flex justify-center fade-in-up">
          <div className="inline-flex items-center gap-3 bg-surface-raised/70 border border-surface-border rounded-full px-6 py-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5A8A5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span className="text-xs font-semibold text-text-secondary tracking-wide">
              Developed by intergenerational connection researchers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;