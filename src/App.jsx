import {useThemeContext} from './context/ThemeProvider';
import FontTest from './tests/FontTest/FontTest';
import ThemeTest from './tests/ThemeTest/ThemeTest';
import MultiLangTest from './tests/MultiLangTest/component/MulitLangTest';
import {useLangContext} from './tests/MultiLangTest/context/LangProvider';
import ToastUiEditor from './tests/ToastUiEditor/ToastUiEditor';
import ZoomImagePage from './tests/ZoomImage/ZoomImagePage';
import CreateNewUrl from './tests/CreateNewUrl/CreateNewUrl';
import styled from 'styled-components';

function App() {
  return (
    <AppWrapper>
      {/* <FontTest /> */}
      {/* <ThemeTest /> */}
      {/* <MultiLangTest /> */}
      {/* <ToastUiEditor /> */}
      {/* <ZoomImagePage /> */}
      <CreateNewUrl />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.section`
  padding: 20px;
`;
