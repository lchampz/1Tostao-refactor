import React from 'react';
import Botao from '../../atoms/BotaoMenu/Botao'
import { useNavigate } from 'react-router-dom'
import { Header, Pages, Buttons, Container} from './styledMenu.js'
import logo from '../../../assets/img/logo-white.png'
import { Links } from '../../atoms/LinkMenu/styledLink.js'
import LinkMenu from '../../atoms/LinkMenu/Link.js'
import { useTheme} from '../../../request/hooks/Theme'

const Menu = ({padding, width}) => {
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
        content.style.boxShadow=`rgba(0, 0, 0, 0.24) 0px 3px 8px`
        content.style.transition=`all 0.2s ease-in`;
        }else if(scrolled > position - 75){
            content.style.backgroundColor=`rgba(255,255,255, 0)`;
            content.style.boxShadow=`rgba(0, 0, 0, 0) 0px 0px 0px`
            content.style.transition=`all 0.2s ease-in`;
        }
});



    return(
        <Container id="section">
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
                 <Botao click={() => navigate(`/login`)}>Login</Botao>
                 <Botao click={() => navigate(`/register`)} widthButton={width="120px"}>Registre</Botao>
            </Buttons>
                
            
        </Container>
    );
}

export default Menu;