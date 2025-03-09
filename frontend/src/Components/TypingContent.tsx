import { useState, useEffect } from 'react';
import dummyText from '../database/database.json';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import Box from '@mui/material/Box/Box';
import CertificationResult from './CertificationResult';
import CertificationState from '../enum/certificationState';

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
  const [userInput, setUserInput] = useState<string>('');
  const [correctChar, setCorrectChar] = useState<boolean[]>([]);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [timerId, setTimerId] = useState<number | null>(null);
  const [isTypingDone, setIsTypingDone] = useState<boolean>(false);
  const sentence: string = dummyText['home-page'];
  const [precision, setPrecision] = useState<number>(0);
  const [wpm, setWPM] = useState<number>(0);

  const didPassTest = () => {
    if (precision >= 95 && wpm >= 60) {
      return CertificationState.Completed;
    }
    return CertificationState.Failed;
  };

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
      if (event.key === 'r' && event.metaKey) {
        location.reload();
        return;
      }

      if (event.altKey && event.key === 'Backspace') {
        setUserInput((prev) => {
          const words = prev.trim().split(' ');
          words.pop();
          if (words.length === 0) return '';
          return words.join(' ') + (prev.endsWith(' ') ? ' ' : '');
        });

        setCorrectChar((prev) => {
          const words = userInput.trim().split(' ');
          const lastWordLength =
            words.length > 0 ? words[words.length - 1].length : 0;
          const leftOverLength = prev.length - lastWordLength - 1;
          return prev.slice(0, leftOverLength > 0 ? leftOverLength : 0);
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

        // Start timer on first keystroke
        if (startTime === null) {
          const now = Date.now();
          setStartTime(now);
          const id = setInterval(() => {
            setElapsedTime(Math.floor((Date.now() - now) / 1000));
          }, 1000);
          setTimerId(id);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [correctChar.length, sentence, userInput, startTime]);

  useEffect(() => {
    const correct = correctChar.filter((c) => c).length;
    const totalTyped = correctChar.length;
    const newPrecision =
      totalTyped > 0 ? Math.round((correct / totalTyped) * 100) : 0;
    const newWPM =
      elapsedTime > 0 ? Math.round((correct * 12) / elapsedTime) : 0;
    setPrecision(newPrecision);
    setWPM(newWPM);
  }, [correctChar, elapsedTime]);

  useEffect(() => {
    // Stop timer when sentence is completed
    if (correctChar.length === sentence.length && timerId !== null) {
      clearInterval(timerId);
      setTimerId(null);
      setIsTypingDone(true);
    }
  }, [correctChar.length, sentence.length, timerId]);

  useEffect(() => {
    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [timerId]);

  return (
    <>
      {isTypingDone ? (
        <CertificationResult
          result={didPassTest()}
          wpm={wpm}
          accuracy={precision}
        />
      ) : (
        <Box>
          <Box className="paragraph wrapper">
            {sentenceToWords(sentence).map(
              (word: string, wordIndex: number) => (
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
              ),
            )}
          </Box>
          <Box
            paddingTop={30}
            sx={{
              color: 'grey',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <h2
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                fontWeight: 400,
              }}
            >
              Precision: {precision}%
            </h2>
            <h2
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                fontWeight: 400,
              }}
            >
              WPM: {wpm}
            </h2>
          </Box>
        </Box>
      )}
    </>
  );
}

export default TypingContent;

/*
 <CertificationResult
            result={CertificationState.Failed}
            wpm={20}
            accuracy={84}
          ></CertificationResult>
*/
