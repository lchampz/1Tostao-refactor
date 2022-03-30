import React, { useEffect, useState } from 'react';
import Botao from '../../atoms/BotaoMenu/Botao'
import { useNavigate } from 'react-router-dom'
import { Header, Pages, Buttons, Container} from './styledMenu.js'
import logoWhite from '../../../assets/img/logo-white.png'
import blackLogo from '../../../assets/img/blackLogo.png'
import { Links } from '../../atoms/LinkMenu/styledLink.js'
import LinkMenu from '../../atoms/LinkMenu/Link.js'
import { useTheme } from '../../../request/hooks/Theme'

const Menu = ({padding}) => {
    const navigate = useNavigate();
    const { theme, setTheme, themes } = useTheme()
    const [ scroll, setScroll ] = useState(false)
    const [ style, setStyle] = useState({
        bg: '#343434',
        color: '#FFFFFF'
    })
    const [ logo, setLogo ] = useState(logoWhite)
    
    const changeTheme = () => {
        setTheme(theme.name === 'white' ? themes[1] : themes[0])
    }

    useEffect(() => {
        if(theme.name === 'white') {
            setStyle({ bg: '#FFFFFF', color: 'black' })
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

    return(
        <Container bg={scroll ? style.bg : 'rgb(255, 255, 255, 0)'} color={style.color} shadow={scroll ? 'rgba(0, 0, 0, 0.24) 0px 3px 8px' : 'rgb(255, 255, 255, 0)'} id="section">
            <Header>
                <Links onClick={() => navigate(`/`)} linkTop={padding}>
                     <img  src={logo} className="logo" />
                </Links>
                <Pages onClick={() => navigate(`/`)}>Home</Pages>
                <Pages onClick={() => navigate(`/servicos`)}>Serviços</Pages>
                <Pages onClick={() => navigate(`/about`)}>Sobre nós</Pages>
                <Pages onClick={changeTheme}>Tema</Pages>
            </Header>
            <Buttons>
                 <Botao border={`1px solid ${style.color}`} color={style.color} click={() => navigate(`/login`)}>Login</Botao>
                 <Botao border={`1px solid ${style.color}`} color={style.color} click={() => navigate(`/register`)}>Registrar</Botao>
            </Buttons>
                
            
        </Container>
    );
}

export default Menu;