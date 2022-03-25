import styled from 'styled-components';

export const Button = styled.button`
    transition: ${({hoverButton}) => (hoverButton ? hoverButton: "auto" )};
    background-color: ${({bgButton}) => (bgButton ? bgButton: "rgb(255, 255, 255,0)" )};
    border: ${({borderButton}) => (borderButton ? borderButton: "1px solid white")};
    width: ${({widthButton}) => (widthButton ? widthButton : "105px")};
    height: ${({heightButton}) => (heightButton ? heightButton : "40px")};
    margin: ${({marginButton}) => (marginButton ? marginButton : "10px")};
    color: ${({colorButton}) => (colorButton ? colorButton : "#fff")};
    border-radius: ${({borderButton}) => (borderButton ? borderButton : "5px")};
    float: ${({floatButton}) => (floatButton ? floatButton : "right")};
    transition: ${({transitionButton}) => (transitionButton ? transitionButton : " 0.3s ease-in")};
    
        &:hover{
            cursor:pointer;
            border: 3px solid white;
        }
`;

export const Login = styled.p`
    color:white;
    font-family: Poppins;
    font-size:16px;
`;