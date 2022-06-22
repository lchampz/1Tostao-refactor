import React from "react";

import { Wrapper } from "./styled";

const ImgWrapper = ({
  display,
  url,
  alt,
  width,
  height,
  float,
  click,
  cursor,
  margin,
  transform,
  imgHeight,
  imgWidth,
  padding
}) => {
  return (
    <Wrapper
      display={display}
      imgHeight={imgHeight}
      imgWidth={imgWidth}
      onClick={click}
      width={width}
      height={height}
      float={float}
      cursor={cursor}
      margin={margin}
      transform={transform}
      padding={padding}
    >
      <img src={url} alt={alt} />
    </Wrapper>
  );
};

export default ImgWrapper;
