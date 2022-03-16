
import React from 'react'
import Card from '../../atoms/Card'
import { Wrapper, Arrow } from './styled.js'
import SwiperCore,{ Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react"; 

// swiper bundle styles
import 'swiper/swiper-bundle.min.css'

// swiper core styles
import 'swiper/swiper.min.css'

// modules styles
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import "swiper/components/effect-coverflow/effect-coverflow.min.css";

SwiperCore.use([Navigation, Pagination, EffectCoverflow, Scrollbar, A11y])
const images = require("../../../request/mock/imgs.json")

const CategoryCarroussel = () => {
    
    const breakpoints = {
        400: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
          
    }

    const renderCards = images.map((img, i) => {
        return(
            <SwiperSlide>
                <Card style={{ width: '100%', height: '100%'}} key={i} className={'Card'} url={img.url} >{img.id}</Card>  
            </SwiperSlide>   
        )  
    })

    const swiperRef = React.useRef(null);

    return(
        <Wrapper>
            <Swiper 
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                loop={true}
                slidesPerView={1}
                grabCursor={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                  }}
                breakpoints={breakpoints}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}

            >
                {renderCards}
            </Swiper>
           
        </Wrapper>
    )
}

export default CategoryCarroussel