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