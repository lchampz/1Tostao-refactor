import React from "react";
import {
  Background,
  Wrapper,
  Button
} from "./styled";

const Modal = ({ display, cancel, confirm, children, size, bgColor, bgColorSecondary, oneBtn, labelBntConfirm, disabled=false }) => {

  return (
    display && (
      <Background>
        <Wrapper>
          {children}
          <span style={{display: 'flex', width: '100%', height: '100%' }}>
            { oneBtn ? null : <Button size={size} left bgColor={bgColor || '#FA6D6D'} onClick={cancel}>Cancelar</Button>}
            <Button disabled={disabled} oneBtn={oneBtn} size={size} onClick={confirm} bgColor={'#24D39A' && bgColorSecondary}>{labelBntConfirm || 'Confirmar'}</Button>
          </span>
        </Wrapper>
      </Background>
    )
  );
};

export default Modal;
