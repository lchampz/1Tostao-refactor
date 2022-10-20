import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Header = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 9rem;

  @media screen and (max-width: 450px) {
    width: 95%;
  }
`;

export const Tags = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const Tag = styled.h1`
  color: #eee;
  font-size: 1.2rem;
  margin-top: 1rem;
  transition: 0.1s all ease-in;

  &:hover {
    color: #24d39a;
    cursor: pointer;
  }
  @media screen and (max-width: 650px) {
    font-size: 0.8rem;
  }
`;

export const Info = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Card = styled.div`
  border: 3px solid #24d39a;
  height: 100%;
  border-radius: 25px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;

export const Title = styled.h1`
  color: #eee;
  font-weight: bold;
  font-size: 2.6rem;

  @media screen and (max-width: 650px) {
    font-size: 1.5rem;
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

export const Number = styled.h1`
  font-size: 2.6rem;
  margin-bottom: 1rem;
  color: #eee;
  font-weight: bold;
  @media screen and (max-width: 650px) {
    font-size: 1.5rem;
    margin-bottom: 0.3rem;
  }
`;

export const Cadastrados = styled.h1`
  color: gray;
  font-weight: bold;
  @media screen and (max-width: 650px) {
    font-size: 0.6rem;
  }
`;

export const Search = styled.div`
  width: 100%;
  justify-content: space-around;
  display: flex;
  flex-direction: row;
`;

export const Wrapper = styled.div`
  width: 80%;
  border: 3px solid gray;
  display: flex;
  flex-direction: row;
  border-radius: 25px;
  align-items: center;
  margin-top: 1rem;
`;

export const Pesquisa = styled.input`
  width: 70%;
  height: 40px;
  border: none;
  background-color: #292929;
  font-size: 1rem;
  margin-left: 5px;
  color: #eee;
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 650px) {
    font-size: 0.8rem;
  }
`;

// export const UserType = styled.h1``;

export const Users = styled.div``;

export const Services = styled.div``;
