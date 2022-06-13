import styled from 'styled-components'

export const Wrapper = styled.div`
    height: 70vh;
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
     @media (max-width:765px){
        display:block;
    }

`
export const Username = styled.p`
    font-size: 1.5rem;
    color:#eee;
    margin-left: 17rem;
    margin-bottom: 2rem;
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

    @media (max-width:765px){
        margin-right: 0rem;
    }

    @media (max-width: 445px){
        margin-left: 10rem;
    }

   &:hover {
        color: #24D39A;
        background-color: white;
        border: 3px solid #24D39A;
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

    @media (max-width: 765px){
        margin-left: 17rem;
        margin-right: 1rem;
        margin-top: 0;
    }

    @media (max-width: 600px){
        margin-left: 10rem;
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

    &:first-child { margin-left: 6rem; }
    &:hover{
        border-bottom: 1px solid #eee;
        cursor: pointer;
    }
`
export const AboutUser = styled.div`
    margin-top: 5rem;
    display: flex;
`