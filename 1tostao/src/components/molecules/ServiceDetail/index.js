import { useEffect, useState } from "react";
import {
  Wrapper,
  Header,
  Line,
  Body,
  Box,
  Footer,
  OcultContent,
  Title,
  RelationatedServices,
  WrapperComments,
  Input,
  WrapperForm,
  InputEdit,
  Slider,
  Delivery,
  TextAreaEdit,
  TitleComments,
  InputEditThemed,
} from "./styled";
import {
  getDataFromService,
  getServiceWithCategory,
} from "../../../services/getServiceData";
import docIcon from "../../../assets/img/docGreenIcon.svg";
import { useTheme } from "../../../request/hooks/Theme";
import settings from "../../../assets/icons/settings-icon.png";
import starIcon from "../../../assets/img/starGreenIcon.svg";
import blackStarIcon from "../../../assets/icons/blackStar.png";
import IntlCurrencyInput from "react-intl-currency-input";
import Services from "../../atoms/ServiceCard";
import { useLoading } from "../../../request/hooks/Loading";
import { Loop } from "../../../request/utils/loop";
import ModalAvaliation from "../../atoms/ModalAvaliation";
import profilePic from "./../../../assets/img/profile.png";
import { useUserAuth } from "../../../request/hooks/Auth";
import cat from "../../../request/mock/categorias.json";
import InputSelect from "../../atoms/Select";
import { insertComment, getComments } from "../../../services/commentRequest";
import { updateService, deleteService } from "../../../services/updateService";
import ModalDelete from "../../atoms/ModalDelete";
import { useNavigate } from "react-router-dom";

