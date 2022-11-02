import React from "react";
import Header from "../../Components/Header";
import QuestionItem from "../../Components/QuestionItem";
// import ScoreComponent from "../../Components/ScoreComponent";

const Questions = (props) => {
  // const [showScore, setShowScore] = useState(false);

  return (
    <div>
      <Header />

      <QuestionItem/>
      {/* <ScoreComponent/> */}
    </div>
  );
};

export default Questions;
