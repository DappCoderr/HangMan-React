import React, { useState } from "react";
import "./Start.css"; // Or create a separate CSS file

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

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(value);
  }

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <input
          className="form-input"
          type={toggle ? "password" : "text"}
          onChange={handleValueText}
          value={value}
          placeholder="Enter secret word..."
        />
      </div>
      <div className="button-group">
        <button
          className={`toggle-button ${toggle ? "" : "hidden"}`}
          type="button"
          onClick={handleToggle}
        >
          {toggle ? "Show" : "Hide"}
        </button>
      </div>
      <button className="submit-button" type="submit" disabled={!value}>
        Play
      </button>
    </form>
  );
};

export default InputForm;
