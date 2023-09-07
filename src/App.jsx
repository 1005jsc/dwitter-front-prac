import { styled } from "styled-components";
import { useThemeContext } from "./context/ThemeProvider";

function App() {
  const { toggleTheme } = useThemeContext();

  return (
    <div className='App'>
      <Button
        onClick={() => {
          toggleTheme();
        }}
      >
        띰 버튼
      </Button>
    </div>
  );
}

export default App;

const Button = styled.button`
  width: 120px;
  height: 80px;

  background-color: ${({ theme }) => theme.colors.titleColor};
`;
