
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import App from './App.tsx'
import { QueryProvider } from './providers/query.tsx'

createRoot(document.getElementById('root')!).render(

  <QueryProvider>
    <App />
  </QueryProvider>

)
