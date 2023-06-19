import React from "react";
import {
  FaYoutubeSquare,
  FaInstagramSquare,
  FaBehanceSquare,
  FaLinkedin,
} from "react-icons/fa";
import Logo from "../../assets/logo.png";

function Navbar() {

  const pages = [
    "Hakkımızda",
    "Jüri - Yarışma Yazılımı",
    "Word Ninja",
    "Word Pyramids",
  ];

  return (
    <div className="overflow-hidden">
      <nav className="navbar navbar-expand-lg my-3">
        <div className="container-fluid px-5">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="Rast Mobile"/>
          </a>
          <button
            className="navbar-toggler"
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
            <div className="offcanvas-header">
              <h5 className="offcanvas-title">Rast Mobile</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div className="offcanvas-body navbar-collapse">
              <ul className="navbar-nav justify-content-around flex-grow-1">
                {pages.map((page) => (
                  <li className="nav-item">
                    <a className="nav-link text-black" href="#" style={{fontSize: 14, lineHeight: 2}}>
                      {page}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="navbar-nav justify-content-end pe-3">
                <li className="nav-item my-auto">
                  <a className="nav-link" href="#">
                    <FaYoutubeSquare style={{ color: "#744BFC" , height: 25, width: 18}} />
                  </a>
                </li>
                <li className="nav-item my-auto">
                  <a className="nav-link" href="#">
                    <FaInstagramSquare style={{ color: "#744BFC", height: 25, width: 18}} />
                  </a>
                </li>
                <li className="nav-item my-auto">
                  <a className="nav-link" href="#">
                    <FaBehanceSquare style={{ color: "#744BFC", height: 25, width: 18 }} />
                  </a>
                </li>
                <li className="nav-item my-auto">
                  <a className="nav-link" href="#">
                    <FaLinkedin style={{ color: "#744BFC", height: 25, width: 18 }} />
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
