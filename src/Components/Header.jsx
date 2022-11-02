import React from "react";
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="highscore">
        View Highscores <i className="fa fa-hand-point-left" aria-hidden="true"></i>
      </div>
      <div className="time">Time: 38s</div>
    </header>
  );
};

export default Header;
