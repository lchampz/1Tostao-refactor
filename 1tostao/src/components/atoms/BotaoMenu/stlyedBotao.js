import styled from 'styled-components';

export const Button = styled.button`
    background-color: ${({bgButton}) => (bgButton ? bgButton: "rgb(255, 255, 255,0)" )};
    border: ${({borderButton}) => (borderButton ? borderButton: "1px solid white")};
    width: ${({widthButton}) => (widthButton ? widthButton : "90px")};
    height: ${({heightButton}) => (heightButton ? heightButton : "40px")};
    color: ${({colorButton}) => (colorButton ? colorButton : "#fff")};
    border-radius: ${({borderButton}) => (borderButton ? borderButton : "20px")};
    transition: ${({transitionButton}) => (transitionButton ? transitionButton : "all 0.1s ease-in")};

    font-family: 'Poppins';
    font-size:0.9rem;
    margin-right: 15px;

        &:hover{
            cursor:pointer;
            border: 3px solid #24D39A;
            color: #24D39A;
        }
    
`;

