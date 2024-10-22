import React from "react";

const letters = Array(26)
  .fill("")
  .map((e, index) => String.fromCharCode(65 + index));

const LetterButton = ({ usedLetters, onLetterClick, step, checkButton }) => {
  const selectedLetters = new Set(usedLetters);

  function handleClick(e) {
    const character = e.target.value;
    onLetterClick?.(character);
  }
  const button = letters.map((letter) => {
    return (
      <button
        value={letter}
        disabled={
          step === 7 || checkButton ? letters : selectedLetters.has(letter)
        }
        onClick={handleClick}
        style={{ height: "30px", width: "30px", marginRight: "6px" }}
      >
        {letter}
      </button>
    );
  });
  return <div>{button}</div>;
};

export default LetterButton;
