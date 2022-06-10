import styled from 'styled-components'

export const Banner = styled.div`
    height: 60vh;
    width: 100%;
    background: ${({ bgImg }) => (bgImg ? 'url('+bgImg+')' : '')};
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
`

export const MenuUser = styled.div`
    display: flex;
    align-items: center;
    
`
export const Username = styled.p`
    font-size: 1.5rem;
    color:#eee;
    margin-left: 2rem;
 
`
export const UserImg = styled.img`
    width: 100px;
    border-radius: 100px;
    margin-left: 10rem;
    

`