import React from 'react';
import { Button } from './stlyedBotao.js'

const BotaoMenu = ({children, color, border, radius, width, height, padding, click}) => {
    return(
        <div>
            <Button onClick={click} borderButton={border} >
                {children}
            </Button>
        </div>
    );
}

export default BotaoMenu;