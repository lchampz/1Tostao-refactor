import React from 'react';
import { Button, Login } from './stlyedBotao.js'

const BotaoMenu = ({children, color, border, radius, width, height, padding}) => {
    return(
        <div>
            <Button borderButton={border} >
                <Login>Logar</Login>
            </Button>
        </div>
    );
}

export default BotaoMenu;