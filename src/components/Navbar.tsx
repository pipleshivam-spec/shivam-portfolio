import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { personal, navigation } = portfolioData;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/85 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
          : 'bg-surface/60 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <nav className="max-w-container-max mx-auto px-margin-mobile md:px-gutter flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tighter hover:text-primary transition-colors flex items-center gap-2"
        >
          <span className="text-primary">&lt;</span>
          {personal.initials}
          <span className="text-primary">&gt;</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-on-surface-variant hover:text-primary text-sm font-medium tracking-wide transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-primary text-sm font-label-mono flex items-center gap-1 transition-colors font-bold uppercase tracking-wider"
          >
            <span className="text-primary">&gt;_</span> GitHub
          </a>
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-white/20 text-on-surface rounded-lg hover:bg-white/10 hover:border-white/40 transition-all text-sm font-medium"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="px-5 py-2 bg-primary text-on-primary font-bold rounded-lg electric-glow active:scale-95 transition-all text-sm uppercase tracking-wider"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Controls */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="#contact"
            className="px-3.5 py-1.5 bg-primary text-on-primary text-xs font-label-mono uppercase tracking-wider rounded-lg electric-glow"
          >
            Hire Me
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-on-surface-variant hover:text-on-surface focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-surface/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-margin-mobile py-6 flex flex-col gap-4">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="font-label-mono text-on-surface-variant hover:text-primary text-base py-2 border-b border-white/5 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-3 border border-white/20 text-on-surface rounded-lg font-label-mono text-sm uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <span className="text-primary font-bold">&gt;_</span> GitHub Profile
                </a>
                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-3 border border-white/20 text-on-surface rounded-lg font-label-mono text-sm uppercase tracking-wider"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
