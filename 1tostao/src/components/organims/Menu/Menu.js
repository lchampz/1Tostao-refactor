import React from 'react';
import Botao from '../../atoms/BotaoMenu/Botao'
import { useNavigate } from 'react-router-dom'
import { Header } from './styledMenu.js'
import logo from '../../../assets/img/logo-white.png'
import { Links } from '../../atoms/LinkMenu/styledLink.js'
import LinkMenu from '../../atoms/LinkMenu/Link.js'

const Menu = ({padding}) => {
    const navigate = useNavigate();

    return(
        <>
            <Header>
                <Links linkTop={padding}>
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