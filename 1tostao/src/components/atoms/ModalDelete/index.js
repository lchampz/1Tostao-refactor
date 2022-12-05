import React from "react";

import Modal from "../Modal";
import ImgWrapper from "../ImgWrapper";
import trash from "../../../assets/icons/icon-trash.png";
import { Title, Label } from "./styled";

const ModalDelete = ({ display, cancel, confirm }) => {
  return (
    <Modal
      size={"50%"}
      display={display}
      cancel={cancel}
      confirm={confirm}
      bgColor={"#434343"}
      bgColorSecondary={"#FF3232"}
    >
      <ImgWrapper url={trash} margin={"18px 5px 0px 5px"} />
      <Title>Deseja mesmo excluir esse serviço?</Title>
      <Label>Essa ação será irreversível!</Label>
    </Modal>
  );
};

export default ModalDelete;
