import styled from 'styled-components'

export const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, .85);
    z-index: 999999;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
`

export const Wrapper = styled.div`
    border-radius: 40px;
    display: flex;
    width: 30rem;
    min-height: 22rem;
    background-color: white;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`

export const Button = styled.div`
    width: ${({ oneBtn }) => oneBtn ? '100%' : '50%'};
    height: ${({ size }) => (size ? size : '60%')};
    border-radius: ${({ left, oneBtn }) => oneBtn ? '0px 0px 40px 40px' : (left ? '0px 0px 0px 40px' : '0px 0px 40px 0px')} ;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    align-self: flex-end;
    color: white;
    cursor: pointer;
    font-weight: bold;
    background-color: ${({ bgColor, disabled }) => disabled ? '#303030' : (bgColor ? bgColor : '#24D39A')};
    transition: all 0.5s ease-in-out;
    opacity: ${({ disabled }) => disabled ? '0.8' : null};

    &:hover {
        width: ${({ oneBtn, disabled }) => disabled ? '' :(oneBtn ? '100%' : '80%')};
        opacity: ${({ disabled }) => disabled ? '0.8' : null};
    }
`