import React from 'react';
import { Button } from './stlyedBotao.js'

const BotaoMenu = ({children, color, border, radius, width, height, padding, click}) => {
    return(
        <div>
<<<<<<< HEAD
            <Button onClick={click} borderButton={border} widthButton={width} >
=======
            <Button colorButton={color} onClick={click} borderButton={border} borderRadiusButton={radius}>
>>>>>>> main
                {children}
            </Button>
        </div>
    );
}

export default BotaoMenu;