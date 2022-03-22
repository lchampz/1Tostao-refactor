import React from 'react';
import Botao from '../../atoms/BotaoMenu/Botao'
import LinkMenu from '../../atoms/LinkMenu/Link.js'
import { useNavigate } from 'react-router-dom'
import { Header } from './styledMenu.js'

const Menu = () => {
    const navigate = useNavigate();

    return(
        <>
            <Header>
                <Botao click={() => navigate(`/login`)}>Login</Botao>
                <Botao click={() => navigate(`/register`)}>Cadastro</Botao>
                <Botao click={() => navigate(`/`)}>Home</Botao>
            </Header>
        </>
    );
}

export default Menu;