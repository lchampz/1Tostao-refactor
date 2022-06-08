import React, { useState } from "react";
import {
  Wrapper,
  Icon,
  StickyMenu,
  WrapperHeader,
  WrapperBody,
  WrapperFooter,
  Profile,
  Name,
  Row,
  Box,
  Line,
  Close
} from "./styled";
import ImgWrapper from "../ImgWrapper";

const Submenu = ({ imgUser, insta, face, email, github, name }) => {
  const [visible, setVisible] = useState(false);
  const img = imgUser || "http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"

  return (
    <Wrapper>
      <Icon display={!visible} onClick={() => setVisible(!visible)}>
        <ImgWrapper
          width="2rem"
          height="2rem"
          margin="0px 50px 0px 0px"
          url={img}
        />
      </Icon>
      <StickyMenu display={visible}>
        <WrapperHeader>
        <Close onClick={() => setVisible(!visible)}>X</Close>
          <WrapperHeader>
              <Profile>
                  <ImgWrapper width="4rem" height="4rem" url={img}/>
                  <Name>{name || 'User'}</Name>
              </Profile>
              <Row>
                  <Box><p>2</p>anos de conta</Box><Box><p>11</p>Trabalhos feitos</Box>
              </Row>
          </WrapperHeader>
          <Line />
          <WrapperBody>

          </WrapperBody>

          <WrapperFooter></WrapperFooter>
        </WrapperHeader>
      </StickyMenu>
    </Wrapper>
  );
};

export default Submenu;
