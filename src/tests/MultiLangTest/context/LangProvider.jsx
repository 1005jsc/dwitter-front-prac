import {createContext, useContext, useEffect, useMemo, useState} from 'react';
import {convertLang} from './logics';

const LangContext = createContext({});

const LangProvider = ({children}) => {
  const [language, setLanguage] = useState(undefined);

  useEffect(() => {
    const langLocal = convertLang(localStorage.getItem('lang'));

    // 리스트 안에 있는 언어를 선택할 수 있게한다

    // 선택된 언어가 없다면 영어로 뜨게 한다

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
      {language ? children : <div>로딩중..</div>}
    </LangContext.Provider>
  );
};
export default LangProvider;

export const useLangContext = () => useContext(LangContext);
