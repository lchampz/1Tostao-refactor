import React from "react";

import Text from "../../atoms/Text/Text";
import { useTheme } from "../../../request/hooks/Theme";

import TwoParagraphs from "../../templates/TwoParagraphs";
import ImgWrapper from "../../atoms/ImgWrapper";
import AboutUs1 from "../../../assets/img/sobre-nos-1.png";

import { Wrapper, Title, Paragraph } from "./styled.js";

const AboutColumn = () => {
  const { theme } = useTheme();

  return (
    <Wrapper>
      <TwoParagraphs
        FirstColumn={
          <>
            <Title float={"left"}>
              <Text size={"3rem"} color={theme.colors.titleColor}>
                Teste
              </Text>
            </Title>
            <Paragraph float={"left"} color={theme.colors.fontColor}>
              <p>Somos um grupo de estudantes que ousamos sonhar alto!</p>
              <p>
                Queríamos desenvolver uma plataforma, que além de abrangente
                fosse útil para todos os públicos. Essa plataforma não irá
                apenas atender os consumidores, porém ela irá atender também
                aqueles que precisam tirar uma graninha extra no final do mês,
                ou até mesmo aqueles que vieram a perder os seus empregos na
                pandemia.
              </p>
              <p>
                Além de dar a oportunidade para se tornar conhecido no mundo dos
                <b>Freelancers</b>, iremos expor e divulgar seus trabalhos e
                projetos.
              </p>
            </Paragraph>
          </>
        }
        widthFirst={"60%"}
        SecondColumn={
          <div style={{ display: "flex", alignItems: "center" }}>
            <ImgWrapper
              url={AboutUs1}
              height={"20rem"}
              width={"80%"}
              imgWidth={"100%"}
            />
          </div>
        }
        widthSecond={"40%"}
      />
    </Wrapper>
  );
};

export default AboutColumn;
