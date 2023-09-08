import {useEffect, useState} from 'react';
import Radio from './Radio/Radio';
import {styled} from 'styled-components';
import {useLangContext} from '../context/LangProvider';

const MultiLangTest = () => {
  const {language, changeLanguage} = useLangContext();

  console.log('리렌더링이 일어남 3');

  useEffect(() => {
    console.log('MultiLang ' + language);
  }, [language]);

  const handleIsMakersChange = e => {
    changeLanguage(e.target.value);
  };

  if (!language) return;

  return (
    <>
      <CheckboxSmallWrap>
        <CheckboxText>{_text[language][1]}</CheckboxText>

        <Radio
          setChange={handleIsMakersChange}
          name={'isMakersComment'}
          inputList={[
            {
              //   value: language === 'ko' ? 'ko' : false,
              value: 'ko',
              defaultChecked: true,
              title: _text[language][2],
            },
            {
              //   value: language === 'en-US' ? 'en-US' : false,
              value: 'en-US',
              defaultChecked: false,
              title: _text[language][3],
            },
            {
              //   value: language === 'jp' ? 'jp' : false,
              value: 'jp',
              defaultChecked: false,
              title: _text[language][4],
            },
          ]}
        />
      </CheckboxSmallWrap>
    </>
  );
};
export default MultiLangTest;

const CheckboxSmallWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3px;
`;
const CheckboxText = styled.span`
  margin-right: 8px;
`;

const _text = {
  ko: {1: '언어선택', 2: '한국어', 3: 'English', 4: 'Japanese'},
  'en-US': {1: 'language', 2: 'Korean', 3: 'English', 4: 'Japanese'},
  jp: {1: '言語選択', 2: '韓国語', 3: 'English', 4: '日本語'},
};
