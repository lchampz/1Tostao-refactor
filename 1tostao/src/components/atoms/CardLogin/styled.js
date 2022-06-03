import styled from 'styled-components';

export const Form = styled.div`

`
export const InputEmail = styled.input`

`
export const InputSenha = styled.input`
`

export const Container = styled.div`
    height: 120vh;
    display: flex;
    align-items: center;
    justify-content: center;
   
    background: ${({ bgImg }) => (bgImg ? 'url('+bgImg+')' : '')};
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
    transition: all 0.8 ease-in-out;
`
export const Wrapper = styled.div`
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 1.5rem; 
    margin-right: 1.5rem ;
    margin-top: 1rem;
    width: 30rem;
    height: 37rem;
    background-color: white;
    box-shadow: 1px 4px 13px 3px rgba(0, 0, 0, 0.25);


    @media screen and (max-width:1280px) {
        margin-bottom: 8rem;
    }

    @media screen and (max-width: 500px) {
        margin-top: 15rem;
        margin-bottom: 11rem;
    }

    p.login {
        font-size: 14px;
        padding-bottom: 15px; 

        &:hover {
            cursor: pointer;
            color: #24D39A;
            font-weight: bold;
        }
    }
    p.cadastro {
        font-size: 14px;

        &:hover {
            cursor: pointer;
            color: #24D39A;
            font-weight: bold;
        }
    }
    p.esquecer {
        font-size: 14px;
        float:right;


        &:hover {
            cursor: pointer;
            color: #24D39A;
            font-weight: bold;
        }
    }

    
`


export const Botao = styled.button`
display: flex;
    text-align: center;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    width: 80%;
    background-color: #24D39A;
    color: white;
    height: 5rem;
    margin-top: -2.8rem;
    margin-bottom: 2rem;
    border: none;
    border-radius: 3rem;
    transition: all 0.3s ease-in;

    &:hover {
        color: #24D39A;
        background-color: white;
        border: 3px solid #24D39A;
        font-weight: bold;

    }
`

export const WrapperInput = styled.div`
    width: 100%;
    flex-direction: column;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    padding-top: 7rem;
`
export const TextLogin = styled.p`
    font-size: 1.6rem;
    font-weight: bold;
`