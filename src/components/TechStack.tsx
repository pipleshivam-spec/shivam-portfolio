import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

export const TechStack: React.FC = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-12 md:py-20">
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <span className="font-label-mono text-primary uppercase text-xs tracking-widest block mb-3">
          02 / Capabilities & Architecture
        </span>
        <h2 className="font-headline-xl text-3xl sm:text-headline-xl text-on-surface font-semibold">
          Tech Stack
        </h2>
        <p className="text-on-surface-variant text-base mt-2">
          Core tools, platforms, and frameworks engineered to automate complex enterprise workflows.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {skills.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -6 }}
            className="glass-surface p-8 rounded-xl space-y-6 flex flex-col justify-between border border-white/10 group hover:border-primary/50 transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-primary">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined text-3xl text-primary group-hover:scale-110 transition-transform">
                    {category.icon}
                  </span>
                </div>
                <h3 className="font-headline-lg text-xl sm:text-headline-lg text-on-surface font-semibold">
                  {category.category}
                </h3>
              </div>

              <div className="w-full h-[1px] bg-white/10 group-hover:bg-primary/30 transition-colors" />

              <div className="flex flex-wrap gap-2.5 pt-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-surface-container-highest/60 font-label-mono text-xs text-on-surface border border-white/10 rounded-md group-hover:border-white/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-label-mono text-on-surface-variant/70 pt-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>Production Ready</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
