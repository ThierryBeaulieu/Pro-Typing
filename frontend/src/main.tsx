import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TypingPage from './Pages/TypingPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TypingPage/>
  </StrictMode>,
)
