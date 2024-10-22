import React from "react";
import { Route, Routes } from "react-router-dom";
import Start from "./component/Start";
import PageNotFound from "./component/PageNotFound";
import Play from "./component/Play";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/play" element={<Play />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default App;
