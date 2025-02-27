import React, { useState, useEffect } from 'react';
import dummyText from '../Pages/database.json';

import './PrototypeTyping.css';

function PrototypeTyping() {
  const [userInput, setUserInput] = useState('');
  const text = dummyText.content.split('');

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
        <span key={index}>{letter}</span>
      ))}
    </div>
  );
}

export default PrototypeTyping;
