import {styled} from 'styled-components';
import {useThemeContext} from './context/ThemeProvider';
import FontTest from './components/FontTest/FontTest';

function App() {
  const {toggleTheme} = useThemeContext();

  return (
    <div className="App">
      <FontTest />

      <Button
        onClick={() => {
          toggleTheme();
        }}>
        띰 버튼
      </Button>
    </div>
  );
}

export default App;

const Button = styled.button`
  width: 120px;
  height: 80px;

  background-color: ${({theme}) => theme.colors.titleColor};

  @media screen {
  }
`;
