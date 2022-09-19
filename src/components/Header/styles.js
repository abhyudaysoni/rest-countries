import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  display: flex;
  min-height: 100px;
  max-height: 150px;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 5rem;
  box-shadow: 1px 1px 5px rgb(161, 160, 160);
  a {
    text-decoration: none;
    color: black;
  }
  button {
    min-height: 50px;
    width: 150px;
    min-width: 110px;
    padding: none;
    height: fit-content;
  }
  @media (max-width: 650px) {
    padding: 1rem;
    height: 8vh;
    font-size: 0.6rem;
  }
`;
