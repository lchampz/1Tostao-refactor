import React from 'react';
import { Links } from './styledLink.js'

const Link = ({children, float, color, margin, margintop, font, size, fontfamily}) => {
    return(
        <>
            <Links linkMargin={margin="20px"}>
                1Tostão
            </Links>

            <Links linkSize={size="16px"} 
            linkLogo={float="right"} 
            linkTop={margintop="20px"}
            linkMargin={margin="none"}>
                Configurações
            </Links>
        </>
    );
}

export default Link;