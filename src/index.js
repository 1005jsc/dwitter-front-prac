import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import ThemeProvider from './context/ThemeProvider';
import {GlobalStyles} from './style/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <GlobalStyles />
    <App />
  </ThemeProvider>,
);
