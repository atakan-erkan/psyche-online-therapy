import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./img/psychelogo.png";
import "./Nav.css";

function Navbar() {
  //setting mobile nav
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  //change nav color when scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  //close menu on click
  const closeMenu = () => setClick(false);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <nav className="nav-navbar">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu mt-3"}>
          <li className="nav-navbar-item ">
            <a href="/" onClick={closeMenu}>
              Anasayfa
            </a>
          </li>
          <li className="nav-navbar-item ">
            <a href="/aboutus" onClick={closeMenu}>
              Hakkımızda
            </a>
          </li>
          <li className="nav-navbar-item ">
            <a href="/psychologists" onClick={closeMenu}>
              Psikologlarımız
            </a>
          </li>
          <li className="nav-navbar-item ">
            <a href="/tests" onClick={closeMenu}>
              Testler
            </a>
          </li>
          <li className="nav-navbar-item ">
            <a href="/faq" onClick={closeMenu}>
              S.S.S
            </a>
          </li>
          <li className="nav-navbar-item entry2">
            <a href="/login" onClick={closeMenu}>
              Giriş Yapın
            </a>
          </li>
          <li className="nav-navbar-item entry2">
            <a href="/signin" onClick={closeMenu}>
              Kayıt Olun
            </a>
          </li>
        </ul>

        <span className="nav-navbar-item mr-auto text-center entry">
          <a href="/login" className="nav-link nav-button" onClick={closeMenu}>
            Giriş Yapın
          </a>
        </span>
        <span className="nav-navbar-item  text-center entry">
          <a href="/signin" className="nav-link nav-button" onClick={closeMenu}>
            Kayıt Olun
          </a>
        </span>
      </nav>
    </div>
  );
}

export default Navbar;
