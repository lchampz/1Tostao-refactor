import React from 'react';
import { FooterStyled, MarginText } from './styledFooter.js';
import { Links } from '../../../atoms/LinkMenu/styledLink.js'
import { BorderText } from '../../../atoms/Border/styled.js'
import './style.css';

const Footer = ({textAlign, fontsize, padding, weight, flexDirection, float, margin, Top, cursor, fontWeight, width}) => {
    return(
        <>
        {/* FooterStyled is the Footer */}
            <FooterStyled>

                <div className="container">
                    <div className="row">

                        <div className="col">
                            <h1 className="logo">1TOSTÃO</h1>
                            <p className="desc">lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc tempor incididunt ut labore et dolore magna al.</p>
                        </div>

                        <div className="col">
                            <h1 className="logo">1TOSTÃO</h1>
                            <p className="desc">lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc tempor incididunt ut labore et dolore magna al.</p>
                        </div>
                        
                    </div>
                </div>

            </FooterStyled>

        </>
    );
}

export default Footer;
