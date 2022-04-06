import styled from 'styled-components'

export const Wrapper = styled.div`
    display: ${({ display }) => (display ? display : 'flex')};
    width: ${({ width }) => (width ? width : '100px')};
    height: ${({ height }) => (height ? height : '100px')};
    float: ${({ float }) => (float ? float : '')};
    cursor: ${({ cursor }) => (cursor ? cursor : '')};
    margin: ${({ margin }) => (margin ? margin : '')};
    transform: ${({ transform }) => (transform ? transform : '')};
    position: ${({ position }) => (position ? position : '')}
    transition: all 0.5s ease-in-out;


    img{
        width: ${({ imgWidth }) => (imgWidth ? imgWidth : '')};
        height: ${({ imgHeight }) => (imgHeight ? imgHeight : '')};
    }
`