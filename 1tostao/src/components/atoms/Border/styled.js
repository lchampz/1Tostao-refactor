import styled from 'styled-components'

export const BorderText = styled.div`
    border: ${({border}) => (border ? border : "1px solid #ffffff")};
    width: ${({borderWidth}) => (borderWidth ? borderWidth : "90%")};
    margin: ${({marginBorder}) => (marginBorder ? marginBorder: "20px")};


`