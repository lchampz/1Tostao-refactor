import react from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Card, Label, Input, Button } from '../CardRegister/styled.js'
import {Title} from '../Text/styles/text_style.js'

const CardLogin = ({color, textAlign, marginTop, marginBottom, fontSize, height, transition}) => {
    const navigate = useNavigate();
    return(
        <>
           <Container heightContainer={height="100vh"}>
               <Card heightCard={height="fit-content"}>
                   <Title colorText={color="black"} bottomText={marginBottom="90px"} sizeText={fontSize="50px"} >Área de Login</Title>
                   <Label>Email</Label>
                   <Input placeholder="Insira seu Email" />
                   <Label>Senha</Label>
                   <Input placeholder="Insira sua senha "/>
                   <Button onClick={() => navigate(`/`)} transitionButton={transition="0.2s ease-in-out"}>
                       <Label colorLabel={color="white"} sizeLabel={fontSize="20px"} alignLabel={textAlign="center"}>Logar</Label>
                   </Button>
               </Card>
           </Container>
        </>
    );
}

export default CardLogin;