import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  display: flex;
  min-height: 100px;
  max-height: 150px;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 5rem;
  a {
    font-size: 30px;
  }
  button {
    min-height: 50px;
    max-height: 50px;
    width: 150px;
    min-width: 110px;
    padding: none;
    height: fit-content;
    background: ${(props) => (props.isLight ? "white" : "white")};
  }
  @media (max-width: 650px) {
    padding: 1rem;
    height: 8vh;
    font-size: 0.6rem;
    a {
      font-size: 20px;
    }
  }
`;
