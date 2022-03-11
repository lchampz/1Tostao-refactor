import React from 'react';
import Border from '../../atoms/Border';
import Button from '../../atoms/Button';
import Text from '../../atoms/Text/Text';
import {Background, Container} from './styles/header_style'

const Header = () => {
    return (
     
    <Background>
        <Container>
            <Text>Para que estagiar em uma empresa só, se o mundo todo pode ser o seu cliente?</Text>
            <Border></Border>
            <Button>Explorar Serviços</Button>
        </Container>
    </Background>
   
    )
     
};
export default Header;