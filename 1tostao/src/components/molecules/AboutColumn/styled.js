import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex; 
    flex-direction: column;
    height: 100vh;
    margin: 0 auto;
    justify-content: center;
    text-align: justify;

    
`

export const Title = styled.div`
    display: flex;
    margin-left: ${({ float }) => ( float === 'left'? '5%' : '0' )};
    margin-right: ${({ float }) => ( float === 'right'? '5%' : '0' )};
    justify-content: ${({ float }) => ( float ? float : 'center' )};
`

export const Paragraph = styled.div`
    display: flex;
    font-size: 17px; 
    font-weight: lighter;
    flex-direction: column;
    width: ${({ width }) => ( width ? width : '' )};
    color: ${({ color }) => (color ? color : 'white')};
    justify-content: ${({ float }) => ( float ? float : 'center' )};
    margin-left: ${({ float }) => ( float === 'left'? '5%' : '0' )};
    margin-right: ${({ float }) => ( float === 'right'? '5%' : '0' )};
    margin-top: 1.7rem;

    p {
        margin-top: 20px;
    }
`