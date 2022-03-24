import styled from 'styled-components'

export const Body = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    background-color: ${({ bg }) => ( bg ? bg: '#ffffff')};

`