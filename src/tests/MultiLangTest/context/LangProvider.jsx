import {createContext, useContext, useEffect, useMemo, useState} from 'react';

const LangContext = createContext({});

const LangProvider = ({children}) => {
  const [language, setLanguage] = useState(undefined);

  useEffect(() => {
    const langLocal = localStorage.getItem('lang');

    if (!!langLocal) {
      setLanguage(langLocal);
    } else {
      setLanguage(window.navigator.language);
    }
  }, []);

  const changeLanguage = lang => {
    localStorage.setItem('lang', lang);

    window.location.reload();
  };

  const context = useMemo(
    () => ({language, changeLanguage}),
    [language, changeLanguage],
  );

  return (
    <LangContext.Provider value={context}>
      {language ? children : <div>로딩중..</div>}
    </LangContext.Provider>
  );
};
export default LangProvider;

export const useLangContext = () => useContext(LangContext);
