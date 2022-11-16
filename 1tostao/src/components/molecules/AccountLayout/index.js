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
} from "./styled";
import { useUserAuth } from "../../../request/hooks/Auth";
import ModalSave from "../../atoms/ModalSave";
import ModalAlter from "../../atoms/ModalAlter";
import ModalDelete from "../../atoms/ModalDelete";
import { updateUser } from "../../../services/updateUser";

const AccountLayout = () => {
  const { user, profile } = useUserAuth();
  const [uid, setUid] = useState();
  const [clicked, setClicked] = useState(false);
  const [hover, setHover] = useState({
    perfil: false,
    banner: false,
  });
  const [img, setImg] = useState({
    profile: null,
    banner: null,
  });
  const [data, setData] = useState({
    name: user?.username || profile?.nome,
    lastName: user?.lastName || profile?.sobrenome,
    username: user?.username || profile?.username,
    tell: user?.tell || profile?.tell,
    imgProfile: {
      file: user?.photoURL || profile?.imgPerfil,
      url: user?.photoURL || profile?.imgPerfil,
    },
    banner: {
      file: user?.banner || profile?.banner,
      url: user?.banner || profile?.banner,
    },
  });
  const [visible, setVisible] = useState({
    save: false,
    alter: false,
    delete: false,
  });

  useEffect(async () => {
    setUid(user.uid);
  }, [clicked]);

  useEffect(() => {
    if (img.profile)
      setData({
        ...data,
        imgProfile: {
          file: img.profile,
          url: URL.createObjectURL(img.profile),
        },
      });
    if (img.banner)
      setData({
        ...data,
        banner: { file: img.banner, url: URL.createObjectURL(img.banner) },
      });
  }, [img]);

  const inputsFile = () => {
    return (
      <>
        <input
          style={{ display: "none" }}
          type="file"
          id="selectProfile"
          onChange={(e) => {
            console.log(e.target.files[0]);
            setImg({ ...img, profile: e.target.files[0] });
          }}
        />
        <input
          style={{ display: "none" }}
          type="file"
          id="selectBanner"
          onChange={(e) => {
            console.log(e.target.files[0]);
            setImg({ ...img, banner: e.target.files[0] });
          }}
        />
      </>
    );
  };

  const update = () => {
    updateUser(
      uid,
      data.lastName,
      data.tell,
      data.username,
      data.name,
      data.banner.url,
      data.imgProfile.url
    );
  };

  return (
    <Wrapper>
      <Title>Minha conta</Title>

      <WrapperItems>
        <WrapperInputs>
          <Label>Alterar Nome</Label>
          <Input
            placeholder={"Alterar nome..."}
            value={data?.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />

          <Label>Alterar Sobrenome</Label>
          <Input
            placeholder={"Alterar sobrenome..."}
            value={data?.lastName}
            onChange={(e) => setData({ ...data, lastName: e.target.value })}
          />

          <Label>Alterar Telefone</Label>
          <Input
            placeholder={"Alterar telefone..."}
            value={data?.tell}
            onChange={(e) => setData({ ...data, tell: e.target.value })}
          />

          <Label>Alterar Username</Label>
          <Input
            placeholder={"Alterar username..."}
            value={data?.username}
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />
        </WrapperInputs>

        {inputsFile()}

        <WrapperInputs className={"secondWrapper"} marginTop={"2rem"}>
          <Label>Alterar Foto de Perfil</Label>

          <label htmlFor="selectProfile">
            <IconEmpty
              hover={hover}
              width="150px"
              height="150px"
              onMouseEnter={() => setHover({ ...hover, perfil: true })}
              onMouseLeave={() => setHover({ ...hover, perfil: false })}
            >
              <div>+</div>
              {user?.photoURL || profile?.imgPerfil ? (
                <img src={data?.imgProfile.url} />
              ) : null}
            </IconEmpty>
          </label>

          <Label>Alterar Banner</Label>

          <label htmlFor="selectBanner">
            <IconEmpty
              width="550px"
              height="150px"
              resWidth="350px"
              onMouseEnter={() => setHover({ ...hover, banner: true })}
              onMouseLeave={() => setHover({ ...hover, banner: false })}
            >
              <div>+</div>
              {user?.banner || profile?.banner ? (
                <img src={data?.banner.url} />
              ) : null}
            </IconEmpty>
          </label>
        </WrapperInputs>
        <WrapperBtns>
          {data?.username != profile?.username ||
          data?.name != profile?.nome ||
          data?.tell != profile?.tell ||
          data?.banner.url != profile?.banner.url ||
          data?.imgProfile.url != profile?.imgProfile.url ||
          data?.tell != profile?.tell ||
          data?.lastName != profile?.sobrenome ? (
            <Button
              onClick={() => {
                setVisible({ ...visible, save: true });
                setClicked(!clicked);
              }}
            >
              Salvar
            </Button>
          ) : (
            <Button disabled>Salvar</Button>
          )}
          <AlterBtn
            onClick={() => setVisible({ ...visible, alter: true })}
            color={"#E4D54B"}
          >
            Alterar minha senha
          </AlterBtn>
          <AlterBtn
            onClick={() => setVisible({ ...visible, delete: true })}
            color={"#E44B4B"}
          >
            Deletar minha conta
          </AlterBtn>
        </WrapperBtns>
      </WrapperItems>
      <ModalSave
        cancel={() => setVisible({ ...visible, save: false })}
        confirm={update}
        display={visible.save}
      />
      <ModalAlter
        cancel={() => setVisible({ ...visible, alter: false })}
        display={visible.alter}
      />
      <ModalDelete
        cancel={() => setVisible({ ...visible, delete: false })}
        display={visible.delete}
      />
    </Wrapper>
  );
};

export default AccountLayout;
