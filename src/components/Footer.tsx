import React from 'react';
import { portfolioData } from '../data/portfolio';

export const Footer: React.FC = () => {
  const { personal, navigation } = portfolioData;

  return (
    <footer className="border-t border-white/10 bg-surface/90 backdrop-blur-md">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="font-headline-lg text-2xl font-bold text-on-surface tracking-tighter flex items-center gap-2">
              <span className="text-[#007AFF]">&lt;</span>
              {personal.initials}
              <span className="text-[#007AFF]">&gt;</span>
            </div>
            <p className="font-body-md text-on-surface-variant text-sm max-w-sm leading-relaxed">
              Architecting resilient RPA systems and intelligent AI agents. Bridging manual complexity with automated elegance.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <span className="font-label-mono text-xs uppercase tracking-widest text-primary block">
              Navigation
            </span>
            <ul className="space-y-2 font-label-mono text-xs">
              {navigation.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-on-surface-variant hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-3">
            <span className="font-label-mono text-xs uppercase tracking-widest text-primary block">
              Connect
            </span>
            <ul className="space-y-2 font-label-mono text-xs">
              <li>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  Email Me
                </a>
              </li>
              <li>
                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4 font-label-mono text-xs text-on-surface-variant">
          <p>© 2024 Shivam Piple. Built with React & Vite.</p>

          <div className="flex items-center gap-2.5 px-3 py-1 bg-surface-container-highest/60 rounded-full border border-white/5">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="uppercase text-[11px]">All Systems Nominal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
