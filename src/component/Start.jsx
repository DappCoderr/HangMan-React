import { useNavigate } from "react-router-dom";
import InputForm from "./InputForm";
import "./Start.css";

const Start = () => {
  const navigate = useNavigate();

  const handleSubmit = (value) => {
    navigate("/play", { state: { wordSelected: value } });
  };

  return (
    <div className="start-container">
      <h1 className="start-title">Hangman Game</h1>
      <div className="glass-form-container">
        <InputForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Start;
