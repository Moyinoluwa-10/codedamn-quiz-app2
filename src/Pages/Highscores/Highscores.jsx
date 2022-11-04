import React, { useEffect, useState } from "react";
import "./Highscores.css";
import Header from "../../Components/Header/Header";
import { Link } from "react-router-dom";

const Highscores = ({ score, setScore }) => {
  setScore((score = 0));
  const [data, setData] = useState([]);

  useEffect(() => {
    const highscores = JSON.parse(localStorage.getItem("highscores"));
    setData(highscores);
  }, []);

  const list = data?.map((item, key) => {
    return (
      <li key={key}>
        {item.name} - {item.score}
      </li>
    );
  });

  const handleDelete = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="highscores">
      <Header />
      <div className="main">
        <section className="one">
          <h2>Highscores</h2>
          <ol id="highscores-list">{list}</ol>

          <div className="buttonBox">
            <Link to={"/"}>
              <button>Go back</button>
            </Link>
            <button onClick={handleDelete}>Clear Highscore</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Highscores;
