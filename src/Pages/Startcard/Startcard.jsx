import React from "react";
import "./Startcard.css";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";

const Startcard = () => {
  return (
    <div className="startcard">
      <Header />
      <div className="box">
        <div class="card">
          <div class="card-container">
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
              <button type="button" class="btn">
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
