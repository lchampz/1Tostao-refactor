import React from 'react';
import Botao from '../../atoms/BotaoMenu/Botao'
import LinkMenu from '../../atoms/LinkMenu/Link.js'
import { useNavigate } from 'react-router-dom'
import { Header } from './styledMenu.js'
import { useTheme } from '../../../request/hooks/Theme'

const Menu = (click) => {
    const navigate = useNavigate();
    const { theme, setTheme } = useTheme()

    return(
        <>
            <Header>
                <Botao click={() => navigate(`/login`)}>Login</Botao>
                <Botao click={() => navigate(`/register`)}>Cadastro</Botao>
                <Botao click={() => navigate(`/`)}>Home</Botao>
                <Botao click={() => setTheme(theme.name == 'white' ? 'dark' : 'white')}>Tema</Botao>
            </Header>
        </>
    );
}

export default Menu;