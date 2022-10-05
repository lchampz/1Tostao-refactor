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
import { useUserAuth } from "../../../request/hooks/Auth";

const Services = () => {
  const { service, filter } = useService();
  const { user } = useUserAuth();
  console.log(filter);
  function Filtrar() {
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
            <Service key={item.id}>
              <ServiceTitle>{item.nome}</ServiceTitle>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "250px",
                  justifyContent: "flex-end",
                }}
              >
                <ServicePrice>
                  <Item>R${item.preco}</Item>
                </ServicePrice>
              </div>
              <ServiceImage alt={item.desc} src={service1} />

              <InfoService>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <ClientImg src={profilePic} />
                  <ClientName>{item.autor}</ClientName>
                </div>
                <p id="avaliacao">
                  {(item.nota1 ||
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
                    : "0 Avaliações"}
                  ⭐
                </p>
              </InfoService>
              <div>
                <ServiceCategory>
                  <Text>{item.categoria}</Text>
                </ServiceCategory>
              </div>
            </Service>
          );
        });
      }
    } else {
      return service?.map((item) => {
        return (
          <Service key={item.id}>
            <ServiceTitle>{item.nome}</ServiceTitle>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "250px",
                justifyContent: "flex-end",
              }}
            >
              <ServicePrice>
                <Item>R${item.preco}</Item>
              </ServicePrice>
            </div>

            <ServiceImage alt={item.desc} src={service1} />

            <InfoService>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <ClientImg src={profilePic} />
                <ClientName>{item.autor}</ClientName>
              </div>
              <p id="avaliacao">
                {(item.nota1 ||
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
                  : "0 Avaliações"}
                ⭐
              </p>
            </InfoService>
            <div>
              <ServiceCategory>
                <Text>{item.categoria}</Text>
              </ServiceCategory>
            </div>
          </Service>
        );
      });
    }
  }
  return (
    <>
      {filter !== undefined ? null : (
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
          <WrapperEspecializados></WrapperEspecializados>
        </ServicosEspecializados>
      )}
      <Container>
        <ServiceWrapper>{Filtrar()}</ServiceWrapper>
      </Container>
    </>
  );
};

export default Services;
