import React from 'react';
import AppImage from '@/components/ui/AppImage';

const activities = [
  {
    id: 1,
    tag: 'Create',
    title: 'Heritage Scrapbook',
    description: 'Compile family stories and photos into a keepsake album. Elders share memories while children illustrate the pages — a treasured heirloom in the making.',
    age: 'Ages 6–13 with any elder',
    duration: '60–90 min',
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&q=80",
    alt: 'Hands arranging vintage photos and craft supplies on a wooden table',
    accent: '#5A758B'
  },
  {
    id: 2,
    tag: 'Cook',
    title: 'Recipe Legacy',
    description: 'Preserve cherished family recipes through guided cooking sessions. Measure, mix, and document the stories behind each dish for future generations.',
    age: 'Ages 8–15 with any elder',
    duration: '90–120 min',
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    alt: 'Family cooking together in a warm kitchen with ingredients spread out',
    accent: '#D05A3C'
  },
  {
    id: 3,
    tag: 'Build',
    title: 'Nature Collections',
    description: 'Explore the outdoors to gather leaves, stones, and flowers. Create pressed displays and labeled collections that celebrate the natural world.',
    age: 'Ages 5–12 with any elder',
    duration: '45–75 min',
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    alt: 'Pressed flowers and leaves arranged artistically on a light background',
    accent: '#5A8A5A'
  }
];


const ActivityCardsSection: React.FC = () => {
  return (
    <section id="activities" className="bg-surface-raised py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14 fade-in-up">
          <span className="tag-pill mb-4 inline-flex">Shared Experiences</span>
          <h2
            className="font-display text-text-primary mt-4 leading-tight"
            style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)' }}>
            
            Three paths to connection.{' '}
            <span className="italic text-text-muted">All deeply human.</span>
          </h2>
          <div className="section-divider mt-6" />
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {activities.map((activity, i) =>
          <article
            key={activity.id}
            className={`activity-card fade-in-up delay-${(i + 1) * 100} bg-white border border-surface-border rounded-card overflow-hidden cursor-default`}>
            
              {/* Image */}
              <div className="h-48 overflow-hidden relative">
                <AppImage
                src={activity.image}
                alt={activity.alt}
                fill
                className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw" />
              
                {/* Tag overlay */}
                <div className="absolute top-4 left-4">
                  <span
                  className="text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full text-white"
                  style={{ backgroundColor: activity.accent }}>
                  
                    {activity.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-lg text-text-primary mb-2 leading-snug">
                  {activity.title}
                </h3>
                <p className="text-sm text-text-secondary font-light leading-relaxed mb-5">
                  {activity.description}
                </p>

                {/* Meta row */}
                <div className="flex items-center justify-between pt-4 border-t border-surface-border">
                  <span className="text-xs text-text-muted font-medium">
                    {activity.age}
                  </span>
                  <span className="text-xs text-text-muted font-medium flex items-center gap-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                    </svg>
                    {activity.duration}
                  </span>
                </div>
              </div>
            </article>
          )}
        </div>

        {/* Bottom note */}
        <p className="text-center text-xs text-text-muted mt-10 fade-in-up">
          Each experience includes step-by-step guides, quality materials, and conversation prompts.
        </p>
      </div>
    </section>);

};

export default ActivityCardsSection;