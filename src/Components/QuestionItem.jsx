import React, { useEffect, useState } from "react";
import "./QuestionItem.css";
import data from "./data";
import { Link } from "react-router-dom";

const QuestionItem = () => {
  const [isCorrect, setIsCorrect] = useState("");
  const [score, setScore] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswerButtonClick = (e) => {
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < data.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }

    if (e.target.value === data[currentQuestion].answer) {
      setScore(score + 1);
      setIsCorrect(<small style={{ color: "green" }}>Correct </small>);
    } else {
      setIsCorrect(<small style={{ color: "red" }}>InCorrect</small>);
    }
  };

  return (
    <>
      {showScore ? (
        <div className="scoresheet">
          <div className="container">
            <h3>All done!</h3>
            <p>Your final score is {(score / data.length) * 100}%</p>
            <form className="initialsSubmit">
              <div className="initials">
                <label htmlFor="intials">Enter Initials:</label>
                <input type="text" name="initials" />
              </div>
              <button type="submit">
                <Link to="/">Submit</Link>
              </button>
            </form>
          </div>
        </div>
      ) : (
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
      )}
    </>
  );
};

export default QuestionItem;

// import React, { useState } from "react";
// import data from "./data";
// import "./QuestionItem.css";

// const QuestionItem = () => {

//   const [currentQuestion, setCurrentQuestion] = useState(0);

//   const handleAnswerButtonClick = (e) => {
//     const nextQuestion = currentQuestion + 1;

//       setCurrentQuestion(nextQuestion);

//   };

//   return (
//     <>
//       <div className="questionItem">
//         <div className="container">
//           <h2 className="question">{data[currentQuestion].questionText}</h2>
//           <div className="answerOptions">
//             {data[currentQuestion].options.map((options, currentQuestion) => {
//               return (
//                 <button
//                   key={currentQuestion}
//                   onClick={handleAnswerButtonClick}
//                   value={options}
//                 >
//                   {options}
//                 </button>
//               );
//             })}
//           </div>
//           <hr style={{ marginTop: "10px" }} />
//           {/* {isCorrect} */}
//         </div>
//       </div>
//     </>
//   );
// };

// export default QuestionItem;
