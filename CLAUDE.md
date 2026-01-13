# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based single-page application for the Green and Digital Office at Kyrgyz State Technical University (КГТУ им. И. Раззакова), developed as part of the Erasmus+ GREENKG program. The site promotes sustainable development and university digitalization initiatives.

**Stack:** React 18 + Vite + Tailwind CSS + React Icons

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Docker (recommended)
docker-compose up        # Start dev server in container
docker-compose down      # Stop container
```

## Architecture

### Application Structure

**Entry Point Flow:**
1. `main.jsx` → Renders `App.jsx`
2. `App.jsx` → Orchestrates all page sections and manages global state (scroll position, loading state)
3. Components render in sequence as a single-page layout

**Key Architectural Patterns:**

- **Single Page Layout**: All sections render in `App.jsx` in a fixed order (Header → Hero → About → Mission → Structure → Projects → News → Events → Resources → Partners → Contact → Footer)
- **Scroll-Based Navigation**: Header navigation uses `scrollToSection()` with smooth scroll and offset calculation (80px for fixed header)
- **Intersection Observer Pattern**: Animations trigger when elements enter viewport via custom `useIntersectionObserver` hook
- **Loading State Management**: Global loading screen controlled by `App.jsx` with 1-second delay

### Component Architecture

**Component Categories:**

1. **Layout Components** (`Header.jsx`, `Footer.jsx`):
   - Header: Fixed position with scroll-triggered styling changes
   - Mobile menu with click-outside detection using `useRef` + `useEffect`
   - Cascading animation delays for menu items

2. **Content Sections** (10 sections from `Hero.jsx` to `Contact.jsx`):
   - Each section has a unique `id` for navigation
   - Wrapped in gradient backgrounds (blue to green theme)
   - Use `ScrollAnimation` wrapper for entrance effects

3. **Utility Components**:
   - `ScrollAnimation.jsx`: Wrapper component providing 6 animation types (fade-up/down/left/right, scale, fade)
   - `ScrollToTop.jsx`: Floating button appearing after 300px scroll
   - `Loading.jsx`: Full-screen loading overlay with animated icons

### Animation System

**Custom Hook:** `useIntersectionObserver.js`
- Returns `[elementRef, isVisible]` tuple
- Auto-unobserves elements after appearing (performance optimization)
- Default threshold: 0.1, rootMargin: '0px 0px -100px 0px'

**ScrollAnimation Component:**
- Accepts props: `animation`, `delay`, `className`, `children`
- 700ms transition duration with ease-out
- Configurable delay for staggered effects

**Tailwind Animations** (in `tailwind.config.js`):
- Custom animations: fade-in, slide-up, slide-down, scale-in, pulse-slow
- Custom color palette: `primary` (blue) and `green` with 50-900 shades

### Styling System

**Tailwind Configuration:**
- Custom colors match КГТУ brand: Primary blue (`#0056ea`), Green (`#22c55e`)
- Global utility class: `container-custom` (defined in `index.css`)
- Gradient backgrounds: `bg-gradient-to-r from-primary-500 to-green-500`
- Mobile-first responsive design with `lg:` breakpoints for desktop

**CSS Patterns:**
- Float animation for decorative elements (`@keyframes float`)
- Hidden scrollbar utility (`.hide-scrollbar`)
- Font smoothing for better readability

### State Management

**No External State Library** - Uses React built-in hooks:
- `useState`: Local component state (menu open/close, scroll position, loading)
- `useEffect`: Side effects (scroll listeners, click-outside detection, timers)
- `useRef`: DOM references (mobile menu, intersection observer elements)

## Important Implementation Notes

### When Modifying Components

1. **Adding New Sections:**
   - Create component in `src/components/`
   - Import and add to `App.jsx` in desired order
   - Add navigation item to `menuItems` array in `Header.jsx`
   - Use `id` attribute matching the menuItem `id` for navigation
   - Wrap content in `ScrollAnimation` for consistent UX

2. **Animation Guidelines:**
   - Always use `ScrollAnimation` wrapper for new content sections
   - Use staggered delays (0ms, 100ms, 200ms, etc.) for multiple child elements
   - Choose animation type based on content position: fade-up (default), fade-left (from right side), fade-right (from left side)

3. **Responsive Design:**
   - Always check mobile layout (`lg:` breakpoint at 1024px)
   - Header has separate mobile and desktop navigation
   - Use Tailwind's responsive classes: `hidden lg:flex`, `lg:grid-cols-3`, etc.

4. **Color Usage:**
   - Primary actions/buttons: `bg-primary-500 hover:bg-primary-600`
   - Success/environmental: `bg-green-500 hover:bg-green-600`
   - Gradients: `from-primary-500 to-green-500`

### Docker Development

- Dockerfile uses Node 20 Alpine for lightweight image
- Volume mounts enable hot-reload: `.:/app` and `/app/node_modules`
- Development server exposed on port 3000
- `NODE_ENV=development` for optimal dev experience

### Navigation Behavior

The `scrollToSection` function in `Header.jsx`:
- Calculates offset to account for fixed header (80px)
- Uses `window.scrollTo()` with `behavior: 'smooth'`
- Auto-closes mobile menu after navigation
- Can be reused for any scroll-to-section functionality

### Performance Considerations

- Intersection Observer auto-unobserves after triggering (prevents memory leaks)
- Scroll event listeners cleaned up in `useEffect` return functions
- Loading screen timeout cleared on unmount
- No heavy dependencies (total: 4 production dependencies)

## Project Context

**University:** Kyrgyz State Technical University (КГТУ им. И. Раззакова)
**Program:** Erasmus+ GREENKG (2023-2026)
**Theme:** Green transformation and digital development
**Languages:** Currently Russian (Cyrillic), designed for potential multi-language expansion

## File Organization

```
src/
├── components/      # All React components (15 files)
├── hooks/          # Custom hooks (useIntersectionObserver)
├── App.jsx         # Main application orchestrator
├── main.jsx        # React entry point
└── index.css       # Global styles + Tailwind imports
```

Configuration files at root: `vite.config.js`, `tailwind.config.js`, `postcss.config.js`, `Dockerfile`, `docker-compose.yml`
