import React from 'react'
import { Wrapper, WrapperTitle, WrapperForm, Label, Input, WrapperWarning, BtnRegister } from "./styled";
import MyDropzone from '../../atoms/Dropzone'

const RegisterService = () => {
  return (
    <Wrapper>
      <WrapperTitle>Registre um novo serviço</WrapperTitle>
      <WrapperForm>
        <Label>Nome do serviço:</Label>
        <Input placeholder="Nome do serviço" />
        <Label>Imagem do serviço:</Label>
        <MyDropzone />
        <Label>Descrição do serviço:</Label>
        <Input placeholder="Faça uma breve descrição sobre o serviço..."/>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div
            style={{ display: "flex", flexDirection: "column", width: "50%" }}>
            <Label>Categoria:</Label>
            <Input placeholder="Selecione uma categoria"/>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", width: "50%" }}
          >
            <Label>Valor:</Label>
            <Input placeholder="Valor do serviço (R$)"/>
          </div>
        </div>
        <WrapperWarning>Após registrar o serviço é impossível realizar as alterações. </WrapperWarning>
        <BtnRegister>Registrar serviço</BtnRegister>
      </WrapperForm>
    </Wrapper>
  );
};

export default RegisterService;
