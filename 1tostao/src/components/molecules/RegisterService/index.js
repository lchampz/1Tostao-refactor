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
  Container,
} from "./styled";
import MyDropzone from "../../atoms/Dropzone";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../../request/hooks/Auth";
import { createService } from "../../../services/InsertService";
import { useLoading } from "../../../request/hooks/Loading";
import { useDrop } from "../../../request/hooks/Dropzone";
import { storage } from "../../../services/Firebase";
import InputSelect from "../../atoms/Select";
import Modal from "../../atoms/Modal";
import cat from "../../../request/mock/categorias.json";
import IntlCurrencyInput from "react-intl-currency-input";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import check from '../../../assets/img/checkIcon.png'

const RegisterService = () => {
  const navigate = useNavigate();
  const { profile } = useUserAuth();
  const { dropzone } = useDrop();
  const [display, setDisplay] = useState(false);
  const { setLoading } = useLoading();
  const [click, setClick] = useState(false);
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
  const currencyConfig = {
    locale: "pt-BR",
    formats: {
      number: {
        BRL: {
          style: "currency",
          currency: "BRL",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        },
      },
    },
  };
  const customStyles = {
    singleValue: (base) => ({
      ...base,
      color: "white",
    }),

    control: (provided) => ({
      ...provided,
      width: "15rem",
      height: "3.3rem",
      border: "3px solid #24D39A",
      backgroundColor: "#292929",
      color: "#24D39A !important",
      boxShadow: "none",
    }),
    menuList: (base) => ({
      ...base,

      "::-webkit-scrollbar": {
        width: "4px",
        height: "0px",
      },
      "::-webkit-scrollbar-track": {
        background: "#f1f1f1",
      },
      "::-webkit-scrollbar-thumb": {
        background: "#24D39A",
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "#555",
      },
    }),
    multiValueLabel: (styles) => ({
      ...styles,
      color: "white",
    }),
    multiValue: (styles) => {
      return {
        ...styles,
        color: "white",
      };
    },
  };

  useEffect(() => {
    if (data.preco) {
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
      setDisplay(true);
    }
  }, [click]);

  const handleChange = (event, value) => {
    event.preventDefault();
    setData({ ...data, preco: value });
  };

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
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setData({ ...data, img: url });
          console.log(url);
          setLoading(false);
          setClick(true);
        });
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
              autor: profile?.username,
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
        <Container>
          <div className="box">
            <Label>Categoria:</Label>

            <InputSelect
              style={customStyles}
              placeholder="Selecione uma categoria"
              options={cat}
              onChange={(e) => setData({ ...data, categoria: e.value })}
            />
          </div>

          <div className="box">
            <Label>Valor:</Label>

            <IntlCurrencyInput
              component={Input}
              currency="BRL"
              max="1000"
              placeholder="Valor do serviço (R$)"
              config={currencyConfig}
              onChange={handleChange}
              value={data.preco}
            />
          </div>
        </Container>
        <Label>Entrega do serviço:</Label>
        <Slider
          type="range"
          min="1"
          max="30"
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

      <Modal
        labelBntConfirm={"Checar!"}
        display={display}
        confirm={() => {
          navigate(`/servicos`);
          setLoading(false);
        }}
        oneBtn
      >
        <img src={check} style={{ width: '80px', height: '80px',  marginTop: '30px' }} />
        <p style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '50px' }}>Seu serviço foi criado!</p>
      </Modal>
    </Wrapper>
  );
};

export default RegisterService;
