import React from "react";

const MaskedText = ({ workToBeGuessed, guessedLetter }) => {
  const letter = getAllCharacters(workToBeGuessed, guessedLetter).split("");
  return (
    <div>
      {letter.map((letter, index) => {
        return (
          <span key={index} style={{ marginRight: "6px" }}>
            {letter}
          </span>
        );
      })}
    </div>
  );
};

const getAllCharacters = (word, usedLetters) => {
  usedLetters = usedLetters.map((letter) => letter.toUpperCase());
  const usedLetter = new Set(usedLetters);
  const characters = word
    .toUpperCase()
    .split("")
    .map((char) => {
      if (usedLetter.has(char)) {
        return char;
      }
      return "_";
    });
  return characters.join("");
};

export default MaskedText;
