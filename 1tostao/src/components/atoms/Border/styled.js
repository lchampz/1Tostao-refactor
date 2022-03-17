import styled from 'styled-components'

export const BorderText = styled.div`
    border: ${({border}) => (border ? border : "1px solid #ffffff")};
    width: ${({borderWidth}) => (borderWidth ? borderWidth : "90%")};
    margin-top: ${({topBorder}) => (topBorder ? topBorder: "20px")};
    margin-bottom: ${({bottomBorder}) => (bottomBorder ? bottomBorder: "20px")};


`