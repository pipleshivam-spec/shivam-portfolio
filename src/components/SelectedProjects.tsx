import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData, Project } from '../data/portfolio';

export const SelectedProjects: React.FC = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-12 md:py-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 sm:mb-16">
        <div>
          <span className="font-label-mono text-primary uppercase text-xs tracking-widest block mb-3">
            04 / Selected Works
          </span>
          <h2 className="font-headline-xl text-3xl sm:text-headline-xl text-on-surface font-semibold">
            Selected Projects
          </h2>
        </div>
        <p className="font-label-mono text-xs text-on-surface-variant mt-2 sm:mt-0 uppercase tracking-widest">
          03 Case Studies
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => {
          const isFeatured = project.isFeatured || index === 2;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`glass-surface group overflow-hidden rounded-xl border border-white/10 flex flex-col justify-between hover:border-primary/40 transition-all duration-500 ${
                isFeatured ? 'md:col-span-2' : ''
              }`}
            >
              {isFeatured ? (
                /* Featured Full-Width Card Layout */
                <div className="grid md:grid-cols-2 items-center h-full">
                  <div className="h-64 md:h-full min-h-[280px] relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-surface/90 via-surface/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="font-label-mono text-xs bg-primary text-on-primary px-3 py-1 rounded font-bold uppercase tracking-wider electric-glow">
                        {project.tag}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 sm:p-12 flex flex-col justify-center space-y-6">
                    <div>
                      <span className="font-label-mono text-xs text-primary block mb-2 uppercase tracking-widest">
                        {project.category}
                      </span>
                      <h3 className="font-headline-lg text-2xl sm:text-headline-lg text-on-surface font-bold">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-surface-container-highest/60 font-label-mono text-xs text-on-surface-variant border border-white/10 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="px-6 py-3 bg-primary text-on-primary font-bold rounded-lg text-xs uppercase tracking-wider flex items-center gap-2 electric-glow hover:scale-105 active:scale-95 transition-all"
                      >
                        View Case Study
                        <span className="material-symbols-outlined text-sm">open_in_new</span>
                      </button>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 border border-white/20 text-on-surface hover:bg-white/10 font-bold rounded-lg text-xs uppercase tracking-wider flex items-center gap-2 transition-all"
                      >
                        <span className="font-bold">&gt;_</span> GitHub
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                /* Standard Project Card Layout */
                <>
                  <div>
                    <div className="h-64 relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
                      <div className="absolute bottom-4 left-6">
                        <span className="font-label-mono text-xs bg-primary text-on-primary px-3 py-1 rounded font-bold uppercase tracking-wider">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 sm:p-8 space-y-4">
                      <h3 className="font-headline-lg text-xl sm:text-headline-lg text-on-surface font-bold">
                        {project.title}
                      </h3>
                      <p className="text-on-surface-variant text-sm line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 sm:px-8 pb-8 pt-4 flex justify-between items-center border-t border-white/5">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-label-mono text-on-surface-variant/80 border border-white/10 px-2 py-0.5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-on-surface-variant hover:text-primary text-xs font-label-mono flex items-center gap-1 transition-colors uppercase font-bold"
                      >
                        GitHub
                      </a>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-primary hover:text-white text-xs font-label-mono flex items-center gap-1 transition-colors uppercase font-bold"
                      >
                        Details
                        <span className="material-symbols-outlined text-sm">open_in_new</span>
                      </button>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="glass-surface max-w-2xl w-full p-6 sm:p-8 rounded-2xl border border-white/20 shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 text-on-surface-variant hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-all"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>

              <div className="space-y-2">
                <span className="font-label-mono text-xs text-primary uppercase tracking-wider">
                  {selectedProject.category} — {selectedProject.tag}
                </span>
                <h3 className="font-headline-xl text-2xl sm:text-headline-xl text-on-surface font-bold">
                  {selectedProject.title}
                </h3>
              </div>

              <div className="aspect-video w-full rounded-xl overflow-hidden border border-white/10">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-on-surface-variant text-base leading-relaxed">
                {selectedProject.longDescription}
              </p>

              <div className="space-y-2">
                <span className="font-label-mono text-xs text-primary uppercase tracking-widest block">
                  Tech Stack & Tools
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-surface-container-highest font-label-mono text-xs text-on-surface border border-white/10 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-between items-center border-t border-white/10">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-primary text-on-primary font-bold rounded-lg font-label-mono text-xs uppercase tracking-wider flex items-center gap-2 electric-glow hover:scale-105 transition-all"
                >
                  <span className="font-bold">&gt;_</span> View GitHub Code
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 glass-surface text-on-surface rounded-lg font-label-mono text-xs uppercase hover:bg-white/10 transition-all"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
