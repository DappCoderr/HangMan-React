import { useNavigate } from "react-router-dom";
import InputForm from "./InputForm";

const Start = () => {
  const navigate = useNavigate();

  const handleSubmit = (value) => {
    navigate("/play", { state: { wordSelected: value } });
  };

  return (
    <div>
      <h1>Hang Man Game</h1>
      <InputForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Start;
