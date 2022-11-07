import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #403b3b;
`;
export const Sobre = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 7rem;
`;

export const Borda = styled.div`
  border: 1px solid #fff;
  width: 80%;
`;

export const Video = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

export const Orientation = styled.div`
  margin-left: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ flex }) => (flex ? flex : "row")};
  flex-wrap: wrap;

  @media screen and (max-width: 600px) {
    margin-left: 0.5rem;
  }
`;

export const Title = styled.h1`
  margin-bottom: ${({ marginB }) => (marginB ? marginB : "2rem")};
  font-size: 4rem;
  font-weight: bold;
  color: #24d39a;

  @media screen and (max-width: 550px) {
    font-size: 3rem;
  }
  @media screen and (max-width: 375px) {
    font-size: 2rem;
  }
`;

export const Img = styled.img`
  width: 500px;
  margin-top: 3rem;

  @media screen and (max-width: 550px) {
    width: 325px;
  }
  @media screen and (max-width: 375px) {
    width: 250px;
  }
`;

export const Text = styled.p`
  overflow-wrap: break-word;
  color: #fff;
  width: 500px;
  line-height: 1.6;
  @media screen and (max-width: 550px) {
    font-size: 0.7rem;
    width: 350px;
  }
  @media screen and (max-width: 375px) {
    font-size: 0.7rem;
    width: 275px;
  }
`;

export const CenterBorda = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  justify-content: center;
`;

export const Row = styled.div`
  margin-right: 6rem;
  @media screen and (max-width: 1150px) {
    margin-right: 0;
  }
`;

export const Column = styled.div`
  margin-left: 6rem;
  @media screen and (max-width: 1150px) {
    margin-left: 0;
  }
`;
