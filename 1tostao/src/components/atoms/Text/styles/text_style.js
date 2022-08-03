import styled from 'styled-components';

export const Title = styled.div`
    

    color: ${({colorText}) => (colorText ? colorText : "#ffffff")};
    max-width: ${({maxwidthText}) => (maxwidthText ? maxwidthText : "640px")};
    font-size:${({sizeText}) => (sizeText ? sizeText : "1.8rem")};
    font-weight: ${({weightText}) => (weightText ? weightText : "bold")};
    line-height: ${({heightText}) => (heightText ? heightText : "1.1")};
    margin-bottom: ${({bottomText}) => (bottomText ? bottomText: "auto")};
    margin-top: ${({marginTop}) => (marginTop ? marginTop : "auto")};
    text-align: ${({alignText}) => (alignText ? alignText : "auto")};
    width: ${({widthh}) => (widthh ? widthh : "auto")};

    .cursor{
        background-color: #fff;
        position: absolute;
        font-size: 20px;
        padding-bottom: 6px;
        
    }
`
export const Paragrafo = styled.p`
    color: ${({parCor}) => (parCor ? parCor: "#fff")};
    font-size: ${({parSize}) => (parSize ? parSize: "16px")};
    line-height: ${({linePar}) => (linePar ? linePar: "2.2")};
`