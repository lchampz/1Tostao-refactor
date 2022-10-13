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
import "swiper/swiper-bundle.min.css";
// swiper core styles

import "swiper/swiper.min.css";

// modules styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";

const ServiceCard = ({
  idKey,
  nome,
  preco,
  desc,
  img,
  autor,
  nota,
  categoria,
  children,
  ...restProps
}) => {
  return (
    <>
      <Service {...restProps} key={idKey}>
        <ServiceTitle>{nome}</ServiceTitle>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "250px",
            justifyContent: "flex-end",
          }}
        >
          <ServicePrice>
            <Item>R${preco}</Item>
          </ServicePrice>
        </div>
        <ServiceImage alt={desc} src={img || service1} />

        <InfoService>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <ClientImg src={profilePic} />
            <ClientName>{autor}</ClientName>
          </div>
          <p style={{ fontSize: "0.8rem", fontWeight: "bold" }} id="avaliacao">
            {nota}⭐
          </p>
        </InfoService>
        <div>
          <ServiceCategory>
            <Text>{categoria}</Text>
          </ServiceCategory>
        </div>
        {children}
      </Service>
    </>
  );
};

export default ServiceCard;
