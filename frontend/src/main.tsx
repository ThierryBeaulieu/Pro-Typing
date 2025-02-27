import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import PrototypeTyping from './Prototype/PrototypeTyping';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrototypeTyping />
  </StrictMode>,
);
