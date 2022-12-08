import styled from "styled-components";
import avaliacoes from "../../../assets/img/avaliacoes.png";

export const Wrapper = styled.div`
  height: 100%;
  color: ${({ color }) => (color ? color : "white")};
`;
export const Banner = styled.div`
  height: 40vh;
  width: 100%;
`;

export const MenuImg = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
export const MenuUser = styled.div`
  display: flex;
  color: ${({ color }) => (color ? color : "white")};
  @media (max-width: 900px) {
    display: block;
  }
`;
export const Username = styled.p`
  font-size: 1.5rem;
  margin-left: ${({ marginLe }) => (marginLe ? marginLe : "17rem")};
  margin-bottom: ${({ marginB }) => (marginB ? marginB : "1rem")};
  margin-top: ${({ marginT }) => (marginT ? marginT : "1.3rem")};
  white-space: nowrap;
  @media screen and (max-width: 870px) {
    white-space: normal;
  }
  @media (max-width: 600px) {
    margin-left: ${({ marginMedia }) => (marginMedia ? marginMedia : "11rem")};
  }
`;
export const UserImg = styled.img`
  width: ${({ width }) => (width ? width : "120px")};
  position: ${({ position }) => (position ? position : "relative")};
  border-radius: 100px;
  margin-left: ${({ marginL }) => (marginL ? marginL : "8rem")};

  @media (max-width: 600px) {
    margin-left: ${({ marginLMedia }) =>
      marginLMedia ? marginLMedia : "2rem"};
  }
`;

export const Contratar = styled.button`
  margin-top: 1.1rem;
  width: 8rem;
  border: 1px solid #000;
  background-color: #24d39a;
  border-radius: 10px;
  font-size: 1rem;
  transition: 0.1s all ease-in;
  margin-left: auto;
  margin-right: 12rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  @media (max-width: 1280px) {
    margin-right: 8rem;
  }

  @media (max-width: 900px) {
    margin-right: 0rem;
    margin-left: 3rem;
  }

  &:hover {
    color: #24d39a;
    background-color: white;
    border: 2px solid #24d39a;
    font-weight: bold;
    cursor: pointer;
  }
`;
export const Mensagem = styled.button`
  margin-top: 1.3rem;
  width: 8rem;
  margin-left: 0.9rem;
  border-radius: 10px;
  height: 1.5rem;
  font-weight: 100;
  background-color: #474a51;
  border: none;

  @media (max-width: 900px) {
    margin-left: 17rem;
    margin-right: 1rem;
    margin-top: 0;
  }

  @media (max-width: 600px) {
    margin-left: 1.7rem;
  }
  @media (max-width: 310px) {
    margin-top: 1rem;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Sections = styled.h2`
  font-size: 1.2rem;
  color: #24d39a;
  margin-right: 3rem;
  margin-bottom: 2rem;
  &:first-child {
    margin-left: 3rem;
  }
  &:hover {
    cursor: pointer;
  }
`;
export const AboutUser = styled.div`
  color: ${({ color }) => (color ? color : "white")};
  margin-top: 3rem;
  display: flex;
`;
// ABOUTS

export const About = styled.div``;
export const AboutInfos = styled.div`
  color: ${({ color }) => (color ? color : "white")};
  display: flex;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const AboutInfo = styled.div`
  color: #24d39a;
  border-top: 1px solid #808080;
  border-bottom: 1px solid #808080;
  border-right: 1px solid #808080;
  width: 60%;
  display: flex;
  flex-direction: column;
  height: 350px;
  @media screen and (max-width: 900px) {
    width: 100%;
    border-right: 0px;
  }
  .title {
    margin-top: 2rem;
    margin-left: 3rem;
    font-size: 1.4rem;
  }
  .desc {
    margin-top: 1.3rem;
    color: ${({ color }) => (color ? color : "white")};

    margin-right: 6rem;
    font-size: 1.1rem;
    width: 90%;
    height: auto;
    max-height: 100px;
    max-width: 65rem;
    word-wrap: break-word;
    text-align: justify;
    text-justify: inter-word;
    @media (max-width: 520px) {
      font-size: 0.8rem;
    }
    @media (max-width: 400px) {
      font-size: 0.7rem;
    }
  }
  .data {
    color: #24d39a;
    margin-bottom: 1rem;

    font-size: 1rem;
  }
`;
export const AboutContact = styled.div`
  color: #24d39a;
  border-top: 1px solid #808080;
  border-bottom: 1px solid #808080;
  width: 40%;
  height: 350px;
  @media screen and (max-width: 900px) {
    width: 100%;
  }

  .contacts {
    display: flex;
    flex-direction: row;
  }
  .title {
    margin-top: 2rem;
    margin-left: 3rem;
    font-size: 1.4rem;
  }
  .redesS {
    display: flex;
    flex-direction: column;
  }
  .infoC {
    color: ${({ color }) => (color ? color : "white")};
    &:first-child {
      margin-top: 0.8rem;
    }
    margin-bottom: 3.8rem;

    font-size: 1rem;
  }
  .redes {
    margin-right: 2rem;
    &:first-child {
      margin-top: 1.32rem;
    }
    margin-bottom: 2.5rem;
    width: 2.3rem;
    margin-left: 3rem;
  }
`;
export const Avaliatons = styled.div`
  background-image: url(${avaliacoes});
  background-repeat: no-repeat;
  background-size: 22rem;
  background-position: center center;

  display: flex;
  flex-direction: row;

  @media screen and (max-width: 900px) {
    background-size: 0;
    flex-direction: column;
  }
  @media screen and (max-width: 500px) {
    background-size: 0;
  }

  .esquerda {
    width: 50%;

    @media screen and (max-width: 900px) {
      width: 100%;
      padding-left: 11rem;
      margin-bottom: -5rem;
    }
  }
  .direita {
    margin-left: 15rem;
    margin-right: 4rem;

    @media screen and (max-width: 960px) {
      margin-left: 10rem;
    }
    @media screen and (max-width: 900px) {
      margin-left: 3rem;
    }
  }
`;

