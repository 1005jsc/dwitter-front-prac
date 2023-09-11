import {ThemeProvider as ThemeProviderStyledComponents} from 'styled-components';

import {createContext, useContext, useMemo, useState} from 'react';
import {darkTheme, lightTheme} from '../style';
import {GlobalStyles} from '../style/GlobalStyle';
import {useLangContext} from '../tests/MultiLangTest/context/LangProvider';

const ThemeContext = createContext({});

const ThemeProvider = ({children}) => {
  const [themeMode, setThemeMode] = useState(false);
  const {language, changeLanguage} = useLangContext();
  const theme = themeMode ? lightTheme : darkTheme;

  const toggleTheme = () => {
    setThemeMode(prev => !prev);
  };

  const context = useMemo(
    () => ({
      toggleTheme,
    }),
    [toggleTheme],
  );

  return (
    <ThemeContext.Provider value={context}>
      <ThemeProviderStyledComponents theme={theme}>
        <GlobalStyles language={language} />
        {children}
      </ThemeProviderStyledComponents>
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
export const useThemeContext = () => useContext(ThemeContext);
