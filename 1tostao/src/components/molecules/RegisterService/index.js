import React, { useState, useEffect } from "react";
import {
  Wrapper,
  WrapperTitle,
  WrapperForm,
  Label,
  Input,
  WrapperWarning,
  BtnRegister,
  Slider,
  Delivery,
} from "./styled";
import MyDropzone from "../../atoms/Dropzone";
import { useUserAuth } from "../../../request/hooks/Auth";
import { createService } from "../../../services/InsertService";
import { useDrop } from "../../../request/hooks/Dropzone";

const RegisterService = () => {
  const { profile } = useUserAuth();
  const { dropzone } = useDrop();

  const [data, setData] = useState({
    nome: null,
    autor: profile?.username,
    desc: null,
    entrega: 1,
    categoria: null,
    img: null,
    preco: null,
    uid: profile?.uid,
  });

  const newService = (
    autor,
    categoria,
    desc,
    entrega,
    img,
    nome,
    preco,
    uid
  ) => {
    if (data.nome && data.preco && data.desc && data.categoria) {
      createService(autor, categoria, desc, entrega, img, nome, preco, uid);
    }
  };

  const handleSubmit = () => {
    console.log({
        autor: data.autor,
        cat: data.categoria,
        desc: data.desc,
        entrega: data.entrega,
        drop: dropzone,
        nome: data.nome,
        preco: data.preco,
        uid: data.uid
    }
        
      )
  }

  return (
    <Wrapper>
      <WrapperTitle>Registre um novo serviço</WrapperTitle>
      <WrapperForm>
        <Label>Nome do serviço:</Label>
        <Input
          placeholder="Nome do serviço"
          onChange={(e) => setData({ ...data, nome: e.target.value })}
        />
        <Label>Imagem do serviço:</Label>
        <MyDropzone/>
        <Label>Descrição do serviço:</Label>
        <Input
          placeholder="Faça uma breve descrição sobre o serviço..."
          onChange={(e) => setData({ ...data, desc: e.target.value })}
        />
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div
            style={{ display: "flex", flexDirection: "column", width: "50%" }}
          >
            <Label>Categoria:</Label>
            <Input
              placeholder="Selecione uma categoria"
              onChange={(e) => setData({ ...data, categoria: e.target.value })}
            />
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", width: "50%" }}
          >
            <Label>Valor:</Label>
            <Input
              placeholder="Valor do serviço (R$)"
              onChange={(e) => setData({ ...data, preco: e.target.value })}
            />
          </div>
        </div>
        <Label>Entrega do serviço:</Label>
        <Slider
          type="range"
          min="1"
          max="10"
          onChange={(e) => setData({ ...data, entrega: e.target.value })}
        />
        <Delivery>
          {data.entrega}
          <p> Dia{data.entrega > 1 ? "s" : ""}</p>
        </Delivery>
        <WrapperWarning>
          Após registrar o serviço é impossível realizar as alterações.{" "}
        </WrapperWarning>
        {data.nome && data.preco && data.desc && data.categoria ? (
          <BtnRegister
            onClick={handleSubmit}
          >
            Registrar serviço
          </BtnRegister>
        ) : (
          <BtnRegister disabled>Registrar serviço</BtnRegister>
        )}
      </WrapperForm>
    </Wrapper>
  );
};

export default RegisterService;
