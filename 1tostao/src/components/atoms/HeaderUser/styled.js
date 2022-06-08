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
    flex-direction: row;
    align-items: center;
    position: relative;
    
`
export const Username = styled.p`
    font-size: 1.5rem;
    color:#eee;
    margin-left: 2rem;
 
`
export const UserImg = styled.img`
    width: 150px;
    border-radius: 100px;
    margin-left: 10rem;
    

`