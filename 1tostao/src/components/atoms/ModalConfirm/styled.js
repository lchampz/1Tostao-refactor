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
    min-height: 20rem;
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
    color: black;
    font-weight: bold;
    color: rgb(232, 69, 69);
    font-size: 18px;
    border-radius: 1rem;
    padding-right: 0.9rem;
    padding-left: 0.6rem;
    margin-top: 2rem;
    justify-content: center;
    align-items: center;
    width: 85%;
    background-color: rgb(232, 69, 69, 0.3);
    border: 2px solid rgb(232, 69, 69, 0.8);
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
    width: 70%;
    background-color: rgb(36, 211, 154, 0.85);
    color: white;
    height: 2.5rem;
    border-radius: 3rem;
    transition: all 0.3s ease-in;
    margin-top: 1.4rem;

    &:hover {
        color: rgb(36, 211, 154, 0.85);
        background-color: white;
        border: 3px solid rgb(36, 211, 154, 0.85);
        font-weight: bold;

    }

`