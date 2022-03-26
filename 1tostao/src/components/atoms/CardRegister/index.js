import react from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Card, Input, Label, Button, variavel } from './styled.js'
import {Title} from '../Text/styles/text_style.js';


const CardRegister = ({ children, color, fontSize, textAlign, marginBottom, transition }) => {
    const navigate = useNavigate();
    return(
        <>
        <Container>
            <Card>
                <Title colorText={color="black"} sizeText={fontSize="50px"} bottomText={marginBottom="90px"}>
                    Cadastro
                </Title>
                    <Label>Nome de usuário</Label>
                    <Input placeholder="Digite seu nome de usuário" />
                    <Label>Email</Label>
                    <Input placeholder="Digite seu email" />
                    <Label>CPF</Label>
                    <Input placeholder="Digite seu CPF" />
                    <Label>Senha</Label>
                    <Input placeholder="Digite sua senha" />
                <Button onClick={() => navigate(`/`)}  transitionButton={transition="0.2s ease-in-out"}>
                    <Label colorLabel={color="white"} sizeLabel={fontSize="20px"} alignLabel={textAlign="center"} >Avançar</Label>
                </Button>
                <Label>Já tem uma conta? Entrar</Label>
            </Card>
        </Container>        
        </>
    );
};

export default CardRegister;