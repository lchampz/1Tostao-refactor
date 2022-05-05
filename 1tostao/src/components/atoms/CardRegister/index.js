import React, { useEffect, useState } from "react";

import ImgWrapper from "../ImgWrapper";
import {
  Container,
  Wrapper,
  WrapperInput,
  Button,
  WrapperSelect,
} from "./styled.js";
import Logo from "../../../assets/img/logo.png";
import bg from "../../../assets/img/background.jpg";
import Text from "../Text/Text";
import InputRegister from "../InputRegister";
import User from "../../../assets/icons/user.png";
import Cpf from "../../../assets/icons/cpf.png";
import Email from "../../../assets/icons/email.png";
import Lock from "../../../assets/icons/padlock.png";
import Whats from "../../../assets/icons/whats.png";
import Datepicker from "../Datepicker";
import Select from "../Select";
import { getStates } from "../../../request/utils/getStates";
import { getCities } from "../../../request/utils/getCities";
import { useNavigate } from "react-router-dom";
import { useRegex } from "../../../request/hooks/Regex";
import Modal from "../ModalConfirm";
import { createUser } from "../../../services/AuthService";

const CardRegister = ({}) => {
  const [tab, setTab] = useState(1);
  const [data, setData] = useState({
    user: null,
    email: null,
    cpf: null,
    pass: null,
    name: null,
    lastname: null,
    rg: null,
    birthday: null,
    tell: null,
    state: null,
    city: null,
  });
  const [states, setStates] = useState();
  const [cities, setCities] = useState();
  const [options, setOptions] = useState({});
  const [error, setError] = useState({
    shake: false,
    msg: false,
  });
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const { regexTypes } = useRegex();
  const [code, setCode] = useState(undefined);

  useEffect(() => {
    setData({
      user: null,
      email: null,
      cpf: null,
      pass: null,
      name: null,
      lastname: null,
      rg: null,
      birthday: null,
      tell: null,
      state: null,
      city: null,
    });

    getStates(setStates);
    getCities(setCities);
  }, []);

  const isNull = (value) => {
    if (value === null || !value || value === undefined || value === "") {
      return true;
    } else {
      return false;
    }
  };

  function verify(param) {
    let estados = [];
    states.map((states) => {
      estados.push({ label: states.nome, value: states.sigla });
    });

    let cidades = [];
    cities.map((city) => {
      cidades.push({ label: city.nome, value: city.nome });
    });
    setOptions({ ES: estados, CT: cidades });

    if (param === 1) {
      if (
        isNull(data.user) ||
        !regexTypes.cpf.test(data.cpf) ||
        !regexTypes.email.test(data.email) ||
        !regexTypes.pass.test(data.pass)
      ) {
        setError({ ...error, msg: true, shake: true });
        setTimeout(() => setError({ msg: true, shake: false }), 500);
        return true;
      } else {
        setError({ ...error, msg: false });
        setTab(2);
      }
    }

    if (param === 2) {
      if (
        isNull(data.name) ||
        isNull(data.lastname) ||
        isNull(data.rg) ||
        isNull(data.birthday) ||
        !regexTypes.tell.test(data.tell) ||
        isNull(data.state) ||
        isNull(data.city)
      ) {
        setError({ ...error, msg: true, shake: true });
        setTimeout(() => setError({ msg: true, shake: false }), 500);
        return true;
      } else {
        setError({ ...error, msg: false });
        setModal(true);
        return false;
      }
    }
  }

  function checkCode(
    email,
    password,
    state,
    cpf,
    name,
    rg,
    tell,
    uid,
    username,
    lastname,
    niver,
    city
  ) {
    createUser(
      email,
      password,
      state,
      cpf,
      name,
      rg,
      tell,
      uid,
      username,
      lastname,
      niver,
      city
    );
    setModal(false);
  }

  const dateFormatAux = (date) => {
    let d = new Date(date);

    let month = "" + (d.getMonth() + 1);
    let day = "" + d.getDate();
    let year = d.getFullYear();

    if (month.length < 2) {
      month = "0" + month;
    }
    if (day.length < 2) {
      day = "0" + day;
    }

    return [day, month, year].join("/");
  };
  return (
    <>
      <Container bgImg={bg}>
        <Wrapper animation={error.shake}>
          {tab === 1 ? (
            <ImgWrapper
              url={Logo}
              width={"15%"}
              height={"15%"}
              margin={"30px 155px 0px 0px"}
            />
          ) : null}
          <Text
            color="rgba(51, 51, 51, 1)"
            size={"24px"}
            marginTop={
              tab === 2 ? (error.msg === true ? "0.3rem" : "2rem") : "0rem"
            }
          >
            {tab === 1 ? "Cadastro" : "Falta pouco!"}
          </Text>
          {error.msg && (
            <Text
              color="#E84545"
              size={"13px"}
              marginTop={tab === 2 ? "1rem" : "0.5rem"}
            >
              Preencha os campos corretamente!
            </Text>
          )}

          <WrapperInput marginTop={tab === 2 ? "2rem" : "4rem"}>
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
              type={"password"}
              onChange={(e) => setData({ ...data, pass: e.target.value })}
              placeholder="Digite sua senha"
            />
            {/* Tab2 */}
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
              label={"Sobrenome"}
              display={tab === 1 ? "none" : "flex"}
              icon={User}
              marginRight={"62.5%"}
              value={data.lastname}
              onChange={(e) => setData({ ...data, lastname: e.target.value })}
              placeholder="Digite sua senha"
            />

            <InputRegister
              label={"RG"}
              display={tab === 1 ? "none" : "flex"}
              icon={Cpf}
              marginRight={"75%"}
              value={data.rg}
              onChange={(e) => setData({ ...data, rg: e.target.value })}
              placeholder="Digite seu RG"
            />

            <Datepicker
              label={"Data de nascimento"}
              selected={data.birthday}
              color={data.birthday ? "black" : null}
              paddingRight={data.birthday === null ? null : "11rem"}
              onChange={(date) => setData({ ...data, birthday: date })}
              placeholder={
                !data.birthday
                  ? "Exemplo: 09/09/1999"
                  : `${dateFormatAux(data.birthday)}`
              }
              display={tab === 1 ? "none" : "flex"}
            />

            <InputRegister
              label={"Telefone"}
              display={tab === 1 ? "none" : "flex"}
              icon={Whats}
              marginRight={"67%"}
              value={data.tell}
              onChange={(e) => setData({ ...data, tell: e.target.value })}
              placeholder="Exemplo: 11 99999-9999"
              marginBottom={"1rem"}
            />

            <WrapperSelect marginBottom={tab === 2 ? "4rem" : null}>
              <Select
                display={tab === 1 ? "none" : "flex"}
                placeholder="Estado"
                marginRight={"1rem"}
                onChange={(e) => setData({ ...data, state: e.value })}
                options={options.ES}
              />
              <Select
                display={tab === 1 ? "none" : "flex"}
                placeholder="Cidade"
                options={options.CT}
                onChange={(e) => setData({ ...data, city: e.value })}
              />
            </WrapperSelect>
          </WrapperInput>
          <Button
            style={tab === 2 ? { marginBottom: "2rem" } : null}
            onClick={() => verify(tab)}
          >
            {tab === 1 ? "Avançar" : "Finalizar!"}
          </Button>
          {tab !== 1 ? null : (
            <p onClick={() => navigate(`/login`)}>Já tem uma conta? Entrar</p>
          )}
        </Wrapper>
        <Modal
          display={modal}
          value={code}
          onChange={(e) => setCode(e.target.value)}
          onClick={() =>
            checkCode(
              data.email,
              data.pass,
              data.state,
              data.cpf,
              data.name,
              data.rg,
              data.tell,
              data.user,
              data.lastname,
              data.birthday,
              data.city
            )
          }
        />
      </Container>
    </>
  );
};

export default CardRegister;
