import React from 'react';
import {Title} from './styles/text_style';

const Text = ({children, color, maxwidth, size, weight}) => {
    return ( 
        <Title maxwidthText={maxwidth} 
        sizeText={size} 
        weightText={weight} 
        colorText={color}
        >{children}</Title>
     );
}
 

export default Text;

