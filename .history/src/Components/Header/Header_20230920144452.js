/** @format */

import React from "react";

const Header = () => {
  return (
    <div className="Header">
      <div className="left">
        <img src="/Image/logo.png" alt="" />
        <ul>
          <li>
            <a>Home</a>
            <a>Categories</a>
            <a>Events</a>
          </li>
        </ul>
      </div>

      <div className="right">
        <input type='search' />
        <i class="fa-regular fa-bell"></i>
        <i class="fa-solid fa-heart"></i>
       </div>

    </div>
  );
};

export default Header;
