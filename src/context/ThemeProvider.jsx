import { ThemeProvider as ThemeProviderStyledComponents } from "styled-components";

import { createContext, useContext, useMemo, useState } from "react";
import { dark, light } from "../style/_themeColor";

const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(false);
  const theme = themeMode ? light : dark;

  const toggleTheme = () => {
    setThemeMode((prev) => !prev);
  };

  const context = useMemo(
    () => ({
      toggleTheme,
    }),
    []
  );

  return (
    <ThemeContext.Provider value={context}>
      <ThemeProviderStyledComponents theme={theme}>
        {children}
      </ThemeProviderStyledComponents>
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
export const useThemeContext = () => useContext(ThemeContext);
