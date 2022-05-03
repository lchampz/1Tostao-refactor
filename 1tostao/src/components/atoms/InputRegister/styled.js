import styled from 'styled-components'

export const Label = styled.label`
    display: ${({ display }) => (display ? display : '')};
    text-align: left;
    justify-content: left;
    margin-top: ${({ marginTop }) => (marginTop ? marginTop : '-2rem')} ;
    color: #333333;
    font-size: 14px;
    margin-right: ${({ marginRight }) => (marginRight ? marginRight : '55%')};
    
`