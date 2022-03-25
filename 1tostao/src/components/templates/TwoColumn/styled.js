import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex; 
    height: 100vh;
    margin: 0 auto;
    justify-content: center;
    text-align: center;
    padding-top: 14rem;

    margin: 0px 10%;
`

export const First = styled.div`
  width: calc(50% - 130px);

  @media screen and (max-width: 1100px) {
    filter: blur(5px);
    opacity: 0.4;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`

export const Second = styled.div`
  padding-top: 30px;
  width: calc(50% + 180px);
  z-index: 9;
`