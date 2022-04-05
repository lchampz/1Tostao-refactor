import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Label } from './styled.js'
import { CardInfo } from '../Card/styled.js'
import { ButtonCard } from '../Button/styled.js'
import { Input } from '../Input/styled.js'
import {Title} from '../Text/styles/text_style.js';


const CardRegister = ({ children, color, fontSize, textAlign, marginBottom, transition }) => {
    const navigate = useNavigate();
    const [page, setPage] = useState(1)

    return page === 1 ?(
        <>
        <Container>
            <CardInfo>
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
                <ButtonCard onClick={() => setPage(2)}  transitionButton={transition="0.2s ease-in-out"}>
                    <Label colorLabel={color="white"} sizeLabel={fontSize="20px"} alignLabel={textAlign="center"} >Avançar</Label>
                </ButtonCard>
                <Label>Já tem uma conta? Entrar</Label>
            </CardInfo>
        </Container>        
        </>
    ) : (<><Container>
        <CardInfo>
            <Title colorText={color="black"} sizeText={fontSize="50px"} bottomText={marginBottom="90px"}>
                Cadastro parte 2
            </Title>
                <Label>teste</Label>
                <Input placeholder="teste" />
                <Label>teste</Label>
                <Input placeholder="teste" />
            <ButtonCard onClick={() => setPage(1)}  transitionButton={transition="0.2s ease-in-out"}>
                <Label colorLabel={color="white"} sizeLabel={fontSize="20px"} alignLabel={textAlign="center"} >Voltar!</Label>
            </ButtonCard>
            <Label>Já tem uma conta? Entrar</Label>
        </CardInfo>
    </Container>  </>);
};

export default CardRegister;