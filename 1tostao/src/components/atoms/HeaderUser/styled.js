import styled from 'styled-components'
import avaliacoes from "../../../assets/img/avaliacoes.png";


export const Wrapper = styled.div`
    height: 100%;
`
export const Banner = styled.div`
    height: 60vh;
    width: 100%;
    background: ${({ bgImg }) => (bgImg ? 'url('+bgImg+')' : '')};
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
`

export const MenuImg = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    
    `
export const MenuUser = styled.div`
     display: flex;
     @media (max-width:845px){
        display:block;
    }

`
export const Username = styled.p`
    font-size: 1.5rem;
    color:#eee;
    margin-left: 17rem;
    margin-bottom: 1rem;
    margin-top: 1.3rem;

    @media (max-width: 600px){
        margin-left: 11rem;
    }
 
`
export const UserImg = styled.img`
    width: 120px;
    position: absolute;
    border-radius: 100px;
    margin-left: 8rem;

    @media (max-width: 600px){
        margin-left: 2rem;
    }
    

`

export const Contratar = styled.button`
    margin-top: 1.1rem;
    height: 2rem;
    width: 8rem;
    border: 1px solid #000;
    background-color: #24D39A;
    border-radius: 10px;
    font-size: 1rem;
    transition: 0.1s all ease-in;
    margin-left: auto;
    margin-right: 12rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    @media (max-width:1280px){
        margin-right: 8rem;
       
    }

    @media (max-width:845px){
        margin-right: 0rem;
    }


   &:hover {
        color: #24D39A;
        background-color: white;
        border: 2px solid #24D39A;
        font-weight: bold;
        cursor: pointer;

    }
`
export const Mensagem = styled.button`
    margin-top: 1.3rem;
    width: 8rem;
    margin-left: 0.9rem;
    border-radius: 10px;
    height: 1.5rem;
    color: #a9a9a9;
    font-weight: 100;
    background-color: #474a51;
    border: none;

    @media (max-width: 845px){
        margin-left: 17rem;
        margin-right: 1rem;
        margin-top: 0;
    }

    @media (max-width: 600px){
        margin-left: 1.7rem;
    }


    &:hover{
        cursor: pointer;
        color:#eeeeee;
    }
    
`

export const Sections = styled.h2`
    font-size: 1.2rem;
    color: #24D39A;
    margin-right:3rem;
    margin-bottom: 2rem;
    &:first-child { margin-left: 3rem; }
    &:hover{
        cursor: pointer;
    }
`
export const AboutUser = styled.div`
    margin-top: 3rem;
    display: flex;
`
export const Jobs = styled.div`

`

export const About = styled.div`
   
`
export const AboutInfos = styled.div`
 display: flex;
 @media screen and (max-width:850px) {
       flex-direction:column;

        
    }
`

export const AboutInfo = styled.div`
    color:#24D39A;
    border-top: 1px solid #808080;
    border-bottom: 1px solid #808080;
    border-right: 1px solid #808080;
    width: 60%;
    height: 300px;
    @media screen and (max-width:850px) {
        width:100%;
        
    }
    .title{
        margin-top: 2rem;
        margin-left: 3rem;
        font-size: 1.4rem;
       
    }
    .desc{
        color:#bdbebd;
        margin-top: 2rem;
        margin-left: 3rem;
        margin-right: 6rem;
        font-size: 1.1rem;
        max-height: 100px;
        max-width: 65rem;

        @media (max-width: 520px){
            font-size: 0.8rem;
    }
    @media (max-width: 400px){
            font-size: 0.7rem;
    }




    }
    .data{
        color:#24D39A;
        margin-left: 3rem;
        font-size: 1rem;
        margin-top: 5rem;
        
    }
`
export const AboutContact = styled.div`
    color:#24D39A;
    border-top: 1px solid #808080;
    border-bottom: 1px solid #808080;
    width: 40%;
    height: 300px;
    @media screen and (max-width:850px) {
        width:100%;
    }

    .contacts{
        display: flex;
        flex-direction: row;
        
    }
    .title{
        margin-top: 2rem;
        margin-left: 3rem;
        font-size: 1.4rem;
    }
    .redesS{
        display: flex;
        flex-direction: column;
    
    }
    .infoC{
        &:first-child { margin-top:0.8rem}
        margin-bottom: 3.8rem;
        
        font-size: 1rem;

        
    }
    .redes{
        margin-right: 2rem;
        &:first-child { margin-top:1.32rem }
        margin-bottom: 2.5rem;
        width: 2.3rem;
        margin-left: 3rem;
    }
`
export const Avaliatons = styled.div`
    background-image: url(${avaliacoes});
    background-repeat: no-repeat;
    background-size: 25rem;
    background-position: center center;

    @media screen and (max-width:550px) {
        background-size: 18rem;
        
    }

    .title{
        color:#24D39A;
        margin-top: 2.5rem;
        margin-left: 3rem;
        font-size: 1.4rem;
    }
    .imageA{
        opacity: 0.4;
        width: 20rem;
        z-index: 0;
        display: flex;
        margin: 0 auto;

    }
   
`

export const Reviews = styled.div`
    height: 80vh;
`