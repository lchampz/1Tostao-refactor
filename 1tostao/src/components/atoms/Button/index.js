import React from 'react';
import {Btn} from './styled'

const Button = ({children, color, border, radius, weight, family, padding}) => {
    return ( <Btn colorButton={color} 
                borderButton={border} 
                radiusButton={radius} 
                weightButton={weight} 
                familyButton={family} 
                paddingButton={padding}
            >
            {children}
            </Btn> );
}
 
export default Button;