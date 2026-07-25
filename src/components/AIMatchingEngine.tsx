import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

type SimStatus = 'idle' | 'parsing' | 'matching' | 'completed';

export const AIMatchingEngine: React.FC = () => {
  const { aiDemo } = portfolioData;
  const [inputText, setInputText] = useState('');
  const [status, setStatus] = useState<SimStatus>('idle');
  const [matchScore, setMatchScore] = useState(aiDemo.defaultScore);

  const handleStartSimulation = () => {
    if (status !== 'idle' && status !== 'completed') return;

    setStatus('parsing');

    // Calculate a dynamic score based on input length or keywords if entered, or default to ~89%
    if (inputText.trim().length > 20) {
      const randomVariance = Math.floor(Math.random() * 8) - 3;
      setMatchScore(Math.min(98, Math.max(82, 88 + randomVariance)));
    } else {
      setMatchScore(aiDemo.defaultScore);
    }

    setTimeout(() => {
      setStatus('matching');
    }, 1400);

    setTimeout(() => {
      setStatus('completed');
    }, 2800);
  };

  const handleReset = () => {
    setStatus('idle');
    setInputText('');
  };

  const handleSampleFill = () => {
    setInputText(aiDemo.sampleText);
  };

  return (
    <section id="ai-engine" className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-12 md:py-20">
      <div className="glass-surface p-6 sm:p-12 rounded-2xl relative overflow-hidden border border-white/10 shadow-2xl">
        {/* Glow backdrop accent */}
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-primary/10 blur-[100px] pointer-events-none" />

        <div className="max-w-2xl mx-auto text-center mb-10">
          <span className="font-label-mono text-primary text-xs uppercase tracking-widest block mb-2">
            Interactive Showcase
          </span>
          <h2 className="font-headline-xl text-3xl sm:text-headline-xl text-on-surface font-semibold mb-3">
            {aiDemo.title}
          </h2>
          <p className="text-on-surface-variant text-sm sm:text-base">
            {aiDemo.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column: Input Form */}
          <div className="space-y-4">
            <div className="flex justify-between items-center text-xs font-label-mono text-on-surface-variant">
              <span>Job Description Input</span>
              <button
                type="button"
                onClick={handleSampleFill}
                className="text-primary hover:underline"
              >
                + Fill Sample Text
              </button>
            </div>

            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={aiDemo.placeholder}
              rows={6}
              disabled={status === 'parsing' || status === 'matching'}
              className="w-full bg-black/50 border border-white/10 rounded-xl p-4 focus:border-primary focus:ring-1 focus:ring-primary text-xs sm:text-sm font-label-mono resize-none text-on-surface placeholder:text-on-surface-variant/40 transition-colors"
            />

            <button
              onClick={handleStartSimulation}
              disabled={status === 'parsing' || status === 'matching'}
              className={`w-full py-4 font-bold rounded-xl flex items-center justify-center gap-2 text-sm uppercase tracking-wider transition-all ${
                status === 'parsing' || status === 'matching'
                  ? 'bg-surface-container-high text-on-surface-variant cursor-not-allowed'
                  : 'bg-primary text-on-primary electric-glow hover:scale-[1.01] active:scale-95'
              }`}
            >
              {status === 'parsing' || status === 'matching' ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Processing Vectors...
                </>
              ) : (
                <>
                  Analyze Fit
                  <span className="material-symbols-outlined text-lg">auto_awesome</span>
                </>
              )}
            </button>
          </div>

          {/* Right Column: Simulation Output Box */}
          <div className="glass-surface p-6 sm:p-8 min-h-[300px] flex flex-col justify-center items-center relative rounded-xl border border-white/10 bg-black/40">
            {status === 'idle' && (
              <div className="text-center space-y-4 py-8">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-on-surface-variant/50">
                  <span className="material-symbols-outlined text-4xl">upload_file</span>
                </div>
                <div className="space-y-1">
                  <p className="text-on-surface-variant font-label-mono text-sm">Waiting for input...</p>
                  <p className="text-xs text-on-surface-variant/60">Paste a role description to trigger vector matching.</p>
                </div>
              </div>
            )}

            {(status === 'parsing' || status === 'matching') && (
              <div className="flex flex-col items-center gap-4 text-center py-8">
                <div className="w-14 h-14 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                <p className="font-label-mono text-sm text-primary animate-pulse">
                  {status === 'parsing' ? 'Parsing Entities & Requirements...' : 'Matching Candidate Vectors to Neural Embeddings...'}
                </p>
                <div className="w-48 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-primary transition-all duration-1000 ${
                      status === 'parsing' ? 'w-1/2' : 'w-full'
                    }`}
                  />
                </div>
              </div>
            )}

            {status === 'completed' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full text-center space-y-5"
              >
                {/* Circular Percentage Match Score */}
                <div className="relative inline-flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full border-4 border-primary flex items-center justify-center font-display-lg text-3xl font-bold text-primary text-glow" style={{ boxShadow: '0 0 25px rgba(var(--accent-rgb), 0.4)' }}>
                    {matchScore}%
                  </div>
                </div>

                <div>
                  <h4 className="font-headline-lg text-lg sm:text-xl font-bold text-on-surface">
                    {aiDemo.matchedRole}
                  </h4>
                  <div className="flex items-center justify-center gap-1.5 text-xs text-primary mt-1">
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                    <span className="font-label-mono">High Architectural Alignment</span>
                  </div>
                </div>

                {/* Extracted Keywords Chips */}
                <div className="space-y-2 pt-2">
                  <span className="font-label-mono text-[11px] text-on-surface-variant uppercase tracking-wider block">
                    Extracted Capabilities
                  </span>
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {aiDemo.keywordsExtracted.map((kw) => (
                      <span
                        key={kw}
                        className="px-2.5 py-1 bg-surface-container-highest/80 border border-white/10 rounded font-label-mono text-[11px] text-on-surface"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="text-xs font-label-mono text-on-surface-variant hover:text-primary transition-colors underline"
                  >
                    Reset & Test Another
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
