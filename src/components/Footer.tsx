import React from 'react';
import AppLogo from '@/components/ui/AppLogo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface border-t border-surface-raised py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Horizontal Flow */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <AppLogo size={24} text="Kinship" iconName="UsersIcon" />

          {/* Links */}
          <div className="flex items-center gap-1 text-sm text-text-muted">
            <a href="#activities" className="px-3 py-2 hover:text-text-primary transition-colors duration-200">Activities</a>
            <span className="text-surface-border">·</span>
            <a href="#how-it-works" className="px-3 py-2 hover:text-text-primary transition-colors duration-200">How It Works</a>
            <span className="text-surface-border">·</span>
            <a href="#stories" className="px-3 py-2 hover:text-text-primary transition-colors duration-200">Stories</a>
            <span className="text-surface-border">·</span>
            <a href="#pricing" className="px-3 py-2 hover:text-text-primary transition-colors duration-200">Pricing</a>
          </div>

          {/* Copyright + Legal */}
          <div className="flex items-center gap-4 text-xs text-text-muted">
            <span>© 2026 Kinship</span>
            <span className="text-surface-border">·</span>
            <a href="#" className="hover:text-text-primary transition-colors">Privacy</a>
            <span className="text-surface-border">·</span>
            <a href="#" className="hover:text-text-primary transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;