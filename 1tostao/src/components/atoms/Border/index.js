import React from 'react';  
import {BorderText} from './styled'

const Border = ({children, color, width, margin, colorBorder, size}) => {
    return ( 
        <BorderText  
            margin={margin}  
            borderWidth={width} 
            size={size}
            color={colorBorder}
            border={color}>{children}</BorderText> 
        );
}
 
export default Border;