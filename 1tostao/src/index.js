import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { AuthProvider } from './request/hooks/Auth';

import './reset.css'


render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root')
);

