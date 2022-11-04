import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Questions from "./Pages/Questions/Questions";
import Scoresheet from "./Pages/Scoresheet/Scoresheet";
import Startcard from "./Pages/Startcard/Startcard";
import Highscores from "./Pages/Highscores/Highscores";

function App() {
  const [name, setName] = useState("");
  const [highscores, setHighscores] = useState([]);
  const [score, setScore] = useState(0);
  const [quizInprogress, setQuizInprogress] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Startcard
              quizInprogress={quizInprogress}
              setQuizInprogress={setQuizInprogress}
            />
          }
        />
        <Route
          path="/questions"
          element={
            <Questions
              score={score}
              setScore={setScore}
              quizInprogress={quizInprogress}
            />
          }
        />
        <Route
          path="/scoresheet"
          element={
            <Scoresheet
              score={score}
              name={name}
              highscores={highscores}
              setName={setName}
              setHighscores={setHighscores}
            />
          }
        />
        <Route
          path="/highscores"
          element={<Highscores score={score} setScore={setScore} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
