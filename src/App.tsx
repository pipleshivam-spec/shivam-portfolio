import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { BackgroundShader } from './components/BackgroundShader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Metrics } from './components/Metrics';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { WorkHistory } from './components/WorkHistory';
import { SelectedProjects } from './components/SelectedProjects';
import { AIMatchingEngine } from './components/AIMatchingEngine';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollReveal } from './components/ScrollReveal';
import { ThemeSwitcher } from './components/ThemeSwitcher';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-[#0A0A0A] text-[#e5e2e1] overflow-x-hidden selection:bg-primary/30 selection:text-white">
        {/* Interactive WebGL Shader Background */}
        <BackgroundShader />

        {/* Header Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <main className="relative z-10">
          <ScrollReveal>
            <Hero />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Metrics />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <About />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <TechStack />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <WorkHistory />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <SelectedProjects />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <AIMatchingEngine />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Education />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Contact />
          </ScrollReveal>
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Theme Color Switcher */}
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
};

export default App;
