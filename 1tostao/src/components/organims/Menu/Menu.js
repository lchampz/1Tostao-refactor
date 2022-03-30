import React, { useState } from 'react';
import Botao from '../../atoms/BotaoMenu/Botao'
import { useNavigate } from 'react-router-dom'
import { Header, Pages, Buttons, Container, HamburguerMenu, MobileMenu, PagesMenu} from './styledMenu.js'
import logo from '../../../assets/img/logo-white.png'
import { Links } from '../../atoms/LinkMenu/styledLink.js'
import LinkMenu from '../../atoms/LinkMenu/Link.js'
import { useTheme} from '../../../request/hooks/Theme'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'

const Menu = ({padding}) => {
    const [classMenu, setClassMenu] = useState(false);
    const navigate = useNavigate();
    const { theme, setTheme, themes } = useTheme()
    
    const changeTheme = () => {
        setTheme(theme.name === 'white' ? themes[1] : themes[0])
    }
    
document.addEventListener("scroll", () => {
        const content = document.getElementById("section");
        let scrolled = document.scrollingElement.scrollTop;
    let position = content.offsetTop;

    if(scrolled > position + 75){
        content.style.backgroundColor=`rgba(54,54,54)`;
        content.style.boxShadow=`rgba(0, 0, 0, 0) 0px 0px 0px`
        content.style.transition=`all 0.2s ease-in`;
    }else if(scrolled > position - 75){
        content.style.backgroundColor=`rgba(255,255,255, 0)`;
        content.style.boxShadow=`rgba(0, 0, 0, 0) 0px 0px 0px`
        content.style.transition=`all 0.2s ease-in`;
    }
});

    const toggleMenu = () => {
        if(classMenu === true) {
            setClassMenu(false)
        } else {
            setClassMenu(true)
        }
    }

return(
    <>
        <Container id="section">
                <Links onClick={() => navigate(`/`)} linkTop={padding}>
                     <img  src={logo} className="logo"/>
                </Links>
 
                <Header id="links">
                        <Pages onClick={() => navigate(`/`)}>Home</Pages>
                        <Pages onClick={() => navigate(`/servicos`)}>Serviços</Pages>
                        <Pages onClick={() => navigate(`/about`)}>Sobre nós</Pages>
                        <Pages onClick={changeTheme}>Tema</Pages>
                </Header>
            <Buttons>
                 <Botao click={() => navigate(`/login`)}>Login</Botao>
                 <Botao click={() => navigate(`/register`)}>Registrar</Botao>
            </Buttons>
            <HamburguerMenu id="mobile" onClick={toggleMenu} >
                <FontAwesomeIcon className="icon" icon={faBars} />
            </HamburguerMenu>
        </Container>
            <MobileMenu id="hamburguer" active={classMenu}>
                    <PagesMenu  onClick={() => navigate(`/`)}>Home</PagesMenu>
                    <PagesMenu onClick={() => navigate(`/servicos`)}>Serviços</PagesMenu>
                    <PagesMenu onClick={() => navigate(`/about`)}>Sobre nós</PagesMenu>
                    <PagesMenu onClick={changeTheme}>Tema</PagesMenu>
            </MobileMenu>
        </>
    );

}

export default Menu;