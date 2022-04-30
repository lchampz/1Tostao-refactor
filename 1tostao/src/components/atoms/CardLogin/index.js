import react from 'react'
import { useNavigate } from 'react-router-dom'
import { Input } from '../Input/styled.js'
import {Title} from '../Text/styles/text_style.js'
import Text from "../Text/Text"
import ImgWrapper from '../ImgWrapper'
import { useState } from 'react'
import Logo from '../../../assets/img/logo.png'
import InputRegister from '../InputRegister';
import { Container, Wrapper, WrapperInput, Button, Label } from "../CardRegister/styled.js";
import bg from "../../../assets/img/Background.png";
import Email from "../../../assets/icons/email.png";
import Lock from "../../../assets/icons/padlock.png";

const CardLogin = ({fontSize, color, height, width, marginBottom}) => {
    const navigate = useNavigate();

        const [name, setName] = useState()
        const [password, setPassword] = useState()

    return(
        <>
           <Container bgImg={bg}>
               <Wrapper heightWrapper={height="fit-content"}>
                   <ImgWrapper imgHeight={height="100%;"} url={Logo} margin={"30px 155px 0px 0px"} />
                   <Title colorText={color="black"} bottomText={marginBottom="90px"} sizeText={fontSize="20px"}>
                       Login
                   </Title>
                   <InputRegister icon={Email} label="Email" display={"flex"} onChange={(e) => setName(e.target.value)} placeholder="Insira seu email" />
                   <InputRegister icon={Lock} label="Senha" display={"flex"} onChange={(e) => setPassword(e.target.value)} placeholder="Insira sua senha" />
                   <Button heightButton={height="60px"}>Logar</Button>
               </Wrapper>
           </Container>
        </>
    );
}

export default CardLogin;