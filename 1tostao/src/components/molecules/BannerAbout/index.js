import React from "react";
import Border from "../../atoms/Border";
import Text from "../../atoms/Text/Text";
import Img from "../../../assets/img/about.png";
import { useNavigate } from "react-router-dom";

import { Wrapper, Paragraph, Button } from "./styled";
const BannerAbout = ({ titleColor, border, textColor, bgCard, btnBgHover }) => {
  const navigate = useNavigate();

  return (
    <Wrapper bgCard={bgCard}>
      <Text color={titleColor} size={"38px"}>
        Sobre Nós
      </Text>
      <Border colorBorder={border} width={"195px"} size={"1px"}></Border>
      <Paragraph color={textColor}>
        <p>
          Somos um grupo de estudantes (5 no total) apaixonados por programação
          e foi nos proposto o desenvolvimento de um site em formato de um
          e-commerce.
        </p>
      </Paragraph>
      <Paragraph color={textColor}>
        <img
          style={{ float: "right" }}
          src={Img}
          alt="Pessoas reunidas em volta a um notebook conversando e dando idéias"
        />
        <p>
          Dessa forma criamos o 1Tostão, sejam muito bem-vindos e esperamos que
          gostem!
        </p>
      </Paragraph>

      <Button
        btnBgHover={btnBgHover}
        onClick={() => navigate(`/about`)}
      ></Button>
    </Wrapper>
  );
};

export default BannerAbout;
