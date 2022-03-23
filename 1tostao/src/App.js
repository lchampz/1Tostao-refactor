import React from 'react';
import Menu from './components/organims/Menu/Menu.js'

import Rotas from './routes'

import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Menu />
      <Rotas />
    </Router>
    </>
  );
}

export default App;
