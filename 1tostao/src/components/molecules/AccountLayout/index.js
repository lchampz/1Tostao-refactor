import React, { useState, useEffect } from "react";
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
  TextArea
} from "./styled";
import { useUserAuth } from "../../../request/hooks/Auth";
import ImgWrapper from "../../atoms/ImgWrapper";
import ModalSave from '../../atoms/ModalSave'
import ModalAlter from '../../atoms/ModalAlter'
import ModalDelete from '../../atoms/ModalDelete'
import { updateUser } from '../../../services/updateUser'

const AccountLayout = () => {
  const { user, profile } = useUserAuth();
  const [ uid, setUid] = useState()
  const [ clicked, setClicked ] = useState(false)

  useEffect(async () => {
    setUid(user.uid)
  }, [clicked])

  useEffect(() => {
    console.log(profile)
  }, [])

  const [data, setData] = useState({
    name: user?.username || profile?.nome,
    lastName: user?.lastName || profile?.sobrenome,
    birthday: user?.niver?.toLocaleString(),
    desc: user?.desc || profile?.desc,
    email: user?.email || profile?.email,
    username: user?.username || profile?.username, 
    tell: user?.tell || profile?.tell,
  });
  const [ visible, setVisible ] = useState({
    save: false,
    alter: false,
    delete: false,
  })

  const update = () => {
    
    updateUser(uid, data.desc, data.lastName, data.email, data.tell, data.username, data.name, 'teste', 'teste')
  }

  return (
    <Wrapper>
      <Title>Minha conta</Title>

      <WrapperItems>
        <WrapperInputs>
          <Label>Alterar Nome</Label>
          <Input placeholder={"Alterar nome..."} value={data?.name} onChange={(e) => setData({...data, name: e.target.value})}/>

          <Label>Alterar Sobrenome</Label>
          <Input placeholder={"Alterar sobrenome..."} value={data?.lastName} onChange={(e) => setData({...data, lastName: e.target.value})}/>

          <Label>Alterar Email</Label>
          <Input placeholder={"Alterar email..."} value={data?.email} onChange={(e) => setData({...data, email: e.target.value})}/>

          <Label>Alterar Telefone</Label>
          <Input placeholder={"Alterar telefone..."} value={data?.tell} onChange={(e) => setData({...data, tell: e.target.value})}/>

          <Label>Alterar Username</Label>
          <Input placeholder={"Alterar username..."} value={data?.username} onChange={(e) => setData({...data, username: e.target.value})}/>
          
          <Label>Alterar Descrição</Label>
          <TextArea placeholder={"Alterar descrição..."} value={data?.desc} onChange={(e) => setData({...data, desc: e.target.value})}/>
          
        </WrapperInputs>

        <WrapperInputs className={"secondWrapper"} marginTop={"2rem"}>
          <Label>Alterar Foto de Perfil</Label>
          {user?.photoURL ? (
            <ImgWrapper
              width="2rem"
              height="2rem"
              url={user && user?.photoURL ? user && user?.photoURL : null}
            />
          ) : (
            <IconEmpty width="150px" height="150px" />
          )}

          <Label>Alterar Banner</Label>
          {user?.photoURL ? (
            <ImgWrapper
              width="2rem"
              height="2rem"
              url={user && user?.photoURL ? user && user?.photoURL : null}
            />
          ) : (
            <IconEmpty width="550px" height="150px" resWidth="350px" />
          )}
        </WrapperInputs>
        <WrapperBtns>
          {(data.birthday != profile.birthday) ||
          (data.name != profile.nome) ||
          (data.tell != profile.tell) ||
          (data.lastName != profile.sobrenome) ? (
            <Button onClick={() => {
              setVisible({...visible, save: true})
              setClicked(!clicked)
            }}>Salvar</Button>
          ) : (
            <Button disabled>Salvar</Button>
          )}
          <AlterBtn onClick={() => setVisible({...visible, alter: true})} color={"#E4D54B"}>Alterar minha senha</AlterBtn>
          <AlterBtn onClick={() => setVisible({...visible, delete: true})} color={"#E44B4B"}>Deletar minha conta</AlterBtn>
        </WrapperBtns>
      </WrapperItems>
      <ModalSave cancel={() => setVisible({...visible, save: false})} confirm={update} display={visible.save}/>
      <ModalAlter cancel={() => setVisible({...visible, alter: false})} display={visible.alter}/>
      <ModalDelete cancel={() => setVisible({...visible, delete: false})} display={visible.delete}/>
    </Wrapper>
  );
};

export default AccountLayout;
