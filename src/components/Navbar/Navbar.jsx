import React from "react";
import {
  FaYoutubeSquare,
  FaInstagramSquare,
  FaBehanceSquare,
  FaLinkedin,
} from "react-icons/fa";
import Logo from "../../assets/logo.png";

function Navbar() {
  const menu = [
    "Hakkımızda",
    "Jüri - Yarışma Yazılımı",
    "Word Ninja",
    "Word Pyramids",
  ];

  return (
    <div className="overflow-hidden">
      <nav className="navbar navbar-expand-lg my-2">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="Rast Mobile" />
          </a>
          <button
            className="navbar-toggler shadow-none border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header justify-content-end">
              <button
                type="button"
                className="btn-close shadow-none"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div className="offcanvas-body navbar-collapse">
              <ul className="navlink navbar-nav justify-content-evenly flex-grow-1">
                {menu.map((page) => (
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#"
                      style={{ fontSize: 14, lineHeight: 2 }}
                    >
                      {page}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="navicon navbar-nav justify-content-end">
                <li className="nav-item my-auto">
                  <a className="nav-link" href="#">
                    <FaYoutubeSquare className="navbar__icon" />
                  </a>
                </li>
                <li className="nav-item my-auto">
                  <a className="nav-link" href="#">
                    <FaInstagramSquare className="navbar__icon" />
                  </a>
                </li>
                <li className="nav-item my-auto">
                  <a className="nav-link" href="#">
                    <FaBehanceSquare className="navbar__icon" />
                  </a>
                </li>
                <li className="nav-item my-auto">
                  <a className="nav-link" href="#">
                    <FaLinkedin className="navbar__icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
