import React, { useState, useEffect, useMemo, useContext } from "react";

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
  const [searchValue, setSearchValue] = useState("");
  const [searchShow, setSearchShow] = useState();

  const [valueService, setValueService] = useState();
  const [showService, setShowService] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const Redirect = () => {
      if (profile?.ADM === false) {
        navigate("/");
      } else if (!user) {
        navigate("/");
      }
    };
    Redirect();
  }, [profile, user]);

  useEffect(() => {
    const setAvaliacao = async () => {
      service.forEach((item) => {
        item["avaliacao"] = (
          (item.nota1 * 1 +
            item.nota2 * 2 +
            item.nota3 * 3 +
            item.nota4 * 4 +
            item.nota5 * 5) /
          (item.nota1 + item.nota2 + item.nota3 + item.nota4 + item.nota5)
        ).toFixed(1);
        if (isNaN(item.avaliacao)) {
          item["avaliacao"] = 0;
        }
      });
    };
    setAvaliacao();
  });

  function clickedUser() {
    let element = document.getElementById("scrollToUser");
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  function clickedService() {
    let element = document.getElementById("scrollToService");
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  // users filter

  const filteredTable = users?.filter((person) => {
    return (
      person.nome.toLowerCase().includes(searchValue.toLowerCase()) ||
      person.email.toLowerCase().includes(searchValue.toLowerCase())
    );
  });

  const handleChange = (e) => {
    setSearchValue(e.target.value);

    if (e.target.value === "") {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };
  function searchList() {
    if (!searchShow) {
      return <UsersTable array={users} id={"scrollToUser"} />;
    } else {
      return <UsersTable array={filteredTable} id={"scrollToUser"} />;
    }
  }

  //services filter

  const filteredTableService = service?.filter((person) => {
    return (
      person.nome.toLowerCase().includes(valueService.toLowerCase()) ||
      person.categoria.toLowerCase().includes(valueService.toLowerCase()) ||
      person.autor.toLowerCase().includes(valueService.toLowerCase())
    );
  });
  const handleChangeService = (e) => {
    setValueService(e.target.value);

    if (e.target.value === "") {
      setShowService(false);
    } else {
      setShowService(true);
    }
  };

  function searchListService() {
    if (!showService) {
      return <ServicesTable array={service} id={"scrollToService"} />;
    } else {
      return <ServicesTable array={filteredTableService} id={"scrollToUser"} />;
    }
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
        </Header>
        <Search style={{ marginTop: "2rem" }}>
          <Wrapper style={{ width: "90%" }}>
            <ImgWrapper
              url={lupa}
              width="25px"
              height="25px"
              margin={"0px 0px 0px 10px"}
              cursor="pointer"
            />
            <Pesquisa
              type={"text"}
              placeholder={"Procure um usuário por nome ou email..."}
              onChange={handleChange}
            />
          </Wrapper>
        </Search>
        <Users>{searchList()}</Users>
        <Search style={{ marginTop: "2rem" }}>
          <Wrapper style={{ width: "90%" }}>
            <ImgWrapper
              url={lupa}
              width="25px"
              height="25px"
              margin={"0px 0px 0px 10px"}
              cursor="pointer"
            />
            <Pesquisa
              type={"text"}
              style={{ width: "90%" }}
              placeholder={
                "Procure um serviço por nome, categoria, ou freelancer..."
              }
              onChange={handleChangeService}
            />
          </Wrapper>
        </Search>
        <Services>{searchListService()}</Services>
      </Container>
    </>
  );
};

export default Administracao;
