import React from "react";
import Level1 from "../assets/image/1.svg";
import Level2 from "../assets/image/2.svg";
import Level3 from "../assets/image/3.svg";
import Level4 from "../assets/image/4.svg";
import Level5 from "../assets/image/5.svg";
import Level6 from "../assets/image/6.svg";
import Level7 from "../assets/image/7.svg";
import Level8 from "../assets/image/8.svg";

const Hangman = ({ step }) => {
  const images = [
    Level1,
    Level2,
    Level3,
    Level4,
    Level5,
    Level6,
    Level7,
    Level8,
  ];
  return (
    <div>
      {step < 0 ? (
        ""
      ) : (
        <img
          src={step >= images.length ? images[length - 1] : images[step]}
          alt="#"
        />
      )}
    </div>
  );
};

export default Hangman;
