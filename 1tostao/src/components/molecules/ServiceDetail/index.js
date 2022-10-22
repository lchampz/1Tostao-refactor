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
} from "./styled";
import {
  getDataFromService,
  getServiceWithCategory,
} from "../../../services/getServiceData";
import docIcon from "../../../assets/img/docGreenIcon.svg";
import starIcon from "../../../assets/img/starGreenIcon.svg";
import Services from "../../atoms/ServiceCard";
import { useLoading } from "../../../request/hooks/Loading";

const ServiceDetail = () => {
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

  const displayTest = (item) =>
    item.content === "desc" ? display.desc : display.aval;
  const visibilityTest = (item) =>
    item.content === "desc" ? visible.desc : visible.aval;

  const style = (item) =>
    visibilityTest(item)
      ? { rotate: "270deg", color: "#24D39A", fontSize: "40px" }
      : { rotate: "90deg", color: "#24D39A", fontSize: "40px" };

  const renderLoading = () => {
    return (
      <>
        <Services loading={true} />
        <Services loading={true} />
        <Services loading={true} />
      </>
    );
  };

  const renderAval = (item) => {
    return (item.nota1 ||
      item.nota2 ||
      item.nota3 ||
      item.nota4 ||
      item.nota5) > 0
      ? (
          (item.nota1 * 1 +
            item.nota2 * 2 +
            item.nota3 * 3 +
            item.nota4 * 4 +
            item.nota5 * 5) /
          (item.nota1 +
            item.nota2 +
            item.nota3 +
            item.nota4 +
            item.nota5)
        ).toFixed(1)
      : "0 Avaliações"
  }

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
    setService(responseData);
  }, [render])

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
          </div>
        </Box>
      </Body>
      <Footer>
        {cardData.map((item, i) => {
          return (
            <div className={"wrapperBox"}>
              <div>
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
                  {item.content === "desc" ? data?.desc : null}
                </OcultContent>
              </div>

              <span
                onClick={() => handleShow(i)}
                style={{
                  width: "100%",
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
        {!render ? (
          renderLoading()
        ) : (
          service?.map((item) => {
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
          })
        )}
      </RelationatedServices>
    </Wrapper>
  );
};

export default ServiceDetail;
