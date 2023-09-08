import {styled} from 'styled-components';
import {useThemeContext} from './context/ThemeProvider';
import FontTest from './tests/FontTest/FontTest';
import ThemeTest from './tests/ThemeTest/ThemeTest';
import MultiLangTest from './tests/MultiLangTest/component/MulitLangTest';
import {useLangContext} from './tests/MultiLangTest/context/LangProvider';

function App() {
  console.log('리렌더링이 일어남 2');

  return (
    <div className="App">
      {/* <FontTest /> */}
      {/* <ThemeTest /> */}
      <MultiLangTest />
    </div>
  );
}

export default App;
