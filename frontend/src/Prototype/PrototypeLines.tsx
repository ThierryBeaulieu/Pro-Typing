import React, { useState, useEffect } from 'react';
import dummyText from '../database.json';

import './PrototypeLines.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function sentenceToWords(text: string): string[] {
  const words = text.split(' ');
  const fullSentence = [];

  for (let i = 0; i < words.length; i++) {
    fullSentence.push(words[i]);
    if (i !== words.length - 1) {
      fullSentence.push(' ');
    }
  }
  return fullSentence;
}

function PrototypeTyping() {
  const [userInput, setUserInput] = useState('');
  const [correctChar, setCorrectChar] = useState<boolean[]>([]);
  const sentence: string = dummyText['medium-content'];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Backspace') {
        setUserInput((prev) => prev.slice(0, -1));
        setCorrectChar((prev) => prev.slice(0, -1));
      } else if (event.key.length === 1) {
        if (sentence.length === correctChar.length) return;
        setUserInput((prev) => prev + event.key);

        if (sentence[correctChar.length] === event.key) {
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
  }, [correctChar.length, sentence]);

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
        {sentenceToWords(sentence).map((word: string, wordIndex: number) => (
          <div className="word" key={wordIndex}>
            {word.split('').map((letter, index) => (
              <div className="letter-wrapper" key={index}>
                <span
                  className={`letter ${isCorrectChar(wordIndex)} ${isActiveChar(wordIndex)}`}
                >
                  {letter}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default PrototypeTyping;
