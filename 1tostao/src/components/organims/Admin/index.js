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
import ServicesTable from "../../atoms/ServicesTable";
import UsersTable from "../../atoms/UsersTable";
import { useNavigate } from "react-router-dom";
const Administracao = () => {
  const { users, profile, user } = useUserAuth();
  const { service } = useService();
  const navigate = useNavigate();

  useEffect(() => {
    const Redirect = () => {
      if (profile?.ADM === false) {
        navigate("/");
      }
    };
    Redirect();
  }, [profile]);

  function clickedUser() {
    let element = document.getElementById("scrollToUser");
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  function clickedService() {
    let element = document.getElementById("scrollToService");
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <>
      <Container>
        <Header>
          <Tags>
            <Tag onClick={clickedUser}>Usuários</Tag>
            <Tag onClick={clickedService}>Serviços</Tag>
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

          <Users>
            <div style={{ width: "20%" }}></div>
            <UsersTable id={"scrollToUser"} />
          </Users>
          <Services>
            <div style={{ width: "20%" }}></div>
            <ServicesTable id={"scrollToService"} />
          </Services>
        </Header>
      </Container>
    </>
  );
};

export default Administracao;
