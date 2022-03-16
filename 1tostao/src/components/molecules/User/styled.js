import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    height:400px;
    background-color: #ffffff;
    margin-top:50px;
    
`

export const Title = styled.h1`
    align-items:center;
    max-width:600px;
    font-size:2rem;
    font-weight: bold;
    color: #000000;
    padding-top: 35px;
    margin-left:100px;
    display:flex;


`
export const Text = styled.p`
    width:480px;
    font-size:2rem;  
    font-style:italic;
    margin: 0 auto;
    padding-top: 50px;
    line-height: 1.3;

    .icon{
        margin-left: 10px;
    }

`
export const Pane = styled.div`
width:50%;
@media (max-width: 1000px){
    width: 100%;
    padding: 0 45px;
    text-align:center;
}
`
export const Image = styled.img`

`