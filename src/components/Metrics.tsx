import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolioData, MetricItem } from '../data/portfolio';

const CounterCard: React.FC<{ metric: MetricItem }> = ({ metric }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = metric.targetNumber;
    const duration = 2000; // 2 seconds
    const frameRate = 1000 / 60; // 60 FPS
    const totalFrames = Math.round(duration / frameRate);
    const increment = end / totalFrames;

    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      start += increment;
      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [isInView, metric.targetNumber]);

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -4, borderColor: 'rgba(0, 122, 255, 0.4)' }}
      className="glass-surface p-6 sm:p-8 flex flex-col items-center text-center rounded-xl relative overflow-hidden group"
    >
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--accent-color)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="font-display-lg text-4xl sm:text-5xl lg:text-display-lg text-primary font-bold mb-2 text-glow">
        {count}
        <span className="text-primary">{metric.suffix}</span>
      </div>

      <div className="font-label-mono text-sm text-on-surface font-semibold uppercase tracking-wider mb-1">
        {metric.label}
      </div>

      <div className="text-xs text-on-surface-variant/80 font-body-md">
        {metric.sublabel}
      </div>
    </motion.div>
  );
};

export const Metrics: React.FC = () => {
  const { metrics } = portfolioData;

  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter mb-section-gap-mobile md:mb-section-gap-desktop">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {metrics.map((metric) => (
          <CounterCard key={metric.id} metric={metric} />
        ))}
      </div>
    </section>
  );
};
