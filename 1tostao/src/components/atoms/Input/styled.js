import styled from 'styled-components'

export const Input = styled.input`
    width: ${({widthInput}) => (widthInput ? widthInput: "100%")};
    height: 2rem;
    margin-top:10px;
    margin-bottom:35px;
    border-top: ${({borderTop}) => (borderTop ? borderTop: "0")};
    border-left: ${({borderLeft}) => (borderLeft ? borderLeft: "0")};
    border-right: ${({borderRight}) => (borderRight ? borderRight: "0")};
    transition: 0.2s ease-in;

    &:focus{
        outline:0;
        border-top: 0;
        border-left: 0;
        border-right: 0;
        border-bottom: 2px solid rgb(20, 202, 138);
    }
`