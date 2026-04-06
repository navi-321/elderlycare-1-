'use client';
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import ActivityCardsSection from './components/ActivityCardsSection';
import ProcessSection from './components/ProcessSection';
import TestimonialsSection from './components/TestimonialsSection';
import TransparencySection from './components/TransparencySection';
import CtaSection from './components/CtaSection';
import PersistentBottomBar from './components/PersistentBottomBar';

export default function HomePage() {
  // Intersection Observer for fade-in-up animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('.fade-in-up');
    elements?.forEach((el) => observer?.observe(el));

    return () => observer?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-surface">
      {/* Noise texture overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      <Header />

      <main>
        <HeroSection />
        <ActivityCardsSection />
        <ProcessSection />
        <TestimonialsSection />
        <TransparencySection />
        <CtaSection />
      </main>

      <Footer />
      <PersistentBottomBar />
    </div>
  );
}