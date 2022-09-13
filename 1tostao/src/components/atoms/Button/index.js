import React from 'react';
import { Btn } from './styled'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

const Button = ({children, color, border, radius, weight, family, padding, width, click}) => {
    return (
            <Btn colorButton={color} 
                borderButton={border} 
                radiusButton={radius} 
                weightButton={weight} 
                familyButton={family} 
                paddingButton={padding}
                widthButton={width}
                onClick={click}
            >
                {children}
                <FontAwesomeIcon className="icon" icon={faArrowRight}/>
                </Btn>
            );
}
 
export default Button;