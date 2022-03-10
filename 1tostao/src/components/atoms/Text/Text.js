import React from 'react';
import {Title} from './styles/text_style';

const Text = ({children, ...restProps}) => {
    return ( 
        <Title>{children}</Title>
     );
}
 

export default Text;

