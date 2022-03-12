import React from 'react';
import { Links } from './styledLink.js'

const Link = ({children, float, color, padding, font, size, family}) => {
    return(
        <>
            <Links>
                1Tostão
            </Links>

            <Links linkSize={size="16px"} 
            linkLogo={float="right"} >
                Configurações
            </Links>

        </>
    );
}

export default Link;