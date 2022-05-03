import React from "react";
import {
  Background,
  Wrapper,
  Title,
  Paragraph,
  WrapperInput,
  WrapperWarning,
  P,
  Button
} from "./styled";
import Info from "../../../assets/icons/balao-info.png";
import ImgWrapper from "../ImgWrapper";

const ModalConfirm = ({ display, onClick, value, onChange }) => {

  return (
    display && (
      <Background>
        <Wrapper>
          <Title>Confirmação</Title>
          <Paragraph>
            <ImgWrapper
              url={Info}
              imgHeight={"45%"}
              margin={"55px 10px 0px 0px"}
            />
            O sistema enviou o código de segurança ao endereço de email
            registrado. Insira o código de segurança abaixo para concluir o
            processo de cadastro.
          </Paragraph>
          <WrapperInput>
            <label>Código de segurança</label>
            <input value={value} onChange={onChange}/>
            <p>Enviar código de segurança novamente</p>
          </WrapperInput>
          <WrapperWarning>
            <P color={"#E84545"}>Mantenha esta janela do navegador aberta.</P>
            <P style={{ marginTop: "4px" }}>
              Você deve inserir o código no mesmo navegador em que iniciou a
              solicitação de redefinição de senha.
            </P>
          </WrapperWarning>
          <Button onClick={onClick}>Enviar</Button>
        </Wrapper>
      </Background>
    )
  );
};

export default ModalConfirm;
