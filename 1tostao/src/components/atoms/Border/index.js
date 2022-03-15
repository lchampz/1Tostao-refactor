import React from 'react';  
import {BorderText} from './styled'

const Border = ({children, color, width, margin}) => {
    return ( <BorderText  marginBorder={margin}  borderWidth={width} border={color}>{children}</BorderText> );
}
 
export default Border;