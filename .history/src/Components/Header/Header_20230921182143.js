/** @format */

import React , { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import { BiSolidWallet } from "react-icons/bi";
import { BsFillBasketFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="Header">
      <div className="left">
        <img src="/Image/logo.png" alt="" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category">Categories</Link>
          </li>
          <li>
            <a href="/">Events</a>
          </li>
        </ul>
      </div>

      <div className="right">
        <input type="search" placeholder="Search here" />
        <div className="navigation-links">
          <FiBell />
          <AiFillHeart />
          <BiSolidWallet />
          <BsFillBasketFill />
          <FaRegUserCircle onClick={} />
        </div>
      </div>
    </div>
  );
};

export default Header;
