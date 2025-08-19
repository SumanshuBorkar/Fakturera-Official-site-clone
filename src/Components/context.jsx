import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [language , setLanguage] = useState("English")
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "English" ? "Swedish" : "English"));
  };

  return (
    <AppContext.Provider value={{language , setLanguage, toggleLanguage }}>
      {children}
    </AppContext.Provider>
  );
};