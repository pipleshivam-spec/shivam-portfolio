import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

export const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-12 md:py-20">
      <div className="mb-12 sm:mb-16">
        <span className="font-label-mono text-primary uppercase text-xs tracking-widest block mb-3">
          05 / Academic Foundations
        </span>
        <h2 className="font-headline-xl text-3xl sm:text-headline-xl text-on-surface font-semibold">
          Education
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {education.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -4 }}
            className="glass-surface p-8 rounded-xl flex gap-6 items-start border border-white/10 hover:border-white/20 transition-all group"
          >
            <div className="p-4 bg-primary/10 rounded-xl text-primary shrink-0 group-hover:bg-[#007AFF]/20 transition-colors">
              <span className="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform">
                {item.icon}
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-headline-lg text-xl sm:text-headline-lg text-on-surface font-bold">
                  {item.degree}
                </h3>
                <span className="font-label-mono text-xs text-primary bg-primary/10 px-3 py-1 rounded font-bold">
                  {item.score}
                </span>
              </div>

              <p className="text-on-surface-variant font-label-mono text-xs sm:text-sm">
                {item.institution} • {item.period}
              </p>

              <p className="text-on-surface-variant/80 text-sm pt-2 leading-relaxed">
                {item.details}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
