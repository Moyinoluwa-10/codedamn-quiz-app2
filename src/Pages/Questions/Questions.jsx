import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../../Components/data";
import Header from "../../Components/Header/Header";
import "./Questions.css";

const Questions = ({ score, setScore, quizInprogress }) => {
  const [timeleft, setTimeleft] = useState(50);
  const [timeUpdate, settimeUpdate] = useState()
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [isCorrect, setIsCorrect] = useState("");



  const navigate = useNavigate();
  const updateTime = () => {
    if (quizInprogress === true) {
      setTimeleft((timeleft =timeleft- 1));
      console.log(timeleft);
    } else if (timeleft <= 0) {
      clearInterval(timeInterval)
      navigate("/scoresheet");
    }
  };
  const timeInterval = setInterval(updateTime, 1000);

  const handleAnswerButtonClick = (e) => {
    const nextQuestion = currentQuestion + 1;

    console.log(e.target.value);

    if (nextQuestion < data.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      navigate("/scoresheet");
    }

    if (e.target.value === data[currentQuestion].answer) {
      setScore(score + 1);
      setIsCorrect(<small style={{ color: "green" }}>Correct </small>);
    } else {
      setIsCorrect(<small style={{ color: "red" }}>InCorrect</small>);
    }
    console.log(score);
  };
  console.log(updateTime);
  console.log(timeleft);;

  return (
    <>
      <Header timeleft={timeleft} updateTime={updateTime} />

      <div className="questionItem">
        <div className="container">
          <h2 className="question">{data[currentQuestion].questionText}</h2>
          <div className="answerOptions">
            {data[currentQuestion].options.map((options, currentQuestion) => {
              return (
                <button
                  key={currentQuestion}
                  onClick={handleAnswerButtonClick}
                  value={options}
                >
                  {options}
                </button>
              );
            })}
          </div>
          <hr style={{ marginTop: "10px" }} />
          {isCorrect}
        </div>
      </div>
    </>
  );
};

export default Questions;
