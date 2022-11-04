import React, { useEffect, useState, useRef } from "react";
import "./Scoresheet.css";
import Header from "../../Components/Header/Header";
import { useNavigate } from "react-router-dom";
import data from "../../Components/data";

const Scoresheet = ({ score, name, highscores, setName, setHighscores }) => {
  const nameRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    // const personScore = JSON.parse(localStorage.getItem("score"));
    // setScore(personScore);
    const highscores = JSON.parse(localStorage.getItem("highscores")) || [];
    setHighscores(highscores);
  }, []);

  const handleChange = () => {
    setName(nameRef.current.value);
  };
  const scorePercentage = `${(score / data.length) * 100}%`;
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const scores = {
      name: name,
      score: scorePercentage,
    };
    setHighscores(highscores.push(scores));
    localStorage.setItem("highscores", JSON.stringify(highscores));
    // console.log(scores);
    navigate("/highscores");
  };

  return (
    <div className="scoresheet">
      <Header />

      <div className="box">
        <div className="top">
          <h2>All done!</h2>
        </div>

        <div className="middle">
          <p>
            Your final score is <span id="final-score">{scorePercentage}</span>.
          </p>
        </div>

        <div className="bottom">
          <div>Enter Initials:</div>
          <div>
            <form className="form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                id="names"
                value={name}
                onChange={handleChange}
                ref={nameRef}
                required
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scoresheet;
