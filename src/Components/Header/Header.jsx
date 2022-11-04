import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ timer }) => {
  return (
    <header className="header">
      <div className="left">
        <p>
          <Link to={"/highscores"} id="leaderboard">
            View Highscores <i className="fas fa-hand-point-left fa-lg"></i>
          </Link>
        </p>
      </div>
      <div className="right">
        <p>Time:{timer} </p>
      </div>
    </header>
  );
};

export default Header;
