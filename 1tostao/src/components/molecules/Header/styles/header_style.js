import styled from 'styled-components';

export const Background = styled.div`
display: flex;
flex-direction:column;
background: url('https://wallpapermemory.com/uploads/456/circuit-wallpaper-1080p-89586.jpg')
   
`
export const Container = styled.div`
    display:flex;
    margin: 0 70px;
    height: 100vh;
    align-items:center;
   

    h1{
        display:flex;
    }

    @media(max-width: 1000px){
        margin: 0 30px;
    }
   
`