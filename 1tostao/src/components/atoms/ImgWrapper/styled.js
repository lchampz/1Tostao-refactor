import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    width: ${({ width }) => (width ? width : '100px')};
    height: ${({ height }) => (height ? height : '100px')};
    float: ${({ float }) => (float ? float : '')};
    cursor: ${({ cursor }) => (cursor ? cursor : '')};
    margin: ${({ margin }) => (margin ? margin : '')};
    transform: ${({ transform }) => (transform ? transform : '')};

    img{
        width: 100%;
        height: 100%;
    }
`