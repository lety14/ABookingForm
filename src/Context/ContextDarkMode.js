import React, { useState } from "react";

export const ContextDarkMode = React.createContext();

/**
 * Theme provider that prodives dark or light mode to the children
 *
 * @param {{ children: JSX.Element}} children
 * @returns {JSX.Element} mode dark or light
 */
export const ProviderTheme = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const changeTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <ContextDarkMode.Provider value={{ darkTheme, changeTheme }}>
      {children}
    </ContextDarkMode.Provider>
  );
};

export default ProviderTheme;
