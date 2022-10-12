import React from "react";

const Header = () => {
  return (
    <header id="main-header">
      <div className="container">
        <nav className="flex justify-between align-center">
          <a href="#">
            <img src="/icons/logo.svg" alt="logo" className="logo" />
          </a>
          <ul className="flex align-center">
            <li><a href="#">Activities</a></li>
            <li><a href="#">Technology</a></li>
            <li><a href="#">R&D</a></li>
            <li><a href="#">community</a></li>
            <li><a href="#" className="main-btn white">Career <img src="/icons/arrow-left-up.svg" alt="up left arrow" /></a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
