import {createContext, useContext, useEffect, useMemo, useState} from 'react';

const LangContext = createContext({});

const LangProvider = ({children}) => {
  // 로직

  // 1. 언어 변동이 있을때마다 설정해주기

  const [language, setLanguage] = useState(undefined);

  console.log('리렌더링이 일어남 1');

  useEffect(() => {
    // 1. 로컬 스토리지에서 lang을 불러온다
    const langLocal = localStorage.getItem('lang');

    console.log('langLocal ' + langLocal);

    if (!!langLocal) {
      console.log('있음');
      // 3. 값이 있으면 사용
      setLanguage(langLocal);
    } else {
      console.log('없음');
      // 2. 값이 없으면 window.navigator.language값을 사용
      setLanguage(window.navigator.language);
    }
  }, []);

  useEffect(() => {
    console.log('language 확인');
    console.log(language);
  }, [language]);

  const changeLanguage = lang => {
    console.log('언어를 바꿉니다 ' + lang);
    localStorage.setItem('lang', lang);
    // setLanguage(lang);
    window.location.reload();
  };

  const context = useMemo(() => ({language, changeLanguage}), []);

  return (
    <LangContext.Provider value={context}>
      {language ? children : <div>로딩중..</div>}
    </LangContext.Provider>
  );
};
export default LangProvider;

export const useLangContext = () => useContext(LangContext);
