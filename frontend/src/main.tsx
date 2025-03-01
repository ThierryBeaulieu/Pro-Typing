import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import PrototypeUnderlined from './Prototype/PrototypeUnderlined';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrototypeUnderlined />
  </StrictMode>,
);
