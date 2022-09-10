import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: #403B3B;
    padding-bottom: 2rem;
    padding-top: 1rem;
`

export const ServiceWrapper = styled.div`
    width: 80%;
    color: #eee;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    #avaliacao{
        font-size: 0.8rem;
        font-weight: bold;
    }
    `

export const Service = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 25px;
    width: 275px;
    margin-right:1.5rem;
    margin-top:3rem;
    border: 3px solid #d0d0d0;
    height: 250px;
    transition: 50ms all ease-in;
    background-color: #484848;
    box-shadow:rgba(0, 0, 0, 0.1)  8px 8px 10px;
    
    @media screen and (max-width:1280px){
        margin-right:4rem;
    }
    @media screen and (max-width:1000px){
        margin-right:1.5rem;
    }
   
    &:hover{
        border: 3px solid rgb(1, 220, 138);
        box-shadow: rgb(1, 220, 138, 0.1)  5px 5px 10px;
      
    }
   
`

export const InfoService = styled.div`
    margin-top: 0.4rem;
    width: 92%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const ServiceTitle = styled.h1`
    margin-bottom: 0.5rem;
    text-align: center;
    width: 250px;
`

export const ServiceImage = styled.img`
    width: 250px;
    border-radius: 7px;
    height: 150px;
    transition: 0.1s all ease-in;
    box-shadow:rgba(0, 0, 0, 0.40)  5px 5px 10px;
  
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
    border-top-right-radius: 7px;
    

`

export const Price = styled.p`

`