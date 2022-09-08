import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: #403B3B;
    padding-bottom: 1rem;
    padding-top: 1rem;
`

export const ServiceWrapper = styled.div`
    width: 80%;
    color: #eee;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
   
    #avaliacao{
        font-size: 0.8rem;
        margin-left: 6rem;
        font-weight: bold;
    }
    `

export const Service = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-right:3rem;
    margin-top:3rem;
    
    @media screen and (max-width:1280px){
        margin-right:5.5rem;
    }
    @media screen and (max-width:1000px){
        margin-right:1.5rem;
    }
   
   
`

export const InfoService = styled.div`
    margin-top: 0.4rem;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const ServiceTitle = styled.h1`
    margin-bottom: 0.5rem;
`

export const ServiceImage = styled.img`
    width: 250px;
    height: 150px;
`

export const ClientImg = styled.img`
    margin-right: 0.5rem;
    width: 35px;
    border-radius: 50px;
`

export const ClientName = styled.h3`
    font-size: 0.8rem;
`

export const ServicePrice = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;

    align-items: center;
    background-color:rgb(1, 160, 138);
    width: 65px;
    font-size: 14px;
    height: 30px;

`

export const Price = styled.p`

`