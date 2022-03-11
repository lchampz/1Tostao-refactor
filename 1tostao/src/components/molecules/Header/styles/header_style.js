import styled from 'styled-components';

export const Background = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    justify-content: center;
    flex-direction:column;
    background-size: contain;
    background: url('https://images3.alphacoders.com/118/thumb-1920-1185634.jpg');
   
`
export const Container = styled.div`
    display:flex;
    flex-direction:column;
    margin: auto;
    align-items:center;

    h1{
        display:flex;
    }

    @media(max-width: 1000px){
        margin: 0 30px;
    }
   
`