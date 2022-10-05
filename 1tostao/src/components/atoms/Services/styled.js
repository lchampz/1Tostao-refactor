import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #403b3b;
  padding-bottom: 2rem;
  justify-content: center;
  padding-top: 1rem;
  min-height: 50vh;
  max-height: 100%;
`;

export const ServiceWrapper = styled.div`
  width: 85%;
  color: #eee;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  #avaliacao {
    font-size: 0.8rem;
    font-weight: bold;
  }
`;

export const Service = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 25px;
  width: 265px;
  margin: 1.5rem;
  margin-top: 3rem;
  border: 3px solid #d0d0d0;
  height: 250px;
  cursor: pointer;
  transition: 50ms all ease-in;
  background-color: #25282b;
  box-shadow: rgba(0, 0, 0, 0.2) 8px 8px 10px;

  @media screen and (max-width: 1000px) {
    margin-right: 1.5rem;
  }

  &:hover {
    border: 3px solid rgb(1, 220, 138);
    box-shadow: rgb(1, 220, 138, 0.1) 5px 5px 10px;
  }
`;

export const InfoService = styled.div`
  margin-top: 0.4rem;
  width: 93%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ServiceTitle = styled.h1`
  margin-bottom: 0.5rem;
  text-align: center;
  font-size: 15px;
  width: 235px;
`;

export const ServiceImage = styled.img`
  width: 250px;
  border-radius: 7px;
  margin-right: 2px;
  margin-left: 2px;
  height: 150px;
  transition: 0.1s all ease-in;
  box-shadow: rgba(0, 0, 0, 0.4) 5px 5px 10px;
`;

export const ClientImg = styled.img`
  margin-right: 0.5rem;
  width: 35px;
  border-radius: 50px;
  box-shadow: rgba(0, 0, 0, 0.15) 8px 8px 10px;
`;

export const ClientName = styled.h3`
  font-size: 0.8rem;
`;

export const ServicePrice = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(1, 160, 138);
  width: 65px;
  font-size: 13px;
  height: 30px;
  font-weight: bold;
  color: #122026;
  border-top-right-radius: 7px;
`;

export const Item = styled.p``;
export const ServiceCategory = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  background-color: rgb(1, 160, 138);
  height: 33px;
  color: #000;
  box-shadow: rgba(4, 4, 4, 1) 5px 5px 2.2px;
  width: 120px;
  font-weight: bold;
`;

export const Text = styled.p`
  align-items: center;
  text-align: center;
`;
export const ServicosEspecializados = styled.div`
  width: 100%;
  border-bottom: 1px solid #fff;
  height: 60vh;
  background-color: #403b3b;
`;

export const TitleEspecializados = styled.h1`
  margin-top: 1rem;
  color: #eee;
  font-size: 1.7rem;
`;

export const WrapperEspecializados = styled.div``;
