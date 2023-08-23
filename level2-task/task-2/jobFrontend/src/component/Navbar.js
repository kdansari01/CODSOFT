import React, { useState } from "react";
import Profile from "./google.auth/Profile.auth";
import { NavLink } from "react-router-dom";
import NavbarItems from "./NavItems";
import "./navbar.css";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavItemClick = () => {
    setIsMenuOpen(false);
  };
  const handleButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
    // document.body.classList.toggle("menu-open");
  };

  return (
    <>
      <div className="sticky-top">
        <nav className="NavMain navbar navbar-expand-lg ">
          <div className="container-fluid bigScrNav">
            <div className="logoSec navbar-brand ps-4 fw-bold">
              <h3 className="link">Recruitment</h3>
            </div>
            <div className="profileVisible">
              <Profile />
            </div>
            <div>
              <div
                className="btn-menu icon nav-icon-5"
                onClick={handleButtonClick}
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="btn-menu__bars" aria-hidden="true"></i>
              </div>
            </div>

            <div
              className={`justify-content-center align-items-center collapse navbar-collapse ${
                isMenuOpen ? "show" : ""
              }`}
              id="navbarSupportedContent"
            >
              <div>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="NavList nav-item justify-content-evenly ">
                    {NavbarItems.map((item, ind) => (
                      <NavLink
                        key={ind}
                        to={item.path}
                        className="NavItems nav-link  "
                        activeclassname="active"
                        onClick={handleNavItemClick}
                      >
                        <h5>{item.name}</h5>
                      </NavLink>
                    ))}
                  </li>
                </ul>
              </div>
              <div className="pcProfile d-flex justify-content-end align-items-center">
                <Profile />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
