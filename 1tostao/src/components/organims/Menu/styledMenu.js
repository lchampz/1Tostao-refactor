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
    @media screen and (max-width:960px){
        display: none;
    }

`

export const Theme = styled.div`
    display: ${({ config }) => (config ? 'flex' : 'none')};
    height: 100px;
    width: 140px;
    background-color: ${({ bg }) => (bg ? bg : 'rgb(255, 255, 255, 0)')};
    color: ${({ color }) => (color ? color : '')};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease-in;
    margin-right: 5px;
    margin-left: 5px;
    z-index: 996;
    border-radius: 0px 0px 40px 40px;

    @media(max-width:960px){
        width: 220px;
    }

    @media(max-width:600px){
        width: 650px;
    }
    @media(max-width:470px){
        width: 2400px;
    }

    .tema{
        margin:0;
        @media(max-width:960px){
            display:block;
        }
    }

`

export const Config = styled.div`
display: flex;
margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : '0px')};
align-items: center;
transition: all 0.2s ease-in;

    @media(max-width:960px){
        margin-right: 1.8rem;
    }
    .arrowLeft{
        font-size: 1.5rem;
        display: ${({ config }) => (config ? 'block' : 'none')}
        
       
    }
    .arrow{
        font-size: 1.5rem;
        display: ${({ config }) => (config ? 'none' : 'block')}
        
    }
    .config{
        font-size: 1rem;
        margin-left: 0.2rem;
        
       
    }
    &:hover{
            cursor: pointer;
            color:#24D39A;
        }

`

export const Buttons = styled.div`
    width: 15rem;
    justify-content: end;
    align-items: center;
    display:flex;
    margin-left: 3rem;



    @media(max-width:960px){
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
        @media(max-width:960px){
            display: block;
        }
    }
`

export const MobileMenu = styled.div`
    display: ${({ active }) => (active ? 'block' : 'none')};
    position: fixed;
    width: 100%;
    right: 0;
    height: 15rem;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding-top: 35px;
    background-color: ${({ bg }) => (bg ? bg : '')};
    color: ${({ color }) => (color ? color : '')};
    z-index: 997;
    -webkit-transform: ${({active}) => (active ? 'translate(0, 0)' : 'translate(100%, 0)')};
    transform: ${({active}) => (active ? 'translate(0, 0)' : 'translate(100%, 0)')};
    transition: transform all 0.3s ease-out;

    @media screen and (min-width: 960px) {
        display: none;
    }

    `
export const PagesMenu = styled.li`
    margin-top: 15px;
    border-bottom: 1px solid #737373;
    padding-bottom: 5px;
    font-size: 0.9rem;
    transition: all 0.1s ease-in;
    list-style-type: none;

    &:first-child{
        padding-top: 25px;
    }
    &:last-child{
        border-bottom: 4px solid #818181;
    }

    &:hover{
        color: #24D39A;
        cursor: pointer;
        border-bottom: 4px solid #24D39A;
    }
`

