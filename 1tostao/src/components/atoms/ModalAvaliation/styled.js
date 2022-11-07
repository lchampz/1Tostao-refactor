import styled from "styled-components";

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.85);
  z-index: 999999;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  width: calc(30% + 10rem);
  min-width: 30rem;
  max-width: 50rem;
  min-height: 22rem;
  background-color: white;
  border-radius: 1rem;
 
  flex-direction: column;
  
  text-align: center;
`;

export const Button = styled.div`
  width: 200px;
  height: 30px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ disabled }) => disabled ? '#878787' : '#24d39a'};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.4s ease-in-out;

  &:hover {
    border:${({ disabled }) => disabled ? '#878787' : ' 1px solid #24d39a'};;
    color: ${({ disabled }) => disabled ? 'white' : '#24d39a'};
    background-color: ${({ disabled }) => disabled ? '#878787' : 'white'};
    cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  }
`;

export const Close = styled.div`
  height: 20px;
  width: 20px;
  position: relative;
  cursor: pointer;
  margin-top: 20px;

  &::after, &::before{
    position: absolute;
    content: '';
    width: 100%;
    height: 2px; /* cross thickness */
    background-color: black;
  }

  &::before{
    transform: rotate(45deg);
  }

  &::after{
    transform: rotate(-45deg);
  }
`;

export const Title = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: black;
    
`