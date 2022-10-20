import React, { useState, useEffect, useMemo } from "react";

import {
  Container,
  Header,
  Tags,
  Card,
  Users,
  Services,
  Tag,
  Title,
  Info,
  Infos,
  Number,
  Cadastrados,
  Search,
  Wrapper,
  Pesquisa,
} from "./styled";

import ImgWrapper from "../../atoms/ImgWrapper";
import lupa from "../../../assets/img/lupa.png";

import { useUserAuth } from "../../../request/hooks/Auth";
import { useService } from "../../../request/hooks/Services";
const Administracao = () => {
  const { users, getAllUsers } = useUserAuth();
  const { service } = useService();
  useEffect(() => {
    getAllUsers();
  });

  return (
    <Container>
      <Header>
        <Tags>
          <Tag>Usuários</Tag>
          <Tag>Serviços</Tag>
        </Tags>
        <Info>
          <Title style={{ marginBottom: "1rem" }}>Administração</Title>
          <Card>
            <Infos>
              <Number>{users?.length}</Number>
              <Cadastrados>Usuários Cadastrados</Cadastrados>
            </Infos>
            <Infos>
              <Number>{service?.length}</Number>
              <Cadastrados>Serviços Cadastrados</Cadastrados>
            </Infos>
          </Card>
        </Info>
        <Search>
          <div style={{ width: "20%" }}></div>
          <Wrapper>
            <ImgWrapper
              url={lupa}
              width="25px"
              height="25px"
              margin={"0px 0px 0px 10px"}
              cursor="pointer"
            />
            <Pesquisa
              type={"text"}
              placeholder={"Procure um usuário por nome, email ou serviço"}
            />
          </Wrapper>
        </Search>
      </Header>
      <Users></Users>
      <Services></Services>
    </Container>
  );
};

export default Administracao;
