import styled from 'styled-components'

export const WrapperSelect = styled.div`
    display: ${({ display }) => (display ? display : 'flex')};
    width: ${({ width }) => (width ? width : '100%')};
    margin-right: ${({ marginRight }) => (marginRight ? marginRight : null)};
    margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : null)};
` 