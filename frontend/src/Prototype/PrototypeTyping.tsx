import React, { useState, useEffect } from 'react';
import dummyText from '../database.json';

import './PrototypeTyping.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function PrototypeTyping() {
  const [userInput, setUserInput] = useState('');
  const text = dummyText['short-content'].split('');

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Backspace') {
        setUserInput((prev) => prev.slice(0, -1));
      } else if (event.key.length === 1) {
        setUserInput((prev) => prev + event.key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="paragraph">
      {text.map((letter: string, index: number) => (
        <div className="tile-wrapper">
          <span className="tile" key={index}>
            {letter}
          </span>
        </div>
      ))}
    </div>
  );
}

export default PrototypeTyping;
