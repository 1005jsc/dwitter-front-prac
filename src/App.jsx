import {styled} from 'styled-components';
import {useThemeContext} from './context/ThemeProvider';
import FontTest from './components/FontTest/FontTest';
import ThemeTest from './components/ThemeTest/ThemeTest';

function App() {
  return (
    <div className="App">
      <FontTest />
      <ThemeTest />
    </div>
  );
}

export default App;
