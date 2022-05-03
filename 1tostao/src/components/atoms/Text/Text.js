import React from "react";
import { Title } from "./styles/text_style";

const Text = ({ children, color, maxwidth, size, weight, height, marginTop }) => {
  return (
    <Title
      maxwidthText={maxwidth}
      sizeText={size}
      weightText={weight}
      colorText={color}
      heightText={height}
      marginTop={marginTop}
    >
      {children}
    </Title>
  );
};

export default Text;
