import { useState, useEffect } from 'react';
import dummyText from '../database.json';
import { useParams } from 'react-router-dom';

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

function TypingContent() {
  const { wpm } = useParams();
  console.log(wpm);
  const [userInput, setUserInput] = useState('');
  const [correctChar, setCorrectChar] = useState<boolean[]>([]);
  const sentence: string = dummyText['long-content'];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Backspace') {
        setUserInput((prev) => prev.slice(0, -1));
        setCorrectChar((prev) => prev.slice(0, -1));
      } else if (event.key.length === 1) {
        event.preventDefault();
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

  function isCorrectChar(wordIndex: number, letterIndex: number) {
    const charIndex =
      sentenceToWords(sentence)
        .slice(0, wordIndex)
        .reduce((acc, word) => acc + word.length, 0) + letterIndex;

    if (correctChar[charIndex] === true) return 'correct';
    if (correctChar[charIndex] === false) return 'incorrect';
    return '';
  }

  const isActiveChar = (wordIndex: number, letterIndex: number) => {
    const charIndex =
      sentenceToWords(sentence)
        .slice(0, wordIndex)
        .reduce((acc, word) => acc + word.length, 0) + letterIndex;

    return userInput.length === charIndex ? 'active' : '';
  };

  return (
    <>
      <div className="paragraph wrapper">
        {sentenceToWords(sentence).map((word: string, wordIndex: number) => (
          <div className="word" key={wordIndex}>
            {word.split('').map((letter, letterIndex) => (
              <div className="letter-wrapper" key={letterIndex}>
                <span
                  className={`letter ${isCorrectChar(wordIndex, letterIndex)} ${isActiveChar(wordIndex, letterIndex)}`}
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

export default TypingContent;
