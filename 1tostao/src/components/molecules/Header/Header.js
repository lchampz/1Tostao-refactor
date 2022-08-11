import React from 'react';
import { useNavigate } from 'react-router-dom'
import Border from '../../atoms/Border';
import Button from '../../atoms/Button';
import {Background, Container, Title} from './styles/header_style'
import { Typewriter } from 'typewriting-react';

const Header = () => {
    const navigate = useNavigate();
    return (
     
    <Background>
        <Container>
            <Title>
                Para que trabalhar em uma empresa só, se o <Typewriter cursorClassName={'cursor'} words={['bairro', 'país', 'mundo']} />  todo pode ser o seu cliente?
            </Title>
            <Border></Border>
            <Button onClick={() => navigate('/servicos')}>Explorar Serviços</Button> 

        </Container>
    </Background>
   
    )
     
};
export default Header;