// import React, { useEffect, useRef, useState } from "react";
// import "./QuestionItem.css";
// import data from "./data";
// import { Link } from "react-router-dom";

// const QuestionItem = () => {
//   // states
//   const [isCorrect, setIsCorrect] = useState("");

//   const [score, setScore] = useState(0);

//   const [showScore, setShowScore] = useState(false);

//   const [currentQuestion, setCurrentQuestion] = useState(0);

//   const [initials, setInitials] = useState();

//   //   variables
//   const scorePercentage = (score / data.length) * 100;

//   const submitData = [scorePercentage, initials];

//   // functions(handlers)

//   const handleAnswerButtonClick = (e) => {
//     const nextQuestion = currentQuestion + 1;
//     if (nextQuestion < data.length) {
//       setCurrentQuestion(nextQuestion);
//     } else {
//       setShowScore(true);
//     }

//     if (e.target.value === data[currentQuestion].answer) {
//       setScore(score + 1);
//       setIsCorrect(<small style={{ color: "green" }}>Correct </small>);
//     } else {
//       setIsCorrect(<small style={{ color: "red" }}>InCorrect</small>);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // console.log(submitData, "submitData");
//     setInitials(e.target.value);
//     localStorage.setItem("submitData", submitData);
//     console.log(localStorage.getItem("submitData"));
//   };
//   //   useEffect(() => {
//   //     handleSubmit()
//   //   }, [])

//   return (
//     <>
//       {showScore ? (
//         <div className="scoresheet">
//           <div className="container">
//             <h3>All done!</h3>
//             <p>
//               Your final score is <span>{scorePercentage}</span>%
//             </p>
//             <form className="initialsSubmit">
//               <div className="initials">
//                 <label htmlFor="intials">Enter Initials:</label>
//                 <input name="initials" />
//               </div>
//               <button onClick={handleSubmit}>
//                 <Link to="/">Submit</Link>
//               </button>
//             </form>
//           </div>
//         </div>
//       ) : (
//         <div className="questionItem">
//           <div className="container">
//             <h2 className="question">{data[currentQuestion].questionText}</h2>
//             <div className="answerOptions">
//               {data[currentQuestion].options.map((options, currentQuestion) => {
//                 return (
//                   <button
//                     key={currentQuestion}
//                     onClick={handleAnswerButtonClick}
//                     value={options}
//                   >
//                     {options}
//                   </button>
//                 );
//               })}
//             </div>
//             <hr style={{ marginTop: "10px" }} />
//             {isCorrect}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default QuestionItem;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import data from "./data";
// import "./QuestionItem.css";

// const QuestionItem = (props) => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);
//   const [isCorrect, setIsCorrect] = useState("");

//   const navigate = useNavigate();

//   const handleAnswerButtonClick = (e) => {
//     const nextQuestion = currentQuestion + 1;

//     console.log(e.target.value);

//     if (nextQuestion < data.length) {
//       setCurrentQuestion(nextQuestion);
//     } else {
//       navigate("/scoresheet");
//     }

//     if (e.target.value === data[currentQuestion].answer) {
//       setScore(score + 1);
//       setIsCorrect(<small style={{ color: "green" }}>Correct </small>);
//     } else {
//       setIsCorrect(<small style={{ color: "red" }}>InCorrect</small>);
//     }
//     // console.log(props.quizEndHandler(score));
// };
// // console.log(props.quizEndHandler(score));

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
//           {isCorrect}
//         </div>
//       </div>
//     </>
//   );
// };

// export default QuestionItem;
