import React from 'react';
import { Button } from './stlyedBotao.js'

const BotaoMenu = ({children, color, border, radius, width, height, padding, click}) => {
    return(
        <div>
            <Button colorButton={color} onClick={click} borderButton={border} borderRadiusButton={radius}>
                {children}
            </Button>
        </div>
    );
}

export default BotaoMenu;