import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const WrapperTitle = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  width: 80%;
  margin-top: 5rem;
  font-weight: bold;
  color: white;
  height: 4rem;
  border: 3px solid #24d39a;
`;

export const WrapperForm = styled.div`
  display: flex;
  flex-direction: column;

  padding-left: 30px;
  width: 80%;

  border: 3px solid #24d39a;
  margin-top: 2rem;
`;

export const Label = styled.label`
  color: white;
  margin-top: 0.5rem;
  font-weight: bold;
  margin-bottom: 1rem;

  &:first-child {
    margin-top: 1rem;
  }
`;

export const Input = styled.input`
  width: 93%;
  color: white;
  border: 3px solid #24d39a;
  padding: 1rem;
  background-color: #292929;
  margin-bottom: 1rem;

  ::placeholder {
    font-weight: thin;
    font-size: 14px;
    font-style: italic;
  }
`;

export const WrapperWarning = styled.label`
  border: 3px solid #24d39a;
  width: 96.5%;
  height: 4rem;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: white;
  font-weight: bold;
`;

export const BtnRegister = styled.label`
  width: 13rem;
  height: 4rem;
  border: ${({ disabled }) =>
    disabled ? "3px solid #808080" : "3px solid #24D39A"};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  color: ${({ disabled }) => (disabled ? "#808080" : "white")};
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 2rem;
  transition: all 0.5s ease-in-out;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    border: ${({ disabled }) => (disabled ? "" : "3px solid white")};
  }
`;

export const Slider = styled.input`
  -webkit-appearance: none;
  width: 96.5%;
  height: 15px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  margin-bottom: 1rem;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #04aa6d;
    cursor: pointer;
  }

  &::-webkit-slider-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #04aa6d;
    cursor: pointer;
  }
`;

export const Delivery = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
  color: #04aa6d;
  margin-bottom: 1rem;

  p {
    margin-left: 10px;
    color: white;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  .box{
    display: flex;
    flex-direction: column;
    width: 50%;
    flex: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .box{
        width: 100%;
    }
  }
`;
