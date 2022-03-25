import React from 'react';
import Menu from './components/organims/Menu/Menu.js'

import Rotas from './routes'
import { Body } from './styled.js';
 
import { BrowserRouter as Router} from 'react-router-dom';

import { useTheme } from './request/hooks/Theme'

function App() {
  const { theme } = useTheme();

  return (
    <>
    <Router>
      <Body bg={ theme.colors.bg }>
        <Menu/>
        <Rotas />
      </Body>
    </Router>
    </>
  );
}

export default App;
