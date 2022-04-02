import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex; 
    flex-direction: row;

    @media screen and (max-width: 1100px) {
      padding-top: 20rem;
      flex-direction: column;
      margin: 0 auto;
      align-items: center;
      justify-content: center;
    }
`

export const First = styled.div`
  width: ${({ widthFirst }) => (widthFirst ? widthFirst : '50%')} ;
  margin-left: 3rem;
  

`

export const Second = styled.div`
  width: ${({ widthSecond }) => (widthSecond ? widthSecond : '50%')} ;
`