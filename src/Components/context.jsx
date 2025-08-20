import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [language , setLanguage] = useState("English")

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "English" ? "Swedish" : "English"));
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <AppContext.Provider value={{language , setLanguage, toggleLanguage, isMenuOpen, setIsMenuOpen, toggleMenu }}>
      {children}
    </AppContext.Provider>
  );
};