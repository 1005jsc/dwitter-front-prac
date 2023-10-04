import {createContext, useContext, useEffect, useMemo, useState} from 'react';
import {convertLang} from './logics';

const LangContext = createContext({});

const LangProvider = ({children}) => {
  const [language, setLanguage] = useState(undefined);

  useEffect(() => {
    const langLocal = convertLang(localStorage.getItem('lang'));

    if (!!langLocal) {
      setLanguage(langLocal);
    } else {
      setLanguage(convertLang(window.navigator.language));
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
      {language ? children : <div>Loading..</div>}
    </LangContext.Provider>
  );
};
export default LangProvider;

export const useLangContext = () => useContext(LangContext);
