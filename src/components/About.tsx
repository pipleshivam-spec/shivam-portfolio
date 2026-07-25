import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

export const About: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section id="about" className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Column: Image Card */}
        <div className="relative">
          <div className="aspect-[4/5] sm:aspect-square glass-surface rounded-xl overflow-hidden relative z-10 group shadow-2xl border border-white/10">
            <img
              src={personal.profileImage}
              alt={personal.profileImageAlt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95 contrast-105"
              loading="lazy"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />
          </div>

          {/* Decorative Backing Frame */}
          <div className="absolute -top-6 -left-6 w-full h-full border border-white/10 rounded-xl -z-0 hidden sm:block pointer-events-none" />

          {/* Floating GPA Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute -bottom-6 -right-2 sm:-right-6 glass-surface p-5 sm:p-6 z-20 rounded-xl border border-white/20 shadow-2xl backdrop-blur-xl"
          >
            <div className="font-label-mono text-label-mono text-primary font-bold mb-1 uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-primary" />
              GPA 7.44
            </div>
            <div className="font-headline-lg text-lg sm:text-headline-lg text-on-surface font-semibold">
              MCA Candidate
            </div>
          </motion.div>
        </div>

        {/* Right Column: Bio Content */}
        <div className="space-y-8">
          <div>
            <span className="font-label-mono text-primary uppercase text-xs tracking-widest block mb-3">
              01 / About Me
            </span>
            <h2 className="font-headline-xl text-3xl sm:text- headline-xl text-on-surface font-semibold leading-tight">
              {personal.aboutHeading}
            </h2>
            <p className="font-label-mono text-sm text-on-surface-variant/80 mt-1">
              {personal.aboutSubheading}
            </p>
          </div>

          <div className="space-y-4 text-on-surface-variant text-base sm:text-body-lg leading-relaxed">
            <p>{personal.aboutParagraph1}</p>
            <p>{personal.aboutParagraph2}</p>
          </div>

          <div className="mono-divider" />

          {/* Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-4 p-4 glass-surface rounded-xl hover:border-white/20 transition-all">
              <div className="p-2.5 bg-primary/10 rounded-lg text-primary shrink-0">
                <span className="material-symbols-outlined text-2xl">school</span>
              </div>
              <div>
                <p className="font-bold text-on-surface text-sm sm:text-base">Master of Computer Applications</p>
                <p className="text-on-surface-variant text-xs mt-0.5">Distributed Systems & AI Focus</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 glass-surface rounded-xl hover:border-white/20 transition-all">
              <div className="p-2.5 bg-primary/10 rounded-lg text-primary shrink-0">
                <span className="material-symbols-outlined text-2xl">verified</span>
              </div>
              <div>
                <p className="font-bold text-on-surface text-sm sm:text-base">Certified RPA Developer</p>
                <p className="text-on-surface-variant text-xs mt-0.5">UiPath & Power Automate</p>
              </div>
            </div>
          </div>

          {/* Key Attributes Bar */}
          <div className="pt-2">
            <ul className="grid grid-cols-3 gap-2 font-label-mono text-xs sm:text-sm text-center">
              <li className="p-3 glass-surface rounded-lg">
                <span className="text-on-surface-variant block text-[10px] uppercase">Based in</span>
                <span className="text-on-surface font-semibold">{personal.shortLocation}</span>
              </li>
              <li className="p-3 glass-surface rounded-lg">
                <span className="text-on-surface-variant block text-[10px] uppercase">Focus</span>
                <span className="text-on-surface font-semibold">AI Agents</span>
              </li>
              <li className="p-3 glass-surface rounded-lg">
                <span className="text-on-surface-variant block text-[10px] uppercase">Philosophy</span>
                <span className="text-on-surface font-semibold">Scale & Intent</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
