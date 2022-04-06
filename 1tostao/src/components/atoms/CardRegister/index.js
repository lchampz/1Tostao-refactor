import React, { useState } from 'react'

import ImgWrapper from '../ImgWrapper'
import { Container, Wrapper, WrapperInput, Button, Label } from './styled.js'
import Logo from '../../../assets/img/logo.png'
import bg from '../../../assets/img/Background.png'
import Text from '../Text/Text'
import Input from '../Input'
import User from '../../../assets/icons/user.png'
import Cpf from '../../../assets/icons/cpf.png'
import Email from '../../../assets/icons/email.png'
import Lock from '../../../assets/icons/padlock.png'


const CardRegister = ({  }) => {
    //const [ page, setPage ] = useState(1)
   
    return (
        <>
        <Container bgImg={bg}>
            <Wrapper>
                <ImgWrapper url={Logo} width={'15%'} height={'15%'} margin={'30px 155px 0px 0px'}/>

                <Text color="rgba(51, 51, 51, 1)" size={'24px'}>Cadastro</Text>

                <WrapperInput>
                    <Label className="label">Nome de Usuário</Label>
                    <Input icon={User} className="input" placeholder="Digite seu nome de usuário"/>
                
                    <Label marginRight="72%" className="label">Email</Label>
                    <Input icon={Email} className="input" placeholder="Digite seu email"/>
                
                    <Label marginRight="75%" className="label">CPF</Label>
                    <Input icon={Cpf} className="input" placeholder="Digite seu CPF"/>

                    <Label marginRight="71%" className="label">Senha</Label>
                    <Input icon={Lock} className="input" placeholder="Digite sua senha"/>
                </WrapperInput>

                <Button>Avançar</Button>
                <p>Já tem uma conta? Entrar</p>
            </Wrapper>
        </Container>
        </>
    ) 
};

export default CardRegister;