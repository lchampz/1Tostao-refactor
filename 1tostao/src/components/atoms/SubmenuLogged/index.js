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
  Close,
  Card,
  P,
  Social
} from "./styled";
import iconUser from '../../../assets/icons/userIcon.png'
import git from '../../../assets/icons/gitIconGreen.png'
import ImgWrapper from "../ImgWrapper";
import { useUserAuth } from '../../../request/hooks/Auth'
import Slider from 'react-slick'

const images = require("../../../request/mock/imgs.json");

const Submenu = ({ imgUser, insta, face, email, github, name }) => {
  const [visible, setVisible] = useState(false);
  const img = imgUser || iconUser;
  const { user } = useUserAuth()

  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 1
  };
  

  const renderCards = images.map((img, i) => {
    return (
        <Card
          key={i}
          className={"Card"}
          url={img.url}
          link={img.link}
          bgImg={img.url}
        />
    );
  });

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
                  <Name>{name || user.email}</Name>
              </Profile>
              <Row>
                  <Box><p>2</p>anos de conta</Box><Box><p>11</p>Trabalhos feitos</Box>
              </Row>
          </WrapperHeader>
          <Line />
          <P>Últimos trabalhos postados</P>
          <WrapperBody>
            {renderCards}
          </WrapperBody>
          <Line marginTop={15}/>
          <WrapperFooter>
            <Social>
              <ImgWrapper width="2rem" height="2rem" url={git} /><p>teste</p>
            </Social>
          </WrapperFooter>
        </WrapperHeader>
      </StickyMenu>
    </Wrapper>
  );
};

export default Submenu;
