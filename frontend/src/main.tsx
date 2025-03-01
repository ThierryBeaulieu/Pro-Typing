import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import PrototypeLines from './Prototype/PrototypeLines';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrototypeLines />
  </StrictMode>,
);
