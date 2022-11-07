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
} from "./styled";
import {
  getDataFromService,
  getServiceWithCategory,
} from "../../../services/getServiceData";
import docIcon from "../../../assets/img/docGreenIcon.svg";
import starIcon from "../../../assets/img/starGreenIcon.svg";
import blackStarIcon from "../../../assets/icons/blackStar.png";
import Services from "../../atoms/ServiceCard";
import { useLoading } from "../../../request/hooks/Loading";
import { Loop } from "../../../request/utils/loop";
import ModalAvaliation from "../../atoms/ModalAvaliation";
import { useUserAuth } from "../../../request/hooks/Auth";
import { insertComment, getComments } from "../../../services/commentRequest";

const ServiceDetail = () => {
  const { profile } = useUserAuth();
  const today = new Date();
  const repeatStar = Loop(5);
  const repeatLoading = Loop(3);
  const [data, setData] = useState();
  const { loading, setLoading } = useLoading();
  const [visible, setVisible] = useState({
    desc: false,
    aval: false,
  });
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
  const [popupVisible, setPopupVisible] = useState(false);
  const [aval, setAval] = useState({
    star: null,
    desc: null,
  });
  const [ comments, setComments ] = useState();

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
    const rateResponse = await getComments(serviceId)
    setService(responseData);
    setComments(rateResponse)
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
      <WrapperComments scroll={comments?.length > 3}>
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
            <p style={{ color: "#B3B3B3", fontSize: "12px" }}>
              (
              {`${comments?.length} comentário${comments?.length > 1 ? "s" : ""}`}
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
                <span className={"autor"}>{comments[0]?.info.autor}</span>
              </>
            );
          })}
        </div>
      </WrapperComments>
    );
  };

  return (
    <Wrapper>
      <Header>
        <span>
          <img src={data?.img} className={"icon"} />@{data?.autor}
        </span>
      </Header>
      <Line />
      <Body>
        <Box>
          <p className={"title"}>{data?.nome}</p>
          <img src={data?.img} className={"imgContainer"} />
        </Box>
        <Box>
          <div className={"wrapperInfo"}>
            <p className={"bold"}>ÚLTIMOS DETALHES</p>
            <span className={"content"}>
              <p>
                Prazo: {data?.entrega} dia{data?.entrega > 1 ? "s" : null}
              </p>
              <p>
                <b>R$</b> {data?.preco.toLocaleString("PT")}
                {data?.preco.toLocaleString("PT").includes(",") ? null : ",00"}
              </p>
            </span>
            <div className={"btn"}>Contratar</div>
            {profile ? (
              <span className={"avalie"} onClick={() => setPopupVisible(true)}>
                Avalie o serviço!
              </span>
            ) : null}
          </div>
        </Box>
      </Body>
      <Footer>
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
                  <p className={"title"}>{item.title}</p>
                </span>
                <OcultContent
                  display={displayTest(item)}
                  visibility={visibilityTest(item)}
                >
                  {item.content === "desc" ? data?.desc : renderComments(data)}
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
        <Title>Serviços Relacionados</Title>
      </span>
      <RelationatedServices>
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
        display={popupVisible}
        title={"Avaliação"}
        labelBnt={"Avaliar!"}
        disabled={!aval.desc || !aval.star}
        close={() => setPopupVisible(false)}
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
          style={{ marginTop: "1rem", marginBottom: "1rem", color: "black" }}
        >
          {aval.star ?? "0"} de 5 estrelas
        </span>
      </ModalAvaliation>
    </Wrapper>
  );
};

export default ServiceDetail;
