import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: 5%;
    justify-content: center;
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 2%;
    justify-content: left;
    text-align: left;
        

    .swiper {
        width: 100%;
        height: 100%;
        background-color: transparent;
    }

    .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        background-position: center;
        background-size: cover;
        background-color: transparent;

        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }

    .swiper-pagination-bullet {
        width: 5px;
        height:5px;
        text-align: center;
        line-height: 60px;
        font-size: 12px;
        color:#000;
        opacity: 1;
        background: rgba(0,0,0,0.2);
    }
    .swiper-pagination-bullet-active {
        color:#fff;
        background: #24D39A;
        width: 8px;
        height: 8px;
    }

    .swiper-button-prev,
    .swiper-button-next {
        color: #24D39A;
    }

`

