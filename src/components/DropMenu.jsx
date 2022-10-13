import React from "react";

const DropMenu = () => {
  return (
    <div className="dropdown">
      <label htmlFor="drop-1">
        <img src="/icons/menu.svg" alt="menu" />
      </label>
      <input type="checkbox" id="drop-1" hidden />
      <div className="drop-menu">
        <ul className="flex">
          <li>
            <a href="#">Activities</a>
          </li>
          <li>
            <a href="#">Technology</a>
          </li>
          <li>
            <a href="#">R&D</a>
          </li>
          <li>
            <a href="#">community</a>
          </li>
          <li>
            <a href="#" className="main-btn white">
              Career <img src="/icons/arrow-left-up.svg" alt="up left arrow" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropMenu;
