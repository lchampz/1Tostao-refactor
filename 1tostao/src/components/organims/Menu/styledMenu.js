import styled from 'styled-components';


export const Container = styled.div`
    width:100%;
    height:10vh;
    background-color:rgb(255, 255, 255, 0);
    position:fixed;
    z-index: 999;
    display:flex;

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
    color:#fff;
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
