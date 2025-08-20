import React, { useContext } from "react";
import "./Header.css";
import UserIcon from "../../../assets/userIcon.png";
import Hamburger from "../../../assets/icons8-menu-ios-17-filled/Hamburger.png";
import EnglandFlag from "../../../assets/BritishFlag.png";
import { AppContext } from "../../context";

const Header = () => {
  const { language, toggleMenu } = useContext(AppContext);

  return (
    <header className="header">
      {/* Left Section */}
      <div className="header-left">
        {/* Desktop view */}
        <img className="user-icon desktop-only" src={UserIcon} alt="User" />
        <div className="user-info desktop-only">
          <h3 className="user-name">John Doe</h3>
          <h3 className="user-role">Sales Force</h3>
        </div>

        {/* Tablet/Mobile view */}
        <img
          src={Hamburger}
          className="hamburger mobile-tablet-only"
          alt="Menu"
          onClick={toggleMenu}
        />
      </div>

      {/* Right Section */}
      <div className="header-right">
        <p className="language">{language}</p>
        <img src={EnglandFlag} className="flag" alt="Language Flag" />
      </div>
    </header>
  );
};

export default Header;
