import styled from 'styled-components';

export const Button = styled.button`
    background-color: ${({bgButton}) => (bgButton ? bgButton: "rgb(255, 255, 255,0)" )};
    border: ${({borderButton}) => (borderButton ? borderButton: "1px solid white")};
    width: ${({widthButton}) => (widthButton ? widthButton : "105px")};
    height: ${({heightButton}) => (heightButton ? heightButton : "40px")};
    margin: ${({marginButton}) => (marginButton ? marginButton : "10px")};
    color: ${({colorButton}) => (colorButton ? colorButton : "#fff")};
    border-radius: ${({borderButton}) => (borderButton ? borderButton : "5px")};
    float: ${({floatButton}) => (floatButton ? floatButton : "right")};
    
        &:hover{
            cursor:pointer;
        }
`;

export const Login = styled.p`
    color:white;
    font-family: arial;
    font-size:16px;
`;