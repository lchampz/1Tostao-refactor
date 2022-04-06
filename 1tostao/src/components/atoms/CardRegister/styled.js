import styled from 'styled-components'

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
    
    
`

export const Wrapper = styled.div`
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 1.5rem; 
    margin-right: 1.5rem ;
    margin-top: 10rem;
    width: 30rem;
    height: 37rem;
    background-color: white;
    box-shadow: 1px 4px 13px 3px rgba(0, 0, 0, 0.25);
    margin-bottom: 5rem;

    @media screen and (max-width:1280px) {
        margin-bottom: 8rem;
    }

    @media screen and (max-width: 500px) {
        margin-top: 15rem;
        margin-bottom: 11rem;
    }

    p {
        font-size: 14px;
        padding-bottom: 15px; 

        &:hover {
            cursor: pointer;
            color: #24D39A;
            font-weight: bold;
        }
    }
`

export const WrapperInput = styled.div`
    display: flex;
    margin-top: 4rem;
    align-items: center;
    height: 100%; 
    width: 100%;
    flex-direction: column;
    text-align: left;
    justify-content: center;
    flex: 1;

`

export const Label = styled.label`
    text-align: left;
    justify-content: left;
    margin-top: -2rem;
    color: #333333;
    font-size: 14px;
    margin-right: ${({ marginRight }) => (marginRight ? marginRight : '55%')};
    
`

export const Button = styled.div`
    display: flex;
    text-align: center;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    width: 80%;
    background-color: #24D39A;
    color: white;
    height: 5rem;
    margin-top: -2.8rem;
    margin-bottom: 0.8rem;
    border-radius: 3rem;
    transition: all 0.3s ease-in;

    &:hover {
        color: #24D39A;
        background-color: white;
        border: 3px solid #24D39A;
        font-weight: bold;

    }

`



