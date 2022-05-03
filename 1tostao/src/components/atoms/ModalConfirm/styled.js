import styled from 'styled-components'

export const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, .85);
    z-index: 999999;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    width: 30rem;
    min-height: 30rem;
    background-color: white;
`

export const Title = styled.div`
    font-size: 1.5em;
    display: flex;
    font-weight: bold;
    text-align: center;
    justify-content: center;
    margin: 0 auto;
    margin-top: 2rem;
`

export const Paragraph = styled.div`
    display: flex;
    margin: 0 auto;
    color: #605F5F;
    font-weight: bold;
    font-size: 14px;
    border-radius: 1rem;
    padding-right: 0.9rem;
    padding-left: 0.6rem;
    margin-top: 2rem;
    justify-content: center;
    align-items: center;
    width: 85%;
    background-color: rgb(36, 211, 154, 0.4);
`

export const WrapperInput = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 0 auto;
    margin-top: 1.7rem;

    input {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
        margin-top: 7px;
        margin-bottom: 5px;
        border-radius: 0.5rem;
        border: 2px solid #605F5F;
        padding: 8px;
        font-size: 1rem;
    }

    input:focus {
        border: 2px solid rgb(36, 211, 154, 0.6);
    }

    label {
        font-size: 14px;
        font-weight: bold;
        color: #605F5F;
    }

    p {
        color: #605F5F;
        font-weight: bold;
        margin-left: 39%;
        font-size: 10px;
        cursor: pointer;
    }

    p:hover{
        color: rgb(36, 211, 154, 1);
    }

    
`

export const WrapperWarning = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 4.6rem;
    margin-top: 1rem;
    width: 50%;

`

export const P = styled.p`
    font-weight: bold;
    
    font-size: 10px;
    color: ${({ color }) => (color ? color : '#605F5F')};
`

export const Button = styled.div`
    display: flex;
    margin: 0 auto;
    text-align: center;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    width: 50%;
    background-color: #24D39A;
    color: white;
    height: 2.5rem;
    border-radius: 3rem;
    transition: all 0.3s ease-in;
    margin-top: 1.4rem;

    &:hover {
        color: #24D39A;
        background-color: white;
        border: 3px solid #24D39A;
        font-weight: bold;

    }

`