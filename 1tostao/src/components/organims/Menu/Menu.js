import React from 'react';
import './Menu.css'
import Botao from '../../atoms/BotaoMenu/Botao'
import LinkMenu from '../../atoms/LinkMenu/Link.js'

function Menu(){
    return(
        <div>
            <header className="header">
                <div className="links">
                    <Botao />
                    <LinkMenu />
                </div>
            </header>
        </div>
    );
}

export default Menu;