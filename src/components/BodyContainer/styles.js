import styled from "styled-components";

export const Container = styled.main`
  margin: 1rem auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  @media (max-width: 650px) {
    margin: 1rem auto;
    width: 95%;
  }
`;
