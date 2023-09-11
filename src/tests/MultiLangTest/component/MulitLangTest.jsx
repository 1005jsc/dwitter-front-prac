import Radio from './Radio/Radio';
import {styled} from 'styled-components';
import {useLangContext} from '../context/LangProvider';

const MultiLangTest = () => {
  const {language, changeLanguage} = useLangContext();

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
              defaultChecked: language === 'ko',
              title: _text[language][2],
            },
            {
              //   value: language === 'en-US' ? 'en-US' : false,
              value: 'en-US',
              defaultChecked: language === 'en-US',
              title: _text[language][3],
            },
            {
              //   value: language === 'jp' ? 'jp' : false,
              value: 'jp',
              defaultChecked: language === 'jp',
              title: _text[language][4],
            },
          ]}
        />
      </CheckboxSmallWrap>

      <MultiSpan>{_text[language][5]}</MultiSpan>
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

const MultiSpan = styled.span``;

// 여기는 문제가 생길수도 있다 언어 종류가 별로 없어서
const _text = {
  ko: {
    1: '언어선택',
    2: '한국어',
    3: 'English',
    4: 'Japanese',
    5: '폰트가 바뀌게 하기 ',
  },
  'en-US': {
    1: 'language',
    2: 'Korean',
    3: 'English',
    4: 'Japanese',
    5: 'Font may differ',
  },
  jp: {1: '言語選択', 2: '韓国語', 3: 'English', 4: '日本語', 5: 'yoyoyo'},
};
