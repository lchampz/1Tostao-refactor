import React from 'react';
import Botao from '../../atoms/BotaoMenu/Botao'
import LinkMenu from '../../atoms/LinkMenu/Link.js'
import {Links} from '../../atoms/LinkMenu/styledLink.js'
import logo from '../../../assets/img/logo-white.png'

import { useNavigate } from 'react-router-dom'
import { Header } from './styledMenu.js'

const Menu = () => {
    const navigate = useNavigate();

    return(
        <>
            <Header>
                <Links>
                    <img src={logo} className="logo" />
                </Links>
                <Botao click={() => navigate(`/login`)}>Login</Botao>
                <Botao click={() => navigate(`/register`)}>Cadastro</Botao>
                <Botao click={() => navigate(`/`)}>Home</Botao>
            </Header>
        </>
    );
}

export default Menu;