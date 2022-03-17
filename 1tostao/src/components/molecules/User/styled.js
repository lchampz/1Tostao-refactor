import styled from "styled-components";

export const Container = styled.div`

.swiper {
        width: 100%;
        height: 100%;
        background-color: transparent;
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

    width:100%;
    height:400px;
    background-color: #ffffff;
    justify-content:space-between;
    margin:auto;
    box-sizing: border-box;
    @media (max-width:770px){
        flex-direction: column;
        height:600px;
        
    }
`

export const Title = styled.h1`
    max-width:770px;
    font-size:2rem;
    font-weight: bold;
    color: #000000;
    padding-top: 35px;
    margin-left:100px;
    display:flex;


`
export const Text = styled.p`
    width:480px;
    font-size:2rem;  
    font-style:italic;
    padding-top: 50px;
    line-height: 1.3;

    @media(max-width:770px){
        width:300px;
        font-size:1.5rem;
    }

    .icon{
        margin-left: 10px;
    }

`
export const Pane = styled.div`

    width:50%;
    @media (max-width: 770px){
        width: 100%;
    }
`
export const Image = styled.img`

    max-width:180px;
    border-radius:100px;


`

export const Align = styled.div`
    flex-wrap:wrap;
    

`