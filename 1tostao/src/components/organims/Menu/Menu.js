import React from 'react';
import './Menu.css'
import Botao from '../../atoms/BotaoMenu/Botao'

function Menu(){
    return(
        <div>
            <header className="header">
                <div className="links">
                    <Botao />
                </div>
            </header>
        </div>
    );
}

export default Menu;