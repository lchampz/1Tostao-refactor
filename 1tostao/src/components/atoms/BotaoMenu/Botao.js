import React from 'react';
import { Button, Login } from './stlyedBotao.js'

const BotaoMenu = ({children, color, border, radius, width, height, padding, click}) => {
    return(
        <div>
            <Button onClick={click} borderButton={border} >
                <Login>{children}</Login>
            </Button>
        </div>
    );
}

export default BotaoMenu;