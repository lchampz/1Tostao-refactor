import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { AuthProvider } from './request/hooks/Auth';
import { ThemeProvider } from './request/hooks/Theme';

import './reset.css'


render(
  <ThemeProvider>
  <AuthProvider>
    <App />
  </AuthProvider>
  </ThemeProvider>,
  document.getElementById('root')
);

