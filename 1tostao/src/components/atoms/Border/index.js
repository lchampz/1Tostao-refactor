import React from 'react';  
import {BorderText} from './styled'

const Border = ({ children, color, width, bottom}) => {
    return ( <BorderText bottomBorder={bottom} topBorder={"5px"}  borderWidth={width} border={color}>{children}</BorderText> );
}
 
export default Border;