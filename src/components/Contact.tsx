import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

export const Contact: React.FC = () => {
  const { personal } = portfolioData;
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    inquiryType: 'Automation Project',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleResetForm = () => {
    setSubmitted(false);
    setFormState({
      name: '',
      email: '',
      inquiryType: 'Automation Project',
      message: '',
    });
  };

  return (
    <section id="contact" className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-12 md:py-20">
      <div className="glass-surface p-8 sm:p-14 md:p-20 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 border border-white/10 shadow-2xl relative overflow-hidden">
        {/* Ambient Light Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] pointer-events-none" />

        {/* Left Column: Heading & Info */}
        <div className="space-y-8 flex flex-col justify-between">
          <div className="space-y-6">
            <span className="font-label-mono text-primary uppercase text-xs tracking-widest block">
              06 / Get In Touch
            </span>
            <h2 className="font-display-lg text-4xl sm:text-5xl lg:text-display-lg text-on-surface font-bold leading-tight">
              Let's Automate.
            </h2>
            <p className="text-on-surface-variant font-body-lg text-base sm:text-body-lg leading-relaxed max-w-md">
              Looking for an engineer to streamline your backend, build custom AI agents, or architect RPA pipelines? Let's connect.
            </p>
          </div>

          <div className="space-y-6 pt-4 border-t border-white/10">
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-4 text-on-surface hover:text-primary transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                <span className="material-symbols-outlined text-primary text-xl">alternate_email</span>
              </div>
              <div>
                <span className="font-label-mono text-[10px] text-on-surface-variant uppercase block">Direct Email</span>
                <span className="font-body-md text-sm sm:text-base font-semibold">{personal.email}</span>
              </div>
            </a>

            <div className="flex items-center gap-4 text-on-surface">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-xl">location_on</span>
              </div>
              <div>
                <span className="font-label-mono text-[10px] text-on-surface-variant uppercase block">Location</span>
                <span className="font-body-md text-sm sm:text-base font-semibold">{personal.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <label className="font-label-mono text-xs uppercase tracking-wider text-on-surface-variant block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary text-sm font-label-mono text-on-surface placeholder:text-white/20 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-label-mono text-xs uppercase tracking-wider text-on-surface-variant block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="john@company.com"
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary text-sm font-label-mono text-on-surface placeholder:text-white/20 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-label-mono text-xs uppercase tracking-wider text-on-surface-variant block">
                    Inquiry Type
                  </label>
                  <select
                    value={formState.inquiryType}
                    onChange={(e) => setFormState({ ...formState, inquiryType: e.target.value })}
                    className="w-full bg-[#1c1b1b] border border-white/10 p-4 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary text-sm font-label-mono text-on-surface transition-all"
                  >
                    <option value="Automation Project">Automation Project (RPA / Power Platform)</option>
                    <option value="AI Consulting">AI Agent Consulting & Vector DBs</option>
                    <option value="Full-Stack Web">Full-Stack Application Development</option>
                    <option value="General Inquiry">General Collaboration</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="font-label-mono text-xs uppercase tracking-wider text-on-surface-variant block">
                    Project Detail
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your vision or process bottlenecks..."
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary text-sm font-label-mono text-on-surface placeholder:text-white/20 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-primary text-on-primary font-bold rounded-xl flex items-center justify-center gap-2 text-sm uppercase tracking-wider electric-glow hover:scale-[1.01] active:scale-95 transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Transmitting Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <span className="material-symbols-outlined text-lg">send</span>
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-surface p-8 sm:p-12 rounded-xl text-center space-y-6 border border-primary/40"
              >
                <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto text-glow">
                  <span className="material-symbols-outlined text-4xl">check_circle</span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-headline-lg text-2xl font-bold text-on-surface">Message Received</h3>
                  <p className="text-on-surface-variant text-sm font-body-md max-w-sm mx-auto">
                    Thank you for reaching out, {formState.name}! Shivam will get back to you within 24 hours.
                  </p>
                </div>
                <button
                  onClick={handleResetForm}
                  className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-on-surface rounded-lg font-label-mono text-xs uppercase tracking-wider transition-all"
                >
                  Send Another Message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
