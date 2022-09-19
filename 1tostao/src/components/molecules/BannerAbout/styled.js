import styled from "styled-components";
import { keyframes } from "styled-components";

const op = keyframes`
    0% { opacity: 0},
    100% { opacity: 1 }
`;

export const Wrapper = styled.div`
  display: flex;
  margin: 5% 10%;
  flex-direction: column;

  background-color: ${({ bgCard }) => (bgCard ? bgCard : "white")};
  padding: 50px;

  border-radius: 30px;
  box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.1);

  animation: ${op} 2.4s ease-in;
`;

export const Paragraph = styled.div`
  width: 100%;
  font-size: 1.5rem;
  padding-top: 40px;
  display: inline-block;
  vertical-align: top;
  color: ${({ color }) => (color ? color : "black")};

  img {
    width: 45%;
    height: 45%;
    margin-bottom: 60px;
    margin-top: -60px;

    @media only screen and (min-width: 1600px) {
      margin-right: 130px;
    }

    @media only screen and (max-width: 900px) {
      margin-bottom: 10px;
      margin-top: -30px;
    }

    @media only screen and (max-width: 740px) {
      width: 225px;
      height: 175px;
    }
    @media only screen and (max-width: 600px) {
      margin-right: -30px;
    }
  }
`;

export const Button = styled.div`
  display: flex;

  width: 242px;
  height: 71px;

  cursor: pointer;

  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: ${({ btnBg }) => (btnBg ? btnBg : "rgba(36, 211, 154, 1)")};
  color: ${({ btnColor }) => (btnColor ? btnColor : "black")};

  font-size: 27px;

  position: relative;
  border-radius: 15px;
  margin-top: -170px;

  transition: all 0.4s ease-in-out;

  @media only screen and (max-width: 1000px) {
    margin: 0 auto;
    margin-top: 30px;
  }

  &:before {
    content: "Ler Mais...";
    color: white;
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    transform: scaleY(90%) !important;
    transition: all 0.2s ease-in-out;
    background-color: ${({ btnBgHover }) =>
      btnBgHover ? btnBgHover : "white"};
    border: 3px solid rgba(36, 211, 154, 1);

    &:before {
      content: ">>>>>>";
      font-size: 35px;
      color: rgba(36, 211, 154, 1);
      transition: all 0.2s ease-in-out;
    }
  }
`;
