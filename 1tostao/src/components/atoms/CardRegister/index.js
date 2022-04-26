import React, { useEffect, useState } from "react";

import ImgWrapper from "../ImgWrapper";
import { Container, Wrapper, WrapperInput, Button, Label } from "./styled.js";
import Logo from "../../../assets/img/logo.png";
import bg from "../../../assets/img/Background.png";
import Text from "../Text/Text";
import InputRegister from "../InputRegister";
import User from "../../../assets/icons/user.png";
import Cpf from "../../../assets/icons/cpf.png";
import Email from "../../../assets/icons/email.png";
import Lock from "../../../assets/icons/padlock.png";

const CardRegister = ({}) => {
  const [tab, setTab] = useState(1);
  const [data, setData] = useState({
    user: "",
    email: "",
    cpf: "",
    pass: "",
    name: "",
    lastname: "",
    rg: "",
    birthday: "",
    tell: "",
    state: "",
    city: "",
  });

  useEffect(() => {
    setData({
      user: "",
      email: "",
      cpf: "",
      pass: "",
      name: "",
      lastname: "",
      rg: "",
      birthday: "",
      tell: "",
      state: "",
      city: "",
    });
  }, []);

  function switchTab() {
    setTab(tab === 1 ? 2 : 1);
    console.log(data);
  }

  return (
    <>
      <Container bgImg={bg}>
        <Wrapper>
          <ImgWrapper
            url={Logo}
            width={"15%"}
            height={"15%"}
            margin={"30px 155px 0px 0px"}
          />

          <Text color="rgba(51, 51, 51, 1)" size={"24px"}>
            {tab === 1 ? 'Cadastro' : 'Falta pouco!'}
          </Text>

          <WrapperInput marginTop={tab === 2 ? '2rem' : '4rem'}>
            <InputRegister
              label={"Nome de Usuário"}
              display={tab === 2 ? "none" : "flex"}
              icon={User}
              value={data.user}
              onChange={(e) => setData({ ...data, user: e.target.value })}
              placeholder="Digite seu nome de usuário"
            />

            <InputRegister
              label={"Email"}
              marginRight="72%"
              display={tab === 2 ? "none" : "flex"}
              icon={Email}
              value={data.user}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              placeholder="Digite seu email"
            />

            <InputRegister
              label={"CPF"}
              marginRight="75%"
              display={tab === 2 ? "none" : "flex"}
              icon={Cpf}
              value={data.cpf}
              onChange={(e) => setData({ ...data, cpf: e.target.value })}
              placeholder="Digite seu CPF"
            />

            <InputRegister
              label={"Senha"}
              marginRight="71%"
              display={tab === 2 ? "none" : "flex"}
              icon={Lock}
              value={data.pass}
              onChange={(e) => setData({ ...data, pass: e.target.value })}
              placeholder="Digite sua senha"
            />

            <InputRegister
              label={"Nome"}
              display={tab === 1 ? "none" : "flex"}
              marginRight="71%"
              icon={User}
              value={data.pass}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              placeholder="Digite seu nome"
            />

            <InputRegister 
              label={'Sobrenome'} 
              display={tab === 1 ? "none" : "flex"} 
              icon={User}
              marginRight={'62.5%'}
              value={data.pass} 
              onChange={(e) => setData({ ...data, pass: e.target.value })}
              placeholder="Digite sua senha" 
            />

            <InputRegister 
              label={'RG'} 
              display={tab === 1 ? "none" : "flex"} 
              icon={User}
              marginRight={'75%'}
              value={data.rg} 
              onChange={(e) => setData({ ...data, rg: e.target.value })}
              placeholder="Digite seu RG" 
            />

            <InputRegister 
              label={'Data de nascimento'} 
              display={tab === 1 ? "none" : "flex"} 
              icon={User}
              marginRight={'49%'}
              type={'date'}
              value={data.birthday} 
              onChange={(e) => setData({ ...data, birthday: e.target.value })}
              placeholder="Exemplo: 01/09/2003" 
            />

            <InputRegister 
              label={'Telefone'} 
              display={tab === 1 ? "none" : "flex"} 
              icon={User}
              marginRight={'67%'}
              value={data.rg} 
              onChange={(e) => setData({ ...data, rg: e.target.value })}
              placeholder="Exemplo: (11) 99999-9999" 
            />
          </WrapperInput>
          <Button onClick={() => switchTab()}>
            {tab === 1 ? "Avançar" : "Finalizar!"}
          </Button>
          {tab !== 1 ? null : <p>Já tem uma conta? Entrar</p>}
        </Wrapper>
      </Container>
    </>
  );
};

export default CardRegister;
