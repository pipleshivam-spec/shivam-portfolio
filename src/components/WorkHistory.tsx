import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

export const WorkHistory: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-12 md:py-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16">
        <div>
          <span className="font-label-mono text-primary uppercase text-xs tracking-widest block mb-3">
            03 / Career Timeline
          </span>
          <h2 className="font-headline-xl text-3xl sm:text-headline-xl text-on-surface font-semibold">
            Work History
          </h2>
        </div>
        <div className="font-label-mono text-xs text-on-surface-variant mt-2 md:mt-0">
          (02 ROLES DELIVERED)
        </div>
      </div>

      <div className="relative space-y-10 sm:space-y-12">
        {/* Vertical Timeline Line */}
        <div className="absolute left-4 md:left-8 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-white/10 to-transparent" />

        {experience.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative pl-10 md:pl-24 group"
          >
            {/* Timeline Node Point */}
            <div className="absolute left-2.5 md:left-7 top-6 w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20 group-hover:ring-primary/40 group-hover:scale-125 transition-all duration-300 -translate-x-1/2" />

            <div className="glass-surface p-6 sm:p-8 rounded-xl border border-white/10 group-hover:border-white/20 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="font-headline-lg text-xl sm:text-headline-lg font-semibold text-on-surface">
                    {exp.role}
                  </h3>
                  <div className="flex gap-4 text-xs font-label-mono text-on-surface-variant/80 mt-1">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm text-primary">calendar_today</span>
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm text-primary">location_on</span>
                      {exp.location}
                    </span>
                  </div>
                </div>

                <span className="font-label-mono text-xs text-primary bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full w-fit mt-2 md:mt-0 font-semibold tracking-wider">
                  {exp.company}
                </span>
              </div>

              <p className="font-body-md text-on-surface-variant text-sm sm:text-base mb-6 leading-relaxed">
                {exp.description}
              </p>

              {/* Achievements List */}
              <div className="space-y-2 pt-2 border-t border-white/5">
                <span className="font-label-mono text-[11px] text-primary uppercase tracking-widest block mb-2">
                  Key Deliverables
                </span>
                {exp.achievements.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-on-surface-variant">
                    <span className="text-primary font-bold mt-0.5">›</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
