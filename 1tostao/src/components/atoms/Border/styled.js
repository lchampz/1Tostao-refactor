import styled from 'styled-components'

export const BorderText = styled.div`
    border: ${({border}) => (border ? border : "1px solid #ffffff")};
    width: ${({borderWidth}) => (borderWidth ? borderWidth : "30rem")};
    margin: ${({marginBorder}) => (marginBorder ? marginBorder: "20px")};

    @media(max-width: 600px){
        width:20rem;
    }

`