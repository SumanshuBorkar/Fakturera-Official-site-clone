import React, { useState, useRef, useEffect, useContext } from "react";
import "./Navbar.css";
import LogoImage from "../../assets/LogoImage.png";
import Hamburger from "../../assets/icons8-menu-ios-17-filled/Hamburger.png";
import FlagUK from "../../assets/BritishFlag.png";
import FlagSE from "../../assets/SwedishFlag.png";
import { AppContext } from "../context";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const { language, setLanguage } = useContext(AppContext);

  const dropdownRef = useRef(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Order", path: "bestall.html" },
    { name: "Our Customers", path: "kunder.html" },
    { name: "About Us", path: "omoss.html" },
    { name: "Contact Us", path: "kontaktaoss.html" },
    { name: "Terms", path: "terms" },
    { name: "Pricelist", path: "Pricelist" },
  ];

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setLanguageOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Select language
  const handleLanguageSelect = (lang) => {
    setLanguage(lang);
    setLanguageOpen(false);
  };

  // Determine which flag to show
  const selectedFlag = language === "English" ? FlagUK : FlagSE;

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Mobile Hamburger */}
        <button
          className="menu-toggle mobile-only"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <img className="hamburger" src={Hamburger} alt="Menu" />
        </button>

        {/* Logo */}
        <a href="/" className="logo desktop-only">
          <img src={LogoImage} alt="Company Logo" className="logo-img" />
        </a>

        {/* Navigation + Language */}
        <div className="Nav-container-inner">
          <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.path}
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Language Dropdown (shared for desktop + mobile) */}
          <div className="language-selector Mobile-View" ref={dropdownRef}>
            <button
              className="language-btn"
              onClick={() => setLanguageOpen(!languageOpen)}
            >
              {language}
              <img src={selectedFlag} alt="Flag" className="flag-icon" />
            </button>

            {languageOpen && (
              <div className="language-dropdown">
                {language !== "Svenska" && (
                  <button
                    className="language-option"
                    onClick={() => handleLanguageSelect("Svenska")}
                  >
                    Svenska <img src={FlagSE} alt="Swedish Flag" />
                  </button>
                )}
                {language !== "English" && (
                  <button
                    className="language-option"
                    onClick={() => handleLanguageSelect("English")}
                  >
                    English <img src={FlagUK} alt="UK Flag" />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
