import React from "react";
import Card from "../../atoms/Card";
import { Wrapper, Arrow } from "./styled.js";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Border from "../../atoms/Border";
import Text from "../../atoms/Text/Text";
// swiper bundle styles
import "swiper/swiper-bundle.min.css";

// swiper core styles
import "swiper/swiper.min.css";

// modules styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay ]);
const images = require("../../../request/mock/imgs.json");

const CategoryCarroussel = () => {
  const breakpoints = {
    400: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  };

  const renderCards = images.map((img, i) => {
    return (
      <SwiperSlide>
        <Card
          style={{ width: "100%", height: "100%" }}
          key={i}
          className={"Card"}
          url={img.url}
        >
          {img.id}
        </Card>
      </SwiperSlide>
    );
  });

  return (
    <Wrapper>
      <Text size="36px" color="rgba(47, 47, 47, 1)">
        Algumas de nossas categorias...
      </Text>
      <Border
        color="1px solid rgba(108, 108, 108, 1)"
        marginBorder="5px"
        width="100%"
      />
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        navigation
        autoplay={{ 
            delay: 2500,
            disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1}
        grabCursor={true}
        breakpoints={breakpoints}
        pagination={{ clickable: true }}
      >
        {renderCards}
      </Swiper>
    </Wrapper>
  );
};

export default CategoryCarroussel;
