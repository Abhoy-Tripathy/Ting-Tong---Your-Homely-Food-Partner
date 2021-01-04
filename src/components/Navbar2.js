import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar2.css";
import TTLogo from "./TTLogo.png";

// import components
import Home from "./Home.js.js";

function NavBar() {
  return (
    <div className=" NavBar">
      <div className="options">
        <div className="Logo">
          <img src={TTLogo} />
        </div>
        <div>
          <ul>
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#news">ORDER FOOD</a>
            </li>
            <li>
              <a href="#contact">CHEF SIGN-UP</a>
            </li>
            <li>
              <a href="#about">ABOUT US</a>
            </li>
            <li>
              <a href="#about">OUR PROMISE</a>
            </li>
            <li>
              <a href="#about">BLOG</a>
            </li>
          </ul>
              </div>
              <div>
                  <Home />
              </div>
        </div>
    </div>
  );
}

export default NavBar;
