import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../../Components/data";
import Header from "../../Components/Header/Header";
import "./Questions.css";

const Questions = ({ score, setScore, quizInprogress }) => {
  const [timer, setTimer] = useState(50);

  const intervalRef = useRef();
  intervalRef.current = timer;

  useEffect(() => {
    const interval = setInterval(() => {
      if (intervalRef.current <= 0) {
        clearInterval(interval);
        navigate("/scoresheet");
        quizInprogress == false;
      } else if (quizInprogress == true) {
        setTimer((intervalRef) => intervalRef - 1);
        // console.log(intervalRef);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [isCorrect, setIsCorrect] = useState("");

  const navigate = useNavigate();

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
      setTimer(timer - 10);
    }
    console.log(score);
  };

  return (
    <>
      <Header timer={timer} />

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
