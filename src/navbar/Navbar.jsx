import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="lists">
          <li className="left-logo">
            <Link to="/">logo</Link>
          </li>

          <li className="home">
            <Link to="/">Home</Link>
          </li>

          <li className="About">
            <Link to="/about">about</Link>
          </li>

          <li className="experience">
            <Link to="/experience">Experience</Link>
          </li>

          <li className="portfolio">
            <Link to="/portfolio">portfolio</Link>
          </li>

          <li className="contact">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
