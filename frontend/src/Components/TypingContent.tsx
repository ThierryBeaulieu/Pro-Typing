import { useState, useEffect } from 'react';
import dummyText from '../Database/database.json';
import { useParams } from 'react-router-dom';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';

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
  const [userInput, setUserInput] = useState<string>('');
  const [correctChar, setCorrectChar] = useState<boolean[]>([]);
  const sentence: string = dummyText['long-content'];

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

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      console.log(userInput);
      if (event.key === 'r' && event.metaKey) {
        location.reload();
        return;
      }

      if (event.altKey && event.key === 'Backspace') {
        setUserInput((prev) => {
          const words = prev.trim().split(' ');
          words.pop();
          return words.join(' ') + (prev.endsWith(' ') ? ' ' : '');
        });

        setCorrectChar((prev) => {
          const words = userInput.trim().split(' ');
          const lastWordLength =
            words.length > 0 ? words[words.length - 1].length : 0;
          return prev.slice(0, prev.length - lastWordLength - 1);
        });

        return;
      }

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
  }, [correctChar.length, sentence, userInput]);

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
