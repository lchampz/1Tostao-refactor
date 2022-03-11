import styled from 'styled-components';

export const Title = styled.h1`
    color: ${({colorText}) => (colorText ? colorText : "#ffffff")};
    max-width: ${({maxwidthText}) => (maxwidthText ? maxwidthText : "640px")};
    font-size:${({sizeText}) => (sizeText ? sizeText : "1.9rem")};
    font-weight: ${({weightText}) => (weightText ? weightText : "bold")};

`
