import React from "react";
import { Link } from "react-scroll";
import "./style/Navbar.scss";

import logo from "../assets/logo/logo-bright.png";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__wrapper">
        <img src={logo} className="nav__logo" alt="controller" />

        <ul className="nav__list">
          <li className="nav__item">
            <Link
              activeClass="active"
              to="start"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Start!
            </Link>
          </li>
          <li className="nav__item">
            <Link
              activeClass="active"
              to="roll"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Dice Roll!
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
