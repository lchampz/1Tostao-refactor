import React, { useEffect, useState } from "react";
import { useUserAuth } from "../../../request/hooks/Auth";
import {
  Tabela,
  TabelaHead,
  Linha,
  Elemento,
  TabelaCorpo,
  Modal,
  Sure,
  Buttons,
  Content,
} from "./styled";
import deleteX from "../../../assets/img/deleteX.png";
import lixo from "../../../assets/img/lixo.png";
import editar from "../../../assets/img/editar.png";

const UsersTable = ({ ...restProps }) => {
  const { users, deleteUser } = useUserAuth();
  const [visible, setVisible] = useState();
  const [value, setValue] = useState();

  useEffect(() => {
    if (visible === 1) {
      let element = document.getElementById("scroll");
      element.scrollIntoView({ block: "center" });
    }
  }, [visible]);
  const rows = users?.map((item, id) => {
    return (
      <>
        <Linha key={id}>
          <Elemento>{item.nome}</Elemento>
          <Elemento>{item.email}</Elemento>
          <Elemento>{item.username}</Elemento>
          <Elemento>{item.date.substring(0, 15)}</Elemento>
          <Elemento>{item.tell}</Elemento>
          <Elemento
            style={{
              display: "flex",
              width: "90px",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              border: "none",
            }}
          >
            <div
              onClick={() => {
                setValue(item);
                setVisible(1);
              }}
              style={{
                cursor: "pointer",
                backgroundColor: "#FE0000",
              }}
            >
              <img alt={"lixo"} width={"25px"} src={lixo} />
            </div>
          </Elemento>
        </Linha>
      </>
    );
  });

  return (
    <>
      {visible === 1 ? (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
          }}
        >
          <Modal id={"scroll"}>
            <Content>
              <Sure>
                <img src={deleteX} alt={"delete user"} />
                <h1>Você tem certeza?</h1>
                <p>
                  Você tem certeza que deseja excluir esse usuário? Atenção,
                  essa ação não é reversível!
                </p>
              </Sure>
              <Buttons>
                <button
                  onClick={() => {
                    setVisible(0);
                    setValue(0);
                  }}
                  className="cancel"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => {
                    deleteUser(value);
                    setVisible(0);
                  }}
                  className="delete"
                >
                  Excluir
                </button>
              </Buttons>
            </Content>
          </Modal>
        </div>
      ) : null}
      <Tabela {...restProps}>
        <caption
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#eee",
            margin: "1rem",
            textAlign: "left",
            marginTop: "2rem",
          }}
        >
          Usuários
        </caption>
        <TabelaHead>
          <Linha>
            <Elemento style={{ width: "25%" }}>Nome</Elemento>
            <Elemento style={{ width: "25%" }}>Email</Elemento>
            <Elemento style={{ width: "25%" }}>Username</Elemento>
            <Elemento style={{ width: "25%" }}>Membro desde</Elemento>
            <Elemento style={{ width: "25%" }}>Telefone</Elemento>
            <Elemento style={{ width: "25%" }}>Ação</Elemento>
          </Linha>
        </TabelaHead>
        <TabelaCorpo>{rows}</TabelaCorpo>
      </Tabela>
    </>
  );
};

export default UsersTable;
