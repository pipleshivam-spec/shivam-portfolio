import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

export const Hero: React.FC = () => {
  const { personal } = portfolioData;
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = personal.typedRoles[roleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && typedText.length < currentRole.length) {
      timer = setTimeout(() => {
        setTypedText(currentRole.substring(0, typedText.length + 1));
      }, 100);
    } else if (!isDeleting && typedText.length === currentRole.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && typedText.length > 0) {
      timer = setTimeout(() => {
        setTypedText(currentRole.substring(0, typedText.length - 1));
      }, 50);
    } else if (isDeleting && typedText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % personal.typedRoles.length);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex, personal.typedRoles]);

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center px-margin-mobile md:px-gutter max-w-container-max mx-auto pt-28 pb-16 overflow-hidden">
      <div className="max-w-3xl relative z-10">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-surface-container-high/80 border border-outline-variant/30 rounded-full mb-6 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
          <span className="w-2 h-2 rounded-full bg-primary -ml-4" />
          <span className="font-label-mono text-primary text-xs uppercase tracking-[0.1em]">
            {personal.statusTag} — {personal.tagline}
          </span>
        </motion.div>

        {/* Display Name / Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display-lg text-4xl sm:text-6xl lg:text-display-lg mb-4 leading-tight tracking-tight text-on-surface"
        >
          {personal.headlineDesktop}
        </motion.h1>

        {/* Dynamic Typing Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="min-h-[50px] sm:min-h-[64px] mb-6 flex items-center"
        >
          <span className="font-headline-xl text-xl sm:text-3xl lg:text-headline-xl text-primary text-glow font-semibold typing-cursor">
            {typedText}
          </span>
        </motion.div>

        {/* Description Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-body-lg text-base sm:text-lg text-on-surface-variant mb-10 max-w-2xl leading-relaxed"
        >
          {personal.description}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row flex-wrap gap-4 mb-14"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-primary text-on-primary font-bold rounded-lg flex items-center justify-center gap-2 electric-glow hover:scale-[1.02] active:scale-95 transition-all text-base uppercase tracking-wider"
          >
            View Projects
            <span className="material-symbols-outlined text-xl">arrow_forward</span>
          </a>

          <a
            href="#contact"
            className="px-8 py-4 glass-surface text-on-surface font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all text-base uppercase tracking-wider"
          >
            Get In Touch
            <span className="material-symbols-outlined text-xl">send</span>
          </a>
        </motion.div>

        {/* Quick Social Metadata */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center gap-6 text-on-surface-variant text-sm font-label-mono"
        >
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-2 hover:text-primary transition-colors group"
          >
            <span className="material-symbols-outlined text-xl text-primary group-hover:scale-110 transition-transform">
              mail
            </span>
            <span>{personal.email}</span>
          </a>

          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-colors uppercase tracking-wider"
          >
            <span className="text-primary font-bold">&gt;_</span>
            <span>GITHUB</span>
          </a>

          <div className="flex items-center gap-2 uppercase tracking-wider">
            <span className="material-symbols-outlined text-xl text-primary">location_on</span>
            <span>{personal.location}</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="hidden md:flex absolute bottom-6 right-gutter flex-col items-center gap-2 text-on-surface-variant opacity-60 hover:opacity-100 transition-opacity"
      >
        <span className="font-label-mono text-xs uppercase tracking-widest rotate-90 origin-right translate-x-3 mb-6">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
};
