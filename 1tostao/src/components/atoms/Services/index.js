import React, { useEffect, useState } from "react";
import {
  Container,
  ServiceWrapper,
  Service,
  Price,
  ServicePrice,
  InfoService,
  ClientImg,
  ClientName,
  ServiceTitle,
  ServiceImage,
} from "./styled";
import service1 from "../../../assets/img/service1.png";
import profilePic from "./../../../assets/img/profile.png";
import { useService } from "../../../request/hooks/Services.js";
import { useUserAuth } from "../../../request/hooks/Auth";

const Services = () => {
  const { service, filter } = useService();
  const { user } = useUserAuth();
  console.log(filter);
  return (
    <Container>
      <ServiceWrapper>
        {filter !== undefined
          ? filter?.map((item) => {
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
                      <Price>R${item.preco}</Price>
                    </ServicePrice>
                  </div>
                  <ServiceImage src={service1} />

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
                </Service>
              );
            })
          : service?.map((item) => {
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
                      <Price>R${item.preco}</Price>
                    </ServicePrice>
                  </div>
                  <ServiceImage src={service1} />

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
                </Service>
              );
            })}
      </ServiceWrapper>
    </Container>
  );
};

export default Services;
