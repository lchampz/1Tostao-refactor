import React, { useEffect } from "react";
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
import service2 from "../../../assets/img/service2.png";
import service3 from "../../../assets/img/service3.png";
import profilePic from "./../../../assets/img/profile.png";
import { useService } from "../../../request/hooks/Services.js";
import { useUserAuth } from "../../../request/hooks/Auth";

const Services = () => {
  const { service } = useService();
  const { user } = useUserAuth();


  return (
    <Container>
      <ServiceWrapper>
        {service?.map((item) => {
          return (
            <Service key={item.id} onClick={() => console.log(service)}>
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
              <ServiceImage src={item.img ? item.img : service1} />

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
                <p id="avaliacao">3,6</p>
              </InfoService>
            </Service>
          );
        })}
      </ServiceWrapper>
    </Container>
  );
};

export default Services;
