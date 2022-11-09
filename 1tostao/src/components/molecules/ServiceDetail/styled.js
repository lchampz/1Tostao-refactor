import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  color: white;

  padding: 10rem;
  padding-top: 8rem;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  align-content: center;

  .icon {
    width: 50px;
    height: 50px;

    border-radius: 50%;
    margin-right: 0.5rem;
  }

  span {
    display: flex;
    align-items: center;
  }
`;

export const Line = styled.div`
  width: 100%;
  display: flex;

  height: 0.2rem;
  background-color: #24d39a;
  margin-top: 0.5rem;
`;

export const Body = styled.div`
  display: flex;

  @media (max-width: 900px) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
`;
export const Box = styled.div`
  width: 50%;
  justify-content: center;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;

  .imgContainer {
    min-width: 300px;
    min-height: 300px;
    width: 50%;
    height: 50%;
  }

  .title {
    font-weight: bold;
    margin-bottom: 1rem;
    margin-top: 1rem;
    font-size: 1.5rem;
  }

  .wrapperInfo {
    background-color: rgba(34, 32, 38, 1);
    color: white;
    width: 100%;
    min-width: 300px;
    min-height: 300px;
    height: 50%;
    margin-bottom: -3rem;
    border-radius: 15px;
    border: 3px solid rgba(36, 211, 154, 1);
    justify-content: flex-end;
  }

  .bold {
    font-weight: bold;
    margin-top: 2rem;
  }

  .content {
    display: flex;
    text-align: left;
    margin-left: 2rem;
    margin-top: 2rem;
    flex-direction: column;

    p:last-child {
      margin-top: 1rem;
    }
  }

  b {
    font-weight: bold;
    color: rgba(36, 211, 154, 1);
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    background-color: rgba(36, 211, 154, 1);
    color: white;
    width: 80%;

    margin: 0 auto;
    margin-top: 1.8rem;
    padding: 0.8rem;
    border: 3px solid white;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    margin-bottom: 1rem;
    
    transition: all 0.2s ease;
  }

  .btn:hover {
    border: 3px solid rgba(36, 211, 154, 1);
    color: rgba(36, 211, 154, 1);
    background-color: transparent;
  }

  .avalie {
    font-weight: bold;
    transition: all 0.3s ease-in;
  }
  .avalie:hover {
    color: rgba(36, 211, 154, 1);
    cursor: pointer;
  }

  @media (max-width: 900px) {
    margin-top: 3rem;
    .content {
      margin: 0;
      display: flex;
      justify-content: center;
      text-align: center;
      margin-top: 2rem;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  margin-top: 3rem;
  width: 100%;
  flex-direction: column;
  align-items: center;
  transition: all 0.4s linear;

  .wrapperBox {
    background-color: rgba(34, 32, 38, 1);
    color: white;
    width: 100%;
    display: flex;
    padding: 1rem;
    align-items: center;
    min-width: 400px;
    min-height: 80px;
    padding-left: 1rem;
    margin-bottom: 3rem;
    border-radius: 15px;
    border: 3px solid rgba(36, 211, 154, 1);
    transition: all 0.4s linear;
  }

  .title {
    font-weight: bold;
    white-space: nowrap;
    font-size: 1.2rem;
  }

  @media (max-width: 900px) {
    .wrapperBox {
      background-color: rgba(34, 32, 38, 1);
      color: white;
      width: 100%;
      min-height: 80px;

      border-radius: 15px;
      border: 3px solid rgba(36, 211, 154, 1);
      transition: all 0.4s linear;
    }

    .title {
      white-space: wrap;
      font-size: 1rem;
    }
    margin-top: 6rem;
  }
`;

export const OcultContent = styled.div`
  overflow: hidden;
  justify-content: justify;
  padding-top: ${({ visibility }) => (visibility ? "1rem" : "0")};
  opacity: ${({ visibility }) => (visibility ? "1" : "0")};
  max-height: ${({ display }) => (display ? "500px" : "0")};
  transition: all 0.4s ease-in;
  width: 100%;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  color: white;
`;

export const RelationatedServices = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const WrapperComments = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .headerGrades {
    display: flex;
  }

  .grade {
    font-size: 2rem;
    color: #24d39a;
    font-weight: bold;
  }

  .grade2 {
    font-size: 1rem;
    color: #24d39a;
    font-weight: bold;
  }

  .line {
    width: 100%;
    height: 15px;
    background-color: #b3b3b3;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .comments {
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: ${({ scroll }) => (scroll ? "auto" : "hidden")};
    flex: 1;
    scrollbar-gutter: stable;
    max-height: 200px;

    ::-webkit-scrollbar {
      width: 3px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background-color: rgba(34, 32, 38, 1);
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #24d39a;
      border-radius: 10px;
    }
  }

  .desc {
    font-wheight: bold;
    color: white;
  }

  .autor {
    color: #b3b3b3;
    font-weight: bold;
    font-size: 11px;
    margin-bottom: 3px;
  }
`;

export const Input = styled.textarea`
  width: 60%;
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
  border: 2px solid #747474;
  max-width: 400px;
  min-width: 200px;
  max-height: 300px;
  min-height: 100px;
  margin-bottom: 0.5rem;
  &::placeholder {
    font-weight: bold;
  }
`;
