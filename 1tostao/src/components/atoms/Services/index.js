import React, { useEffect, useState } from "react";
import {
  Container,
  ServiceWrapper,
  Service,
  Item,
  ServicePrice,
  InfoService,
  ClientImg,
  ClientName,
  TitleEspecializados,
  ServiceTitle,
  ServicosEspecializados,
  Text,
  WrapperEspecializados,
  ServiceImage,
  ServiceCategory,
} from "./styled";
import service1 from "../../../assets/img/service2.png";
import profilePic from "./../../../assets/img/profile.png";
import { useService } from "../../../request/hooks/Services.js";
import "swiper/swiper-bundle.min.css";
// swiper core styles
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

// modules styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import ServiceCard from "../ServiceCard";

const Services = () => {
  const { service, filter, serviceDestaque, search, searchValue } =
    useService();
  const [avalicaoService, setAvaliacaoService] = useState();

  useEffect(() => {
    const setAvaliacao = async () => {
      serviceDestaque.forEach((item) => {
        item["avaliacao"] =
          (item.nota1 * 1 +
            item.nota2 * 2 +
            item.nota3 * 3 +
            item.nota4 * 4 +
            item.nota5 * 5) /
          (item.nota1 + item.nota2 + item.nota3 + item.nota4 + item.nota5);
        if (isNaN(item.avaliacao)) {
          item["avaliacao"] = 0;
        }
      });
      setAvaliacaoService(await serviceDestaque);
    };
    const setSortAvaliacao = async () => {
      serviceDestaque.sort((c1, c2) =>
        c1.avaliacao < c2.avaliacao ? 1 : c1.avaliacao > c2.avaliacao ? -1 : 0
      );
      setAvaliacaoService(await serviceDestaque);
    };
    setAvaliacao();
    setSortAvaliacao();
  });

  const renderServices = avalicaoService?.slice(0, 8).map((item) => {
    return (
      <SwiperSlide
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ServiceCard
          style={{
            marginBottom: "3rem",
            marginRight: "0",
            marginLeft: "0",
            color: "#fff",
          }}
          idKey={item.id}
          uid={item.id}
          nome={item.nome}
          preco={item.preco}
          img={item.img || service1}
          autor={item.autor}
          desc={item.desc}
          categoria={item.categoria}
          nota={
            (item.nota1 ||
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
        />
      </SwiperSlide>
    );
  });
  function Filtrar() {
    if (searchValue === undefined) {
      if (filter !== undefined) {
        if (filter.length === 0) {
          return (
            <div style={{ height: "50vh" }}>
              <h1 style={{ marginTop: "2rem", marginBottom: "2rem" }}>
                Não há serviços com essa filtragem!
              </h1>
            </div>
          );
        } else {
          return filter?.map((item) => {
            return (
              <ServiceCard
                idKey={item.id}
                uid={item.id}
                nome={item.nome}
                preco={item.preco}
                img={item.img || service1}
                autor={item.autor}
                desc={item.desc}
                categoria={item.categoria}
                nota={
                  (item.nota1 ||
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
              />
            );
          });
        }
      } else {
        return service?.map((item) => {
          return (
            <ServiceCard
              idKey={item.id}
              nome={item.nome}
              preco={item.preco}
              img={item.img || service1}
              autor={item.autor}
              desc={item.desc}
              uid={item.id}
              categoria={item.categoria}
              nota={
                (item.nota1 ||
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
            />
          );
        });
      }
    } else if (searchValue.length === 0) {
      return (
        <div style={{ height: "50vh" }}>
          <h1 style={{ marginTop: "2rem", marginBottom: "2rem" }}>
            Não há serviços com essa filtragem!
          </h1>
        </div>
      );
    } else {
      return searchValue?.map((item) => {
        return (
          <ServiceCard
            idKey={item.id}
            nome={item.nome}
            preco={item.preco}
            img={item.img || service1}
            autor={item.autor}
            desc={item.desc}
            uid={item.id}
            categoria={item.categoria}
            nota={
              (item.nota1 ||
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
          />
        );
      });
    }
  }
  const breakpoints = {
    400: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 2,
    },
    990: {
      slidesPerView: 3,
      spaceBetween: 8,
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 8,
    },
  };
  useEffect(() => {
    console.log(searchValue);
  }, [searchValue]);
  return (
    <>
      {filter !== undefined || searchValue !== undefined ? null : (
        <ServicosEspecializados>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TitleEspecializados>Serviços em destaque</TitleEspecializados>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              flexDirection: "row",
            }}
          >
            <WrapperEspecializados>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                navigation
                breakpoints={breakpoints}
                loop={false}
                slidesPerView={1}
              >
                {renderServices}
              </Swiper>
            </WrapperEspecializados>
          </div>
        </ServicosEspecializados>
      )}
      <Container>
        <ServiceWrapper>{Filtrar()}</ServiceWrapper>
      </Container>
    </>
  );
};

export default Services;
