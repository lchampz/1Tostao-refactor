import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    #aviso{
        color: #24d39a;
        font-weight: bold;
        font-size: 1.6;
        margin-bottom: 2rem;
    }
`

export const Send = styled.p`
    margin-top: 7rem;
    color: ${({ color }) => (color ? color : 'white')};
    font-size: 45px;
    font-weight: bold;
    
    @media only screen and (max-width: 1000px) {
        font-size: 30px;
    }
    @media screen and (max-width:500px) {
        font-size:24px;
        
    }
    @media screen and (max-width:430px) {
        font-size:20px;
        
    }
`

export const Card = styled.div`
    background-color: #525252;
    width: 450px;
    height: 510px;
    border: 1px solid #525252;
    border-radius: 1.5rem;
    margin: 2rem;
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;

    @media screen and (max-width:500px) {
        width: 400px;
    }
    @media screen and (max-width:430px) {
        width: 325px;
    }
    

`

export const Forms = styled.div`
    display: flex;
    flex-direction: column;
    
`

export const FormMessage = styled.input`
    width: 375px;
    height: 30px;
    border-radius: 8px;
    border: 0px;
    background-color: #717171; 
    color: white;
    font-weight: bold;
    margin-top: 5px;
    font-size: 15px;
    padding: 15px;
    outline: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

    @media screen and (max-width:500px) {
        width: 320px;
        
    }
    @media screen and (max-width:430px) {
        width: 270px;
        
    }
`

export const Label = styled.span`
    color: ${({ color }) => (color ? color : '#24d39a')};
        justify-content: flex-start;
        float: left;
        margin-top: 2rem;
        font-weight: bold;
        font-size: 18px;
       
`

export const Message = styled.textarea`
    width: 375px;
    height: 200px;
    border-radius: 8px;
    
    background-color: #717171; 
    color: white;
    font-weight: bold;
    margin-top: 5px;
    font-size: 15px;
    padding: 15px;
    resize: none;
    outline: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

    @media screen and (max-width:500px) {
        width: 320px;
        
    }
    @media screen and (max-width:430px) {
        width: 270px;
        
    }
`
export const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`
export const Botao = styled.input`
    margin-top: 1rem;
    color: ${({ color }) => (color ? color : '#A9A9A9')};
    background: none;
    cursor: auto;
    border: 3px solid #A9A9A9;
    margin-top: 2rem;
    width: 175px;
    height: 30px;
    font-size: 16px;
    border-radius: 10px;
    font-weight: bold;
    transition: 0.1s all ease-in;
    margin-bottom: 2rem;

   
    @media screen and (max-width:500px) {
        margin-top: 2rem;
    }
    @media screen and (max-width:430px) {
        margin-bottom: 1rem;
        margin-top: 1.6rem;
   
    }
  
    
`