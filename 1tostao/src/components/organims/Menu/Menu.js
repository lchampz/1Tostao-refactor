import React from 'react';
import Botao from '../../atoms/BotaoMenu/Botao'
import LinkMenu from '../../atoms/LinkMenu/Link.js'
import { Header } from './styledMenu.js'

const Menu = () => {
    return(
        <>
            <Header>
                <Botao />
                <LinkMenu />
            </Header>
        </>
    );
}

export default Menu;