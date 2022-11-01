import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Questions from "./Pages/Questions/Questions";
import Scoresheet from "./Pages/Scoresheet/Scoresheet";
import Startcard from "./Pages/Startcard/Startcard";
import Highscores from "./Pages/Highscores/Highscores";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Startcard />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/scorsheet" element={<Scoresheet />} />
        <Route path="/highscores" element={<Highscores />} />
      </Routes>
    </Router>
  );
}

export default App;

