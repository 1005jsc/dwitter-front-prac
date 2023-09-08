import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import ThemeProvider from './context/ThemeProvider';
import {GlobalStyles} from './style/GlobalStyle';
import LangProvider from './tests/MultiLangTest/context/LangProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LangProvider>
    <ThemeProvider>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </LangProvider>,
);
