import React, { useEffect } from "react";
import "./Startcard.css";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";

const Startcard = ({ setQuizInprogress }) => {
  const handleStartQuiz = () => {
    setQuizInprogress(true);
  };

  return (
    <div className="startcard">
      <Header />
      <div className="box">
        <div className="card">
          <div className="card-container">
            <h2>Coding Quiz Challenge</h2>
            <p>
              Try to answer the following code related questions within the time
              limit.
            </p>
            <p className="bottom">
              Keep in mind that incorrect answers will penalize your score/time
              by ten seconds!
            </p>
            <Link to={"/questions"}>
              <button onClick={handleStartQuiz} type="button" className="btn">
                Start Quiz
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Startcard;
