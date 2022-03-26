import styled from 'styled-components'

export const Container = styled.div`
@media(min-width:676px){
    max-width:640px;
}
    padding-left:15px;
    padding-right:15px;
    margin-left:auto;
    margin-right:auto;

    display: flex; 
    height: 100%;
    margin: 0 auto;
    justify-content: center;
    text-align: center;
    padding-top: 14rem;


}
`

export const Card = styled.div`
    margin-top:-50px;
    background-color:white;
    width:640px;
    height:100%;
    border-radius:30px;
    padding:70px;
    box-shadow: 5px 5px 5px rgba(36, 36, 36, 0.471);
    
`

export const Label = styled.p`
    font-weight:500;
    font-size: ${({sizeLabel}) => (sizeLabel ? sizeLabel: "16px")};
    text-align: ${({alignLabel}) => (alignLabel ? alignLabel: "left")};
    color: ${({colorLabel}) => (colorLabel ? colorLabel: "black")};
`

export const Input = styled.input`
    width:100%;
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

export const Button = styled.button`
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
        transform: scale(1.05);
        cursor: pointer;
    }
`