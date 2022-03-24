import React from 'react';
import Botao from '../../atoms/BotaoMenu/Botao'
import { useNavigate } from 'react-router-dom'
import { Header } from './styledMenu.js'
import logo from '../../../assets/img/logo-white.png'
import { Links } from '../../atoms/LinkMenu/styledLink.js'
import LinkMenu from '../../atoms/LinkMenu/Link.js'
import { useTheme, changeTheme } from '../../../request/hooks/Theme'

const Menu = ({padding}) => {
    const navigate = useNavigate();
    const { theme, setTheme, themes } = useTheme()
    
    const changeTheme = () => {
        setTheme(theme.name == 'white' ? themes[1] : themes[0])
    }

    return(
        <>
            <Header>
                <Links linkTop={padding}>
                    <img src={logo} className="logo" />
                </Links>
                <Botao click={() => navigate(`/login`)}>Login</Botao>
                <Botao click={() => navigate(`/register`)}>Cadastro</Botao>
                <Botao click={() => navigate(`/`)}>Home</Botao>
                <Botao click={changeTheme}>Tema</Botao>
            </Header>
        </>
    );
}

export default Menu;