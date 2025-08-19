import { createRoot } from 'react-dom/client'
import "@/styles/global.scss";
import App from './App.tsx'
import { ThemeProvider } from './providers/ThemeProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
)
