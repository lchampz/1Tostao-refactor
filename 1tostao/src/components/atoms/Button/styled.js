import styled from 'styled-components'

export const Btn = styled.div`
    cursor:pointer;
    color: ${({colorButton}) => (colorButton ? colorButton : "#ffffff")};
    border: ${({borderButton}) => (borderButton ? borderButton : "1px solid #ffffff")};
    border-radius: ${({radiusButton}) => (radiusButton ? radiusButton : "35px")};
    font-weight: ${({weightButton}) => (weightButton ? weightButton : "bold")};
    font-family: ${({familyButton}) => (familyButton ? familyButton : "sans-serif")};
    padding: ${({paddingButton}) => (paddingButton ? paddingButton : "12px")};
`