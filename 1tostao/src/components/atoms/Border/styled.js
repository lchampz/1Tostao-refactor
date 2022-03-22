import styled from 'styled-components'

export const BorderText = styled.div`
    border: ${({ border, size, color}) => (border ? border : (size && color ? `${size} solid ${color}` :`1px solid white`))};
    width: ${({borderWidth}) => (borderWidth ? borderWidth : "90%")};
    margin-top: ${({topBorder}) => (topBorder ? topBorder: "20px")};
    margin-bottom: ${({bottomBorder}) => (bottomBorder ? bottomBorder: "20px")};


`