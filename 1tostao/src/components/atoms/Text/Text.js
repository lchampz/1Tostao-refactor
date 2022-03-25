import React from "react";
import { Title } from "./styles/text_style";

const Text = ({ children, color, maxwidth, size, weight, height }) => {
  return (
    <Title
      maxwidthText={maxwidth}
      sizeText={size}
      weightText={weight}
      colorText={color}
      heightText={height}
    >
      {children}
    </Title>
  );
};

export default Text;
