import styled from 'styled-components';


export const Container = styled.div`
    width:100%;
    height:75px;
    background-color: ${({ bg }) => (bg ? bg : 'rgb(255, 255, 255, 0)')};
    color: ${({ color }) => (color ? color : '')};
    position:fixed;
    z-index: 999;
    display:flex;
    align-items: center;

    transition: all 0.2s ease-in;
`;

export const Header = styled.div`
    width: 165vh;
    align-items: center;
    display: flex;
    position: relative;

`

export const Pages = styled.li`
    font-size: 0.9rem;
    margin-right: 40px;
    margin-left: 15px;
    display: block;
    transition: all 0.1s ease-in;
    list-style-type: none;

    &:hover{
        color: #24D39A;
        cursor: pointer;
    }
    @media screen and (max-width:840px){
        display: none;
    }

`

export const Buttons = styled.div`
    width: 15rem;
    justify-content: end;
    align-items: center;
    display:flex;

    @media(max-width:840px){
        display: none;
    }
`

export const HamburguerMenu = styled.div`
    .icon{
        display: none;
        margin-right:30px;
        font-size: 1.8rem;
        color: ${({ color }) => (color ? color : '')};
        float: right;
        transition: all 0.1s ease-in;

        

        &:hover{
            color:#24D39A;
            cursor: pointer;
        }
        @media(max-width:840px){
            display: block;
        }
    }
`

export const MobileMenu = styled.div`
    display: ${({ active }) => (active ? 'block' : 'none')};
    position: fixed;
    width: 100%;
    height: 14rem;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding-top: 45px;
    transition: all 0.1s ease-in;
    background-color: ${({ bg }) => (bg ? bg : '')};
    color: ${({ color }) => (color ? color : '')};
    z-index: 997;

    @media screen and (min-width: 840px) {
        display: none;
    }

    `
export const PagesMenu = styled.li`
    margin-top: 15px;
    padding-bottom: 5px;
    font-size: 0.9rem;

    transition: all 0.1s ease-in;
    list-style-type: none;

    &:first-child{
        padding-top: 25px;
    }

    &:hover{
        color: #24D39A;
        cursor: pointer;
    }
`
