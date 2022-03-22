import React from 'react';
import { FooterStyled } from './styledFooter.js';
import { Links } from '../../atoms/LinkMenu/styledLink.js'
import { BorderText } from '../../atoms/Border/styled.js'
import img from '../../../assets/img/1tostao_logo.png'
import './style.css';

const Footer = ({width, margintop}) => {
    return(
        <>
        {/* FooterStyled is the Footer */}
            <FooterStyled>

                <div className="container">
                    <div className="row">

                        <div className="col">
                            <h1 className="logo">1TOSTÃO</h1>
                            <p className="desc">Para que estagiar em uma empresa só, se o mundo todo pode ser o seu cliente? Para ser 1Tostão basta um clique.</p>
                            <div>
                                <img src={img} className="img"></img>                                
                                <img src={img} className="img"></img>
                                <img src={img} className="img"></img>
                                <img src={img} className="img"></img>
                            </div>
                        </div>

                        <div className="col-info">
                            <h1 className="infos">Serviços</h1>
                            <ul>
                                <li className="li">Categorias</li>
                                <li className="li">Suporte</li>
                            </ul>
                        </div>

                        <div className="col-info">
                            <h1 className="infos">Empresa</h1>
                            <ul>
                                <li className="li">Sobre nós</li>
                                <li className="li">Ajude-nos</li>
                            </ul>
                        </div>
                        
                    </div>
                    <BorderText borderWidth={width="100%"} topBorder={margintop="50px"} />

                    <div className="row" id="row-rod">
                        <div className="col-rod">
                            <p className="rodapepo">© 2022 1Tostão</p>
                        </div>

                        <div className="col-rod-info">
                            <p className="rodapepo">Termos de uso</p>
                            <p className="rodapepo">Política de privacidade</p>
                        </div>
                    </div>
                </div>
            </FooterStyled>

        </>
    );
}

export default Footer;
