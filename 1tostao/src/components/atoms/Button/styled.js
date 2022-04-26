import styled from 'styled-components'

export const Btn = styled.div`
    color: ${({colorButton}) => (colorButton ? colorButton : "#ffffff")};
    border: ${({borderButton}) => (borderButton ? borderButton : "1px solid #ffffff")};
    border-radius: ${({radiusButton}) => (radiusButton ? radiusButton : "35px")};
    font-weight: ${({weightButton}) => (weightButton ? weightButton : "normal")};
    font-family: ${({familyButton}) => (familyButton ? familyButton : "Poppins")};
    padding: ${({paddingButton}) => (paddingButton ? paddingButton : "12px")};
    transition: ${({transitionButton}) => (transitionButton ? transitionButton : "ease-in 0.3s")};
    width: ${({widthButton}) => (widthButton ? widthButton : "170px")};
    text-align: center;
    box-sizing: border-box;

    .icon{

        font-size: 0;
        display:flex;
        float:right;
        align-items: center;
        transition: ease-in 0.3s;
        color:#000;
    }

    &:hover{
        cursor: pointer;
        width:200px;
        border: 1px solid #fff;
        background-color:rgb(255, 255, 255, 0.7);
        color:#000;
        border-radius: 35px;

        
        .icon{
            font-size: 1rem;
            margin-left: 15px;
        }
        
        
    }
    
    `
    export const ButtonCard = styled.button`
    margin-top: ${({topButton}) => (topButton ? topButton: "20px")};
    width: ${({widthButton}) => (widthButton ? widthButton: "100%;")};
    border: 0;
    outline:0;
    border-radius: ${({radiusButton}) => (radiusButton ? radiusButton: "25px")};
    height: ${({heightButton}) => (heightButton ? heightButton: "50px")};
    background-color: ${({backgroundColorButton}) => (backgroundColorButton ? backgroundColorButton: "rgb(13, 196, 135)")};
    transition: ${({transitionButton}) => (transitionButton ? transitionButton: "0")};
    padding:5px;

    &:hover{
        cursor: pointer;
    }
`