import React from 'react';
import { render } from 'react-dom';
import App from './App';
import Providers from './providers';
import './reset.css'

render(
  <Providers>
    <App />
  </Providers>
    ,
  document.getElementById('root')
);

