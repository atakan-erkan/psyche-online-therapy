import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./nav_img/psychelogo.png";
import "./Nav.css";

function Nav() {
  //setting mobile nav
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  //change nav soften when scrolling
  const [soften, setSoften] = useState(false);
  const changeSoften = () => {
    if (window.scrollY >= 90) {
      setSoften(true);
    } else {
      setSoften(false);
    }
  };
  window.addEventListener("scroll", changeSoften);

  //close menu on click
  const closeMenu = () => setClick(false);
  if (window.location.pathname === "/login") {
    return null; // Sayfa yolu eşleşirse, Footer'ı render etmeyin
  }
  if (window.location.pathname === "/signin") {
    return null; // Sayfa yolu eşleşirse, Footer'ı render etmeyin
  }

  return (
    <div className={soften ? "header header-bg" : "header"}>
      <nav className="nav-navbar">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#175c4c" }} />
          ) : (
            <FaBars size={30} style={{ color: "#175c4c" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu mt-3"}>
          <li className="nav-navbar-item ">
            <a href="/#nasil-calisir" onClick={closeMenu}>
              Nasıl Çalışır?
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
        </ul>

        <span className="nav-navbar-item mr-auto text-center entry">
          <a href="/login" className="nav-link nav-button" onClick={closeMenu}>
            Giriş Yapın
          </a>
        </span>
      </nav>
    </div>
  );
}

export default Nav;
