import "./NavBar.css";
import React, { useState } from "react";
import { Divide as Hamburger } from 'hamburger-react'

interface INav {

}

export const NavBar: React.FC<INav> = () => {

  const [isMenuActive, setIsMenuActive] = useState(false);

  const navMenuClicked = () => {
    if (isMenuActive === false) {
      setIsMenuActive(true);
      console.log("menu is active!");
    } else if (isMenuActive === true) {
      setIsMenuActive(false);
      console.log("menu is off!");
    } else {
      console.log("error");
    }
  };
  return (
    <div className="navBar">
      <div className="navLeftSide">
        <div
          className={"navBackground"
          }
        >
          <span id="logoName">Chingun Zolboo</span>
        </div>
      </div>
      <div
        className={`${isMenuActive ? "menuOpen" : ""} ${"navRightSide"}`}
      >
        <div className="navRightSideContent" id="navRightSideContent">
          {/* {isMenuActive && <div className="menuDropDown"></div>} */}
          <button
            className="navButton"

          >
            Home
          </button>
          <button
            className="navButton"

          >
            About
          </button>
          <button
            className="navButton"

          >
            Portfolio
          </button>
          <button
            className="navButton"
          >
            Contact
          </button>
        </div>
      </div>
      <div className="navRightSideMenuBar">
        <div
          className="hamburgerContainer"
          id={"Hamburger"}
          onClick={() => {
            navMenuClicked();
          }}
        >
          <Hamburger />
        </div>
      </div>
    </div>
  );
};
