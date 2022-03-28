import styled from 'styled-components';

export const Title = styled.div`
    
    color: ${({colorText}) => (colorText ? colorText : "#ffffff")};
    max-width: ${({maxwidthText}) => (maxwidthText ? maxwidthText : "640px")};
    font-size:${({sizeText}) => (sizeText ? sizeText : "1.8rem")};
    font-weight: ${({weightText}) => (weightText ? weightText : "bold")};
    line-height: ${({heightText}) => (heightText ? heightText : "1.1")};
    margin-bottom: ${({bottomText}) => (bottomText ? bottomText: "auto")};

    .cursor{
        background-color: #fff;
        position: absolute;
        font-size: 20px;
        padding-bottom: 6px;
        
    }
`
