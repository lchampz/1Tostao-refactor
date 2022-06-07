import React from "react";
import {
  Background,
  Wrapper,
  Title,
  Paragraph,
  Button
} from "./styled";
import Info from "../../../assets/icons/balao-info.png";
import ImgWrapper from "../ImgWrapper";

const ModalConfirm = ({ display, onClick, value, onChange }) => {

  return (
    display && (
      <Background>
        <Wrapper>
          <Title>Confirme seu email!</Title>
          <Paragraph>
            <ImgWrapper
              url={Info}
              imgHeight={"43%"}
              margin={"58px 5px 0px 5px"}
            />
            O sistema enviou um link no seu email para finalizar seu cadastro!
          </Paragraph>
          <Button onClick={onClick}>Ok!</Button>
        </Wrapper>
      </Background>
    )
  );
};

export default ModalConfirm;
