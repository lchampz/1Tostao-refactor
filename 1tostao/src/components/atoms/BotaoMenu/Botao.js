import React from 'react';
import { Button, Login } from './stlyedBotao.js'

const BotaoMenu = ({children, color, border, radius, width, height, padding, transition}) => {
    return(
        <div>
            <Button borderButton={border} 
            hoverButton={transition="ease-in-out 0.2s"}
            >
                <Login>Logar</Login>
            </Button>
        </div>
    );
}

export default BotaoMenu;