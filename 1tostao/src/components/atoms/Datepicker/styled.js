import styled from 'styled-components'

export const WrapperDatepicker = styled.div`
    display: ${({ display }) => (display ? display : 'flex')};
    width: 80%;
    margin-bottom: 4rem;
    margin-top: -2rem;

    .img {
        display: block;
        position: absolute;
        margin-right: 10px;
        margin-top: -3px;
    }

`

export const Button = styled.button`
    color: rgb(96, 95, 95, 0.95);
    background-color: white;
    width: ${({widthInput}) => (widthInput ? widthInput: "100%")};
    height: 2rem;
    border-top: ${({borderTop}) => (borderTop ? borderTop: "0")};
    border-left: ${({borderLeft}) => (borderLeft ? borderLeft: "0")};
    border-right: ${({borderRight}) => (borderRight ? borderRight: "0")};
    transition: 0.2s ease-in;
    padding-right: ${({paddingRight}) => (paddingRight ? paddingRight: "7rem")};
    margin-top: 0;
    padding-left: 30px;
    border-bottom: 2px solid #D9D9D9;

    &:focus{
        outline:0;
        border-top: 0;
        border-left: 0;
        border-right: 0;
        border-bottom: 2px solid rgb(20, 202, 138);
    }

    &:hover{
        color: rgb(96, 95, 95, 0.95);
    }

    p {
        margin-right: 105px;
        white-space: nowrap;
    }
` 

export const Label = styled.label`
    white-space: nowrap;
    text-align: left;
    justify-content: left;
    color: #333333;
    font-size: 14px;
    margin-right: ${({ marginRight }) => (marginRight ? marginRight : '55%')};
    
`