import { createRoot } from 'react-dom/client'
import "@/styles/globals.scss";
import App from './App.tsx'
import { ThemeProvider } from './providers/theme-provider.tsx'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
)
