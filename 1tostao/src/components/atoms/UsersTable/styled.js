import styled from "styled-components";

export const Tabela = styled.table`
  width: 80%;
  height: 100%;
  border: 1px solid #eee;
  text-align: center;
  vertical-align: middle;
  border-collapse: collapse;
`;

export const TabelaHead = styled.thead`
  font-weight: bold;
  font-size: 1rem;

  letter-spacing: 2%;
  color: #eee;
`;

export const TabelaCorpo = styled.tbody`
  color: #c0c0c0;
`;

export const Linha = styled.tr`
  padding: 8px;
`;

export const Elemento = styled.th`
  border-right: 1px solid #eee;
  padding: 8px;
`;

export const Modal = styled.div`
  position: absolute;
  background-color: #f9f9f9;
  width: 550px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 350px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;
export const Content = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Sure = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    width: 30%;
  }
  h1 {
    font-weight: bold;
    margin-top: 1rem;
    text-align: justify;
    font-size: 1.3rem;
  }
  p {
    text-align: justify;
  }
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 2rem;

  .cancel {
    width: 150px;
    background-color: #878787;
    height: 50px;
    color: #eee;
    border: none;
    border-radius: 15px;
    font-size: 1rem;
    font-weight: bold;
    transition: 0.14s all ease-in;
    cursor: pointer;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    &:hover {
      background-color: #d1d1d1;
      border: 3px solid black;
      color: black;
    }
  }
  .delete {
    cursor: pointer;
    border-radius: 15px;
    font-weight: bold;
    width: 150px;
    font-size: 1rem;
    background-color: #fe0000;
    border: none;
    height: 50px;
    transition: 0.14s all ease-in;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    color: #eee;

    &:hover {
      background-color: #d1d1d1;
      border: 3px solid #fe0000;
      color: #fe0000;
    }
  }
`;
