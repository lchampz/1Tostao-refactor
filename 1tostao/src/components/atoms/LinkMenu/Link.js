import React from 'react';
import { Links } from './styledLink.js'
import logo from '../../../assets/img/logo-white.png'
import './styled.css'

const Link = ({children, float, color, margin, margintop, font, size, fontfamily}) => {
    return(
        <>
            <Links>
                <img src={logo} className="logo" />
            </Links>

            <Links linkSize={size="16px"} 
            linkLogo={float="right"} 
            linkTop={margintop="40px"}
            linkMargin={margin="20px"}>
                Configurações
            </Links>
        </>
    );
}

export default Link;