const ServiceDetail = () => {
  const apiUrl = "https://payment-1tostao-api.vercel.app";

  const { theme } = useTheme();
  const navigate = useNavigate();
  const { user, profile } = useUserAuth();
  const today = new Date();
  const repeatStar = Loop(5);
  const repeatLoading = Loop(3);
  const [data, setData] = useState();
  const { loading, setLoading } = useLoading();
  const [visible, setVisible] = useState({
    desc: false,
    aval: false,
  });
  const [edit, setEdit] = useState(false);
  const [display, setDisplay] = useState({
    desc: false,
    aval: false,
  });
  const [service, setService] = useState([]);
  const [render, setRender] = useState(false);
  const [cardData] = useState([
    {
      title: "DESCRIÇÃO DO SERVIÇO",
      icon: docIcon,
      content: "desc",
      visible: visible.desc,
      marginBottom: "2px",
    },
    {
      title: "AVALIAÇÕES DOS USUÁRIOS",
      icon: starIcon,
      content: "avaliacao",
      visible: visible.aval,
      marginBottom: "5px",
    },
  ]);
  const [popupVisible, setPopupVisible] = useState({
    aval: false,
    del: false,
  });
  const [aval, setAval] = useState({
    star: null,
    desc: null,
  });
  const [comments, setComments] = useState();
  const [newValue, setNewValue] = useState();
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
      color: theme.colors.fontColor,
    }),

    control: (provided) => ({
      ...provided,
      minWidth: "15rem",
      borderRadius: "0px",
      border: "2px solid #24D39A",
      backgroundColor: "transparent",
      color: "#24D39A !important",
      boxShadow: "none",
    }),
    menuList: (base) => ({
      ...base,
      color: "black",
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
        background: "transparent",
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

  const displayTest = (item) =>
    item.content === "desc" ? display.desc : display.aval;
  const visibilityTest = (item) =>
    item.content === "desc" ? visible.desc : visible.aval;

  const style = (item) =>
    visibilityTest(item)
      ? { rotate: "270deg", color: "#24D39A", fontSize: "40px" }
      : { rotate: "90deg", color: "#24D39A", fontSize: "40px" };

  const renderLoading = () =>
    repeatLoading.map((i) => {
      return <Services loading={true} key={i} />;
    });

  const renderAval = (item) => {
    return (item?.nota1 ||
      item?.nota2 ||
      item?.nota3 ||
      item?.nota4 ||
      item?.nota5) > 0
      ? (
          (item?.nota1 * 1 +
            item?.nota2 * 2 +
            item?.nota3 * 3 +
            item?.nota4 * 4 +
            item?.nota5 * 5) /
          (item?.nota1 + item?.nota2 + item?.nota3 + item?.nota4 + item?.nota5)
        ).toFixed(1)
      : "0 Avaliações";
  };

  function getCurrentURL() {
    return window.location.href;
  }
  const url = getCurrentURL();
  const serviceId = url.substr(url.lastIndexOf("/") + 1);

  useEffect(() => {
    reqServicesData(getCategory);
  }, []);

  useEffect(async () => {
    const responseData = await getServiceWithCategory(data?.categoria, 3);
    const rateResponse = await getComments(serviceId);
    setService(responseData);
    setComments(rateResponse);
  }, [render]);

  const reqServicesData = async (callback) => {
    setLoading(true);
    const response = await getDataFromService(serviceId);

    setData({
      nome: response[0].nome,
      categoria: response[0].categoria,
      img: response[0].img,
      desc: response[0].desc,
      entrega: response[0].entrega,
      preco: response[0].preco,
      autor: response[0].autor,
      uid: response[0].uid,
      nota1: response[0].nota1,
      nota2: response[0].nota2,
      nota3: response[0].nota3,
      nota4: response[0].nota4,
      nota5: response[0].nota5,
    });

    setNewValue({
      nome: response[0].nome,
      categoria: response[0].categoria,
      img: response[0].img,
      desc: response[0].desc,
      entrega: response[0].entrega,
      preco: response[0].preco,
      autor: response[0].autor,
      uid: response[0].uid,
    });

    setTimeout(() => {
      callback();
      setLoading(false);
    }, 1500);
  };

  const getCategory = async () => {
    setRender(true);
  };

  const handleShow = (i) => {
    switch (i) {
      case 0:
        setVisible({ ...visible, desc: !visible.desc });

        setDisplay({ ...display, desc: !display.desc });

        break;
      case 1:
        setVisible({ ...visible, aval: !visible.aval });

        setDisplay({ ...display, aval: !display.aval });

        break;
    }
  };

  const InsertRate = () => {
    insertComment(
      profile?.username,
      serviceId,
      aval.desc,
      aval.star,
      profile?.uid,
      today.toLocaleDateString()
    ).then(() => {
      window.location.reload(false);
    });
  };

  const renderComments = (grade) => {
    return (
      <WrapperComments
        bgColor={theme.colors.boxService}
        scroll={comments?.length > 3}
        color={theme.colors.fontColor}
      >
        <div className={"headerGrades"}>
          <span
            className={
              renderAval(grade) === "0 Avaliações" ? "grade2" : "grade"
            }
          >
            {renderAval(grade)}
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "10px",
            }}
          >
            <div style={{ display: "flex", marginBottom: "5px" }}>
              {repeatStar.map((i) => {
                return (
                  <img
                    key={i}
                    src={starIcon}
                    style={{ width: "15px", height: "15px" }}
                  />
                );
              })}
            </div>
            <p style={{ color: theme.colors.fontColor, fontSize: "12px" }}>
              (
              {`${comments?.length} comentário${
                comments?.length > 1 ? "s" : ""
              }`}
              )
            </p>
          </div>
        </div>
        <div className={"comments"}>
          {comments?.map((item, i) => {
            let starAval = Loop(comments[i]?.info.nota);
            return (
              <>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    borderTop: "1px solid #b3b3b3",
                    paddingTop: "5px",
                    marginTop: "5px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <span className={"desc"}>{comments[i]?.info.desc}</span>
                    <div
                      className={"autor"}
                      style={{ fontSize: "10px", marginLeft: "5px" }}
                    >
                      ({comments[i]?.info.data})
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginRight: "5px",
                    }}
                  >
                    {starAval.map((i) => {
                      return (
                        <img
                          key={i}
                          src={starIcon}
                          style={{ width: "15px", height: "15px" }}
                        />
                      );
                    })}
                  </div>
                </div>
                <span className={"autor"}>{comments[i]?.info.autor}</span>
              </>
            );
          })}
        </div>
      </WrapperComments>
    );
  };

  const handleChange = (event, value) => {
    event.preventDefault();
    setNewValue({ ...newValue, preco: value });
  };

  const delService = () => {
    deleteService(serviceId);

    setPopupVisible({ ...popupVisible, del: false });

    navigate("/servicos");
  };

  const saveInfo = () => {
    updateService(
      serviceId,
      newValue.nome,
      newValue.desc,
      newValue.preco,
      newValue.entrega,
      newValue.categoria
    );
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const payment = () => {
    fetch(`${apiUrl}/v1/pagarProduto`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: url,
        items: [
          {
            id: 1,
            quantity: 1,
            priceInCents: parseInt(data?.preco * 100),
            name: data?.nome,
          },
        ],
      }),
    })
      .then(async (res) => {
        if (res.ok) return res.json();
        const json = await res.json();
        return await Promise.reject(json);
      })
      .then(({ url }) => {
        window.location = url;
      })
      .catch((err) => {
        console.error(err.error);
      });
  };

  return (
    <Wrapper color={theme.colors.fontColor}>
      <Header color={theme.colors.fontColor}>
        <span>
          <img src={profilePic} className={"icon"} />@{data?.autor}
        </span>
      </Header>
      <Line />
      <Body color={theme.colors.fontColor}>
        <Box bgColor={theme.colors.boxService} color={theme.colors.fontColor}>
          <p className={"title"}>{data?.nome}</p>
          <img src={data?.img} className={"imgContainer"} />
        </Box>
        <Box bgColor={theme.colors.boxService} color={theme.colors.fontColor}>
          <div className={"wrapperInfo"}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p className={"bold"} style={{ marginLeft: "30px" }}>
                ÚLTIMOS DETALHES
              </p>
              {data?.uid === profile?.uid || data?.uid === user?.uid ? (
                <img
                  onClick={() => setEdit(!edit)}
                  src={settings}
                  style={{
                    width: "20px",
                    height: "20px",
                    marginTop: "27px",
                    marginRight: "30px",
                    cursor: "pointer",
                  }}
                />
              ) : null}
            </div>
            <span className={"content"}>
              <p>
                Prazo: {data?.entrega} dia{data?.entrega > 1 ? "s" : null}
              </p>
              <p>
                <b>R$</b> {data?.preco.toLocaleString("PT")}
                {data?.preco.toLocaleString("PT").includes(",") ? null : ",00"}
              </p>
            </span>
            <div className={"btn"} onClick={edit ? saveInfo : payment}>
              {edit ? "Salvar" : "Contratar"}
            </div>
            {edit ? (
              <div
                className="delete"
                onClick={() => setPopupVisible({ ...popupVisible, del: true })}
              >
                Excluir serviço
              </div>
            ) : null}
            {profile && data.uid != profile.uid && data.uid != user.uid ? (
              <span
                className={"avalie"}
                onClick={() => setPopupVisible({ ...popupVisible, aval: true })}
              >
                Avalie o serviço!
              </span>
            ) : null}
          </div>
        </Box>
      </Body>
      {edit ? (
        <Footer
          bgColor={theme.colors.boxService}
          color={theme.colors.fontColor}
        >
          <WrapperForm
            bgColor={theme.colors.boxService}
            color={theme.colors.fontColor}
          >
            <label>EDIÇÃO</label>
            <p>Nome do Serviço:</p>
            <InputEdit
              color={theme.colors.fontColor}
              value={newValue?.nome}
              onChange={(e) =>
                setNewValue({ ...newValue, nome: e.target.value })
              }
            />
            <p>Descrição:</p>
            <TextAreaEdit
              color={theme.colors.fontColor}
              value={newValue?.desc}
              onChange={(e) =>
                setNewValue({ ...newValue, desc: e.target.value })
              }
            />
            <p>Preço:</p>
            <IntlCurrencyInput
              component={theme.name === "dark" ? InputEdit : InputEditThemed}
              currency="BRL"
              max="1000"
              min="5"
              placeholder="Valor do serviço (R$)"
              config={currencyConfig}
              onChange={handleChange}
              value={newValue?.preco}
            />

            <p style={{ marginBottom: "12px" }}>Categoria: </p>
            <InputSelect
              style={customStyles}
              placeholder="Selecione uma categoria"
              options={cat}
              value={newValue?.categoria}
              onChange={(e) => setNewValue({ ...newValue, categoria: e.value })}
            />

            <Slider
              type="range"
              min="1"
              max="30"
              onChange={(e) =>
                setNewValue({ ...newValue, entrega: parseInt(e.target.value) })
              }
            />

            <Delivery color={theme.colors.fontColor}>
              {newValue?.entrega}
              <b> Dia{newValue?.entrega > 1 ? "s" : ""}</b>
            </Delivery>
            <ModalDelete
              display={popupVisible.del}
              cancel={() => setPopupVisible({ ...popupVisible, del: false })}
              confirm={delService}
            />
          </WrapperForm>
        </Footer>
      ) : (
        <>
          <Footer
            color={theme.colors.fontColor}
            bgColor={theme.colors.boxService}
          >
            {cardData.map((item, i) => {
              return (
                <div className={"wrapperBox"}>
                  <div style={{ width: "100%" }}>
                    <span style={{ display: "flex", alignItems: "center" }}>
                      <img
                        src={item.icon}
                        style={{
                          width: "25px",
                          height: "25px",
                          marginRight: "1rem",
                          marginBottom: item.marginBottom,
                        }}
                      />
                      <TitleComments color={theme.colors.fontColor}>
                        {item.title}
                      </TitleComments>
                    </span>
                    <OcultContent
                      display={displayTest(item)}
                      visibility={visibilityTest(item)}
                    >
                      {item.content === "desc"
                        ? data?.desc
                        : renderComments(data)}
                    </OcultContent>
                  </div>

                  <span
                    onClick={() => handleShow(i)}
                    style={{
                      width: "10%",
                      display: "flex",
                      justifyContent: "flex-end",
                      paddingRight: "1rem",
                      cursor: "pointer",
                    }}
                  >
                    <p style={style(item)}>{">"}</p>
                  </span>
                </div>
              );
            })}
          </Footer>
          <Line />
          <span
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <Title color={theme.colors.fontColor}>Serviços Relacionados</Title>
          </span>
          <RelationatedServices color={theme.colors.fontColor}>
            {!render
              ? renderLoading()
              : service?.map((item) => {
                  return (
                    <Services
                      uid={item.id}
                      nome={item.info.nome}
                      desc={item.info.desc}
                      img={item.info.img}
                      preco={item.info.preco}
                      autor={item.info.autor}
                      categoria={item.info.categoria}
                      nota={renderAval(item)}
                      loading={loading}
                    />
                  );
                })}
          </RelationatedServices>
          <ModalAvaliation
            display={popupVisible.aval}
            title={"Avaliação"}
            labelBnt={"Avaliar!"}
            disabled={!aval.desc || !aval.star}
            close={() => setPopupVisible({ ...popupVisible, aval: false })}
            confirm={InsertRate}
          >
            <Input
              onChange={(e) => setAval({ ...aval, desc: e.target.value })}
              placeholder={"Deixe seu comentário..."}
            />
            <p style={{ marginTop: "1rem", color: "black" }}>
              Como você avalia esse serviço?
            </p>
            <span style={{ display: "flex", marginTop: "1rem" }}>
              {repeatStar.map((i) => {
                return (
                  <img
                    key={i}
                    src={aval.star > i ? starIcon : blackStarIcon}
                    onClick={() => setAval({ ...aval, star: i + 1 })}
                    style={{
                      width: "25px",
                      height: "25px",
                      marginRight: "2px",
                      cursor: "pointer",
                    }}
                  />
                );
              })}
            </span>
            <span
              style={{
                marginTop: "1rem",
                marginBottom: "1rem",
                color: "black",
              }}
            >
              {aval.star ?? "0"} de 5 estrelas
            </span>
          </ModalAvaliation>
        </>
      )}
    </Wrapper>
  );
};

export default ServiceDetail;
