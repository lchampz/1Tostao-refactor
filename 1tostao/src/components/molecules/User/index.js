import React from "react";
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
import opinions from "../../../request/mock/opinions.json";
import Border from "../../atoms/Border";
import { Container, Title, Text, Pane, Image, Align, Div } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faStar } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";

// swiper bundle styles
import "swiper/swiper-bundle.min.css";

// swiper core styles
import "swiper/swiper.min.css";

// modules styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
// import {faStar} from '@fortawesome/free-solid-svg-icons'
SwiperCore.use([Navigation, Pagination, A11y]);

const User = ({ border, titleColor, bgCard, fontColor }) => {
  const renderCards = opinions.map((item) => {
    return (
      <SwiperSlide key={item.id}>
        <User.Align>
          <User.Pane className="text">
            <User.Text fontColor={fontColor}>
              "{item.description}"
              <FontAwesomeIcon className="icon" icon={faPencil} />
            </User.Text>
            <FontAwesomeIcon className="star" icon={faStar} />
            <FontAwesomeIcon className="star" icon={faStar} />
            <FontAwesomeIcon className="star" icon={faStar} />
            <FontAwesomeIcon className="star" icon={faStar} />
            <FontAwesomeIcon className="star" icon={faStar} />
          </User.Pane>

          <User.Pane className="image">
            <User.Image src={item.img} alt={item.alt}></User.Image>
            <User.Text className="name" fontColor={fontColor}>{item.name}</User.Text>
          </User.Pane>
        </User.Align>
      </SwiperSlide>
    );
  });

  return (
    <>
      <Container bgCard={bgCard}>
        <User.Title color={titleColor}>Opiniões dos nossos usuários:</User.Title>
        <Div>
          <Border
            className="borda"
            color={`1px solid ${border}`}
            marginBorder="5px"
            width="calc(35% + 150px)"
          />
        </Div>

        <Swiper
          modules={[Navigation, Pagination, A11y]}
          navigation
          loop={true}
          grabCursor={true}
          slidesPerView={1}
        >
          {renderCards}
        </Swiper>
      </Container>
    </>
  );
};

User.Title = function UserTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
User.Text = function UserText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

User.Pane = function UserPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};
User.Align = function UserAlign({ children, ...restProps }) {
  return <Align {...restProps}>{children}</Align>;
};
User.Div = function UserAlign({ children, ...restProps }) {
  return <Align {...restProps}>{children}</Align>;
};

User.Image = function UserImage({ ...restProps }) {
  return <Image {...restProps}></Image>;
};

export default User;
