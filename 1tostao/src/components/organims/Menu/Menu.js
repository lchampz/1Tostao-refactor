import React, { useState, useEffect } from 'react';
import Botao from '../../atoms/BotaoMenu/Botao'
import { useNavigate } from 'react-router-dom'
import { Header, Pages, Buttons, Container, HamburguerMenu, MobileMenu, PagesMenu, Config, Theme} from './styledMenu.js'
import logoWhite from '../../../assets/img/logo-white.png'
import blackLogo from '../../../assets/img/blackLogo.png'
import { Links } from '../../atoms/LinkMenu/styledLink.js'
import LinkMenu from '../../atoms/LinkMenu/Link.js'
import { useTheme} from '../../../request/hooks/Theme'
import { useUserAuth } from '../../../request/hooks/Auth'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faArrowDown, faCog, faAngleDown, faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import SubmenuLogged from '../../atoms/SubmenuLogged'

const Menu = ({padding}) => {
    const [classMenu, setClassMenu] = useState(false);
    const [config, setConfig] = useState(false);
    const navigate = useNavigate();
    const { theme, setTheme, themes } = useTheme()
    const [ scroll, setScroll ] = useState(false)
    const [ style, setStyle] = useState({
        bg: '#343434',
        color: '#FFFFFF'
    })
    const [ logo, setLogo ] = useState(logoWhite)
    const { user } = useUserAuth()
    
    const changeTheme = () => {
        setTheme(theme.name === 'white' ? themes[1] : themes[0])
    }
    
    useEffect(() => {
        if(theme.name === 'white') {
            setStyle({ bg: '#E1E1E1', color: 'black' })
            setLogo(blackLogo)
        } else {
            setStyle({bg: '#343434' ,  color: '#FFFFFF' })
            setLogo(logoWhite)
        }
    }, [theme])

    document.addEventListener("scroll", () => {
        const content = document.getElementById("section");
        let scrolled = document.scrollingElement.scrollTop;
        let position = content.offsetTop;

        if(scrolled > position + 75) {
            setScroll(true)
        } else if(scrolled > position - 75) {
            setScroll(false)
        }
    });

    const toggleMenu = () => {
        if(classMenu === true) {
            setClassMenu(false)
        } else {
            setClassMenu(true)
        }
    }

    const toggleConfig = () => {
        if(config === true) {
            setConfig(false)
        } else {
            setConfig(true)
        }
    }

return(
    <>
        <Container bg={scroll ? style.bg : 'rgb(255, 255, 255, 0)'} color={style.color} shadow={scroll ? 'rgba(0, 0, 0, 0.24) 0px 3px 8px' : 'rgb(255, 255, 255, 0)'} id="section">
                <Links onClick={() => navigate(`/`)} linkTop={padding}>
                     <img  src={logo} className="logo"/>
                </Links>
 
                <Header id="links">
                        <Pages onClick={() => navigate(`/`)}>Home</Pages>
                        <Pages onClick={() => navigate(`/servicos`)}>Serviços</Pages>
                        <Pages onClick={() => navigate(`/about`)}>Sobre nós</Pages>
                       
                </Header>
                <Theme config={config} bg={style.bg} color={style.color} >
                    <Pages className="tema" onClick={changeTheme}>Tema</Pages>
                </Theme>
                <Config config={config} >
                    <FontAwesomeIcon className="arrowLeft" onClick={toggleConfig} icon={faAngleLeft} />
                    <FontAwesomeIcon className="arrow" onClick={toggleConfig} icon={faAngleDown} />
                    <FontAwesomeIcon className="config" onClick={toggleConfig} icon={faCog} />
                </Config>
            <Buttons>
            {user ? <SubmenuLogged /> :
                <>
                <Botao border={`1px solid ${style.color}`} color={style.color} click={() => navigate(`/login`)}>Login</Botao>
                <Botao border={`1px solid ${style.color}`} color={style.color} click={() => navigate(`/register`)}>Registrar</Botao>
                </>
            }
            </Buttons>
            <HamburguerMenu id="mobile" onClick={toggleMenu} color={style.color}>
                <FontAwesomeIcon className="icon" icon={faBars} />
            </HamburguerMenu>
        </Container>
            <MobileMenu bg={style.bg} color={style.color} id="hamburguer" active={classMenu}>
                    <PagesMenu  onClick={() => navigate(`/`)}>Home</PagesMenu>
                    <PagesMenu onClick={() => navigate(`/servicos`)}>Serviços</PagesMenu>
                    <PagesMenu onClick={() => navigate(`/about`)}>Sobre nós</PagesMenu>
                    {user ? <SubmenuLogged /> : (
                        <>
                        <PagesMenu onClick={() => navigate(`/login`)}>Login</PagesMenu>
                        <PagesMenu onClick={() => navigate(`/register`)}>Registrar</PagesMenu>
                        </>
                    )}
            </MobileMenu>
        </>
    );

}

export default Menu;