export const Reviews = styled.div`
  height: 100%;
  margin-top: 5rem;
  margin-left: -8rem;

  display: flex;
  flex-direction: column;

  .data {
    font-size: 1rem;
    white-space: nowrap;
    font-style: italic;
  }
`;
export const WrapperAvaliation = styled.div`
  &:first-child {
    margin-top: 2rem;
    @media screen and (max-width: 900px) {
      margin-top: 0;
    }
  }
  margin-bottom: 5rem;

  .star {
    margin-right: 0.2rem;
    color: yellow;
    margin-bottom: 0.5rem;
  }
`;

export const Title = styled.div`
  .title {
    color: #24d39a;
    margin-top: 2.5rem;
    margin-left: 3rem;
    font-size: 1.4rem;

    @media screen and (max-width: 900px) {
      margin-left: 3rem;
    }
  }
`;
export const TitleAvaliation = styled.h1`
  white-space: nowrap;
  color: #24d39a;
  font-size: 1.1rem;
`;

export const UserAva = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

// JOBS

export const Jobs = styled.div``;
export const JobsFilter = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .seletor {
    cursor: pointer;
    background-color: #747474;
    width: 225px;
    font-size: 1.3rem;
    border-radius: 5px;
  }

  .seletor:first-child {
    margin-right: 1rem;
  }
  .seletor:last-child {
    margin-right: 7.5rem;
  }

  @media screen and (max-width: 530px) {
    flex-direction: column;
    .seletor:first-child {
      margin-bottom: 1rem;
    }
  }
`;
export const JobsWrapper = styled.div`
  margin-left: 4rem;
  margin-right: 1rem;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 596px) {
    justify-content: center;
  }
`;

export const Job = styled.div`
  margin-right: 4rem;

  .numbers {
    display: flex;
    flex-direction: row;
    margin-top: 0.3rem;
  }
  .heart {
    color: #c51104;
    font-size: 1.1rem;
  }
  .comment {
    font-size: 1.1rem;
  }
`;

export const JobComments = styled.p`
  font-size: 1.1rem;
  margin-right: 5px;
`;

export const JobImage = styled.img`
  width: 275px;
  @media screen and (max-width: 750px) {
    width: 200px;
  }
  @media screen and (max-width: 596px) {
    width: 250px;
  }
`;

export const JobLikes = styled.p`
  font-size: 1.1rem;
  margin-right: 12.4rem;
  margin-left: 5px;
  margin-bottom: 3rem;

  @media screen and (max-width: 750px) {
    margin-right: 7.5rem;
  }
  @media screen and (max-width: 596px) {
    margin-right: 10.7rem;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;

  ul.pagination {
    display: inline-block;
    padding: 0;
    margin: 0;
    font-size: 1rem;

    @media screen and (max-width: 450px) {
      font-size: 0.8rem;
    }
  }

  ul.pagination li {
    display: inline;
  }

  ul.pagination li a {
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    border-radius: 5px;
  }

  ul.pagination li a.active {
    background-color: #24d39a;
    border-radius: 5px;
  }

  ul.pagination li a:hover:not(.active) {
    background-color: #808080;
  }
`;
