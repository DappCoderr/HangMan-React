import React, { useState } from "react";

const InputForm = ({ onSubmit }) => {
  const [toggle, setToggle] = useState(true);
  const [value, setValue] = useState("");

  function handleToggle(e) {
    e.preventDefault();
    setToggle(!toggle);
  }

  function handleValueText(e) {
    setValue(e.target.value);
  }

  // Modified to prevent default form behavior
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(value); // Passing value to onSubmit handler
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type={toggle ? "password" : "text"}
        onChange={handleValueText}
        value={value}
      />
      <button type="button" onClick={handleToggle}>
        {toggle ? "Show" : "Hide"}
      </button>
      <hr />
      <button type="submit">Play</button>
    </form>
  );
};

export default InputForm;
