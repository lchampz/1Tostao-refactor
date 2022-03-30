import styled from 'styled-components';


export const Container = styled.div`
    width:100%;
    height:10vh;
    background-color: ${({ bg }) => (bg ? bg : 'rgb(255, 255, 255, 0)')};
    color: ${({ color }) => (color ? color : '')};
    position:fixed;
    z-index: 999;
    display:flex;
    box-shadow: ${({ shadow }) => (shadow ? shadow : '')};
    transition: all 0.2s ease-in;
`;

export const Header = styled.ul`
    width: 165vh;
    align-items: center;
    display: flex;
`

export const Pages = styled.li`
    font-size: 0.9rem;
    margin-right: 40px;
    margin-left: 15px;
    transition: all 0.1s ease-in;
    list-style-type: none;

    &:hover{
        color: #24D39A;
        cursor: pointer;
    }

`

export const Buttons = styled.div`
    width: 15rem;
    justify-content: end;
    align-items: center;
    display:flex;
`
