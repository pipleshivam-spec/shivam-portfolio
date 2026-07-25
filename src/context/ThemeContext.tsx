import React, { createContext, useContext, useState, useEffect } from 'react';

export interface ThemeColor {
  id: string;
  name: string;
  hex: string;
  rgb: string;
  shaderVec3: [number, number, number];
}

export const THEME_COLORS: ThemeColor[] = [
  {
    id: 'electric-blue',
    name: 'Electric Blue',
    hex: '#007AFF',
    rgb: '0, 122, 255',
    shaderVec3: [0.0, 0.48, 1.0],
  },
  {
    id: 'violet-purple',
    name: 'Violet',
    hex: '#8B5CF6',
    rgb: '139, 92, 246',
    shaderVec3: [0.54, 0.36, 0.96],
  },
  {
    id: 'emerald-green',
    name: 'Emerald',
    hex: '#10B981',
    rgb: '16, 185, 129',
    shaderVec3: [0.06, 0.72, 0.51],
  },
  {
    id: 'amber-orange',
    name: 'Amber',
    hex: '#F59E0B',
    rgb: '245, 158, 11',
    shaderVec3: [0.96, 0.62, 0.04],
  },
  {
    id: 'rose-pink',
    name: 'Rose',
    hex: '#F43F5E',
    rgb: '244, 63, 94',
    shaderVec3: [0.95, 0.25, 0.37],
  },
  {
    id: 'cyan-turquoise',
    name: 'Cyan',
    hex: '#06B6D4',
    rgb: '6, 182, 212',
    shaderVec3: [0.02, 0.71, 0.83],
  },
];

interface ThemeContextType {
  currentColor: ThemeColor;
  setThemeColor: (color: ThemeColor) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentColor, setCurrentColor] = useState<ThemeColor>(THEME_COLORS[0]);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--accent-color', currentColor.hex);
    root.style.setProperty('--accent-rgb', currentColor.rgb);
  }, [currentColor]);

  return (
    <ThemeContext.Provider value={{ currentColor, setThemeColor: setCurrentColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
