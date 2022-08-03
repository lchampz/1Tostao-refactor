import React, { useState } from "react";
import {
  Wrapper,
  Title,
  WrapperItems,
  WrapperInputs,
  WrapperBtns,
  Input,
  Label,
  IconEmpty,
  Button,
  AlterBtn,
} from "./styled";
import { useUserAuth } from "../../../request/hooks/Auth";
import ImgWrapper from "../../atoms/ImgWrapper";
import ModalSave from '../../atoms/ModalSave'
import ModalAlter from '../../atoms/ModalAlter'

const AccountLayout = () => {
  const { user, profile } = useUserAuth();
  const [data, setData] = useState({
    name: "",
    lastName: "",
    birthday: "",
    tell: "",
  });
  const [ visible, setVisible ] = useState({
    save: false,
    alter: false,
    delete: false,
  })

  return (
    <Wrapper>
      <Title>Minha conta</Title>

      <WrapperItems>
        <WrapperInputs>
          <Label>Alterar Nome</Label>
          <Input value={data.name} onChange={(e) => setData({...data, name: e.target.value})}/>

          <Label>Alterar Sobrenome</Label>
          <Input value={data.lastName} onChange={(e) => setData({...data, lastName: e.target.value})}/>

          <Label>Alterar Data de Nascimento</Label>
          <Input value={data.birthday} onChange={(e) => setData({...data, birthday: e.target.value})}/>

          <Label>Alterar Telefone</Label>
          <Input value={data.tell} onChange={(e) => setData({...data, tell: e.target.value})}/>
        </WrapperInputs>

        <WrapperInputs className={"secondWrapper"} marginTop={"2rem"}>
          <Label>Alterar Foto de Perfil</Label>
          {user.photoURL ? (
            <ImgWrapper
              width="2rem"
              height="2rem"
              url={user && user.photoURL ? user && user.photoURL : null}
            />
          ) : (
            <IconEmpty width="150px" height="150px" />
          )}

          <Label>Alterar Banner</Label>
          {user.photoURL ? (
            <ImgWrapper
              width="2rem"
              height="2rem"
              url={user && user.photoURL ? user && user.photoURL : null}
            />
          ) : (
            <IconEmpty width="550px" height="150px" resWidth="350px" />
          )}
        </WrapperInputs>
        <WrapperBtns>
          {data.birthday.length ||
          data.name.length ||
          data.tell.length ||
          data.lastName.length ? (
            <Button onClick={() => setVisible({...visible, save: true})}>Salvar</Button>
          ) : (
            <Button disabled>Salvar</Button>
          )}
          <AlterBtn onClick={() => setVisible({...visible, alter: true})} color={"#E4D54B"}>Alterar minha senha</AlterBtn>
          <AlterBtn color={"#E44B4B"}>Deletar minha conta</AlterBtn>
        </WrapperBtns>
      </WrapperItems>
      <ModalSave cancel={() => setVisible({...visible, save: false})} confirm={''} display={visible.save}/>
      <ModalAlter cancel={() => setVisible({...visible, alter: false})} display={visible.alter}/>
    </Wrapper>
  );
};

export default AccountLayout;
