import React from "react";
import {
  Service,
  Item,
  ServicePrice,
  InfoService,
  ClientImg,
  ClientName,
  ServiceTitle,
  Text,
  ServiceImage,
  ServiceCategory,
} from "./styled";

import service1 from "../../../assets/img/service2.png";
import profilePic from "./../../../assets/img/profile.png";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ServiceCard = ({
  nome,
  idKey,
  preco,
  desc,
  img,
  autor,
  nota,
  uid,
  categoria,
  children,
  click,
  loading,
  ...restProps
}) => {
  const navigate = useNavigate();
  return (
    <>
      <Service
        {...restProps}
        key={idKey}
        onClick={() => {
          navigate(`/service/${uid}`)
          window.location.reload(false);
        }}
      >
        <ServiceTitle>{loading ? (
          <Skeleton
            baseColor="rgb(1, 160, 138)"
            highlightColor="rgb(0, 224, 190)"
          />
        ) : (
          nome
        )}</ServiceTitle>
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
        {loading ? (
        <Skeleton
          style={{ width: "250px", height: "150px" }}
          baseColor="rgb(1, 160, 138)"
          highlightColor="rgb(0, 224, 190)"
        />
      ) : (
        <ServiceImage alt={desc} src={img || service1} />
      )}

        <InfoService>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {loading ? null : (
            <>
              <ClientImg src={profilePic} />

              <ClientName style={{ color: "#eee" }}>{autor}</ClientName>
            </>
          )}
          </div>
          <p style={{ fontSize: "0.8rem", fontWeight: "bold" }} id="avaliacao">
            {loading ? <Skeleton /> : `${nota}⭐`}
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
