import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

`

export const WrapperTitle = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
    width: 80%;
    margin-top: 5rem;
    font-weight: bold;
    color: white;
    height: 4rem;
    border: 3px solid #24D39A;
`

export const WrapperForm = styled.div`
    display: flex;
    flex-direction: column;
    
    padding-left: 30px;
    width: 80%;
    
    border: 3px solid #24D39A;
    margin-top: 2rem;
`

export const Label = styled.label`
    color: white;
    margin-top: 0.5rem;
    font-weight: bold;
    margin-bottom: 1rem;

    &:first-child {
        margin-top: 1rem;
    }
`

export const Input = styled.input`
    width: 93%;
    color: white;
    border: 3px solid #24D39A;
    padding: 1rem;
    background-color: #292929;
    margin-bottom: 1rem;
    
    ::placeholder {
        font-weight: thin;
        font-size: 14px;
        font-style: italic;
    }
` 

export const WrapperWarning = styled.label`
    border: 3px solid #24D39A;
    width: 96.5%;
    height: 4rem;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    color: white;
    font-weight: bold;
`

export const BtnRegister = styled.label`
    width: 13rem;
    cursor: pointer;
    height: 4rem;
    border: 3px solid #24D39A;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    color: white;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-radius: 2rem;
    transition: all 0.5s ease-in-out;

    &:hover {
        border: 3px solid white;
    }
`