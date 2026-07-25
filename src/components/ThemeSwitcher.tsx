import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Check } from 'lucide-react';
import { useTheme, THEME_COLORS, ThemeColor } from '../context/ThemeContext';

export const ThemeSwitcher: React.FC = () => {
  const { currentColor, setThemeColor } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectColor = (color: ThemeColor) => {
    setThemeColor(color);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Color Swatch Popover Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 15 }}
            transition={{ duration: 0.2 }}
            className="mb-4 glass-surface p-4 rounded-2xl border border-white/20 shadow-2xl backdrop-blur-xl flex flex-col gap-3 min-w-[200px]"
          >
            <div className="flex items-center justify-between px-1 pb-1 border-b border-white/10">
              <span className="font-label-mono text-xs uppercase tracking-wider text-on-surface-variant font-semibold">
                Accent Theme
              </span>
              <span className="font-label-mono text-[10px] text-primary font-bold">
                {currentColor.name}
              </span>
            </div>

            {/* Color Swatches Grid */}
            <div className="grid grid-cols-3 gap-3 pt-1">
              {THEME_COLORS.map((color) => {
                const isSelected = color.id === currentColor.id;
                return (
                  <button
                    key={color.id}
                    onClick={() => handleSelectColor(color)}
                    title={color.name}
                    aria-label={`Select ${color.name} theme color`}
                    className={`group relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isSelected
                        ? 'ring-2 ring-white ring-offset-2 ring-offset-[#0A0A0A] scale-110'
                        : 'hover:scale-110 opacity-80 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: color.hex }}
                  >
                    {isSelected && (
                      <Check className="w-5 h-5 text-white drop-shadow-md" />
                    )}
                    
                    {/* Tooltip on hover */}
                    <span className="absolute bottom-full mb-2 hidden group-hover:block px-2 py-1 bg-black/90 text-white font-label-mono text-[10px] rounded whitespace-nowrap border border-white/10 pointer-events-none z-10 shadow-lg">
                      {color.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        className="w-13 h-13 p-3.5 rounded-full glass-surface border border-white/20 flex items-center justify-center text-white electric-glow relative group shadow-2xl cursor-pointer"
        style={{
          backgroundColor: 'rgba(18, 18, 18, 0.85)',
          boxShadow: `0 0 20px ${currentColor.hex}66`,
        }}
        aria-label="Toggle theme color palette"
      >
        <Palette className="w-6 h-6 text-primary transition-transform duration-300 group-hover:rotate-12" />
        
        {/* Subtle pulsing outer ring */}
        <span
          className="absolute inset-0 rounded-full animate-ping opacity-30 pointer-events-none"
          style={{ backgroundColor: currentColor.hex }}
        />
      </motion.button>
    </div>
  );
};
