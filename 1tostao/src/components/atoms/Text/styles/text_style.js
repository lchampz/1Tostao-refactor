import styled from 'styled-components';

export const Title = styled.h1`
    font-family: 'Poppins';
    color: ${({colorText}) => (colorText ? colorText : "#ffffff")};
    max-width: ${({maxwidthText}) => (maxwidthText ? maxwidthText : "640px")};
    font-size:${({sizeText}) => (sizeText ? sizeText : "1.8rem")};
    font-weight: ${({weightText}) => (weightText ? weightText : "bold")};
    line-height: ${({heightText}) => (heightText ? heightText : "1.1")}

`
