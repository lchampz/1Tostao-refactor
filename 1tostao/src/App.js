import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Menu from './components/organims/Menu/Menu.js'
import Rotas from './routes'
import { Body } from './styled.js';
import Loading from './components/organims/Loading';
import { AuthProvider } from './request/hooks/Auth.js';
import { useTheme } from './request/hooks/Theme';


function App() {
  const { theme } = useTheme();
  function reload(){
    window.location.reload();
   }

  return (
    <>
    <AuthProvider >
      <Router onClick={reload} >
        <Loading />
        <Body bg={ theme.colors.bg }>
          <Menu/>
          <Rotas  />
        </Body>
      </Router>
    </AuthProvider>
    </>
  );
}

export default App;
