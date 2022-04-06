import styled from "styled-components";
import { keyframes } from "styled-components";

const op = keyframes`
    0% { opacity: 0},
    100% { opacity: 1 }
`;

export const Container = styled.div`

.swiper {
        width: 100%;
        height: 100%;
        background-color: transparent;
    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;
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
    height:430px;
    background-color: ${({ bgCard }) => ( bgCard ? bgCard : '#ffffff')};
    margin-top:45px;
    @media (max-width:1000px){
        flex-direction: column;
        height:700px;
        
    }

    animation: ${op} 1.8s ease-in;

    `
    export const Align = styled.div`
    flex-wrap:wrap;
    display:flex;

    @media(max-width:1000px){
        display:block;
    }
    
    
    `
    export const Pane = styled.div`

        .image{
            width:30%;
        }

        .text{
            width:70%
        }

        .name{
              padding-left:30px;
              padding-top:20px;

              @media(max-width:1000px){
                  padding-left: 0;
              }
        }

        .star{
            margin:2px;
            color: #F8BF61;
        }
  
        @media (max-width: 1000px){
            width: 100%;
        }
    `
    
    export const Title = styled.h1`
    max-width:1000px;
    font-size:2rem;
    font-weight: bold;
    color: ${({ color }) => (color ? color : 'black')};
    padding-top: 35px;
    margin-left:100px;
    display:flex;
    
    @media(max-width:1000px){
        margin-left: 50px;
    }
    
    `

    
export const Div = styled.div`
    margin-left:100px;

    @media(max-width:1000px){
        margin-left: 50px;
    }
`

    export const Text = styled.p`
    width:480px;
    font-size:2rem;  
    font-style:italic;
    padding-top: 50px;
    padding-left:20px;
    line-height: 1.3;
    color: ${({ fontColor }) => (fontColor ? fontColor : 'black')};
    
    @media(max-width:1000px){
        width:300px;
        font-size:1.5rem;
    }
    
    .icon{
        margin-left: 10px;
    }

`
export const Image = styled.img`
    margin:30px 0px 0px 30px;
    max-width:180px;
    border-radius:100px;

    @media(max-width:1000px){
        margin:15px 0 0 0;
    }

`
