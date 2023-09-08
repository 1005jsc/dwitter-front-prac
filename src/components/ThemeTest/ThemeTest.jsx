import {styled} from 'styled-components';
import {useThemeContext} from '../../context/ThemeProvider';

const ThemeTest = () => {
  const {toggleTheme} = useThemeContext();
  return (
    <>
      <Button
        onClick={() => {
          toggleTheme();
        }}>
        띰 버튼
      </Button>
    </>
  );
};
export default ThemeTest;

const Button = styled.button`
  width: 120px;
  height: 80px;

  background-color: ${({theme}) => theme.colors.titleColor};

  @media screen {
  }
`;
