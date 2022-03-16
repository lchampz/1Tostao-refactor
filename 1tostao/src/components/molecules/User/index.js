import React from 'react';
import {Container, Title, Text} from './styled'

const User = () => {
    return ( 
    <Container>
        <Container.Title>
            Opiniões dos nossos usuários: 
        </Container.Title>
        <Container.Text>
        “O 1Tostão foi bem prático e simples de se utilizar, simplesmente adorei a minha experiência com o site.”
        </Container.Text>
    </Container> 
    );
}

Container.Title = function ContainerTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
};
Container.Text = function ContainerText({children, ...restProps}){
    return <Text {...restProps}>{children}</Text>
};

export default User;