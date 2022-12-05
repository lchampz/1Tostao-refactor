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
import {
  updateUser,
  updateUserProfileBanner,
  updateUserProfileImg,
  deleteUserAcc,
} from "../../../services/updateUser";
import { useNavigate } from "react-router-dom";
import { useLoading } from "../../../request/hooks/Loading";
import { storage } from "../../../services/Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useTheme } from "../../../request/hooks/Theme";

const AccountLayout = () => {
  const { theme } = useTheme();
  const { user, profile } = useUserAuth();
  const navigate = useNavigate();
  const { setLoading } = useLoading();
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
      changed: false,
    },
    banner: {
      file: user?.banner || profile?.banner,
      url: user?.banner || profile?.banner,
      changed: false,
    },
  });
  const [visible, setVisible] = useState({
    save: false,
    alter: false,
    delete: false,
  });
  const [credentials, setCredentials] = useState({
    email: "",
    pass: "",
  });

  const condition =
    data?.username != profile?.username ||
    data?.name != profile?.nome ||
    data?.tell != profile?.tell ||
    data.imgProfile.changed ||
    data.banner.changed ||
    data?.tell != profile?.tell ||
    data?.lastName != profile?.sobrenome;

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
          changed: true,
        },
      });
    if (img.banner)
      setData({
        ...data,
        banner: {
          file: img.banner,
          url: URL.createObjectURL(img.banner),
          changed: true,
        },
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

  const delAcc = () => {
    deleteUserAcc(uid, credentials.pass);
    navigate("/");
    setVisible({ ...visible, delete: false });
  };

  const handleUpload = () => {
    setLoading(true);
    const storageProfileRef = ref(
      storage,
      `images/perfil/${data.imgProfile.file}`
    );
    const storageBannerRef = ref(storage, `images/banner/${data.banner.file}`);

    const uploadTaskProfile = uploadBytesResumable(
      storageProfileRef,
      data.imgProfile.file
    );
    const uploadTaskBanner = uploadBytesResumable(
      storageBannerRef,
      data.banner.file
    );

    uploadTaskProfile.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
        setLoading(false);
      },
      () => {
        getDownloadURL(uploadTaskProfile.snapshot.ref).then((url) => {
          update("profile", url);
        });
      }
    );

    uploadTaskBanner.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
        setLoading(false);
        setVisible({ ...visible, save: false });
      },
      () => {
        getDownloadURL(uploadTaskBanner.snapshot.ref).then((url) => {
          setLoading(false);
          update("banner", url);
          setVisible({ ...visible, save: false });
        });
      }
    );

    navigate("/profile");
  };

  const update = (switcher, img) => {
    updateUser(uid, data.lastName, data.tell, data.username, data.name);

    switch (switcher) {
      case "profile":
        if (data.imgProfile.changed) {
          updateUserProfileImg(uid, img);
          setData({
            ...data,
            imgProfile: {
              changed: false,
            },
          });
        }
        break;

      case "banner":
        if (data.banner.changed) {
          updateUserProfileBanner(uid, img);
          setData({
            ...data,
            banner: {
              changed: false,
            },
          });
        }
        break;
    }
  };

  return (
    <Wrapper>
      <Title color={theme.colors.fontColor}>Minha conta</Title>

      <WrapperItems>
        <WrapperInputs>
          <Label>Alterar Nome</Label>
          <Input
            bgColor={theme.colors.input}
            color={theme.colors.fontColor}
            placeholder={"Alterar nome..."}
            value={data?.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />

          <Label>Alterar Sobrenome</Label>
          <Input
            bgColor={theme.colors.input}
            color={theme.colors.fontColor}
            placeholder={"Alterar sobrenome..."}
            value={data?.lastName}
            onChange={(e) => setData({ ...data, lastName: e.target.value })}
          />

          <Label>Alterar Telefone</Label>
          <Input
            bgColor={theme.colors.input}
            color={theme.colors.fontColor}
            placeholder={"Alterar telefone..."}
            value={data?.tell}
            onChange={(e) => setData({ ...data, tell: e.target.value })}
          />

          <Label>Alterar Username</Label>
          <Input
            bgColor={theme.colors.input}
            color={theme.colors.fontColor}
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
              bgColor={theme.colors.emptyIcon}
              hover={hover}
              width="150px"
              height="150px"
              onMouseEnter={() => setHover({ ...hover, perfil: true })}
              onMouseLeave={() => setHover({ ...hover, perfil: false })}
            >
              <div>+</div>
              {user?.photoURL || profile?.imgPerfil ? (
                <img src={data?.imgProfile?.url} />
              ) : null}
            </IconEmpty>
          </label>

          <Label>Alterar Banner</Label>

          <label for="selectBanner">
            <IconEmpty
              bgColor={theme.colors.emptyIcon}
              width="550px"
              height="150px"
              resWidth="350px"
              onMouseEnter={() => setHover({ ...hover, banner: true })}
              onMouseLeave={() => setHover({ ...hover, banner: false })}
            >
              <div>+</div>
              {user?.banner || profile?.banner ? (
                <img src={data?.banner?.url} />
              ) : null}
            </IconEmpty>
          </label>
        </WrapperInputs>
        <WrapperBtns>
          <Button
            disabled={!condition}
            onClick={() => {
              !condition || setVisible({ ...visible, save: true });
              setClicked(!clicked);
            }}
          >
            Salvar
          </Button>

          <AlterBtn
            onClick={() => setVisible({ ...visible, delete: true })}
            color={"#E44B4B"}
          >
            Deletar minha conta
          </AlterBtn>
        </WrapperBtns>
      </WrapperItems>
      <ModalSave
        cancel={() => {
          setVisible({ ...visible, save: false });
          setLoading(false);
        }}
        confirm={handleUpload}
        display={visible.save}
      />
      <ModalAlter
        onChangePass={(e) =>
          setCredentials({ ...credentials, pass: e.target.value })
        }
        onChangeEmail={(e) =>
          setCredentials({ ...credentials, email: e.target.value })
        }
        pass={credentials.pass}
        email={credentials.email}
        cancel={() => {
          setVisible({ ...visible, delete: false });
          setLoading(false);
        }}
        disabled={credentials.pass && credentials.email ? false : true}
        confirm={credentials.pass && credentials.email ? delAcc : null}
        labelBntConfirm={"Deletar"}
        display={visible.delete}
      />
    </Wrapper>
  );
};

export default AccountLayout;
