import styled from 'styled-components'

export const Input = styled.input`
    width: ${({widthInput}) => (widthInput ? widthInput: "200%")};
    height: 2rem;
    border-top: ${({borderTop}) => (borderTop ? borderTop: "0")};
    border-left: ${({borderLeft}) => (borderLeft ? borderLeft: "0")};
    border-right: ${({borderRight}) => (borderRight ? borderRight: "0")};
    transition: 0.2s ease-in;
    /* padding-right: ${({paddingRight}) => (paddingRight ? paddingRight: "7rem")}; */
    margin-top: ${({ marginTop }) => (marginTop ? marginTop : '5px')} ;
    padding-left: 30px;
    border-bottom: 2px solid #D9D9D9;

    &:focus{
        outline:0;
        border-top: 0;
        border-left: 0;
        border-right: 0;
        border-bottom: 2px solid rgb(20, 202, 138);
    }
`

export const WrapperInput = styled.div`
    display: ${({ display }) => (display ? display : 'flex')};
    width: 80%;
    margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : '4rem')} ;

    .img {
        display: block;
        position: absolute;
        margin-right: 10px;
        margin-top: -3px;
    }

`

