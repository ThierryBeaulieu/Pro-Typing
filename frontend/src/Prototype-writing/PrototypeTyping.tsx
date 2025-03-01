import React, { useState, useEffect } from 'react';
import dummyText from '../database.json';

import './PrototypeTyping.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';




function PrototypeTyping() {
  const [userInput, setUserInput] = useState('');
  const [correctChar, setCorrectChar] = useState<boolean[]>([]);
  const text = dummyText['medium-content'].split('');
  const text2 = dummyText['short-content'].split('');

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Backspace') {
        setUserInput((prev) => prev.slice(0, -1));
        setCorrectChar((prev) => prev.slice(0, -1));
      } else if (event.key.length === 1) {
        if (text.length === correctChar.length) return;
        setUserInput((prev) => prev + event.key);

        if (text[correctChar.length] === event.key) {
          setCorrectChar((prev) => [...prev, true]);
        } else {
          setCorrectChar((prev) => [...prev, false]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [correctChar.length, text]);
  console.log({ userInput });
  console.log(correctChar.length);
  console.log(text.length);

  const isCorrectChar = (index: number) => {
    if (correctChar[index] === true) return 'correct';
    if (correctChar[index] === false) return 'incorrect';
    return '';
  };

  const isActiveChar = (index: number) => {
    return userInput.length === index ? 'active' : '';
  };

  return (
    <>
      <div className="line">
        {text.map((letter: string, index: number) => (
          <div className="tile-wrapper">
            <span
              className={`tile ${isCorrectChar(index)} ${isActiveChar(index)}`}
              key={index}
            >
              {letter}
            </span>
          </div>
        ))}
      </div>
      <div className="line">
        {text2.map((letter: string, index: number) => (
          <div className="tile-wrapper">
            <span
              className={`tile ${isCorrectChar(index)} ${isActiveChar(index)}`}
              key={index}
            >
              {letter}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

export default PrototypeTyping;
