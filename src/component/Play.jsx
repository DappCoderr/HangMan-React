import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MaskedText from "./MaskedText";
import LetterButton from "./LetterButton";
import Hangman from "./Hangman";

const Play = () => {
  const [usedLetter, setUsedLetter] = useState([]);
  const navigate = useNavigate();
  const [step, setStep] = useState(-1);

  const wordSelected = useLocation().state?.wordSelected;

  const handleClick = () => {
    navigate("/");
  };

  function handleOnLetterClick(letter) {
    if (wordSelected.toUpperCase().includes(letter)) {
      console.log("Correct");
    } else {
      console.log("Incorrect");
      setStep(step + 1);
    }
    setUsedLetter([...usedLetter, letter]);
  }

  return (
    <div>
      <h1>Play Game</h1>
      <MaskedText workToBeGuessed={wordSelected} guessedLetter={usedLetter} />
      <br />
      <LetterButton
        step={step}
        usedLetters={usedLetter}
        onLetterClick={handleOnLetterClick}
      />
      <br />
      <br />
      {step === 7 ? (
        <>
          <p>Game Ended</p>
          <Hangman step={step} />
        </>
      ) : (
        <Hangman step={step} />
      )}
      <hr />
      <br />
      <button onClick={handleClick}>Restart</button>
    </div>
  );
};

export default Play;
