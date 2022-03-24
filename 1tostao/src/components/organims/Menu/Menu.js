import React, {useState, useEffect} from 'react';
import Botao from '../../atoms/BotaoMenu/Botao'
import { useNavigate } from 'react-router-dom'
import { Header } from './styledMenu.js'
import logo from '../../../assets/img/logo-white.png'
import { Links } from '../../atoms/LinkMenu/styledLink.js'
import LinkMenu from '../../atoms/LinkMenu/Link.js'
import { useTheme, changeTheme } from '../../../request/hooks/Theme'

const Menu = ({padding}) => {
    const navigate = useNavigate();
    const { theme, setTheme, themes } = useTheme()
    
    const changeTheme = () => {
        setTheme(theme.name === 'white' ? themes[1] : themes[0])
    }


    const content = document.getElementById("section");
    document.addEventListener("scroll", () => {

    let scrolled = document.scrollingElement.scrollTop;
    let position = content.offsetTop;

  if(scrolled > position + 150){
    content.style.backgroundColor=`rgba(54,54,54)`;
    content.style.boxShadow=`rgba(0, 0, 0, 0.24) 0px 3px 8px`
    content.style.transition=`all 0.2s ease-in`;
    }else if(scrolled > position - 150){
        content.style.backgroundColor=`rgba(255,255,255, 0)`;
        content.style.boxShadow=`rgba(0, 0, 0, 0) 0px 0px 0px`
        content.style.transition=`all 0.2s ease-in`;
    }
});



    return(
        <>
            <Header id="section">
                <Links linkTop={padding}>
                    <img src={logo} className="logo" />
                </Links>
                <Botao click={() => navigate(`/login`)}>Login</Botao>
                <Botao click={() => navigate(`/register`)}>Cadastro</Botao>
                <Botao click={() => navigate(`/`)}>Home</Botao>
                <Botao click={changeTheme}>Tema</Botao>
            </Header>
        </>
    );
}

export default Menu;