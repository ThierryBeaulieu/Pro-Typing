import React, { useState, useEffect } from 'react';
import './TypingPage.css'
import dummyText from "./database.json"

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const EMPTY_SPACE = " ";

const Letter = ({ letter, isCorrect, isActive }: { letter: string, isCorrect: boolean | null, isActive: boolean }) => {
  return (
    <span className={`textToWrite ${isCorrect === true ? 'correct' : isCorrect === false ? 'incorrect' : ''} ${isActive ? 'active' : ''}`}>
      {letter}
    </span>
  );
};

const Word = ({ word, typedWord, activeWordIndex, wordIndex }: { word: string, typedWord: string, activeWordIndex: number, wordIndex: number }) => {
  return (
    <>
      {word.split("").map((letter, index) => (
        <Letter 
          key={index} 
          letter={letter} 
          isCorrect={typedWord[index] === undefined ? null : typedWord[index] === letter} 
          isActive={wordIndex === activeWordIndex && index === typedWord.length} 
        />
      ))}
      <Letter letter={EMPTY_SPACE} isCorrect={true} isActive={false} />
    </>
  );
};

const Paragraph = ({ userInput }: { userInput: string }) => {
  const words = dummyText.content.split(" ");
  const typedWords = userInput.split(" ");
  
  console.log(userInput)

  return (
    <div>
      {words.map((word, index) => (
        <Word 
          key={index} 
          word={word} 
          typedWord={typedWords[index] || ''} 
          activeWordIndex={typedWords.length - 1} 
          wordIndex={index} 
        />
      ))}
    </div>
  );
};

function TypingPage() {
  const [userInput, setUserInput] = useState("");
  
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Backspace") {
        setUserInput((prev) => prev.slice(0, -1));
      } else if (event.key.length === 1) {
        setUserInput((prev) => prev + event.key);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);


  return (
    <div className="scrollable-container" id="scrollable">
      <div className="scrollable-content">
        <Paragraph userInput={userInput}/>
      </div>
    </div>
  )
}

export default TypingPage
