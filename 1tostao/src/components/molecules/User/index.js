import React from 'react';
import SwiperCore,{ Navigation, Pagination, A11y} from 'swiper';
import opinions from '../../../request/mock/opinions.json'
import {Container, Title, Text, Pane, Image, Align} from './styled'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPencil} from '@fortawesome/free-solid-svg-icons'
import { Swiper, SwiperSlide } from "swiper/react"; 
import img from '../../../assets/img/murilo.png'

// swiper bundle styles
import 'swiper/swiper-bundle.min.css'

// swiper core styles
import 'swiper/swiper.min.css'


// modules styles
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
// import {faStar} from '@fortawesome/free-solid-svg-icons'
SwiperCore.use([Navigation, Pagination, A11y])


const User = () => {
    const renderCards = opinions.map((item) =>  {
        
        return(
    
            <SwiperSlide>
                <User.Align>
                    <User.Pane className="text">
                        <User.Text key={item.id}>
                            "{item.description}"
                            <FontAwesomeIcon className="icon" icon={faPencil} />
                        </User.Text>
                     </User.Pane>
                    <User.Pane className="image">
                            <User.Image src={img} alt={item.alt}></User.Image>
                     </User.Pane>
            </User.Align>
            </SwiperSlide>
    )
    
    });
     
    return ( 
        <>
        <Container>

                        <User.Title>
                            Opiniões dos nossos usuários: 
                        </User.Title>
             
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
}

User.Title = function UserTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
};
User.Text = function UserText({children, ...restProps}){
    return <Text {...restProps}>{children}</Text>
};

User.Pane = function UserPane({children, ...restProps}){
    return <Pane {...restProps}>{children}</Pane>
  };
User.Align = function UserAlign({children, ...restProps}){
    return <Align {...restProps}>{children}</Align>
  };

User.Image = function UserImage({...restProps}){
    return <Image {...restProps}></Image>
  }

export default User;