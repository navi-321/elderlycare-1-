import React from 'react';
import AppImage from '@/components/ui/AppImage';

const testimonials = [
  {
    id: 1,
    quote: "My father had become so withdrawn. When they started the scrapbook project, I heard him telling stories I\'d never heard before. Now he asks when the next kit is coming.",
    attribution: 'Maria K., Denver CO',
    role: 'Mother of Elena, age 9',
    elder: 'Grandpa Roberto, 73',
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
    alt: 'Warm portrait of a smiling woman with kind eyes'
  },
  {
    id: 2,
    quote: "I was afraid I\'d do it wrong. But the guide cards made me feel capable. When my granddaughter said \'Grandma, you\'re good at this,\' I felt like I still had something to give.",
    attribution: 'Margaret T., Seattle WA',
    role: 'Grandmother of Sophie, age 7',
    elder: 'Grandma Margaret, 69',
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    alt: 'Elderly woman with silver hair and a gentle smile'
  },
  {
    id: 3,
    quote: "Our kids never knew their great-aunt well. The recipe project changed that. Now they associate her with the cinnamon rolls they make together every Sunday.",
    attribution: 'David L., Boston MA',
    role: 'Father of twins, age 10',
    elder: 'Aunt Eleanor, 78',
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    alt: 'Man with friendly expression and casual demeanor'
  },
  {
    id: 4,
    quote: "The nature collection became our thing. My nephew calls me his \'explorer buddy\' now. At 75, I finally have a nickname I\'m proud of.",
    attribution: 'Robert Chen, Minneapolis MN',
    role: 'Uncle to Marcus, age 6',
    elder: 'Uncle Robert, 75',
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    alt: 'Older Asian man with warm smile wearing glasses'
  }
];


const TestimonialsSection: React.FC = () => {
  return (
    <section id="stories" className="bg-surface-raised py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 fade-in-up">
          <div>
            <span className="tag-pill mb-4 inline-flex">Community Voices</span>
            <h2
              className="font-display text-text-primary mt-4 leading-tight"
              style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.6rem)' }}>
              
              Words shared{' '}
              <span className="italic text-text-muted">from the heart.</span>
            </h2>
          </div>
          <p className="text-sm text-text-secondary font-light max-w-xs leading-relaxed md:text-right">
            These aren&apos;t testimonials. They&apos;re the messages people send while the memory is still fresh.
          </p>
        </div>

        {/* Horizontal scroll testimonials */}
        <div className="flex overflow-x-auto gap-5 pb-6 no-scrollbar snap-x snap-mandatory -mx-6 px-6">
          {testimonials.map((t, i) =>
          <article
            key={t.id}
            className={`testimonial-card fade-in-up delay-${(i % 3 + 1) * 100} flex-shrink-0 w-80 md:w-96 bg-white border border-surface-border rounded-card p-7 snap-center`}>
            
              {/* Quote mark */}
              <span className="quote-mark" aria-hidden="true">&ldquo;</span>

              <blockquote className="font-display text-base text-text-primary font-light italic leading-relaxed mb-5 mt-2">
                {t.quote}
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center gap-4 pt-4 border-t border-surface-border">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <AppImage
                  src={t.image}
                  alt={t.alt}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover" />
                
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary leading-none mb-1">
                    {t.attribution}
                  </p>
                  <p className="text-xs text-text-muted font-light">
                    {t.role}
                  </p>
                </div>
              </div>
            </article>
          )}
        </div>

        {/* Scroll hint */}
        <div className="flex items-center justify-center gap-3 mt-6 fade-in-up">
          <div className="w-6 h-[2px] bg-accent rounded" />
          <div className="w-2 h-[2px] bg-surface-border rounded" />
          <div className="w-2 h-[2px] bg-surface-border rounded" />
          <span className="text-xs text-text-muted ml-2">Swipe to discover more</span>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;