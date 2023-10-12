import {useThemeContext} from './context/ThemeProvider';
import FontTest from './tests/FontTest/FontTest';
import ThemeTest from './tests/ThemeTest/ThemeTest';
import MultiLangTest from './tests/MultiLangTest/component/MulitLangTest';
import {useLangContext} from './tests/MultiLangTest/context/LangProvider';
import ToastUiEditor from './tests/ToastUiEditor/ToastUiEditor';
import ZoomImagePage from './tests/ZoomImage/ZoomImagePage';

function App() {
  return (
    <div className="App">
      {/* <FontTest /> */}
      {/* <ThemeTest /> */}
      {/* <MultiLangTest /> */}
      {/* <ToastUiEditor /> */}
      <ZoomImagePage />
    </div>
  );
}

export default App;
