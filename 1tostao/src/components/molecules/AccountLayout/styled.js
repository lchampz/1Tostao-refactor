import styled from 'styled-components'

export const Wrapper = styled.div`
    padding-top: 7rem;
    
`

export const Title = styled.span`
    color: ${({ color }) => (color ? color : 'white')};
    font-size: 64px;
    font-weight: bold;
    margin-left: 5rem;

    @media only screen and (max-width: 1000px) {
        font-size: 44px;
    }

    @media only screen and (max-width: 650px){
        display: flex;
        text-align: center;
        justify-content: center;
        margin-left: 0;
    }
`

export const WrapperItems = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 5rem;
    justify-content: space-between;
    row-gap: 2rem;
`

export const WrapperInputs = styled.div`
    display: flex;
    flex-direction: column;
    
    margin-left: ${({ marginLeft }) => (marginLeft)};


    @media only screen and (max-width: 750px) {
        margin: 0 auto;
        margin-top: ${({ marginTop }) => (marginTop)};
    }

` 

export const WrapperBtns = styled.div`
    display: flex;
    flex-direction: column;
    
    @media only screen and (max-width: 750px) {
        margin: 0 auto;
        align-items: center;
    }
`

export const Input = styled.input`
    width: 300px;
    height: 30px;
    border-radius: 8px;
    border: 3px solid #353131;
    background-color: #525252; 
    color: white;
    font-weight: bold;
    margin-top: 5px;
    font-size: 15px;
    padding: 15px;

    outline: none;
`

export const Label = styled.span`
    color: ${({ color }) => (color ? color : '#24d39a')};
    padding-left: 2px;
    margin-top: 1rem;
    font-weight: bold;
    font-size: 18px;

    @media only screen and (max-width: 750px) {
        margin: 0 auto;
        margin-top: 1rem;
    }

`

export const IconEmpty = styled.div`
    width: ${({ width }) => (width)};
    height: ${({ height }) => (height)} ;
    background-color: #525252;
    margin-top: 1rem;
    
    @media only screen and (max-width: 750px) {
        margin: 0 auto;
        margin-top: 1rem;
        width: ${({ resWidth }) => (resWidth)}
    }
`

export const Button = styled.div`
    width: 170px;
    height: 40px;
    background-color: #24d39a;
    color: white;
    margin-top: 1rem;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s linear;
    margin-bottom: 15rem;

    &:hover{
        border: 3px solid #24d39a;
        background-color: transparent;
        color: #24d39a;
        -webkit-box-shadow: 1px 1px 18px -6px rgba(36,211,154,0.31); 
        box-shadow: 1px 1px 18px -6px rgba(36,211,154,0.31);
    }

    @media only screen and (max-width: 800px) {
        margin-bottom: 1rem;
    }

`

export const AlterBtn = styled.span`
    cursor: pointer;
    margin-top: 1rem;
    color: ${({ color }) => (color ? color : 'white')};
    font-size: 16px;
    font-weight: bold;
`