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
  preco,
  desc,
  img,
  autor,
  categoria,
  nota1,
  nota2,
  nota3,
  nota4,
  nota5,
  uid,
  loading,
}) => {
  const navigate = useNavigate();

  return (
    <Service
      onClick={() => {
        navigate(`/service/${uid}`);
        window.location.reload(false);
      }}
    >
      <ServiceTitle style={{ color: "#eee" }}>
        {loading ? (
          <Skeleton
            baseColor="rgb(1, 160, 138)"
            highlightColor="rgb(0, 224, 190)"
          />
        ) : (
          nome
        )}
      </ServiceTitle>
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
        <p id="avaliacao" style={{ color: "#eee", fontSize: "0.8rem" }}>
          {loading ? (
            <Skeleton />
          ) : (nota1 || nota2 || nota3 || nota4 || nota5) > 0 ? (
            <>
              {(
                (nota1 * 1 + nota2 * 2 + nota3 * 3 + nota4 * 4 + nota5 * 5) /
                (nota1 + nota2 + nota3 + nota4 + nota5)
              ).toFixed(1)}
              ⭐
            </>
          ) : (
            "0 Avaliações⭐"
          )}
        </p>
      </InfoService>
      <div>
        {loading ? null : (
          <ServiceCategory>
            {" "}
            <Text>{categoria}</Text>{" "}
          </ServiceCategory>
        )}
      </div>
    </Service>
  );
};

export default ServiceCard;
