import React from 'react';  
import {BorderText} from './styled'

const Border = ({ children, color, width, margin, colorBorder, size, ...restProps}) => {
    return ( 
        <BorderText {...restProps}
            margin={margin}  
            borderWidth={width} 
            size={size}
            color={colorBorder}
            border={color}>{children}</BorderText> 
        );
}
 
export default Border;