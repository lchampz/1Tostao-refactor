import React, { useState, useEffect } from "react";
import {
  Wrapper,
  WrapperTitle,
  WrapperForm,
  Label,
  Input,
  WrapperWarning,
  BtnRegister,
  Slider,
  Delivery,
} from "./styled";
import MyDropzone from "../../atoms/Dropzone";
import { useUserAuth } from "../../../request/hooks/Auth";
import { createService } from "../../../services/InsertService";
import { useLoading } from "../../../request/hooks/Loading";
import { useDrop } from "../../../request/hooks/Dropzone";
import { storage } from "../../../services/Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const RegisterService = () => {
  const { profile } = useUserAuth();
  const { dropzone } = useDrop();
  const { setLoading } = useLoading();
  const [ click, setClick ] = useState(false)
  
  const [data, setData] = useState({
    nome: null,
    autor: profile?.username,
    desc: null,
    entrega: 1,
    categoria: null,
    img: "",
    preco: null,
    uid: profile?.uid,
  });

  useEffect(() => {
    if(data.preco){
      createService(
        data.autor,
        data.categoria,
        data.desc,
        data.entrega,
        data.img,
        data.nome,
        data.preco,
        data.uid
      );
    }
  }, [click]);

  const handleUpload = () => {
    if (!dropzone) return;

    setLoading(true);
    const storageRef = ref(storage, `images/${dropzone.name}`);
    const uploadTask = uploadBytesResumable(storageRef, dropzone);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
        setLoading(false);
        return false;
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setData({ ...data, img: url });
          console.log(url);
          setLoading(false);
          setClick(true)
        });
        return true;
      }
    );
  };

  const newService = () => {
    handleUpload();
  };

  return (
    <Wrapper>
      <WrapperTitle>Registre um novo serviço</WrapperTitle>
      <WrapperForm>
        <Label>Nome do serviço:</Label>
        <Input
          placeholder="Nome do serviço"
          onChange={(e) =>
            setData({
              ...data,
              nome: e.target.value,
              uid: profile?.uid,
              autor: "teste",
            })
          }
        />
        <Label>Imagem do serviço:</Label>
        <MyDropzone />
        <Label>Descrição do serviço:</Label>
        <Input
          placeholder="Faça uma breve descrição sobre o serviço..."
          onChange={(e) => setData({ ...data, desc: e.target.value })}
        />
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div
            style={{ display: "flex", flexDirection: "column", width: "50%" }}
          >
            <Label>Categoria:</Label>
            <Input
              placeholder="Selecione uma categoria"
              onChange={(e) => setData({ ...data, categoria: e.target.value })}
            />
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", width: "50%" }}
          >
            <Label>Valor:</Label>
            <Input
              type={'number'}
              placeholder="Valor do serviço (R$)"
              onChange={(e) => setData({ ...data, preco: e.target.value })}
            />
          </div>
        </div>
        <Label>Entrega do serviço:</Label>
        <Slider
          type="range"
          min="1"
          max="10"
          onChange={(e) => setData({ ...data, entrega: e.target.value })}
        />
        <Delivery>
          {data.entrega}
          <p> Dia{data.entrega > 1 ? "s" : ""}</p>
        </Delivery>
        <WrapperWarning>
          Após registrar o serviço é impossível realizar as alterações.{" "}
        </WrapperWarning>
        {data.nome && data.preco && data.desc && data.categoria ? (
          <BtnRegister onClick={() => newService()}>
            Registrar serviço
          </BtnRegister>
        ) : (
          <BtnRegister disabled>Registrar serviço</BtnRegister>
        )}
      </WrapperForm>
    </Wrapper>
  );
};

export default RegisterService;
