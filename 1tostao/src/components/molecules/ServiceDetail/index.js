import { useEffect, useState } from "react";
import {
  Wrapper,
  Header,
  Line,
  Body,
  Box,
  Footer,
  OcultContent,
} from "./styled";
import { getDataFromService } from "../../../services/getServiceData";
import docIcon from '../../../assets/img/docGreenIcon.svg'
import starIcon from '../../../assets/img/starGreenIcon.svg'

const ServiceDetail = () => {
  const [data, setData] = useState();
  const [visible, setVisible] = useState({
    desc: false,
    aval: false,
  });
  const [display, setDisplay] = useState({
    desc: false,
    aval: false,
  });

  const displayTest = (item) =>
    item.content === "desc" ? display.desc : display.aval;
  const visibilityTest = (item) =>
    item.content === "desc" ? visible.desc : visible.aval;

  const lero =
    "Caros amigos, a execução dos pontos do programa nos obriga à análise do fluxo de informações. Por outro lado, a competitividade nas transações comerciais representa uma abertura para a melhoria dos métodos utilizados na avaliação de resultados. Todavia, o comprometimento entre as equipes exige a precisão e a definição do sistema de participação geral. No entanto, não podemos esquecer que a estrutura atual da organização acarreta um processo de reformulação e modernização das formas de ação.";

  const style = (item) =>
    visibilityTest(item)
      ? { rotate: "270deg", color: "#24D39A", fontSize: "40px" }
      : { rotate: "90deg", color: "#24D39A", fontSize: "40px" };

  const [cardData] = useState([
    {
      title: "DESCRIÇÃO DO SERVIÇO",
      icon: docIcon,
      content: "desc",
      visible: visible.desc,
      marginBottom: '2px' 
    },
    {
      title: "AVALIAÇÕES DOS USUÁRIOS",
      icon: starIcon,
      content: "avaliacao",
      visible: visible.aval,
      marginBottom: '5px'
    },
  ]);

  function getCurrentURL() {
    return window.location.href;
  }
  const url = getCurrentURL();
  const serviceId = url.substr(url.lastIndexOf("/") + 1);

  useEffect(async () => {
    const response = await getDataFromService(serviceId);

    setData({
      nome: response[0].nome,
      categoria: response[0].categoria,
      img: response[0].img,
      desc: response[0].desc,
      cat: response[0].cat,
      entrega: response[0].entrega,
      preco: response[0].preco,
      autor: response[0].autor,
      uid: response[0].uid,
    });
  }, []);

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
                <span style={{ display: 'flex', alignItems: 'center'}}>
                  <img src={item.icon} style={{ width: "25px", height: "25px", marginRight: '1rem', marginBottom: item.marginBottom}}/>
                  <p className={"title"}>{item.title}</p>
                </span>
                <OcultContent
                  display={displayTest(item)}
                  visibility={visibilityTest(item)}
                >
                  {item.content === "desc" ? lero : null}
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
    </Wrapper>
  );
};

export default ServiceDetail;
