import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Menu from './components/organims/Menu/Menu.js'
import Rotas from './routes'
import { Body } from './styled.js';
import Loading from './components/organims/Loading';

import { useTheme } from './request/hooks/Theme'


function App() {
  const { theme } = useTheme();
  return (
    <>
    <Router>
      <Loading />
      <Body bg={ theme.colors.bg }>
        <Menu/>
        <Rotas />
      </Body>
    </Router>
    </>
  );
}

export default App;
