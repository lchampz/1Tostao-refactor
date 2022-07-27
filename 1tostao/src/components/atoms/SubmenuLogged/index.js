import React, { useState, useRef } from "react";
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
  Social,
  Text,
  Infobox,
  Arrow,
  Circle
} from "./styled";
import iconUser from '../../../assets/icons/userIcon.png'
import window from '../../../assets/icons/anotherWindow.png'
import git from '../../../assets/icons/gitIconGreen.png'
import tt from '../../../assets/icons/twitterIconGreen.png'
import mail from '../../../assets/icons/mailIconGreen.png'
import insta from '../../../assets/icons/instaIconGreen.png'
import ImgWrapper from "../ImgWrapper";
import { useNavigate } from "react-router-dom";
import Carousel from 'react-elastic-carousel';

const images = require("../../../request/mock/imgs.json");

const Submenu = ({ imgUser, instagram, email, github, name, twitter }) => {
  const [visible, setVisible] = useState(false);
  const img = iconUser;
  const navigate = useNavigate();
  const slider = useRef(null)
  const NextArrow = ({ children }) => { return( <Arrow onClick={() => slider.current.slideNext() }>{children}</Arrow>)}
  const PrevArrow = ({ children }) => { return( <Arrow onClick={() => slider.current.slidePrev() }>{children}</Arrow>)}

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

  const Arrows = ({}) => {
    return (
      <></>
    )
  }

  const Pagination = ({ pages, activePage, onClick }) => {
    return (
      <Row>
        <PrevArrow>{'<'}</PrevArrow>
        {pages.map(page => {
          const isActivePage = activePage === page
          return (
            <Circle
              key={page}
              onClick={() => onClick(page)}
              active={isActivePage}
            />
          )
        })}
        <NextArrow>{'>'}</NextArrow>
      </Row>
      )
    }
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
                  <Name>{name || 'username'}</Name>
              </Profile>
              <Row>
                  <Box><p>2</p>anos de conta</Box><Box><p>11</p>Trabalhos feitos</Box>
              </Row>
          </WrapperHeader>
          <Line />
          <P>Últimos trabalhos postados</P>
          <WrapperBody>
            <Carousel
              ref={slider}
              style={{ marginRight: '10%' }}  
              easing="cubic-bezier(1,.15,.55,1.54)"
              tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
              transitionMs={700}
              itemsToScroll={2} 
              itemsToShow={2} 
              enableAutoPlay 
              autoPlaySpeed={10000}
              renderArrow={Arrows}
              renderPagination={Pagination}
            >
              {renderCards}
            </Carousel>
            
          </WrapperBody>
          <Line marginTop={15}/>
          <P>Redes sociais</P>
          <WrapperFooter>
            <Social>
              { github !== null ? <Row><ImgWrapper width="1.6rem" height="1.6rem" url={git} /><Text>{github || '@git_name'}</Text></Row> : null}
              { instagram !== null ? <Row><ImgWrapper width="1.3rem" height="1.3rem" url={insta} /><Text>{instagram || '@insta_name'}</Text></Row> : null}
              <Row><ImgWrapper width="1.3rem" height="1.3rem" url={mail} /><Text>{email || 'mail@mail.com'}</Text></Row>
              { twitter !== null ? <Row><ImgWrapper width="1.5rem" height="1.5rem" url={tt} /><Text>{twitter || '@twitter_name'}</Text></Row> : null }
            </Social>
          </WrapperFooter>
          <Line marginTop={30}/>
          <WrapperFooter>
            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Infobox onClick={() => navigate(`/profile`)}>Perfil<ImgWrapper margin={'-24px 0px 0px 210px'} width="1.6rem" height="1.6rem" url={window} /></Infobox>
              <Infobox onClick={() => navigate(`/support`)}>Suporte<ImgWrapper margin={'-24px 0px 0px 210px'} width="1.6rem" height="1.6rem" url={window} /></Infobox>
              <Infobox onClick={() => navigate(`/dashboard`)}>Dashboard<ImgWrapper margin={'-24px 0px 0px 210px'} width="1.6rem" height="1.6rem" url={window} /></Infobox>
            </div>
          </WrapperFooter>
        </WrapperHeader>
      </StickyMenu>
    </Wrapper>
  );
};

export default Submenu;
