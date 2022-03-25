import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    width: ${({ width }) => (width ? width : '100px')};
    height: ${({ height }) => (height ? height : '100px')};
    
`