import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="left">
          <p>
            <Link to={"/highscores"} id="leaderboard">
              View Highscores <i className="fas fa-hand-point-left fa-lg"></i>
            </Link>
          </p>
        </div>
        <div className="right">
          <p>Time: </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
