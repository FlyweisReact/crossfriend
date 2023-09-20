/** @format */

import React from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { FiBell } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

const Header = () => {
  return (
    <div className="Header">
      <div className="left">
        <img src="/Image/logo.png" alt="" />
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Categories</a>
          </li>
          <li>
            <a href="/">Events</a>
          </li>
        </ul>
      </div>

      <div className="right">
        <input type="search" />
        <FiBell />
        <AiFillHeart />
        <i className="fa-solid fa-wallet"></i>
        <i className="fa-solid fa-basket-shopping"></i>
        <BiSolidUserCircle />
      </div>
    </div>
  );
};

export default Header;
