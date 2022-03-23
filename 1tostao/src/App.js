import React, { useEffect } from 'react';
import Menu from './components/organims/Menu/Menu.js'

import Rotas from './routes'

import { BrowserRouter as Router} from 'react-router-dom';

import { useAuth } from './request/hooks/Auth'

function App() {
  const { user } = useAuth();
  
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
