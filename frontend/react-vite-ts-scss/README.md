# ⚛️ React + Vite + TypeScript + SCSS – Starter Template

This custom starter template builds on the minimal React + Vite + TypeScript + SCSS setup, adding enhanced styling support, improved linting, and a more scalable project structure.

## SCSS with CSS Modules

- Full support for **SCSS** using **CSS Modules** for scoped styling.
- Predefined folder structure for organizing styles.
- Includes some **starter styles** for quick prototyping.

## Configurations

- Default alias `@` pointing to the `src` directory for cleaner imports.
- Minor Vite config tweaks to support SCSS modules and alias resolution.

## Folder Structure

```
public/
  # Static assets served directly from the root URL

src/
  ├── assets/
  │   # Static assets (e.g., images)
  ├── components/
  │   # Smaller reusable UI components with some separations
  ├── providers/
  │   # Context wrappers (e.g., ThemeProvider)
  ├── hooks/
  │   # Hooks (e.g., useAuth)
  ├── styles/
  │   ├── global.scss
  │   │   # Entry point. Default styles for global HTML elements
  │   ├── _media.scss
  │   │   # Media query variables (to use in SCSS files)
  │   ├── _theme.scss
  │   │   # CSS vars and default theme with light/dark mode support
  │   ├── _components.scss
  │   │   # Global reusable styles for components
  │   ├── _pages.scss
  │   │   # Global reusable styles for layouts, pages
  ├── pages/
  │   # Page-level components (main page components)
  ├── utils/
  │   # Utility functions (e.g., generative-functions.ts)
  ├── types/
  │   # Types (e.g., user-types.ts)
  ├── App.tsx
  ├── main.tsx
```