# ⚛️ React + Vite + TypeScript + SCSS – Starter Template

This custom starter template builds on the minimal React + Vite + TypeScript + SCSS setup, adding enhanced styling support, improved linting, and a more scalable project structure.

## Features

- **TypeScript Integration**: Fully typed codebase for enhanced type safety and developer productivity.
- **SCSS with CSS Modules**: Supports SCSS and CSS Modules for scoped styling, with custom class naming (e.g., `button_base_xhwr3`) via Vite config.
- **Modular Structure**: Organized folders for components, pages, hooks, providers, styles, and utilities to promote maintainability.
- **Import Aliases**: `@/` alias mapped to `src/` for cleaner imports (e.g., `import Component from '@/components/Component'`).
- **Global SCSS Variables**: Pre-imports media query variables from `src/styles/_media.scss` in all SCSS files for consistent styling (We are doing this because CSS variables doesn't work with media query widths/heights).
- **Theme Support**: Includes `src/styles/_theme.scss` with CSS variables along with light/dark mode support.
- **Vite Configuration**: Optimized for development (`port: 5173`) and preview with strict port settings and customizable allowed hosts.
- **Dockerfile**: Dockerfiles setup for development and production.

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

## Getting Started

1. **Clone the Template**:

   ```bash
   git clone -b react-vite-ts-scss https://github.com/viraj-gamdha/aplance-app-templates.git my-project
   cd my-project
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run the Application**:

   - Development mode with hot reload:
     ```bash
     npm run dev
     ```
   - Production build:
     ```bash
     npm run build
     npm run preview
     ```

4. **Access the Application**:
   - The server runs on `http://localhost:5173` (default: 5173).

## Scripts

- `npm run dev`: Start the development server with Vite on port 5173 with hot reloading.
- `npm run build`: Compile TypeScript and build the project for production using Vite.
- `npm run lint`: Run ESLint to check code style across the project.
- `npm run preview`: Serve the production build on port 5173.

## Notes

- **Scalability**: Add new components, pages, hooks, or styles in their respective folders to extend the application.
- **Customization**: Modify `vite.config.ts` or add new utilities in `src/utils/` to suit your project needs.
- **Styling**: Leverage `src/styles/_theme.scss` and `src/styles/_media.scss` for consistent theming and responsive design.
- **Deployment**: Update `allowedHosts` in `vite.config.ts` (e.g., replace `mydomain.com`) before deployment.
