import React from "react";
import { Background, Wrapper, Button, Close, Title } from "./styled";

const ModalAvaliation = ({
  title,
  display,
  confirm,
  children,
  labelBnt,
  close,
  disabled,
}) => {
  return (
    display && (
      <Background>
        <Wrapper>
          <span
            onClick={close}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "95%",
            }}
          >
            <Close></Close>
          </span>
          <Title>{title}</Title>

          <span
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: '1rem',
              height: "100%",
            }}
          >
            {children}
          </span>
          <span
            style={{
              display: "flex",
              width: "95%",
              alignItems: "flex-end",
              height: "100%",
              justifyContent: "center",
              marginBottom: "2rem",
            }}
          >
            <Button onClick={disabled ? null : confirm} disabled={disabled}>{labelBnt || "Confirmar"}</Button>
          </span>
        </Wrapper>
      </Background>
    )
  );
};

export default ModalAvaliation;
