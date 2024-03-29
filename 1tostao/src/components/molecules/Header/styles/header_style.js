import styled from "styled-components";
import img from "../../../../../src/assets/img/panic.jpg";

import Text from "../../../atoms/Text/Text";

export const Background = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  display: flex;
  width: 100%;
  height: 85vh;
  flex-direction: column;
  justify-content: center;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;

  h1 {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Title = styled(Text)`
  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;
