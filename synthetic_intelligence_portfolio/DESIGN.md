---
name: Synthetic Intelligence Portfolio
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c1c6d7'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8b90a0'
  outline-variant: '#414755'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e69'
  primary-container: '#4b8eff'
  on-primary-container: '#00285c'
  inverse-primary: '#005bc1'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#4a4949'
  on-secondary-container: '#bab8b7'
  tertiary: '#c6c6c7'
  on-tertiary: '#2f3131'
  tertiary-container: '#909191'
  on-tertiary-container: '#282a2a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a41'
  on-primary-fixed-variant: '#004493'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-mono:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  section-gap-desktop: 120px
  section-gap-mobile: 64px
---

## Brand & Style

The design system is engineered for an AI & Automation Specialist, projecting a brand personality that is precise, forward-thinking, and hyper-competent. The aesthetic balances high-end technical sophistication with a minimalist editorial structure.

The design style is **Technical Glassmorphism**. It utilizes a "Dark Mode" foundation to evoke the feeling of a high-tech terminal or a premium IDE, while layering translucent surfaces to provide depth and modern elegance. Visual motifs center around data-forward elements: monospaced accents, crisp 1px dividers, and node-and-connector patterns that subtly reference neural networks and automated workflows. The emotional response should be one of quiet confidence, emphasizing clarity of thought and the sophisticated application of artificial intelligence.

## Colors

The palette is rooted in deep blacks and charcoals to create an infinite canvas feel, allowing the technical content to take center stage.

- **Background (Neutral/Secondary):** Use `#0A0A0A` for the primary canvas. Surface layers and container backgrounds utilize `#121212` with varying degrees of transparency.
- **Accent (Primary):** `Electric Blue (#007AFF)` is reserved for high-priority actions, focus states, and data visualizations. It serves as the "pulse" of the interface.
- **Typography:** Headlines and body text utilize off-white and pure white for maximum legibility against the dark background, while secondary data points use muted greys to maintain hierarchy.
- **Dividers & Borders:** Use low-opacity whites (e.g., `rgba(255, 255, 255, 0.1)`) to maintain a "crisp" but non-obtrusive structure.

## Typography

This design system employs a tiered typographic strategy to balance technical utility with editorial flair. 

- **Headlines:** Space Grotesk provides a geometric, futuristic character. For the largest display sizes, tight letter-spacing is required to maintain a high-fashion, technical look.
- **Body:** Inter is used for all long-form text to ensure readability and a neutral, professional tone. 
- **Data & Labels:** Geist (or a similar technical monospace) is utilized for metadata, small labels, and code snippets, reinforcing the automation specialist persona. 

Maintain generous vertical rhythm by adhering strictly to the defined line heights. Mobile typography scales aggressively to ensure large headlines do not break inappropriately on narrow viewports.

## Layout & Spacing

The layout philosophy follows a **Fixed-Fluid Hybrid**. Content is centered within a maximum 1200px container for desktop viewing to maintain an editorial feel, while expanding fluidly on smaller screens.

- **Grid:** Use a 12-column grid for desktop with 24px gutters. Elements should often span 6 or 8 columns to leave ample whitespace ("negative space") on the sides, evoking a premium, uncluttered atmosphere.
- **Spacing Rhythm:** An 8px linear scale governs all padding and margins. 
- **Sectioning:** Large vertical gaps (120px+) are used to separate major portfolio sections, allowing each project or service to "breathe" and stand as its own unit.
- **Responsive Behavior:** On mobile, margins shrink to 20px, and the grid collapses to a single column. Stacked elements should maintain a minimum gap of 32px to ensure touch targets and visual clarity.

## Elevation & Depth

Hierarchy is established through **Glassmorphism and Tonal Layering** rather than traditional drop shadows.

- **Base Layer:** The deepest background level (#0A0A0A).
- **Surface Layer (Cards/Modals):** Backgrounds use `rgba(18, 18, 18, 0.7)` with a `backdrop-filter: blur(12px)`. 
- **Borders:** Surfaces are defined by a 1px solid border using `rgba(255, 255, 255, 0.1)`. This creates a "etched glass" effect that feels precise and architectural.
- **Depth Accents:** Subtle gradients may be used behind glass cards—specifically soft, low-opacity radial blurs of Electric Blue—to simulate a light source reflecting through the glass. No heavy, dark shadows are permitted; depth is purely additive (light-based) rather than subtractive.

## Shapes

The shape language is **Soft-Technical**. While the brand is precise, slightly rounded corners (4px to 12px) prevent the UI from feeling "sharp" or aggressive, aligning it with modern premium hardware design (like high-end laptops or mobile devices).

- **Standard Elements:** Buttons and input fields use a 4px (0.25rem) radius.
- **Containers:** Project cards and featured blocks use an 8px (0.5rem) radius.
- **Interactive States:** Hovering over a card may increase the perceived "lift" by intensifying the border-opacity, but the shape remains constant.
- **Decorative Elements:** Use perfectly circular nodes for "automation flow" diagrams, connected by 1px stroke lines.

## Components

### Buttons
- **Primary:** Solid Electric Blue (#007AFF) with white text. No border. 4px radius.
- **Secondary/Ghost:** 1px border of `rgba(255, 255, 255, 0.2)` with a subtle background blur. Hover effect fills the background with a 10% white tint.

### Cards
Portfolio projects are housed in "Glass" containers. They feature a 1px top-border that is slightly brighter than the side borders to simulate a top-down light source. Content inside cards follows a strict monospaced label + bold headline hierarchy.

### Inputs & Forms
Inputs are transparent with a 1px bottom border only (terminal style) or a fully enclosed glass container with 0.1 opacity white background. Focus state changes the border color to Electric Blue.

### Chips & Tags
Small, technical tags used for tech stacks (e.g., "Python", "OpenAI"). Use a monospaced font, 12px size, and a subtle `#121212` background with a 1px border.

### Visual Motifs (Node-Connectors)
A custom component used for background decoration or process explanation. Consists of 4px circles (nodes) connected by 1px dashed or solid lines. These should use very low opacity (`0.1` to `0.2`) to remain in the background.

### Lists
Lists should be "un-styled" in the traditional sense, using 1px horizontal dividers between items and monospaced "01, 02, 03" numbering instead of bullets.