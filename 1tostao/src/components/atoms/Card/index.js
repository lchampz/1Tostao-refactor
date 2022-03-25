import React from "react";

import { Card, Content, Link } from "./styled.js";
import { useTheme } from "../../../request/hooks/Theme";

const Cards = ({ children, marginTop, color, url, link }) => {
  const { theme } = useTheme();

  return (
    <Card marginTop={marginTop}>
      <Content color={color} bgImg={url} carouselBg={theme.colors.carouselCard}>
        <div className="label">
          <Link
            carouselColor={theme.colors.carouselLabel}
            carouselHover={theme.colors.carouselHover}
            href={link}
          >
            {children}
          </Link>
        </div>
      </Content>
    </Card>
  );
};

export default Cards;
