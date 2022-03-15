import styled from 'styled-components'

export const Btn = styled.div`
    color: ${({colorButton}) => (colorButton ? colorButton : "#ffffff")};
    border: ${({borderButton}) => (borderButton ? borderButton : "1px solid #ffffff")};
    border-radius: ${({radiusButton}) => (radiusButton ? radiusButton : "35px")};
    font-weight: ${({weightButton}) => (weightButton ? weightButton : "bold")};
    font-family: ${({familyButton}) => (familyButton ? familyButton : "sans-serif")};
    padding: ${({paddingButton}) => (paddingButton ? paddingButton : "12px")};
    transition: ${({transitionButton}) => (transitionButton ? transitionButton : "ease-in 0.3s")};
    width: ${({widthButton}) => (widthButton ? widthButton : "177px")};
    box-sizing: border-box;

    .icon{
        opacity:0;
        display:flex;
        float:right;
        transition: ease-in 0.3s;
        color:#000;
    }

    &:hover{
        cursor: pointer;
        width:200px;
        border: 1px solid #fff;
        background-color:rgb(255, 255, 255, 0.67);
        color:#000;
        border-radius: 35px;

        
        .icon{
            opacity:1;
        }
        
        
    }
    
    `
    
