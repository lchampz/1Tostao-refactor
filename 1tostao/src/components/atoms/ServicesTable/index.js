import React, { useEffect, useState } from "react";
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
import { useService } from "../../../request/hooks/Services";
import deleteX from "../../../assets/img/deleteX.png";
import db from "../../../services/Firebase";
import lixo from "../../../assets/img/lixo.png";
import editar from "../../../assets/img/editar.png";
import { deleteDoc, doc } from "firebase/firestore";
const ServicesTable = ({ array, valuee, ...restProps }) => {
  const { service } = useService();
  const [visible, setVisible] = useState();
  const [value, setValue] = useState();

  useEffect(() => {
    if (visible === 1) {
      let element = document.getElementById("scroll");
      element.scrollIntoView({ block: "center" });
    }
  }, [visible]);

  const deleteService = async (val) => {
    await deleteDoc(doc(db, "servicos", val.id));
    window.location.reload();
  };
  const rows = array?.map((item) => {
    return (
      <Linha>
        <Elemento>{item.nome}</Elemento>
        <Elemento>{item.categoria}</Elemento>
        <Elemento>R${item.preco}</Elemento>
        <Elemento>{item.avaliacao}</Elemento>
        <Elemento>{item.autor}</Elemento>
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
            style={{ cursor: "pointer", backgroundColor: "#FE0000" }}
          >
            <img alt={"lixo"} width={"25px"} src={lixo} />
          </div>
        </Elemento>
      </Linha>
    );
  });

  return (
    <>
      {visible === 1 ? (
        <div
          style={{
            width: "100%",
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
                  Você tem certeza que deseja excluir esse serviço? Atenção,
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
                    deleteService(value);
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
          id={valuee}
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#eee",
            margin: "1rem",
            textAlign: "left",
            marginTop: "2rem",
          }}
        >
          Serviços
        </caption>
        <TabelaHead>
          <Linha>
            <Elemento style={{ width: "25%" }}>Nome do Serviço</Elemento>
            <Elemento style={{ width: "25%" }}>Categoria</Elemento>
            <Elemento style={{ width: "25%" }}>Valor</Elemento>
            <Elemento style={{ width: "25%" }}>Avaliação</Elemento>
            <Elemento style={{ width: "25%" }}>Freelancer</Elemento>
            <Elemento style={{ width: "25%" }}>Ação</Elemento>
          </Linha>
        </TabelaHead>
        <TabelaCorpo>{rows}</TabelaCorpo>
      </Tabela>
    </>
  );
};

export default ServicesTable;
