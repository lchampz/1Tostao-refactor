import styled from "styled-components";

export const Container = styled.div`
  background-color: #403B3B;
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #eee;
`
export const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

 
  width: 100%;
  padding-bottom: 1rem;
  .img {
        display: block;
        position: block;
        z-index: 999;
    }
    
    @media screen and (max-width:480px){
    margin-top: 2rem;
  }
  
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #f8f8f8;
  width: 500px;
  height: 40px;
  border-radius: 1.2rem;
  align-items: center;
  width: 80%;
  
  @media screen and (max-width:480px){
    flex-wrap: wrap;
  }
  
`

export const InputArea = styled.div`
  display: flex;
  flex-direction:row;
  align-items: center;
`

export const Search = styled.input`
  height: 2.5rem;
  margin-left: 0.5rem;
  z-index: 1;
  border: none;
  font-size: 1rem;
  width: 825px;
  color: #f8f8f8;
  
  
  background-color: rgba(1,1,1,0.0);

  &:focus{
    outline: none;
  }
  &::placeholder{
    color: #d1d1d1;
  }

  @media screen and (min-width: 1281px) {
    width: 1100px;
  }

  @media screen and (max-width:480px){
    width: 75%;
  }
`
export const DropDown = styled.div`
  border-left: 1px solid #f8f8f8;
  height: 2.5rem;
  color: #f8f8f8;
  align-items: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  
  @media screen and (max-width:480px){
    border: 1px solid #f8f8f8;
    border-radius: 1.2rem;
    width: 150px;
    margin-top: 0.5rem;
  
   
  }
`

export const Text = styled.h1`
  margin-left: 5px;
  cursor: pointer;
`
export const Filtered = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  flex-wrap: wrap;
  color: #fff;
  @media screen and (max-width:480px){
      margin-top: 2rem;
    
  }

  #filter{
    margin-right: 1rem;
    margin-top: 1rem;
  }
 
`
export const Filters = styled.div`
  border: 1px solid #fff;
  border-width: 100%;
  flex-direction: row;
  display: flex;
  margin-right: 0.5rem;
  margin-top: 1rem;
  border-radius: 1rem;
  align-items: center;
  justify-content: center;
  height: 30px;


 #filtered{
  margin-right: 1rem;
 }
`

export const FilterMenu = styled.div`
  z-index: 999;
  background-color: #fff;
  width: 50%;
  height: 100%;
  overflow: auto;
  position: fixed;
  top: 0;
  right: -100%;
  transition: 850ms;
  display: flex;
  flex-direction: column;
  
  @media screen and (max-width: 650px) {
      width: 100%;
  }
`
export const Title = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 1.7rem;
  margin-top: 2.4rem;
  align-items: center;
  transition: 850ms;

  @media screen and (max-width:650px) {
    
      margin-left: 0rem;
     
    }
  

  &:nth-child(2){

    margin-top: 3rem;
  }
  .flecha{
    transition: 200ms;
    &:hover{
      color: rgb(20, 202, 138);
    }
  }

  .close{
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    &:hover{
      color: rgb(20, 202, 138);
    }
  }

`

export const ApliedFilters = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
  flex-wrap:wrap;
  margin-right: 1rem;
  margin-left: 1.8rem;
  align-items: center;
  @media screen and (max-width:650px) {
      margin-left: 1rem;
      margin-right: 1rem;
    }
  #applied-filter{
    margin-right: 0.5rem;
    margin-top: 1rem;
  }
  
`
export const Titles = styled.h1`
    color: #000;
    font-weight: bold;
    font-size: 1.5rem;
    
    @media screen and (max-width:650px) {
      margin-left: 1rem;
      margin-right: 1rem;
    }
`

export const Close = styled.h1`
    color: #000;
    font-weight: bold;
    font-size: 1.3rem;
    cursor: pointer;
    
    &:hover{
      color: rgb(20, 202, 138);
    }
`

export const Ordenado = styled.div`
  display: flex;
  flex-direction: column;
  transition: 850ms;

  .ordenado{
    margin-left:1.8rem;
    margin-top: 1rem;
    cursor: pointer;
    @media screen and (max-width:650px) {
      margin-left: 1rem;
      margin-right: 1rem;
    }
    &:hover{
      
      color:rgb(20, 202, 138);
    }
  }
  
  
`

export const ApplyFilters = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.7rem;
  font-weight: 0;

`


export const Categorias = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    margin-left: 2rem;
    margin-right: 5rem;

    @media screen and (max-width:650px) {
      margin-left: 1rem;
      margin-right: 1rem;
    }
    .categoria{
      margin-top: 1rem;
    }
    .checkbox{
      margin-top: 1.15rem;
      margin-right: 1.5rem;
      cursor: pointer;
      height: 17px;
      width: 17px;
  
      
      &:checked ~ .checkbox{
        background-color: rgb(20, 202, 138);
      }
    }

`
export const Buttons = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  margin-left: 1.7rem;
  align-items: center;
  margin-top: 2rem;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width:650px) {
      margin-left: 1rem;
      margin-right: 1rem;
    }
`

export const Aplicar = styled.input`
  cursor: pointer;
  width: 300px;
  height: 50px;
  background-color: #000;
  margin-bottom: 1rem;
  color: #fff;
  font-size: 1rem;
  
`
export const Remove = styled.h1`
  color: gray;
  margin-left: 1rem;
  font-weight:bold;
  cursor: pointer;

`

