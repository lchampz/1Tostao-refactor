import react from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Label } from '../CardRegister/styled.js'
import {CardInfo} from '../Card/styled.js'
import { ButtonCard } from '../Button/styled.js'
import { Input } from '../Input/styled.js'
import {Title} from '../Text/styles/text_style.js'

const CardLogin = ({color, textAlign, marginTop, marginBottom, fontSize, height, transition}) => {
    const navigate = useNavigate();
    return(
        <>
           <Container heightContainer={height="100vh"}>
               <CardInfo heightCard={height="fit-content"}>
                   <Title colorText={color="black"} bottomText={marginBottom="90px"} sizeText={fontSize="50px"} >Área de Login</Title>
                   <Label>Email</Label>
                   <Input placeholder="Insira seu Email" />
                   <Label>Senha</Label>
                   <Input placeholder="Insira sua senha "/>
                   <ButtonCard onClick={() => navigate(`/`)} transitionButton={transition="0.2s ease-in-out"}>
                       <Label colorLabel={color="white"} sizeLabel={fontSize="20px"} alignLabel={textAlign="center"}>Logar</Label>
                   </ButtonCard>
               </CardInfo>
           </Container>
        </>
    );
}

export default CardLogin;